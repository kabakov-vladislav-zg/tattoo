<template>
  <div class="slider-item">
    <slot />
  </div>
</template>

<script>
export default {
  name: "SliderItem"
}
</script>

<style>
.slider-item {
  flex-shrink: 0;
  width: 100%;

  margin-right: var(--slider-getter, 0);
}
</style>
