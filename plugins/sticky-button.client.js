import Vue from 'vue'
import { throttle } from "lodash"

const onmousemove = (el, e) => {
  const box = el.getBoundingClientRect()
  const centerX = box.x + (box.width / 2)
  const centerY = box.y + (box.height / 2)

  const shiftX = e.clientX - centerX
  const shiftY = e.clientY - centerY

  el.style.transform = `translate(${ shiftX * .5 }px, ${ shiftY * .5 }px)`
  el.style.zIndex = '1'
}

const onmouseout = el => {
  el.style.transform = `translate(0px, 0px)`
  el.style.zIndex = null
}

Vue.directive('sticky-button', {
  bind(el) {
    el.style.cssText = `
      position: relative;
      transition: transform .125s linear;
    `
    el.onmousemove = throttle(onmousemove.bind(this, el), 50, { trailing: false })
    el.onmouseout = onmouseout.bind(this, el)

    el.addEventListener('mousemove', el.onmousemove)
    el.addEventListener('mouseout', el.onmouseout)
  },
  unbind(el) {
    el.removeEventListener('mousemove', el.onmousemove)
    el.removeEventListener('mouseout', el.onmouseout)
  }
})
