<template>
  <div :class="[sizeClasses]"></div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'md',
    },
  },
  computed: {
    sizeClasses() {
      switch (this.size) {
        case 'xxs':
          return 'py-2'
        case 'xs':
          return 'py-4'
        case 's':
          return 'py-5'
        case 'md':
          return 'py-6'
        case 'lg':
          return 'py-7 py-lg-10'
        case 'xl':
          return 'py-8 py-lg-15'
        case 'xxl':
          return 'py-10 py-lg-20'
      }
    },
  },
}
</script>
