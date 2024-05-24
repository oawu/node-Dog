/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 - 2022, @oawu/dog
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */

const Dog = function(timer = null, food = undefined, watch = _ => _ === undefined) {
  if (!(this instanceof Dog)) {
    return new Dog(timer, food, watch)
  }

  this._food = food
  this._watch = t => t !== undefined
  this._timer = 100
  this._biteFunc = null

  this.watch(watch)
  this.timer(timer)
}

Object.defineProperty(Dog.prototype, 'eat', {
  get () {
    const that = this
    return (function (...foods) {
      that._food = foods
      return that
    }).bind(this)
  }
})

Dog.prototype.watch = function(watch) {
  if (typeof watch == 'function') {
    this._watch = watch
  }

  return this
}
Dog.prototype.timer = function(timer) {
  if (typeof timer == 'number' && !isNaN(timer) && timer !== Infinity) {
    this._timer = timer
  }

  return this
}
Dog.prototype.bite = function(biteFunc) {
  this._biteFunc = biteFunc

  const _wait = _ => {
    if (typeof this._watch == 'function' ? this._watch(this._food) : false) {
      return setTimeout(_wait, this._timer)
    }

    if (typeof this._biteFunc == 'function') {
      this._biteFunc(...this._food)
    }
  }

  _wait()
  return this
}

module.exports = Dog
