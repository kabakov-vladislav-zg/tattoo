<template>
  <div
    class="slider"
    :class="{ 'slider_centered' : isCentered }"
    :style="{
      '--slider-getter': getter + 'px',
      '--slider-capacity': capacity,
      '--slider-margin': margin + '%',
      '--slider-speed': speed + 's'
    }"
  >
    <div
      ref="wrapper"
      :style="{ '--slider-count': count }"
      class="slider__wrapper"
    >
      <div
        ref="scene"
        class="slider__scene"
        :class="{
        'slider__scene_draggable' : isDraggable,
        'slider__scene_dragged' : isDragged
      }"
        :style="sceneStyle"
      >
        <slot />
      </div>
    </div>
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
    speed: {
      type: Number,
      default: .25
    },
    currentCount: {
      type: Number,
      default: 0
    },
    capacity: {
      type: Number,
      default: 1
    },
    margin: {
      type: Number,
      default: 0
    },
    isCentered: {
      type: Boolean,
      default: false
    },
    isDraggable: {
      type: Boolean,
      defaults: false
    },
  },

  data() {
    return {
      count: this.currentCount,
      range: 0,
      stack: NaN,
      sceneStyle: '',
      isTransition: false,
      isDragged: false,
    }
  },

  methods: {
    flip(count) {
      if (this.isTransition) {
        this.stack = count
      } else if (this.inRange(count)) {
        this.count = count
      }
    },
    inRange(count) {
      if (count < 0) return false
      if (this.isCentered) {
        if (count >= this.range) return false
      } else {
        if (count >= this.range - this.capacity + 1) return false
      }
      return true
    },
    ontransitionstart() {
      this.isTransition = true
    },
    ontransitionend() {
      this.isTransition = false

      if (!isNaN(this.stack)) {
        if (!this.isDragged) this.flip(this.stack)
        this.stack = NaN
      }
    },
    ondragstart(e) {
      const scene = this.$refs.scene.getBoundingClientRect()
      const step = scene.width + this.getter
      const startSceneShift = scene.left - this.$refs.wrapper.getBoundingClientRect().left
      const startPointerShift = e.clientX
      const startCount = this.count
      const onpointermove = e => {
        const pointerShift = e.clientX - startPointerShift
        const sceneShift = startSceneShift + pointerShift

        const absPointerShift = Math.abs(pointerShift)
        if (absPointerShift > 40) {
          let count
          if (absPointerShift < step) {
            count = startCount - Math.sign(pointerShift) * Math.ceil(absPointerShift / step)
          } else {
            count = startCount - Math.round(pointerShift / step)
          }
          if (this.inRange(count)) this.count = count
        }

        this.isDragged = true
        this.sceneStyle = `transform: translateX(${sceneShift}px);`
      }
      const onpointerup = e => {
        document.removeEventListener('pointermove', onpointermove)
        document.removeEventListener('pointerup', onpointerup)

        this.isDragged = false
        this.sceneStyle = ''
      }

      document.addEventListener('pointermove', onpointermove)
      document.addEventListener('pointerup', onpointerup)
    },
    setDragNDrop(flag) {
      if (flag) {
        this.$refs.scene.addEventListener('pointerdown', this.ondragstart)
        this.$refs.scene.ondragstart = () => false
      } else {
        this.$refs.scene.removeEventListener('pointerdown', this.ondragstart)
        this.$refs.scene.ondragstart = null
      }
    }
  },

  mounted() {
    this.$refs.scene.addEventListener('transitionstart', this.ontransitionstart)
    this.$refs.scene.addEventListener('transitionend', this.ontransitionend)

    this.range = this.$children.length

    if (this.isDraggable) this.setDragNDrop(true)
  }
}
</script>

<style>
.slider {
  overflow-x: hidden;
  width: 100%;
  pointer-events: none;
  padding: 0 var(--slider-margin);
}

.slider_centered {
  display: flex;
  justify-content: center;
}

.slider__wrapper {
  --slider-width: calc((100% - var(--slider-getter) * (var(--slider-capacity) - 1)) / var(--slider-capacity));
  width: var(--slider-width);
}

.slider__scene {
  --slider-shift: calc(-1 * var(--slider-count) * (100% + var(--slider-getter)));
  width: 100%;
  transform: translateX(var(--slider-shift));
  transition: var(--slider-speed) linear;
  overflow: visible;
  display: flex;
  position: relative;
}

.slider__scene_draggable{
  touch-action: pan-y pinch-zoom;
}
.slider__scene_dragged {
  transition: none;
}
.slider__handle, .slider__scene {
  pointer-events: auto;
}
</style>
