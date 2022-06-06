<template>
  <component
    :is="usedComponent.name"
    v-bind="usedComponent.props"
    v-on="$listeners"
    class="btn-travel"
    :class="{ [`btn-${variant}`]: variant, [`btn-${size}`]: size }"
    @click="maybeOpenModal"
  >
    <slot>
      <div class="button-label" v-if="!loader">
        {{ label }}
      </div>
      <div class="d-inline-flex align-items-center" v-else>
        <div class="button-label">Laden...</div>
        <BaseIcon class="ms-1" icon="spinner" spin />
      </div>
    </slot>
  </component>
</template>

<script>
import { startsWith } from 'lodash'

export default {
  props: {
    href: String,
    modal: String,
    label: String,
    variant: {
      type: String,
      default: 'primary',
    },
    loader: Boolean,
    size: {
      type: String,
      validator: (value) => ['sm', 'lg'].includes(value),
    },
  },
  methods: {
    maybeOpenModal() {
      if (this.modal) {
        this.$store.commit('ui/toggleModal', this.modal)
      }
    },
  },
  computed: {
    usedComponent() {
      if (this.href) {
        if (startsWith(this.href, '/')) {
          return {
            name: 'nuxt-link',
            props: { to: this.href },
          }
        }
        let target = '_blank'
        if (startsWith(this.href, '#')) {
          target = null
        }
        return { name: 'a', props: { href: this.href, target } }
      }
      return { name: 'button' }
    },
  },
}
</script>
<style lang="scss" scoped>
.btn-swiper {
  background: transparent;
  padding: 0;
  border: none;
  color: $dark;
  display: flex;
  align-items: center;
  outline: 0;
}
</style>
