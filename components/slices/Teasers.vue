<template>
  <div class="teasers container" id="about">
    <div class="row g-6 teasers__container">
      <div
        class="col-md-4 d-flex teasers__column"
        v-for="item in items"
        :key="item.name"
      >
        <TeaserItem v-bind="item" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    quote: String,
    link: {
      type: String,
      default: '',
    },
    excerpt: String,
    image: String,
    items: {
      type: Array,
      default: [],
    },
  },
  methods: {
    openLink() {
      this.$router.push({
        path: this.link,
      })
    },
  },
  mounted() {
    const gsap = this.$gsap
    gsap.from('.teasers__column', {
      y: -50,
      opacity: 0,
      stagger: 0.3,
      scrollTrigger: {
        trigger: '.teasers',
        start: 'top 50%',
      },
    })
  },
}
</script>

<style lang="scss" scoped>
.teasers {
  &__container {
    display: flex;
  }
  &__column {
    &:first-child {
      @include media-breakpoint-up(md) {
        margin-top: -100px;
      }
    }
    &:last-child {
      @include media-breakpoint-up(md) {
        margin-top: -150px;
      }
    }
  }
}
</style>
