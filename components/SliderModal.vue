<template>
  <Slider
    :margin="5"
    :getter="14"
    :capacity="2"
    :currentCount="currentCount"
    :isCentered="true"
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
</template>

<script>
export default {
  name: "SliderModal",

  props: {
    currentCount: {
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
