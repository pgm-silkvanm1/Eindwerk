<template>
  <div class="cover text-dark" :style="coverStyle" :class="[coverType]">
    <div class="cover__inner d-flex justify-content-stretch">
      <div :style="overlayStyle" class="cover__overlay"></div>

      <div
        class="cover__content flex-grow-1 rhythm-mb-4"
        :class="[
          `justify-content-${verticalAlign}`,
          `align-items-${horizontalAlign}`,
          `text-${textAlign}`,
        ]"
      >
        <div class="cover__wave"></div>
        <div class="container">
          <div
            v-if="title"
            class="cover__title h1 mb-5 col-md-5"
            v-html="title"
          />
          <slot name="body">
            <div v-if="body" class="cover__body col-md-6" v-html="body"></div>
          </slot>
          <div
            v-if="buttons && buttons.length"
            class="
              cover__buttons
              d-md-flex
              rhythm-mb-2 rhythm-mb-md-0 rhythm-mr-2
            "
          >
            <BaseButton
              v-for="(item, index) in buttons"
              :key="`cover-button-${index}`"
              :label="item.title"
              :modal="item.modal"
              :href="item.url"
              variant="primary"
            />
          </div>
        </div>
        <div class="cover__dots"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    horizontalAlign: {
      type: String,
      default: 'center',
    },
    verticalAlign: {
      type: String,
      default: 'center',
    },
    textAlign: {
      type: String,
      default: 'center',
    },
    coverType: {
      type: String,
      default: 'square',
    },
    image: {
      type: String,
    },
    prefixTag: {
      type: String,
      default: 'div',
    },
    prefix: {
      type: String,
    },
    title: {
      type: String,
    },
    titleTag: {
      type: String,
      default: 'h1',
    },
    body: {
      type: String,
    },
    buttons: {
      type: Array,
    },

    overlayOpacity: {
      type: Number | String,
      default: 0.35,
    },
    bodyColor: {
      type: String,
      default: 'default',
    },
  },
  computed: {
    coverStyle() {
      if (this.image) {
        return {
          backgroundImage: `url('${this.imageStyle(this.image, 'cover')}')`,
        }
      }
    },
    overlayStyle() {
      if (this.overlayOpacity) {
        return {
          opacity: parseInt(this.overlayOpacity) / 100,
        }
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.cover {
  background: $silver;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  // color: #fff;
  position: relative;
  padding-top: 6rem;
  padding-bottom: 3rem;

  &__overlay {
    // position: absolute;
    // top: 0;
    // bottom: 0;
    // width: 100%;
    // height: 100%;
    // z-index: 0;
    // background-color: $primary;
  }
  &__title {
    line-height: 1.1;
    // color: #fff;
    font-weight: 400;

    ::v-deep {
      strong {
        font-weight: 600;
      }
    }
  }

  &__prefix {
    font-size: 1.2rem;
    color: #fff;
  }
  &__content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
  }
  &__dots {
    width: 100%;
    height: 35px;
    margin-top: 3rem;
    background-image: url('/img/dots.svg');
    background-repeat: no-repeat;
  }
  &__wave {
    width: 75%;
    height: 100px;
    margin-bottom: 5rem;
    background-image: url('/img/wave.svg');
    background-repeat: no-repeat;
  }
}
</style>
