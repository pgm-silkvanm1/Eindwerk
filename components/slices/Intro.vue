<template>
  <div class="intro container">
    <div
      class="content-container d-flex"
      :class="{
        [`text-${textAlign}`]: textAlign,
        [`justify-content-${horizontalAlign}`]: horizontalAlign,
      }"
    >
      <div class="intro__inner rhythm-mb-3">
        <MiniLogo class="minilogo" />
        <component v-if="title" :is="titleTag" class="h2 text-primary">{{
          title
        }}</component>
        <div v-html="body" class="intro__body"></div>
        <slot name="buttons">
          <div
            v-if="buttons"
            class="intro__buttons d-md-flex rhythm-mb-2 rhythm-mb-md-0 rhythm-mr-2"
            :class="{ [`justify-content-${horizontalAlign}`]: horizontalAlign }"
          >
            <BaseButton
              v-for="(item, index) in buttons"
              :key="`intro-button-${index}`"
              variant="link"
              :label="item.button.title"
              :modal="item.button.modal"
              :href="item.button.url"
            />
          </div>
        </slot>
      </div>
    </div>
    <Separator size="lg" class="my-10" />
  </div>
</template>

<script>
import MiniLogo from '~/assets/svg/minilogo.svg?inline'

export default {
  props: {
    title: String,
    titleTag: {
      type: String,
      default: 'h2',
    },
    body: String,
    buttons: Array,
    horizontalAlign: {
      type: String,
      default: 'center',
    },
    textAlign: {
      type: String,
      default: 'left',
      validator: (value) => ['left', 'right', 'center'].includes(value),
    },
  },
  mounted() {
    this.batchConfig = {
      targets: this.$el,
      autoReveal: true,
    }
  },
  components: { MiniLogo },
}
</script>

<style lang="scss" scoped>
.intro {
  .minilogo {
    fill: $primary;
  }
  &__body {
    font-family: 'termina', sans-serif;
    font-size: $large-font-size;
  }
  &__inner {
    max-width: 600px;
  }

  &__buttons {
    &__btn {
      &:hover {
        color: $dark;
        background-color: transparent;
        border-bottom: 1px solid $dark;
      }
    }
  }
}
</style>
