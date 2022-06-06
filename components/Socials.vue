<template>
  <div class="socials">
    <div class="socials__item" v-for="(url, key) in socials" :key="url">
      <a class="socials__link" :href="url" target="_blank">{{ key }}</a>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('content', {
      socials: (state) => state.options.socials,
    }),
  },
}
</script>

<style lang="scss" scoped>
.socials {
  display: flex;
  &__item:not(:last-child):after {
    content: '/';
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    color: $gray;
  }
  &__link {
    font-family: $headings-font-family;
    font-weight: 500;
    color: $gray;
    text-transform: capitalize;
    text-decoration: none;
    &:hover,
    &:focus {
      color: $primary;
    }
  }
}
</style>
