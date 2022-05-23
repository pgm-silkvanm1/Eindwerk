<template>
  <form
    ref="form"
    novalidate
    :class="{ 'was-validated': validated }"
    @submit.prevent="onSubmit"
  >
    <slot></slot>
  </form>
</template>

<script>
export default {
  data() {
    return {
      validated: false,
      valid: false,
    }
  },
  methods: {
    onSubmit() {
      this.valid = this.$refs.form.checkValidity()
      this.validated = true

      if (this.valid) {
        this.$emit('submit')
        this.$emit('validSubmit')
      } else {
        this.$emit('invalidSubmit')
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.form-control {
  border: 1px solid $dark;
  padding: 0.5rem 1rem;

  &--icon {
    background-repeat: no-repeat !important;
    background-size: 14px !important;
    background-position: left 0.5rem center !important;

    padding-left: 1.9rem;

    &-date {
      background-image: url('/img/input-icons/date.svg') !important;
    }
    &-number {
      background-image: url('/img/input-icons/number.svg') !important;
    }
    &-timespan {
      background-image: url('/img/input-icons/timespan.svg') !important;
    }
  }
}
</style>
