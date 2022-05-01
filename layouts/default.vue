<template>
  <div @mousemove="onmousemove">
    <TheHeader />
    <Nuxt />

    <div
      v-if="point.clientX"
      :style="{
        transform: `translate(${ point.clientX }px, ${ point.clientY + point.scrollY }px)`
      }"
      class="point"
      :class="{'point_with-caption' : pointCaption }"
    >
      {{ pointCaption }}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TheHeader from "~/components/TheHeader";
export default {
  name: "default",
  components: {
    TheHeader
  },

  data() {
    return {
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
    window.addEventListener('scroll', this.onscroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onscroll)
  },
}
</script>

<style lang="scss">
.point {
  position: absolute;
  top: -4px;
  left: -4px;
  transition: .125s linear;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: $red;
  z-index: 999999999;
  pointer-events: none;
  color: #fff;
  font-weight: 500;
  font-family: $btn-font-family;
  font-size: .75rem;

  &_with-caption {
    top: -3.125rem;
    left: -3.125rem;
    width: 6.25rem;
    height: 6.25rem;
    display: flex;
    align-items: center;
    text-align: center;
    padding: 1rem;
  }
}
</style>
