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
