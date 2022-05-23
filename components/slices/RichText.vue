<template>
  <div class="rich-text" id="team" :class="[verticalPadding, `bg-${variant}`]">
    <div class="container">
      <div
        class="row"
        :class="[`justify-content-${horizontalAlign}`, `text-${textAlign}`]"
      >
        <div :class="colClass">
          <div class="h4 mb-4">{{ prefix }}</div>
          <div class="h2">{{ title }}</div>
          <div class="body my-6 my-lg-10" v-html="body"></div>
        </div>
        <slot name="buttons">
          <div
            ref="buttons"
            v-if="buttons"
            class="richtext__buttons rhythm-mb-2 rhythm-mb-md-0 rhythm-mr-2"
          >
            <BaseButton
              variant="link"
              v-for="(item, index) in buttons"
              :key="`richtext-button-${index}`"
              :label="item.button.title"
              :modal="item.button.modal"
              :href="item.button.url"
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
    variant: String,
    body: String,
    prefix: String,
    title: String,
    horizontalAlign: {
      type: String,
      default: 'left',
    },
    textAlign: {
      type: String,
      default: 'left',
    },
    verticalPadding: {
      type: String,
    },
    size: {
      type: String,
      default: 'medium',
    },
    buttons: Array,
  },
  mounted() {
    this.batchConfig = {
      targets: this.$el,
      autoReveal: true,
    }
  },
  computed: {
    colClass() {
      if (this.size === 'extra-large') return 'col-12'
      if (this.size === 'large') return 'col-md-10'
      if (this.size === 'medium') return 'col-md-8'
      if (this.size === 'small') return 'col-md-7 col-xl-6'
      if (this.size === 'extra-small') return 'col-md-6 col-lg-5 col-xl-4'
    },
  },
}
</script>
