<template>
  <div class="logo">
    <BrandLogo class="logo-svg" :class="{ shrink: scrolled }" />
  </div>
</template>

<script>
import BrandLogo from '~/assets/svg/logo1.svg?inline'

export default {
  data() {
    return {
      scrolled: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', (e) => {
      this.scrolled = window.pageYOffset > 0
    })
  },
  props: {
    variant: {
      type: String,
      default: 'black',
    },
    width: {
      type: Number,
      default: 140,
    },
    height: {
      type: Number,
      default: 140,
    },
  },
  components: { BrandLogo },
}
</script>

<style lang="scss" scoped>
.logo {
  svg path {
  }
  &-svg {
    width: 125px;
    height: 58px;
    transition: 400ms all ease-out;
    fill: $primary;

    @include media-breakpoint-up(md) {
    }

    &.shrink {
    }
  }
}
</style>
