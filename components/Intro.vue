<template>
  <div class="intro bg-silver py-8">
    <div
      class="content-container d-flex"
      :class="{
        [`text-${textAlign}`]: textAlign,
        [`justify-content-${horizontalAlign}`]: horizontalAlign,
      }"
    >
      <div class="intro__inner rhythm-mb-3">
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
}
</script>

<style lang="scss" scoped>
.intro {
  &__body {
  }
  &__inner {
    max-width: 600px;
  }
}
</style>
