<template>
  <header class="fixed inset-0 bottom-auto z-40 bg-white">
    <div class="container px-4 flex items-center h-16">
      <nuxt-link to="/">
        <img
          src="~assets/images/logo.png"
          width="117"
          height="46"
          alt=""
          class="h-12 w-auto"
        >
      </nuxt-link>
      <TheHeaderNav class="ml-auto" />
      <button
        class="ml-4 font-medium bg-black text-white px-4 py-2 rounded-sm"
        v-sticky-button
      >
        Консультация
      </button>
    </div>
  </header>
</template>

<script>
import TheHeaderNav from "@/components/TheHeaderNav";
export default {
  name: "TheHeader",
  components: {TheHeaderNav}
}
</script>
