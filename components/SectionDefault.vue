<template>
  <section class="container pb-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div
        v-if="!reverse"
        class="flex flex-col justify-center"
      >
        <slot></slot>
      </div>
      <div
        class="col"
        :class="[ reverse ? 'md:pr-5' : 'md:pl-5' ]"
      >
        <slot name="img">
          <PreviewSlider
            :images="caseItem.images"
            :reverse="reverse"
          >
            <slot name="figcaption">
              Работа мастера
              <nuxt-link :to="`/authors/${caseItem.author.name}`">
                {{ caseItem.author.name }}
              </nuxt-link>
            </slot>
          </PreviewSlider>
        </slot>
      </div>
      <div
        v-if="reverse"
        class="flex flex-col justify-center"
      >
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script>
import PreviewSlider from "@/components/PreviewSlider";
export default {
  name: "SectionDefault",
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
