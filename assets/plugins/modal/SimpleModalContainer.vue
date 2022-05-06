<template>
  <div class="modal-container">
    <button
      @click="$modal.off('all')"
      class="modal-container__close btn btn_icon"
    >
      x
    </button>
    <slot />
  </div>
</template>

<script>
export default {
  name: "SimpleModalContainer",

  components: {}
}
</script>
