<template>
  <div class="events" id="events">
    <div class="row g-0">
      <div
        class="col-md-6 text-col d-md-flex"
        :class="{
          [`text-${textAlign}`]: textAlign,
        }"
      >
        <div class="events-col__inner flex-grow-1 d-flex flex-column p-8">
          <div class="events__top mb-5">
            <component
              ref="prefix"
              v-if="prefix"
              :is="prefixTag"
              class="mb-2 events-text__prefix"
            >
              {{ prefix }}
            </component>
            <component
              ref="title"
              v-if="title"
              :is="titleTag"
              class="h2"
              v-html="title"
            ></component>
          </div>

          <div class="events__list mt-auto">
            <div class="events__item" v-for="item in items" :key="item.name">
              <EventItem v-bind="item" />
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 d-flex events__image" ref="image">
        <BaseImage
          preset="medium"
          v-if="image"
          :src="image.url"
          class="events__image__img"
        />
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
      default: 'h4',
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
    textAlign: {
      type: String,
      default: 'left',
      validator: (value) => ['left', 'right', 'center'].includes(value),
    },
    textColPadding: {
      type: String,
      default: '0',
    },
    items: {
      type: Array,
      default: [],
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
.events {
  background-color: $secondary;

  .events-text__prefix {
    color: $dark;
    text-transform: uppercase;
  }
  &__image__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    min-height: 300px;
    max-height: 75vh;
  }
}
</style>
