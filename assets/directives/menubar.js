class Menubar {
  constructor(el, binding) {
    this._elem = el
    this._binding = binding
    this._descendants =  Array.from(this._elem.querySelectorAll(this._binding.value))
    this._limit = this._descendants.length
    this._current = 0
    this._firstChars = []

    for (let i = 0; i < this._limit; i++) {
      this._descendants[i].setAttribute('tabindex', i ? '-1' : '0')
      this._firstChars.push(this._descendants[i].textContent.trim().toLowerCase()[0])
    }

    this._elem.addEventListener('focusin', this)
    this._elem.addEventListener('focusout', this)
    this._elem.addEventListener('keydown', this)
  }
  handleEvent(e) {
    let method = '_on' + e.type
    this[method](e)
  }
  _onfocusin(e) {
    if (e.target.classList.contains('focus-visible')) {
      this._elem.classList.add('focus-visible')
    }
  }
  _onfocusout() {
    this._elem.classList.remove('focus-visible')
  }
  _onkeydown(e) {
    let i = -1
    switch (e.code) {
      case 'ArrowLeft':
        i = this._current - 1
        break
      case 'ArrowRight':
        i = this._current + 1
        break
      case 'End':
        i = this._limit - 1
        break
      case 'Home':
        i = 0
        break
      default:
        if (this._isPrintable(e.key)) {
          let char = e.key.toLowerCase()
          let start = this._current + 1
          if (start >= this._limit) {
            start = 0
          }
          i = this._getIndexByChar(char, start)
          if ((i < 0) && start) {
            i = this._getIndexByChar(char, 0)
          }
        }
        break
    }

    if (this._isValid(i)) {
      e.stopPropagation()
      e.preventDefault()
      this._toggle(i)
    }
  }
  _isPrintable(str) {
    return str.length === 1 && str.match(/\S/)
  }
  _getIndexByChar(char, start) {
    for (let i = start; i < this._limit; i++) {
      if (char === this._firstChars[i]) {
        return i
      }
    }
    return -1
  }
  _isValid(i) {
    return (i !== this._current) && (i >= 0) && (i < this._limit)
  }
  _toggle(i) {
    this._descendants[i].focus()
    this._descendants[i].setAttribute('tabindex', '0')
    this._descendants[this._current].setAttribute('tabindex', '-1')
    this._current = i
  }
}

export default {
  bind(el, binding) {
    el._menubar = new Menubar(el, binding)
  },
  unbind(el) {

  }
}
