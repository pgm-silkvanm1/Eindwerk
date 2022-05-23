<template>
  <div>
    <div class="row g-2">
      <div class="col-sm-4" v-for="option in items" :key="option.id">
        <CustomCheckbox
          class="form-control"
          :checkbox-id="option.id"
          :label="option.label"
          :checked="value && value.includes(option.id)"
          @input="onInput(option.label, $event)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    checkboxId: String,
    items: Array,
    title: String,
    value: Array,
  },
  data() {
    return {
      selected: {},
    }
  },
  methods: {
    onInput(id, value) {
      this.selected = {
        ...this.selected,
        [id]: value,
      }
      this.$emit(
        'input',
        Object.keys(
          Object.fromEntries(
            Object.entries(this.selected).filter((entry) => entry[1])
          )
        )
      )
    },
  },
}
</script>
