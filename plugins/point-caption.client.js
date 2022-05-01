import Vue from 'vue'
const onmouseenter = (store, text) => {
  store.commit('setPointCaption', text)
}

const onmouseleave = store => {
  store.commit('setPointCaption', '')
}

Vue.directive('point-caption', {
  bind(el, binding, vnode) {
    el.onmouseenter = onmouseenter.bind(this, vnode.context.$store, binding.value)
    el.onmouseleave = onmouseleave.bind(this, vnode.context.$store)

    el.addEventListener('mouseenter', el.onmouseenter)
    el.addEventListener('mouseleave', el.onmouseleave)
  },
  unbind(el) {
    el.removeEventListener('mouseenter', el.onmouseenter)
    el.removeEventListener('mouseleave', el.onmouseleave)
  }
})
