<template>
  <div class="team">
    <div class="row">
      <div class="col-sm-6 col-md-4" v-for="item in items" :key="item.name">
        <Member class="mb-4" v-bind="item" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: [],
    },
  },
}
</script>

<style lang="sass" scoped></style>
