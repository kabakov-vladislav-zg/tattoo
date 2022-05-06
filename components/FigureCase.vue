<template>
  <figure
    v-point-caption="'смотреть'"
    @click="onclick"
    class="img-container w-100 position-relative"
  >
    <img
      :src="caseItem.images[0].href"
      class="w-100 h-auto"
    >
    <figcaption>
      Работа мастера <cite>{{ caseItem.author.name }}</cite><button class="btn btn-light stretched-link">&#128269;</button>
    </figcaption>
  </figure>
</template>

<script>
import CaseModal from "./CaseModal"
export default {
  name: "FigureCase",

  components: {
    CaseModal
  },

  props: {
    caseItem: {
      type: Object,
      required: true
    }
  },

  methods: {
    onclick() {
      this.$modal.on('modal', { component: CaseModal, properties: this.caseItem })
    }
  }
}
</script>
