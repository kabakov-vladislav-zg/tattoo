<template>
  <div
    class="slider"
    :style="`--slider-getter: ${ getter }px; --slider-capacity: ${ capacity }; --slider-margin: ${margin}%`"
  >
    <div
      ref="container"
      class="slider__container"
    >
      <div
        ref="scene"
        class="slider__scene"
        :style="sceneStyle"
      >
        <slot />
      </div>
    </div>
    <button
      @click="prev"
      class="slider__handle"
    >
      взад
    </button>
    <button
      @click="next"
      class="slider__handle"
    >
      вперде
    </button>
  </div>
</template>

<script>
export default {
  name: "Slider",

  props: {
    getter: {
      type: Number,
      default: 0
    },
    draggable: {
      type: Boolean,
      defaults: false
    },
    initCount: {
      type: Number,
      default: 0
    },
    capacity: {
      type: Number,
      default: 1
    },
    center: {
      type: Boolean,
      default: false
    },
    margin: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {
      count: this.initCount,
      width: 0,
      range: 0,
      transition: false,
      stack: ''
    }
  },

  computed: {
    slideWidth() {
      return (this.width - this.getter * (this.capacity - 1)) / this.capacity
    },
    centerShift() {
      if (this.center) {
        return (this.width - this.slideWidth) / 2
      } else {
        return 0
      }
    },
    shift() {
      return this.centerShift - this.count * (this.slideWidth + this.getter)
    },
    sceneStyle() {
      return {
        transition: this.transition ? `.25s linear` : 'none',
        transform: `translateX(${ this.shift }px)`
      }
    }
  },

  methods: {
    flip(count) {
      this.$nextTick(() => {
        this.transition = true
        this.count = count
      })
    },
    prev() {
      if (this.transition) {
        this.stack = 'prev'
        return
      }
      let count = this.count - 1
      if (count <= 0) count = 0
      this.count = count
    },
    next() {
      if (this.transition) {
        this.stack = 'next'
        return
      }
      let count = this.count + 1
      if (this.center) {
        if (count >= this.range) count = this.range - 1
      } else {
        if (count >= this.range - this.capacity + 1) count = this.range - this.capacity
      }
      this.count = count
    },
    setWith() {
      this.width = this.$refs.container.getBoundingClientRect().width
    }
  },

  mounted() {
    this.$refs.scene.addEventListener('transitionend', () => {
      this.transition = false
      if (this.stack) {
        this[this.stack]()
        this.stack = ''
      }
    })

    this.range = this.$children.length

    window.addEventListener('resize', this.setWith)
    this.setWith()
  },

  destroyed() {
    window.removeEventListener('resize', this.setWith)
  },

  created() {
    console.log(this.capacity)
  }


}
</script>

<style lang="scss">
.slider {
  overflow-x: hidden;
  width: 100%;
  pointer-events: none;

  &__container {
    margin: 0 var(--slider-margin);
  }

  &__scene {
    width: calc((100% - var(--slider-getter) * (var(--slider-capacity) - 1)) / var(--slider-capacity));
    overflow: visible;
    display: flex;
    position: relative;
    touch-action: pan-y pinch-zoom;
  }
  &__handle, &__scene {
    pointer-events: auto;
  }
}
</style>
