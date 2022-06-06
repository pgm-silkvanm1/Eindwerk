<template>
  <div class="rich-text" :class="[verticalPadding, `bg-${variant}`]">
    <div class="container">
      <div
        class="row"
        :class="[`justify-content-${horizontalAlign}`, `text-${textAlign}`]"
      >
        <div :class="colClass">
          <div
            class="wysiwyg"
            :class="{ 'large-text': largeText, 'text-white': dark }"
            v-html="body"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    variant: String,
    body: String,
    dark: { type: Boolean, default: false },
    largeText: { type: Boolean, default: false },
    horizontalAlign: {
      type: String,
      default: 'left',
    },
    textAlign: {
      type: String,
      default: 'left',
    },
    verticalPadding: {
      type: String,
    },
    size: {
      type: String,
      default: 'medium',
    },
  },
  computed: {
    colClass() {
      if (this.size === 'extra-large') return 'col-12'
      if (this.size === 'large') return 'col-md-10'
      if (this.size === 'medium') return 'col-md-8'
      if (this.size === 'small') return 'col-md-7 col-xl-6'
      if (this.size === 'extra-small') return 'col-md-6 col-lg-5 col-xl-4'
    },
  },
}
</script>

<style lang="scss" scoped>
.wysiwyg {
  &.large-text {
    font-size: 120%;
  }
}
</style>
