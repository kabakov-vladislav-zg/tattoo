import Vue from 'vue'
import SimpleModal from '../assets/plugins/modal/SimpleModal'
import SimpleModalContainer from '../assets/plugins/modal/SimpleModalContainer'
import { Observer } from "@/helpers/Observer"
import '../assets/plugins/modal/modal.css'

Vue.component('SimpleModal', SimpleModal)
Vue.component('SimpleModalContainer', SimpleModalContainer)

export default function(_, inject) {
  // TODO make sure there is no memory leak
  if ('$modal' in Vue.prototype) return

  class Modal extends Observer {
    on(name, options = null) {
      if(!name) return console.log('name is required')
      this.emit({ name, flag: true, options })
    }
    off(name) {
      if(!name) return console.log('name is required')
      this.emit({ name, flag: false })
    }
  }

  inject('modal', new Modal(Vue, 'toggleModal'))
}
