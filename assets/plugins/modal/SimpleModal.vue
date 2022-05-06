<template>
  <div
    v-if="visibility.backdrop"
    @click.self="off"
    class="modal"
  >
    <transition
      name="modal-container_transition"
      v-on:after-leave="afterLeave"
    >
      <template v-if="visibility.content">
        <slot :options="options" />
      </template>
    </transition>
  </div>
</template>

<script>
import { preventScroll } from "@/helpers/DOM"
export default {
  name: "SimpleModal",

  props: {
    name: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      state: false,
      visibility: {
        backdrop: false,
        content: false
      },
      options: null,
    }
  },

  methods: {
    toggle({ name, flag, options }) {
      if (name === 'all' || name === this.name) {
        flag ? this.on(options) : this.off()
      }
    },
    on(options) {
      this.options = options
      this.visibility.backdrop = true
      preventScroll(true, this.name)
      this.$nextTick(() => {
        this.visibility.content = true
      })
    },
    off() {
      this.visibility.content = false
    },
    afterLeave() {
      preventScroll(false, this.name)
      this.visibility.backdrop = false
    }
  },

  beforeMount() {
    this.$modal.subscribe(this.toggle)
  },
  beforeDestroy() {
    this.$modal.unsubscribe(this.toggle)
  },
}
</script>
