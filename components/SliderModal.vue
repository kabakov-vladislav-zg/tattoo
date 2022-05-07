<template>
  <Slider
    :getter="14"
    :initCount="initCount"
    :capacity="2"
    :center="true"
    :margin="5"
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
