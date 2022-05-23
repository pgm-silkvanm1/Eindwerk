<template>
  <div>
    <MnvrSliceZone
      :slices="page.mnvr_acf.blocks"
      v-if="page && page.mnvr_acf"
    />
  </div>
</template>

<script>
export default {
  props: {
    page: Object,
  },
}
</script>
