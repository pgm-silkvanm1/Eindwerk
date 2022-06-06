<template>
  <div class="footer-logo" :class="[`text-${variant}`]">
    <BrandLogo class="footer-logo__svg" />
  </div>
</template>

<script>
import BrandLogo from '~/assets/svg/logo.svg?inline'

export default {
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
      default: 70,
    },
  },
  components: { BrandLogo },
}
</script>

<style lang="scss" scoped>
.footer-logo {
  &__svg {
    path,
    rect {
      fill: #fff;
    }
    width: 100px;
    height: 50px;

    @include media-breakpoint-up(md) {
      width: 100px;
      height: 50px;
    }
  }
}
</style>
