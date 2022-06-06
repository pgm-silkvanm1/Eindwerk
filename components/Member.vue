<template>
  <div class="member">
    <BaseImage :src="image" class="img-fluid member__image" />
    <div class="text-center">
      <div class="h4 member__name pt-2">{{ name }}</div>
      <div class="member__jobtitle" v-if="jobtitle">{{ jobtitle }}</div>
      <div class="member__socials">
        <a v-if="linkedin" :href="linkedin"
          ><BaseIcon icon="linkedin" type="fab" class="member__socials__icon"
        /></a>
        <a v-if="email" :href="`mailto:${email}`"
          ><BaseIcon icon="envelope" class="member__socials__icon"
        /></a>
        <a v-if="twitter" :href="twitter"
          ><BaseIcon icon="twitter" type="fab" class="member__socials__icon"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    name: String,
    jobtitle: String,
    linkedin: String,
    email: String,
    twitter: String,
  },
}
</script>

<style lang="scss" scoped>
.member {
  &__image {
    // border-radius: 50%;
  }

  &__name {
    font-weight: 700;
    font-size: 1rem;
    color: $dark;
  }

  &__jobtitle {
    color: $primary;
    font-size: 0.8rem;
  }
  &__socials {
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      color: $primary;
      &:not(:last-child) {
        margin-right: 0.3rem;
      }
    }
    &__icon {
      transition: 300ms all ease;
    }

    &__icon:hover {
      transform: scale(1.15);
      color: $dark;
    }
  }
}
</style>
