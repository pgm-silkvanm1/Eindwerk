<template>
  <div class="form-check form-switch">
    <input
      type="checkbox"
      class="form-check-input"
      :id="id"
      :name="name"
      v-model="inputVal"
      :required="required"
    />
    <label class="form-check-label" :for="id">
      <slot>{{ label }}</slot>
    </label>
    <div class="invalid-feedback"><slot name="feedback"></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    value: Boolean,
    label: String,
    required: Boolean,
    name: String,
  },
  computed: {
    id() {
      return `toggle-${this.name}`
    },
    inputVal: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
  },
}
</script>
