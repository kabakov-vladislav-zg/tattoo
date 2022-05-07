<template>
  <Slider
    :getter="4"
  >
    <SliderItem
      v-for="(img, i) in images"
      :key="img.href"
      v-point-caption="'смотреть'"
      @click.native="open(i)"
    >
      <div class="ratio ratio-1x1">
        <img
          :src="img.href"
          class="w-100 h-100 object-fit-cover"
        />
      </div>
    </SliderItem>
  </Slider>
</template>

<script>
import SliderModal from "@/components/SliderModal";

export default {
  name: "PreviewSlider",

  props: {
    images: {
      type: Array,
      required: true
    }
  },

  methods: {
    open(i) {
      this.$modal.on('modal', {
        component: SliderModal,
        properties: {
          initCount: i,
          images: this.images
        },
        containerClasses: 'modal-container_slider'
      })
    }
  }
}
</script>

<style lang="scss">

</style>
