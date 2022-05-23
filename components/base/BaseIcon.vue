<template>
  <div
    class="base-icon"
    :class="{ [`text-${variant}`]: variant }"
    v-on="$listeners"
  >
    <FontAwesomeIcon :icon="[type, icon]" v-bind="$attrs" />
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: 'fal',
    },
    icon: String,
    variant: String,
  },
  components: {
    FontAwesomeIcon,
  },
}
</script>

<style lang="scss" scoped>
.base-icon {
  display: inline-block;
}
</style>
