<template>
  <div class="faq-item">
    <div
      class="
        collapsed
        d-flex
        faq-item__header
        justify-content-between
        align-items-center
      "
      data-bs-toggle="collapse"
      :data-bs-target="`#${collapseId}`"
    >
      <div class="faq-item__title d-flex align-items-center">
        <BaseIcon class="faq-item__icon text-primary" icon="times" size="lg" />
        <div class="h3 ps-4">{{ title }}</div>
      </div>
    </div>
    <div class="faq-item__collapse collapse" :id="collapseId">
      <div class="faq-item__body py-4 bodytext" v-html="body"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['title', 'body'],
  computed: {
    collapseId() {
      return `content${this._uid}`
    },
  },
}
</script>
<style lang="scss" scoped>
.faq-item {
  &__icon {
    transition: 200ms all ease-out;
    transform: rotate(90deg);
    &.active {
      // transform: rotate(90deg);
    }
  }
  &__title {
    transition: 200ms all ease-out;
    color: $primary;
  }
  &__header {
    &.collapsed {
      .faq-item__icon {
        transform: rotate(45deg);
      }
    }

    cursor: pointer;
    &:hover,
    &:focus {
      .faq-item__title {
        color: $secondary;
      }
    }
  }
}
</style>
