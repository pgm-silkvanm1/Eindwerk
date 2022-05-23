<template>
  <div class="teaseritem">
    <div class="teaseritem__image d-flex justify-content-center">
      <img :src="image" class="img-fluid" />
    </div>
    <div class="teaseritem__title h2 my-2">
      {{ title }}
    </div>
    <div
      class="teaseritem__excerpt d-flex justify-content-center col-lg-9"
      v-if="excerpt"
    >
      <p>{{ excerpt }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    slice: Object,
    title: String,
    link: {
      type: String,
      default: '/',
    },
    excerpt: String,
    image: String,
  },
  methods: {
    openLink() {
      this.$router.push({
        path: this.link,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.teaseritem__title {
  color: $primary;
  text-transform: uppercase;
  text-decoration: none;
  font-size: $small-font-size;
}
.teaseritem__excerpt {
  color: $dark;
  font-size: $h4-font-size;
}
</style>
