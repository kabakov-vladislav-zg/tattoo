<template>
  <nav>
    <div
      @keyup.left.exact="prev"
      @keyup.right.exact="next"
      @keyup.enter.exact="rout"
      @keyup.space.prevent.exact="rout"
      :aria-activedescendant="'navbar' + links[current].to"
      class="navbar h-full flex"
      role="group"
      tabindex="0"
    >
      <nuxt-link
        v-for="(link, i) in links"
        :key="link.name"
        :to="link.to"
        :id="'navbar' + link.to"
        :class="{ 'active' : current === i }"
        class="px-4 flex items-center font-medium"
        tabindex="-1"
        v-sticky-button
      >
        {{ link.name }}
      </nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TheHeaderNav",
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
      ],
      current: 0
    }
  },

  computed: {
    limit() {
      return this.links.length - 1
    }
  },

  methods: {
    prev() {
      this.current = (this.current < 1) ? this.limit : this.current - 1
    },
    next() {
      this.current = (this.current < this.limit) ? this.current + 1 : 0
    },
    rout() {
      this.$router.push({ path: this.links[this.current].to })
    }
  }
}
</script>

<style>
.navbar:focus-visible {

}
.navbar:focus-visible > .active {
  background: bisque;
}
</style>
