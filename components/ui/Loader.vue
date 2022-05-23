<template>
  <div
    v-if="siteLoading"
    class="loader"
    :class="{
      'position-fixed z-10 bg-primary w-100 min-vh-100 d-flex justify-content-center align-items-center':
        fullscreen,
    }"
  >
    <div class="d-flex align-items-center position-relative">
      <div ref="logo">
        <Logo class="loader__logo" variant="white" />
      </div>
      <div ref="progress" class="loader__progress"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    fullscreen: { type: Boolean, default: true },
  },
  computed: {
    ...mapState('ui', ['siteLoading']),
  },
  methods: {
    onComplete() {
      this.$store.commit('ui/setSiteLoaded')
    },
  },
  mounted() {
    this.$gsap.set(this.$el, { autoAlpha: 1 })
    const tl = this.$gsap.timeline({ delay: 1, onComplete: this.onComplete })
    tl.from(this.$refs.logo, { opacity: 0, y: -30, duration: 1 }, '>-.4')
    tl.from(this.$refs.progress, { width: 0, duration: 2 })
    tl.to(this.$el, { opacity: 0 })
  },
}
</script>

<style lang="scss" scoped>
.loader {
  z-index: 999;
  position: relative;
  opacity: 0;

  &__progress {
    position: absolute;
    top: 100%;
    margin-top: 10px;
    height: 4px;
    left: 0;
    width: 100%;
    background: $primary;
  }
}
</style>
