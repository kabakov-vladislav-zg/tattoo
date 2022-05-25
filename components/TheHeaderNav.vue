<template>
  <nav>
    <div
      class="navbar p-2 flex"
      v-menubar="'.navbar__item'"
    >
      <nuxt-link
        v-for="link in links"
        :key="link.name"
        :to="link.to"
        class="navbar__item px-2 font-medium"
        v-sticky-button
      >
        {{ link.name }}
      </nuxt-link>
    </div>
  </nav>
</template>

<script>
import menubar from "assets/directives/menubar";
export default {
  name: "TheHeaderNav",

  directives: { menubar },

  data() {
    return {
      links: [
        {
          name: 'главная',
          to: '/'
        },
        {
          name: 'тату',
          to: '/tattoo'
        },
        {
          name: 'пирсинг',
          to: '/piercing'
        },
        {
          name: 'портфолио',
          to: '/portfolio'
        },
        {
          name: 'блог',
          to: '/blog'
        },
      ]
    }
  }
}
</script>

<style>
.navbar__item + .navbar__item {
  @apply ml-2;
}
</style>
