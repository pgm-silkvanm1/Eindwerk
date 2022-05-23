<template>
  <div class="footer-logo" :class="[`text-${variant}`]">
    <Logo class="footer-logo__svg" />
  </div>
</template>

<script>
import Logo from '~/assets/svg/logo1.svg?inline'

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
  components: { Logo },
}
</script>

<style lang="scss" scoped>
.footer-logo {
  &__svg {
    path {
      fill: $primary;
    }
    width: 125px;
    height: 58px;

    @include media-breakpoint-up(md) {
      width: 125px;
      height: 58px;
    }
  }
}
</style>
