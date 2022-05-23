<template>
  <div>
    <div
      class="text-paragraph rhythm-mb-3"
      :class="{ 'text-paragraph--center': center }"
    >
      <div class="h2 text-primary text__title" v-html="title"></div>
      <div class="paragraph__body bodytext" v-html="body"></div>
      <BaseButton
        v-if="button"
        :href="button.url"
        :label="button.title"
        :target="button.target"
        class="link-primary"
        variant="link"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    body: String,
    button: Object,
    center: Boolean,
  },
}
</script>

<style lang="scss" scoped>
.text-paragraph {
  max-width: 600px;

  &--center {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
