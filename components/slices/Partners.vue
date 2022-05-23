<template>
  <div>
    <div class="h4 text-center mb-6 mb-lg-8">
      {{ prefix }}
    </div>
    <div class="d-flex flex-wrap justify-content-center align-items-center">
      <div class="px-4 px-lg-6 mb-5" v-for="item in items" :key="item.image">
        <a :href="item.url" target="_blank" class="partner__link"
          ><img
            :src="item.image"
            class="partner__image img-fluid"
            style="max-height: 40px; min-width: 75px"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    prefixTag: {
      type: String,
      default: 'h4',
    },
    prefix: String,
    items: {
      type: Array,
    },
  },
  methods: {
    openLink() {
      this.$router.push({
        path: this.link,
      })
    },
  },
  mounted() {
    this.batchConfig = {
      targets: this.$el,
      autoReveal: true,
    }
  },
}
</script>

<style lang="scss" scoped>
.partner__image {
  mix-blend-mode: luminosity;
}
</style>
