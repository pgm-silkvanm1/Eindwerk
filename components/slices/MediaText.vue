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
          <component
            ref="prefix"
            v-if="prefix"
            :is="prefixTag"
            class="mb-2 h6 media-text__prefix"
            :class="`text-${titleVariant}`"
          >
            {{ prefix }}
          </component>
          <component
            ref="title"
            v-if="title"
            :is="titleTag"
            class="h2"
            :class="`text-${titleVariant}`"
            >{{ title }}</component
          >
          <div
            v-html="body"
            ref="body"
            :class="textClass"
            class="media-text__body"
          ></div>
          <slot name="buttons">
            <div
              ref="buttons"
              v-if="buttons"
              class="
                media-text__buttons
                d-md-flex
                rhythm-mb-2 rhythm-mb-md-0 rhythm-mr-2
              "
            >
              <BaseButton
                v-for="(item, index) in buttons"
                :key="`media-text-button-${index}`"
                :label="item.button.title"
                :modal="item.button.modal"
                :href="item.button.url"
                variant="primary"
              />
            </div>
          </slot>
        </div>
      </div>
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
  },
  computed: {
    textClass() {
      if (this.textVariant) {
        return `text-${this.textVariant}`
      }
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
