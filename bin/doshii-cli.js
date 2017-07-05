#!/usr/bin/env node

const program = require('commander')
const path = require('path')
const winston = require('winston')
const doshiiPackage = require(path.join(__dirname, '../', 'package.json'))

const loadCmd = (cmd) => {
  const self = this
  return function () {
    require(`./cmd/${cmd}`).apply(self, arguments)
  }
}

const myCustomLevels = {
  levels: {
    info: 0,
    success: 1,
    debug: 2,
    warning: 3,
    error: 4
  },
  colors: {
    info: 'white',
    success: 'green',
    debug: 'blue',
    warning: 'yellow',
    error: 'red'
  }
}

// Default log level
winston.level = 'info'
function increaseVerbosity (v) {
  winston.level = 'debug'
}

winston.addColors(myCustomLevels.colors)

program
  .version(doshiiPackage.version)
  .usage(` - ${doshiiPackage.description}`)
  .description(doshiiPackage.description)
  .option('-v --verbose', 'show debug output', increaseVerbosity)

program
  .command('add-client')
  .description('Add a Doshii credential set to the config.json file')
  .action(loadCmd('add-client'))

// Show help if no arguments are passed
if (!process.argv.slice(2).length) {
  program._name = process.argv[1]
  program._name = program._name.substr(program._name.lastIndexOf('/') + 1)
  program.outputHelp()
}

program.parse(process.argv)
