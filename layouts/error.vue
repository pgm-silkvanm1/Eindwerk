<template>
  <div>
    <div v-if="page">
      <MnvrSliceZone
        :slices="page.mnvr_acf.blocks"
        v-if="page && page.mnvr_acf"
      />
    </div>
    <div v-else class="container">
      <div class="text-center my-10">
        <h1 v-if="error.statusCode === 404">Pagina niet gevonden</h1>
        <h1 v-else>Er is een onverwachte fout opgetreden</h1>
        <div class="py-4">
          {{ error.message }}
        </div>
        <NuxtLink to="/">Terug naar de homepagina</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
  props: {
    error: Object,
  },
  computed: {
    page() {
      if (this.error.statusCode === 404) {
        return this.$store.state.content.pagenotfound
      }
    },
  },
}
</script>
