<template>
  <div class="eventitem">
    <div class="eventitem__title h4">
      {{ date }}
    </div>
    <div class="eventitem__name mb-2" v-if="name">
      <a
        :href="link"
        class="eventitem__link d-flex justify-content-between align-items-center"
      >
        <div>{{ name }}</div>
        <BaseIcon class="chevron" icon="external-link" size="lg" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    link: String,
    date: String,
    name: String,
  },
}
</script>

<style lang="scss" scoped>
.eventitem {
  border-bottom: 1px solid $dark;
  margin-bottom: 2rem;
  &__title {
    color: $primary;
  }
  &__name {
    text-transform: uppercase;
    font-weight: 600;
    font-family: $headings-font-family;
    font-size: $small-font-size;
  }
  &__link {
    text-decoration: none;
    transition: 200ms all ease-in-out;
  }
}
</style>
