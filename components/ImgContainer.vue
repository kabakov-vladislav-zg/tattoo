<template>
  <div
    v-point-caption="'смотреть'"
    class="img-container w-100"
  >
    <img
      :src="img"
      class="w-100 h-auto"
    >
  </div>
</template>

<script>

export default {
  name: "ImgContainer",

  props: {
    img: {
      type: String,
      required: true
    }
  }
}
</script>
