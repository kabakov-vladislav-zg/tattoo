<template>
  <header
    class="fixed inset-0 bottom-auto z-40 bg-white"
    v-point-caption="''"
  >
    <nav class="container flex h-16">
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
      <ul class="flex ml-auto">
        <li
          v-for="link in navLinks"
          :key="link.name"
        >
          <nuxt-link
            :to="link.to"
            class="px-4 h-full flex items-center font-medium font-btn"
            v-sticky-button
          >
            {{ link.name }}
          </nuxt-link>
        </li>
      </ul>
      <button
        class="px-4 flex items-center"
        v-sticky-button=".75"
      >
        <span class="font-btn font-medium bg-black text-white px-4 py-2 rounded-sm">
          Консультация
        </span>
      </button>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      navLinks: [
        {
          name: 'главная',
          to: '/'
        },
        {
          name: 'тату',
          to: '/'
        },
        {
          name: 'пирсинг',
          to: '/'
        },
        {
          name: 'портфолио',
          to: '/'
        },
        {
          name: 'блог',
          to: '/'
        },
      ]
    }
  }
}
</script>
