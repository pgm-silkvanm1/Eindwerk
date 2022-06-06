<template>
  <div class="faq bg-white p-4">
    <div class="faq__list rhythm-mb-2" v-if="items">
      <FaqItem
        class="faq__item"
        v-bind="item"
        v-for="(item, index) in items"
        :key="item.title"
        :icon="icons[index % 3]"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: ['items'],
  data() {
    return {
      icons: ['primary', 'primary', 'primary'],
    }
  },
}
</script>
<style lang="scss" scoped>
.faq {
  &__item {
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba($light, 0.5);
  }
}
</style>
