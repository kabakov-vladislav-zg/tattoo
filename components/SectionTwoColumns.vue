<template>
  <section class="section section-two-columns container">
    <div
      class="row row-cols-1 row-cols-md-2 align-items-center gy-4 gy-md-0"
      :class="{ 'flex-row-reverse' : reverse }"
    >
      <div class="col">
        <slot></slot>
      </div>
      <div
        class="col"
        :class="[ reverse ? 'pe-md-5' : 'ps-md-5' ]"
      >
        <slot name="img">
          <PreviewSlider :images="caseItem.images">
            <slot name="figcaption">
              Работа мастера
              <nuxt-link :to="`/authors/${caseItem.author.name}`">
                {{ caseItem.author.name }}
              </nuxt-link>
            </slot>
          </PreviewSlider>
<!--          <FigureCase-->
<!--            v-if="caseItem"-->
<!--            :caseItem="caseItem"-->
<!--          />-->
        </slot>
      </div>
    </div>
  </section>
</template>

<script>
import PreviewSlider from "@/components/PreviewSlider";
export default {
  name: "SectionTwoColumns",
  components: {
    PreviewSlider
  },
  props: {
    caseItem: {
      type: Object,
    },
    reverse: {
      type: Boolean,
      default: false
    }
  }
}
</script>
