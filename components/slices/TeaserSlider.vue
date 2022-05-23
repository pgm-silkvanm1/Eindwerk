<template>
  <div class="teaser-slider p-6 p-lg-8">
    <div class="container p-0">
      <component
        class="teaser-slider__title mb-5 h1 text-primary"
        :is="titleTag"
        >{{ title }}</component
      >

      <client-only>
        <swiper :options="swiperOptions">
          <div
            class="teaser-slider__navigation teaser-slider__prev-button"
            slot="button-prev"
          >
            <BaseIcon icon="angle-left" variant="primary" size="2x" />
          </div>
          <div
            class="teaser-slider__navigation teaser-slider__next-button"
            slot="button-next"
          >
            <BaseIcon icon="angle-right" variant="primary" size="2x" />
          </div>
          <swiper-slide v-for="item in items" :key="item.title">
            <Teaser v-bind="item" />
          </swiper-slide>
        </swiper>
      </client-only>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
          1200: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 3,
          },
          400: {
            slidesPerView: 2,
          },
        },
        navigation: {
          nextEl: '.teaser-slider__next-button',
          prevEl: '.teaser-slider__prev-button',
        },
      },
    }
  },
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
.teaser-slider {
  background-image: linear-gradient(to bottom, $silver 75%, transparent 75%);

  .swiper-container {
    overflow: visible;
  }

  .swiper-slide {
    height: auto;
    display: flex;
  }

  &__navigation {
    top: -50px;
    right: 0;
    position: absolute;

    cursor: pointer;
    &:hover,
    &:focus {
      .base-icon {
        color: $primary !important;
      }
    }
  }
  .swiper-button-disabled {
    opacity: 0.4;
    cursor: default;
    pointer-events: none;
  }
  &__prev-button {
    right: 30px;
  }
  &__next-button {
  }

  &__title {
    font-weight: 300;
    max-width: 400px;
  }

  &__item-wrap {
    // @include aspect-ratio(1, 1);
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
