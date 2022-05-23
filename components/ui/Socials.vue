<template>
  <div class="socials d-flex row">
    <div class="socials__item" v-for="(url, key) in socials" :key="url">
      <a class="socials__link" :href="url" target="_blank">{{ key }}</a>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { pickBy } from 'lodash'

export default {
  computed: {
    ...mapState('content', {
      socials: (state) => pickBy(state.options.socials),
    }),
  },
}
</script>

<style lang="scss" scoped>
.socials {
  &__item:not(:last-child):after {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    color: $secondary;
  }
  &__link {
    font-size: 0.9rem;
    font-family: $headings-font-family;
    font-weight: 500;
    color: $secondary;
    text-transform: capitalize;
    text-decoration: none;
    &:hover,
    &:focus {
      color: $primary;
    }
  }
}
</style>
