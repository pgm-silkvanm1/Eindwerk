<template>
  <div class="teaser" @click.prevent="openLink">
    <div class="teaser__image">
      <img :src="image" class="img-fluid" />
    </div>
    <div class="teaser__title">
      <div class="h3">
        <BaseLink @click.native.prevent="" class="teaser__link h3" :to="link">{{
          title
        }}</BaseLink>
      </div>
    </div>
    <div class="teaser__excerpt" v-if="excerpt">
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

<style lang="scss" scoped></style>
