const onmousemove = (el, ratio = 1, e) => {
  const box = el.getBoundingClientRect()
  const centerX = box.x + (box.width / 2)
  const centerY = box.y + (box.height / 2)

  const shiftX = (e.clientX - centerX) / (box.width / 2)
  const shiftY = (e.clientY - centerY) / (box.height / 2)

  el.style.transform = `translate(${ shiftX * ratio }rem, ${ shiftY * ratio }rem)`
  el.style.zIndex = '1'
}

const onmouseout = el => {
  el.style.transform = `translate(0px, 0px)`
  el.style.zIndex = null
}

export default {
  bind(el, binding) {
    el.style.cssText = `
      position: relative;
      transition: transform .125s linear;
      will-change: transform;
    `
    el.onmousemove = onmousemove.bind(this, el, binding.value)
    el.onmouseout = onmouseout.bind(this, el)

    el.addEventListener('mousemove', el.onmousemove)
    el.addEventListener('mouseout', el.onmouseout)
  },
  unbind(el) {
    el.removeEventListener('mousemove', el.onmousemove)
    el.removeEventListener('mouseout', el.onmouseout)
  }
}
