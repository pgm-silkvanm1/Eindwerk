<template>
  <div class="media-text">
    <div class="row gx-md-6 gx-lg-12">
      <div
        class="col-md-6 media-col mb-4 mb-md-0"
        :class="{ 'order-md-1': flip }"
        ref="image"
      >
        <BaseImage
          preset="medium"
          v-if="image"
          :src="image.url"
          class="w-100"
        />
      </div>
      <div
        class="col-md-6 text-col d-md-flex"
        :class="{
          'order-md-0': flip,
          [`text-${textAlign}`]: textAlign,
          [`align-items-${align}`]: align,
        }"
      >
        <div
          class="media-text-col__inner rhythm-mb-6"
          :class="{
            [`p-${textColPadding}`]: textColPadding,
            [`ps-md-0`]: textColPadding && !flip,
          }"
        >
          <div ref="prefix" v-if="prefix" class="mb-1 h6 media-text__prefix">
            {{ prefix }}
          </div>
          <div ref="title" v-if="title" class="h2">{{ title }}</div>
          <template v-for="item in bodyItems">
            <div :key="item.body">
              <div
                v-html="item.body"
                ref="body"
                :class="textClass"
                class="media-text__body mb-3"
              ></div>

              <div
                ref="buttons"
                v-if="item.buttons"
                class="media-text__buttons d-flex flex-column align-items-start"
              >
                <BaseButton
                  v-for="(item, index) in item.buttons"
                  :key="`media-text-button-${index}`"
                  :label="item.title"
                  variant="white"
                  :modal="item.modal"
                  :href="item.url"
                  class="me-1"
                />
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { compact } from 'lodash'

export default {
  props: {
    prefix: String,
    title: String,

    image: Object,
    body: String,
    buttons: Array,
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
    items: { type: Array, default: () => [] },
  },
  computed: {
    textClass() {
      if (this.textVariant) {
        return `text-${this.textVariant}`
      }
    },
    bodyItems() {
      if (this.items && this.items.length) {
        return this.items
      }
      return [{ body: this.body, buttons: this.buttons }]
    },
  },
  mounted() {
    const els = compact([
      this.$refs.prefix,
      this.$refs.title,
      this.$refs.body,
      this.$refs.image,
      this.$refs.buttons,
    ])
    this.batchConfig = {
      targets: els,
      autoReveal: true,
    }
  },
}
</script>

<style lang="scss" scoped>
.media-text {
  color: #fff;
}
.text-col {
}
.media-text {
  &__prefix {
    font-weight: 500;
  }
  &__body {
  }
}
</style>
