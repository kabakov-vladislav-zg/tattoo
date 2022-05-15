<template>
  <figure class="relative flex flex-col">
    <div :class="[ reverse ? 'self-end' : 'self-start' ]">
      <button
        @click="slider && slider.flip(slider.count - 1)"
        :disabled="!slider || slider.count === 0"
        class="p-2"
        aria-label="предыдущий слайд"
      >
        &#8592;
      </button>
      <span class="w-10 text-center">
        {{ progress }}
      </span>
      <button
        @click="slider && slider.flip(slider.count + 1)"
        :disabled="!slider || slider.count === slider.limit"
        class="p-2"
        aria-label="следующий слайд"
      >
        &#8594;
      </button>
    </div>
    <Slider
      ref="slider"
      :getter="4"
      :isDraggable="true"
    >
      <SliderItem
        v-for="img in images"
        :key="img.href"
      >
        <div class="picture">
          <img :src="img.href"/>
        </div>
      </SliderItem>
    </Slider>
    <figcaption
      class="py-2"
      :class="[ reverse ? 'self-start' : 'self-end' ]"
    >
      <slot />
    </figcaption>
  </figure>
</template>

<script>
import CaseModal from "./CaseModal"
export default {
  name: "PreviewSlider",

  components: {
    CaseModal
  },

  props: {
    images: {
      type: Array,
      required: true
    },
    reverse: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      slider: null
    }
  },

  computed: {
    progress() {
      return `${ 1 + (this.slider ? this.slider.count : 0) } / ${this.images.length}`
    }
  },

  mounted() {
    this.$nextTick(() => {
      if (this.images.length > 1) this.slider = this.$refs.slider
    })
  }
}
</script>
