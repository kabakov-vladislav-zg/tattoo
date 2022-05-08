<template>
  <Slider
    :margin="5"
    :getter="14"
    :capacity="2"
    :initCount="initCount"
    :isCentered="true"
    :isDraggable="true"
  >
    <SliderItem
      v-for="img in images"
      :key="img.href"
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
export default {
  name: "SliderModal",

  props: {
    initCount: {
      type: Number,
      default: 0
    },
    images: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">

</style>
