<template>
  <div>
    <button color="primary" v-on:click="signOut()">Sign Out</button>
    <div class="d-flex">
      <div class="col-8">
        <div class="">
          <img class="w-100" key="" src="../static/img/dashboard.jpg" />
          <h2><span class="underline">Trip To Gen</span>t</h2>
        </div>
        <div>
          <h3>Explore</h3>
        </div>
        <div>
          <h3>Search</h3>
          <label>
            <gmap-autocomplete @place_changed="initMarker"></gmap-autocomplete>
            <button @click="addLocationMarker">Add</button>
          </label>
        </div>
        <div>
          <h3>Places to visit</h3>
        </div>
      </div>
      <div class="col-4">
        <gmap-map
          :zoom="14"
          :center="center"
          style="width: 100%; height: 100vh"
        >
          <gmap-marker
            :key="index"
            v-for="(m, index) in locationMarkers"
            :position="m.position"
            @click="center = m.position"
          ></gmap-marker>
        </gmap-map>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      center: {
        lat: 51.086639745290896,
        lng: 3.669944703665549,
      },
      locationMarkers: [],
      locPlaces: [],
      existingPlace: null,
    }
  },

  mounted() {
    this.locateGeoLocation()
  },

  methods: {
    signOut() {
      this.$fire.auth.signOut()
      window.location = '/login'
    },
    initMarker(loc) {
      this.existingPlace = loc
    },
    addLocationMarker() {
      if (this.existingPlace) {
        const marker = {
          lat: this.existingPlace.geometry.location.lat(),
          lng: this.existingPlace.geometry.location.lng(),
        }
        this.locationMarkers.push({ position: marker })
        this.locPlaces.push(this.existingPlace)
        this.center = marker
        this.existingPlace = null
      }
    },
    locateGeoLocation: function () {
      navigator.geolocation.getCurrentPosition((res) => {
        this.center = {
          lat: res.coords.latitude,
          lng: res.coords.longitude,
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
body {
  background-color: $gray;
}
</style>
