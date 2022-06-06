<template>
  <div class="team py-10 py-lg-15 d-flex row justify-content-center" id="team">
    <div class="text-center">
      <div v-if="prefix" class="team__prefix mb-1" ref="prefix">
        {{ prefix }}
      </div>
      <div v-if="title" class="team__title h2" ref="title">{{ title }}</div>
      <div class="row g-6 g-lg-8" ref="team">
        <div
          class="
            team__col
            offset-1
            col-10
            offset-sm-0
            col-sm-6 col-md-3 col-xl-3
          "
          v-for="item in items"
          :key="item.name"
        >
          <Member v-bind="item" />
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
    items: {
      type: Array,
      default: [],
    },
  },
  mounted() {
    const els = compact([this.$refs.prefix, this.$refs.title, this.$refs.team])
    this.batchConfig = {
      targets: els,
      autoReveal: true,
    }

    const gsap = this.$gsap
    gsap.from('.team__col', {
      y: -50,
      opacity: 0,
      stagger: 0.3,
      scrollTrigger: {
        trigger: '.team',
        start: 'top 50%',
      },
    })
  },
}
</script>

<style lang="scss" scoped>
.team {
  &__prefix {
    color: rgba($dark, 0.42);
  }
  &__title {
    color: $dark;
    margin-bottom: 5rem;
    text-align: center;
    width: 600px;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
  }
}
</style>
