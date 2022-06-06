<template>
  <div class="teaser" :class="{ clickable: link }" @click.prevent="openLink">
    <div class="teaser__image">
      <img :src="image" class="img-fluid w-100" />
    </div>
    <div class="teaser__content p-2">
      <div class="teaser__title h3 mb-2" v-if="title">
        <BaseLink
          v-if="link"
          @click.native.prevent=""
          class="teaser__link"
          :to="link"
          >{{ title }}</BaseLink
        >
        <template v-else>
          {{ title }}
        </template>
      </div>
      <div class="teaser__quote h4 mb-2" v-if="quote">
        {{ quote }}
      </div>
      <div
        class="teaser__excerpt mt-auto"
        v-html="excerpt"
        v-if="excerpt"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    quote: String,
    link: {
      type: String,
      default: '',
    },
    excerpt: String,
    image: String,
  },
  methods: {
    openLink() {
      this.$router.push({
        path: this.link,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.teaser {
  background-color: $primary;
  color: #fff;
  display: flex;
  flex-direction: column;
  transition: 300ms all ease-out;
  width: 100%;

  &.clickable {
    cursor: pointer;
    &:hover,
    &:focus {
      background-color: darken($primary, 10%);
      transform: translateY(-5px);
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  &__link {
    text-decoration: none;
  }
  &__title {
    font-weight: 300;
  }
  &__excerpt {
    ::v-deep {
      p:last-child {
        margin-bottom: 0;
      }
    }
    // font-size: 1rem;
  }
  &__quote {
    font-style: italic;
  }
}
</style>
