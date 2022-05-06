/**
 * allows to subscribe to an event from any component
 */
export class Observer {
  /**
   * @constructor
   * @param Vue {Class} - constructor Vue
   * @param key {String} - unique key
   */
  constructor(Vue, key) {
    this._key = key
    this._subscription = new Vue()
  }
  subscribe(fn) {
    this._subscription.$on(this._key, fn)
  }
  unsubscribe(fn) {
    this._subscription.$off(this._key, fn)
  }
  emit(param = {}) {
    this._subscription.$emit(this._key, param)
  }
}
