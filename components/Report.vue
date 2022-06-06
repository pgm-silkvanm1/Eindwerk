<template>
  <div class="report py-8 py-xl-12" :class="{ ['report--slider']: slider }">
    <div class="container">
      <div class="row gx-10">
        <div
          class="
            report__container
            col-md-6 col-xl-4
            mb-4 mb-md-0
            bg-gray
            d-flex
            align-items-center
          "
        >
          <div class="report__container__inner">
            <div class="report__title mb-3 h2" v-html="title"></div>
            <div class="report__body mb-3" v-html="body"></div>
            <div class="swiper-report-pagination"></div>
          </div>
        </div>
        <div class="report__slider col-12 col-md-6 col-xl-8">
          <client-only>
            <swiper class="report__swiper" :options="swiperOptions">
              <swiper-slide v-for="item in items" :key="item.title">
                <div class="report__swiper-slide">
                  <BaseImage :src="item.image" class="img-fluid" />
                </div>
              </swiper-slide>
            </swiper>
          </client-only>
        </div>
      </div>
      <div class="d-flex justify-content-end mt-8">
        <BaseButton label="next" variant="swiper" class="swiper-report__next">
          <span class="me-1">NEXT</span>
          <BaseIcon icon="circle" type="fa" class="next-btn" />
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    body: String,
    items: {
      type: Array,
      default: [],
    },
    backGround: {
      type: String,
      default: 'dark',
    },
    slider: { type: Boolean, default: false },
  },

  data() {
    return {
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 60,
        breakpoints: {
          1800: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 1,
          },
        },
        pagination: {
          el: '.swiper-report-pagination',
          type: 'bullets',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-report__next',
          prevEl: '.swiper-report__prev',
        },
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.report {
  position: relative;
  &__container {
    z-index: 1;
    position: relative;
    &__inner {
      position: relative;
      z-index: 1;
    }

    @include media-breakpoint-up(md) {
      &:before {
        position: absolute;
        content: '';
        display: block;
        background: $gray;
        z-index: 0;
        width: 1000px;
        right: -10px;
        top: -30px;
        bottom: -30px;
      }
    }
  }
  &__title {
    color: $dark;
  }
  &__body {
    color: $dark;
    // font-weight: 500;
    // max-width: 250px;
  }
  .swiper-report__next {
    transition: 300ms all ease;

    &:hover {
      color: gray;
      transform: scale(1.3);
    }
  }

  &__slider {
    z-index: 0;
    position: relative;
    /* margin-left: 5rem; */
  }

  .report__swiper {
    &-slide {
      box-shadow: 0px 0px 29px -7px rgba(0, 0, 0, 0.75);
    }
  }
}

::v-deep {
  --swiper-theme-color: #1d2249;
  .swiper-container {
    overflow: visible;
  }
  .swiper-pagination {
    position: static;
    text-align: left;
  }
  .swiper-pagination-bullet {
    margin-right: 0.3rem;
    width: 12px;
    height: 12px;
    border: 1px solid #1d2249;
    transition: 300ms all ease;

    &:hover {
      transform: scale(1.2);
    }
  }
}
</style>
