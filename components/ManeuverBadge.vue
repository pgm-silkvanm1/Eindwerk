<template>
  <div class="mnvr-badge mnvr-badge--light">
    <a
      class="mnvr-badge__inner"
      href="http://www.maneuver.be"
      target="_blank"
      title="site by maneuver"
    ></a>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.mnvr-badge {
  position: absolute;
  bottom: 12px;
  right: 12px;

  &__inner {
    display: block;
    width: 13px;
    height: 6px;
    margin: auto;
    background: url('/img/mnvr-dark.png') no-repeat 0 0;
    opacity: 0.3;
    transition: all 250ms ease-in-out;

    &:hover {
      width: 63px;
      opacity: 0.3;
    }
  }

  &--light {
    .mnvr-badge__inner {
      background: url('/img/mnvr-light.png') no-repeat 0 0;
    }
  }
}
</style>
