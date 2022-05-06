<template>
  <article class="row row-cols-1 row-cols-md-2">
    <div class="col">
      <img
        :src="images[0].href"
        class="w-100 h-auto"
      >
    </div>
    <div class="col d-flex flex-column">
      <div class="flex-grow-1">
        <h2 class="display-4">{{ title }}</h2>
        <p>{{ description }}</p>
      </div>
      <footer>
        {{ author.contacts.instagram }}
      </footer>
    </div>
  </article>
</template>

<script>
export default {
  name: "CaseModal",

  props: {
    images: {
      type: Array,
      required: true
    },
    author: {
      type: Object,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

</style>
