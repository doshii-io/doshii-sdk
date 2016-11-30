'use strict'

const hasOwn = {}.hasOwnProperty

const utils = {
  /**
   * Provide simple "Class" extension mechanism
   */
  protoExtend: function (sub) {
    const Super = this
    const Constructor = hasOwn.call(sub, 'constructor') ? sub.constructor : function () {
      Super.apply(this, arguments)
    }
    Constructor.prototype = Object.create(Super.prototype)
    for (let i in sub) {
      if (hasOwn.call(sub, i)) Constructor.prototype[i] = sub[i]
    }
    for (let i in Super) {
      if (hasOwn.call(Super, i)) Constructor[i] = Super[i]
    }
    return Constructor
  }
}

module.exports = utils
