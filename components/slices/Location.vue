<template>
  <div class="location container" id="location">
    <div class="row">
      <div class="d-lg-flex gap-10 location__wrap">
        <div class="">
          <div class="h4 mb-2">{{ prefix }}</div>
          <div class="h2" v-html="title"></div>
          <BaseImage :src="image1.url" class="mt-8 mt-lg-20 img-fluid" />
          <div class="h4 location-date mt-2">{{ date }}</div>
        </div>
        <div class="d-flex flex-column justify-content-between">
          <div class="inner mt-10 mt-lg-0">
            <div class="location__body mb-2">{{ body }}</div>
            <div class="location__excerpt">{{ excerpt }}</div>
          </div>
          <div class="location__image">
            <BaseImage
              style="width: 400px"
              :src="image2.url"
              class="mt-8 mt-lg-20 img-fluid"
            />
            <div class="h4 location-date mt-2">{{ date }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-md-flex mt-10 mt-xl-20 justify-content-between">
      <div class="col-md-5 mb-5 location__text">
        {{ text }}
      </div>
      <BaseButton
        class="align-self-start"
        label="Boek de locatie"
        href="#contact"
        variant="outline-primary"
      />
    </div>
  </div>
</template>

<script>
import { compact } from 'lodash'

export default {
  props: {
    prefixTag: {
      type: String,
      default: 'div',
    },
    prefix: String,
    title: String,
    titleTag: {
      type: String,
      default: 'h2',
    },
    image1: Object,
    date: String,
    body: String,
    excerpt: String,
    image2: Object,
    text: String,
    titleVariant: {
      type: String,
      default: 'primary',
    },
    textVariant: String,
    variant: {
      type: String,
      default: 'primary',
    },
    align: {
      type: String,
      default: 'start',
    },
    flip: {
      type: Boolean,
      default: false,
    },
    textAlign: {
      type: String,
      default: 'left',
      validator: (value) => ['left', 'right', 'center'].includes(value),
    },
    textColPadding: {
      type: String,
      default: '0',
    },
  },
  computed: {
    textClass() {
      if (this.textVariant) {
        return `text-${this.textVariant}`
      }
    },
  },
  mounted() {
    this.batchConfig = {
      targets: this.$el,
      autoReveal: true,
    }
  },
}
</script>

<style lang="scss" scoped>
.location {
  &__wrap {
    margin-bottom: 10rem;
  }
  &__prefix {
    font-weight: 500;
  }
  &-date {
    color: $primary;
  }
  &__body {
    font-size: 18px;
    font-family: $headings-font-family;
  }
  &__excerpt {
    font-size: 14px;
  }
  &__text {
    font-size: $large-font-size;
    font-family: $headings-font-family;
  }
  &__image {
    margin-bottom: -10rem;
  }
}
</style>
