<template>
  <NuxtImg
    v-if="useNuxtImage"
    loading="lazy"
    quality="100"
    :src="relativeUrl"
    v-bind="$attrs"
  />
  <img v-else loading="lazy" :src="src" />
</template>

<script>
export default {
  props: {
    src: { type: String, required: true },
  },
  computed: {
    useNuxtImage() {
      return this.$config.useImageKit
    },
    relativeUrl() {
      return this.src.replace(this.$config.cms_url, '')
    },
  },
}
</script>
