<template>
  <div class="separator" :class="[`separator--${size}`]"></div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'sm',
    },
  },
}
</script>

<style lang="scss" scoped>
.separator {
  width: 1px;
  height: 80px;
  background-color: $dark;
  margin: 0 auto;
  &--lg {
    height: 165px;
  }
}
</style>
