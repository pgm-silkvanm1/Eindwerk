<template>
  <div class="cover container" :style="coverStyle" :class="[coverType]">
    <div class="cover__inner d-flex justify-content-stretch">
      <div
        class="cover__content flex-grow-1 rhythm-mb-4"
        :class="[
          `justify-content-${verticalAlign}`,
          `align-items-${horizontalAlign}`,
          `text-${textAlign}`,
        ]"
      >
        <slot name="prefix">
          <div v-if="prefix" class="cover__prefix mb-1">
            {{ prefix }}
          </div>
        </slot>
        <div
          v-if="title"
          class="cover__title h1 text-dark"
          v-html="title"
        ></div>
        <slot name="body">
          <div v-if="body" class="cover__body" v-html="body"></div>
        </slot>
        <div
          v-if="buttons && buttons.length"
          class="cover__buttons d-md-flex rhythm-mb-2 rhythm-mb-md-0 rhythm-mr-2"
        >
          <BaseButton
            v-for="(item, index) in buttons"
            :key="`cover-button-${index}`"
            :label="item.button.title"
            :modal="item.button.modal"
            :href="item.button.url"
            variant="primary"
          />
        </div>
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
      default: 'hero',
    },
    image: {
      type: String,
    },
    prefix: {
      type: String,
    },
    title: {
      type: String,
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
  mounted() {
    this.batchConfig = {
      targets: this.$el,
      autoReveal: true,
    }
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
  display: flex;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  // color: #fff;
  position: relative;

  &.square {
    @include aspect-ratio(1, 1);
  }
  &.hero {
    min-height: 350px;
    @include media-breakpoint-up(md) {
      @include aspect-ratio(16, 9);
    }
    @include media-breakpoint-up(lg) {
      @include aspect-ratio(16, 7);
    }
    max-height: 90vh;
    &:after {
      max-height: 90vh;
    }
  }
  &.narrow {
    min-height: 200px;
    @include media-breakpoint-up(md) {
      @include aspect-ratio(16, 7);
    }
    @include media-breakpoint-up(lg) {
      @include aspect-ratio(16, 4);
    }
    max-height: 50vh;
    &:after {
      max-height: 50vh;
    }
  }

  &__body {
    color: #fff;
  }

  &__title {
    line-height: 1.3;
    color: #fff;

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
    padding-top: 3rem;
    padding-bottom: 3rem;
    // padding-left: $grid-gutter-width;
    // padding-right: $grid-gutter-width;
    // max-width: 700px;
    // margin-left: 0;
    // margin-right: 0;

    &.align-items-center {
      & > * {
        margin-left: auto;
        margin-right: auto;
      }
      @include media-breakpoint-up(lg) {
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
}
</style>
