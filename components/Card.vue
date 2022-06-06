<template>
  <div class="card d-flex flex-column mt-10">
    <!-- <BaseImage :src="image" class="member__image" /> -->
    <div class="text-center">
      <div class="h4 card pt-2">{{ name }}</div>
      <div class="card__body" v-if="body">{{ body }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    body: String,
  },
}
</script>

<style lang="scss" scoped>
.member {
  /* &__image {
  }

  &__name {
    font-weight: 700;
    font-size: 1rem;
  }

  &__jobtitle {
    color: $primary;
    font-size: 0.8rem;
  } */
}
</style>
