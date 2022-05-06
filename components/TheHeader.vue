<template>
  <header class="the-header">
    <nav class="container g-0 d-flex">
      <nuxt-link
        to="/"
        class="the-header__item"
      >
        <img
          src="~assets/images/logo.png"
          width="117"
          height="46"
          alt=""
          class="h-75 w-auto"
        >
      </nuxt-link>
      <ul
        class="d-flex list-unstyled mb-0 ms-auto"
      >
        <li
          v-for="link in navLinks"
          :key="link.name"
        >
          <nuxt-link
            :to="link.to"
            class="the-header__item the-header__link btn"
            v-sticky-button
          >
            {{ link.name }}
          </nuxt-link>
        </li>
      </ul>
      <div class="the-header__item">
        <button class="btn btn-dark px-4">
          Консультация
        </button>
      </div>
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

<style lang="scss">
.the-header {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: $zindex-fixed;
  background: #fff;

  &__item {
    padding: 0 $grid-gutter-width * .5;
    height: 4rem;
    display: flex;
    align-items: center;
    color: black;
    text-decoration: none;
  }

  &__link {
    font-family: 'Montserrat Alternates', sans-serif;
    font-weight: 500;
  }
}
</style>
