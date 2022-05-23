<template>
  <div>
    <template v-for="(slice, index) in slices">
      <div
        :class="[
          sliceWrapper,
          slice.layout_settings && slice.layout_settings.class
            ? slice.layout_settings.class
            : '',
        ]"
        :key="`slice_${index}`"
        :id="
          slice.layout_settings && slice.layout_settings.id
            ? slice.layout_settings.id
            : null
        "
      >
        <MnvrSlice :slice="slice" />
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    slices: Array,
    sliceWrapper: {
      type: String,
      default: '',
    },
  },
}
</script>
