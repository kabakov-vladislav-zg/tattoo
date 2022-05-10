<template>
  <figure class="figure-case w-100 position-relative">
    <div class="d-flex justify-content-end align-items-center">
      <button
        @click="slider.flip(slider.count - 1)"
        class="btn"
      >
        &#8592;
      </button>
      <span
        v-if="slider"
        class="px-2"
      >
        {{ slider.count + 1 }} / {{ slider.range }}
      </span>
      <button
        @click="slider.flip(slider.count + 1)"
        class="btn"
      >
        &#8594;
      </button>
    </div>
    .
    <Slider
        ref="slider"
        :getter="4"
      >
        <SliderItem
          v-for="(img, i) in images"
          :key="img.href"
          v-point-caption="'смотреть'"
        >
          <div class="ratio ratio-1x1">
            <img
              @click="open(i)"
              :src="img.href"
              class="w-100 h-100 object-fit-cover"
            />
          </div>
        </SliderItem>
      </Slider>
    <figcaption class="py-2">
      <slot />
    </figcaption>
  </figure>
</template>

<script>
import CaseModal from "./CaseModal"
import SliderModal from "@/components/SliderModal";
export default {
  name: "PreviewSlider",

  components: {
    CaseModal
  },

  props: {
    images: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      slider: null
    }
  },

  methods: {
    open(i) {
      this.$modal.on('modal', {
        component: SliderModal,
        properties: {
          currentCount: i,
          images: this.images
        },
        containerClasses: 'modal-container_slider'
      })
    }
  },

  mounted() {
    this.$nextTick(() => {
      if (this.images.length > 1) this.slider = this.$refs.slider
    })
  }
}
</script>
