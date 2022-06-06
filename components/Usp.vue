<template>
  <div class="usp p-6 p-lg-8">
    <div class="container p-0">
      <div class="text-center">
        <div class="usp__title mb-5 h1 text-white">
          <span class="usp__title__inner" v-html="title"></span>
        </div>
        <div class="usp__body text-white mb-5">{{ prefix }}</div>
      </div>
      <div class="row g-5 mb-5">
        <div
          class="col-lg-4 d-flex usp__col"
          v-for="item in items"
          :key="item.title"
        >
          <div class="usp__item shadow p-4 bg-white text-primary">
            <BaseIcon class="mb-4" size="lg" :icon="item.icon" />
            <div class="usp__item__title h3 mb-1 mb-xl-3">
              <div class="usp__item-number mb-1">{{ item.number }}</div>
              <template>
                {{ item.title }}
              </template>
            </div>
            <div class="mt-auto usp__item__body">{{ item.body }}</div>
          </div>
        </div>
      </div>
      <div class="usp__disclaimer text-white text-center">
        <em>{{ disclaimer }}</em>
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
    prefix: {
      type: String,
    },
    items: {
      type: Array,
    },
    disclaimer: String,
  },
  mounted() {
    const gsap = this.$gsap
    gsap.from('.usp__col', {
      y: -50,
      opacity: 0,
      stagger: 0.3,
      scrollTrigger: {
        trigger: '.usp',
        start: 'top 50%',
      },
    })
  },
}
</script>
<style lang="scss" scoped>
.usp {
  /* background-image: linear-gradient(to bottom, $silver 75%, transparent 75%); */

  &__title {
    font-weight: 300;
    display: flex;
    align-items: center;
    /* max-width: 400px; */

    &__inner {
      width: 400px;
      flex-shrink: 0;
      flex-grow: 1;
      max-width: 100%;
    }
    &:before {
      content: '';
      width: 1000px;
      height: 13px;
      flex-shrink: 1;
      display: block;
      background-image: url('/img/usp-title__before.svg');
    }
    &:after {
      content: '';
      flex-shrink: 1;
      width: 1000px;
      height: 13px;
      display: block;
      background-image: url('/img/usp-title__after.svg');
    }
  }
  &__body {
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
  &__disclaimer {
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  &__item {
    color: #fff;
    display: flex;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
    flex-direction: column;
    border-radius: 10px;

    &-number {
      font-size: 0.85rem;
      opacity: 0.6;
    }

    &__body {
      line-height: 1.7;
    }

    &__title {
      font-weight: 400;
      // font-style: italic;
      a {
        text-decoration: none;
        color: inherit;
      }
    }
  }
}
</style>
