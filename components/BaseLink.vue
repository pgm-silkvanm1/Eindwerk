<template>
  <component
    v-if="usedComponent"
    :is="usedComponent.name"
    v-bind="usedComponent.props"
    v-on="$listeners"
  >
    <slot><span v-html="label" /></slot>
  </component>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
    },
    to: {
      type: String | Object,
      default: '/',
    },

    target: String,
  },
  computed: {
    usedComponent() {
      if (this.to) {
        if (!this.target && this.to.startsWith('/')) {
          return {
            name: 'nuxt-link',
            props: { to: this.to },
          }
        }
        return {
          name: 'a',
          props: { href: this.to, target: this.target || '_blank' },
        }
      }
      return { name: 'span' }
    },
  },
}
</script>
