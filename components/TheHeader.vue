<template>
  <header class="fixed inset-0 bottom-auto z-40 bg-white">
    <div class="container flex h-16">
      <nuxt-link
        to="/"
        class="px-4 flex items-center"
      >
        <img
          src="~assets/images/logo.png"
          width="117"
          height="46"
          alt=""
          class="h-3/4 w-auto"
        >
      </nuxt-link>
      <TheHeaderNav class="ml-auto" />
      <button
        class="px-4 flex items-center"
        v-sticky-button=".75"
      >
        <span class="font-medium bg-black text-white px-4 py-2 rounded-sm">
          Консультация
        </span>
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
