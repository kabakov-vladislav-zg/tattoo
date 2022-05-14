<template>
  <div
    class="layout-default"
    @mousemove="throttledOnmousemove"
  >
    <div class="layout-default__footer-overlay">
      <TheHeader />
      <Nuxt />
    </div>
    <TheFooter class="layout-default__footer" />

    <div
      v-if="point.clientX"
      :style="{
        transform: `translate(${ point.clientX }px, ${ point.clientY + point.scrollY }px)`
      }"
      class="layout-default__point"
      :class="{'layout-default__point_with-caption' : pointCaption }"
    >
      {{ pointCaption }}
    </div>

    <SimpleModal
      name="modal"
      v-slot="{ options }"
    >
      <SimpleModalContainer :class="options.containerClasses">
        <component :is="options.component" v-bind="options.properties" />
      </SimpleModalContainer>
    </SimpleModal>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TheHeader from "~/components/TheHeader"
import TheFooter from "@/components/TheFooter"
import { throttle } from "lodash"
export default {
  name: "default",
  components: {
    TheFooter,
    TheHeader
  },

  data() {
    return {
      throttledOnmousemove: null,
      throttledOnscroll: null,
      point: {
        clientX: NaN,
        clientY: NaN,
        scrollY: 0
      }
    }
  },

  computed: {
    ...mapState([
      'pointCaption'
    ])
  },

  methods: {
    onmousemove(e) {
      this.point.clientX = e.clientX
      this.point.clientY = e.clientY
    },
    onscroll() {
      this.point.scrollY = window.scrollY
    }
  },

  beforeMount() {
    this.throttledOnmousemove = throttle(this.onmousemove, 100, { leading: false })
    this.throttledOnscroll = throttle(this.onscroll, 100, { leading: false })
    window.addEventListener('scroll', this.throttledOnscroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.throttledOnscroll)
  },
}
</script>

<style>
.layout-default__footer-overlay {
  position: relative;
  z-index: 1;
  margin-bottom: 30rem;
  background: white;
}
.layout-default__footer {
  height: 30rem;
  position: fixed;
  inset: auto 0 0 0;
}
.layout-default__point {
  position: absolute;
  top: -4px;
  left: -4px;
  transition: transform 50ms linear, 125ms;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: red;
  z-index: 999999999;
  pointer-events: none;
  color: #fff;
  font-weight: 500;
  font-size: .75rem;
}
.layout-default__point_with-caption {
  top: -3.125rem;
  left: -3.125rem;
  width: 6.25rem;
  height: 6.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;
  overflow: hidden;
}
</style>
