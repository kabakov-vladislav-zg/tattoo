<template>
  <section class="section section-two-columns container">
    <div
      class="row row-cols-1 row-cols-md-2 align-items-center gy-4 gy-md-0"
      :class="{ 'flex-row-reverse' : imgFirst }"
    >
      <div class="col">
        <slot></slot>
      </div>
      <div
        class="col"
        :class="[ imgFirst ? 'pe-md-5' : 'ps-md-5' ]"
      >
        <slot name="img">
          <ImgContainer :img="img" />
        </slot>
      </div>
    </div>
  </section>
</template>

<script>
import ImgContainer from "@/components/ImgContainer";
export default {
  name: "SectionTwoColumns",
  components: {ImgContainer},
  props: {
    img: {
      type: String,
      required: false
    },
    imgFirst: {
      type: Boolean,
      default: true
    }
  }
}
</script>
