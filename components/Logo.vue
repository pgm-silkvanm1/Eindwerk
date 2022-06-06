<template>
  <div class="logo">
    <BrandLogo class="logo-svg" :class="{ shrink: scrolled }" />
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
      default: 142,
    },
    height: {
      type: Number,
      default: 33,
    },
    scrolled: Boolean,
  },
  components: { BrandLogo },
}
</script>

<style lang="scss" scoped>
.logo {
  svg path {
  }
  &-svg {
    width: 142px;
    height: 33px;
    transition: 400ms all ease-out;

    @include media-breakpoint-up(md) {
    }

    &.shrink {
      fill: #fff;

      /* path,
      rect {
        fill: #fff;
      } */
    }
  }
}
</style>
