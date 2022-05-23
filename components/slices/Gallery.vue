<template>
  <div class="gallery">
    <client-only>
      <div class="gallery__swiper">
        <swiper :options="swiperOptions">
          <div class="swiper-slide" v-for="image in images" :key="image.url">
            <BaseImage
              class="img-fluid"
              :alt="image.alt"
              :src="image.url"
              :static="image.static"
            />
          </div>
        </swiper>

        <div class="container">
          <div class="d-flex align-items-center justify-content-end mt-3">
            <div class="btn btn-sm btn-link gallery__swiper__prev-button">
              Vorige
            </div>
            <div class="btn btn-sm btn-link gallery__swiper__next-button ms-2">
              Volgende
            </div>
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
    },
  },
  mounted() {
    this.batchConfig = {
      targets: this.$el,
      autoReveal: true,
    }
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 2,
        spaceBetween: 15,
        navigation: {
          nextEl: '.gallery__swiper__next-button',
          prevEl: '.gallery__swiper__prev-button',
        },
        breakpoints: {
          992: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        },
      },
    }
  },
}
</script>

<style lang="scss" scoped>
::v-deep {
  .swiper-button-disabled {
    opacity: 0.4;
    pointer-events: none;
  }
}
</style>
