<template>
  <div class="landing">
    <div class="d-xl-flex">
      <div class="col-12 col-xl-6 p-15">
        <div class="underline">
          <h1>
            <span class="underline__text">Build your trip from</span>

            <br />
            start to finish
          </h1>
        </div>
        <h2 class="pt-10">Perfect for citytrips and <br />road trips</h2>
        <div>
          <gmap-autocomplete
            @place_changed="savePlace"
            class="mt-5"
            placeholder="Where to? e.g. Gent"
          ></gmap-autocomplete>
          <nuxt-link to="/dashboard">
            <BaseButton class="mt-10" label="Start planning" />
          </nuxt-link>
        </div>
      </div>
      <div class="col-12 col-xl-6">
        <img class="w-100" src="../static/img/home.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    savePlace(loc) {
      this.$store.commit('setActiveLocation', loc)
    },
  },
}
</script>

<style lang="scss" scoped>
h1 {
  z-index: 2;
  display: block;
}
</style>
