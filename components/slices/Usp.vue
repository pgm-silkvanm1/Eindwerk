<template>
  <div class="usp p-6 p-lg-8">
    <div class="container p-0">
      <component class="usp__title mb-5 h1 text-primary" :is="titleTag">{{
        title
      }}</component>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-2 g-xl-4">
        <div
          class="col"
          v-for="(item, index) in items"
          :key="`${item.title}-${index}`"
        >
          <div class="usp__item-wrap">
            <div
              class="usp__item p-2 p-xl-4 bg-primary"
              :class="{ clickable: item.url }"
              @click="openItem(item.url)"
            >
              <BaseIcon
                v-if="item.icon"
                class="mb-1"
                type="mnvr"
                :icon="item.icon"
                :variant="item.variant"
              />
              <div class="usp__item__title h3 mb-1 mb-xl-3">
                <NuxtLink :to="item.url" @click.prevent="" v-if="item.url">
                  {{ item.title }}
                </NuxtLink>
                <template v-else>
                  {{ item.title }}
                </template>
              </div>
              <div class="mt-auto">{{ item.body }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
    },
    titleTag: {
      type: String,
      default: 'h2',
    },
    body: {
      type: String,
    },
    items: {
      type: Array,
    },
  },
  methods: {
    openItem(url) {
      if (url) {
        this.$router.push(url)
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.usp {
  background-image: linear-gradient(to bottom, $silver 75%, transparent 75%);

  &__title {
    font-weight: 300;
    max-width: 400px;
  }

  &__item-wrap {
    @include aspect-ratio(1, 1);
  }
  &__item {
    color: #fff;
    display: flex;
    flex-direction: column;

    &.clickable {
      transition: 400ms all ease-out;
      cursor: pointer;
      &:hover,
      &:focus {
        transform: translateY(-3px);
        background: darken($primary, 10%) !important;
      }
    }

    &__title {
      font-weight: 300;
      font-style: italic;
      a {
        text-decoration: none;
        color: inherit;
      }
    }
  }
}
</style>
