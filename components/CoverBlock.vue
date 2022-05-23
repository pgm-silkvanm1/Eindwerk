<template>
  <div
    class="cover jumbotron"
    :class="{ 'jumbotron-fluid': fluid }"
    :style="rootStyles"
  >
    <div class="cover__overlay"></div>
    <div class="cover__content" :class="[`text-${textAlign}`]">
      <slot>
        <div class="cover__subtitle h5">{{ subtitle }}</div>
        <div class="cover__title h2">{{ title }}</div>
        <div class="mt-4">
          <slot name="buttons">
            <BaseButton
              v-if="buttonLabel"
              :href="buttonLink"
              :label="buttonLabel"
              :variant="buttonVariant"
            />
          </slot>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    slice: Object,
    fluid: {
      type: Boolean,
      default: false,
    },
    textAlign: {
      type: String,
      default: 'center',
      validator: (value) => ['left', 'center', 'right'].includes(value),
    },
    image: String,
    title: String,
    subtitle: String,
    buttonLabel: String,
    buttonLink: String,
    buttonVariant: String,
  },
  computed: {
    rootStyles() {
      return {
        backgroundImage: `url(${this.image})`,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.cover {
  background-size: cover;
  background-position: center center;
  position: relative;

  &__content {
    position: relative;
    z-index: 10;
    color: white;
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    background-color: $dark;
    width: 100%;
    height: 100%;
    opacity: 0.65;
    z-index: 1;
  }
}
</style>
