<template>
  <div class="testimonials p-lg-8">
    <div class="row align-items-center">
      <div class="col-md-6 mb-5 mb-md-0">
        <div class="testimonials__title h1 text-primary">{{ title }}</div>
      </div>
      <div class="col-md-6">
        <figure class="testimonial rhythm-mb-5">
          <blockquote class="testimonial__blockquote blockquote">
            <p>{{ item.quote }}</p>
          </blockquote>
          <figcaption class="testimonial__blockquote-footer blockquote-footer">
            {{ item.author }}
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    items: {
      type: Array,
    },
  },
  computed: {
    item() {
      return this.items[Math.floor(Math.random() * this.items.length)]
    },
  },
}
</script>

<style lang="scss" scoped>
.testimonial {
  &:before {
    content: '“';
    font-size: 60px;
    font-weight: 500;
    color: $primary;
    display: block;
  }
  font-weight: 400;
  &__blockquote {
    color: $primary;
    font-size: 1.2rem;
    line-height: 1.95;
  }

  &__blockquote-footer {
    color: $primary;
    font-size: 1.2rem;
  }
}
</style>
