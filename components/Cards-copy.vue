<template>
  <div class="container cards d-flex" :class="{ ['cards--slider']: slider }">
    <div class="cards__container col-2">
      <div class="cards__container__title mb-3" :is="titleTag">{{ title }}</div>
      <div class="cards__container__body">{{ body }}</div>
    </div>
    <div class="cards__slider col-10 row">
      <div class="col-10 col-lg-12">
        <swiper class="cards__swiper" :options="swiperOptions">
          <swiper-slide v-for="item in items" :key="item.title">
            <div
              class="cards__report gap-15 d-flex p-4 flex-column text-white"
              :class="{ [`bg-${item.backGround}`]: backGround }"
            >
              <div class=""></div>
              <div>
                <div class="cards__report__title mb-4" :is="titleTag">
                  {{ item.title }}
                </div>
                <div class="cards__report__body mb-4">{{ item.body }}</div>
                <div class="text-uppercase">
                  <BaseIcon icon="circle" type="fa" variant="white" /> Explore
                </div>
              </div>
            </div>
            <!-- <Member v-bind="item" /> -->
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    titleTag: {
      type: String,
      default: 'h2',
    },
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
        freeMode: {
          enabled: true,
          sticky: true,
        },
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
          1200: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
        },
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.cards {
  &__container {
    z-index: 9999;
    background-color: $gray;
    &__title {
      color: $dark;
    }
    &__body {
      color: $dark;
      font-weight: 500;
    }
  }
  &__slider {
    z-index: 0;
    margin-left: 5rem;
  }

  .cards__swiper {
    .cards__report {
      box-shadow: 0px 0px 29px -7px rgba(0, 0, 0, 0.75);

      /* height: 20rem; */
      &__title {
      }
      &__body {
      }
    }
  }
}

::v-deep {
  .swiper-container {
    overflow: visible;
  }
}
</style>
