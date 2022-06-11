<template>
  <div>
    <button color="primary" v-on:click="signOut()">Sign Out</button>
    <div class="d-flex">
      <div class="col-8">
        <div class="image--dashboard">
          <img class="photo w-100" key="" src="../static/img/dashboard.jpg" />
        </div>
        <div class="underline">
          <h2 class="underline__text" v-if="activeLocation">
            Trip To {{ activeLocation.name }}
          </h2>
        </div>
        <div class="mt-5 px-5">
          <h3>Explore</h3>
          <div class="d-flex gap-5">
            <div class="row">
              <div class="musea" @click="findMusea">
                <img
                  class="w-100 explore__photo"
                  src="../static/img/explore1.jpg"
                />
              </div>
              <div>Top musea in {{ activeLocation.name }}</div>
              <!-- <ul>
                <li
                  @click="loadDetails(result.place_id)"
                  v-for="result in results"
                  :key="result.name"
                >
                  {{ result.name }}
                </li>
              </ul> -->
            </div>
            <div class="row">
              <div class="restaurants" @click="findRestaurants">
                <img class="w-100" src="../static/img/explore2.jpg" />
              </div>
              <div>Best restaurants in {{ activeLocation.name }}</div>
              <!-- <ul>
                <li
                  @click="loadDetails(result.place_id)"
                  v-for="result in results"
                  :key="result.name"
                >
                  {{ result.name }}
                </li>
              </ul> -->
            </div>
            <div class="row">
              <div class="activities" @click="findActivities">
                <img class="w-100" src="../static/img/explore3.jpg" />
              </div>
              <div>Best activities in {{ activeLocation.name }}</div>
              <!-- <ul>
                <li
                  @click="loadDetails(result.place_id)"
                  v-for="result in results"
                  :key="result.name"
                >
                  {{ result.name }}
                </li>
              </ul> -->
            </div>
          </div>
        </div>
        <div class="mt-5 px-5">
          <h3>Search</h3>
          <label>
            <!-- <gmap-autocomplete @place_changed="initMarker"></gmap-autocomplete> -->
            <input type="text" v-model="query" />
            <button @click="findPlaces">Search</button>
          </label>
          <div>
            <ul id="details">
              <li
                @click="loadDetails(result.place_id)"
                v-for="result in results"
                :key="result.name"
                class="place collapsed"
                data-bs-toggle="collapse"
                :data-bs-target="`#${collapseId}`"
              >
                {{ result.name }}
                <div
                  :id="collapseId"
                  class="collapse"
                  data-bs-parent="#details"
                >
                  {{ result.rating }} stars
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-5 px-5">
          <h3>Places to visit</h3>
        </div>
      </div>
      <div class="col-4 maps">
        <gmap-map
          v-if="activeLocation && activeLocation.geometry"
          :zoom="14"
          :center="activeLocation.geometry.location"
          style="width: 100%; height: 100vh"
          ref="map"
        >
          <gmap-marker
            :key="index"
            v-for="(result, index) in results"
            :position="result.geometry.location"
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
      detail: null,
      query: '',
      results: [],
      musea: 'musea',
      restaurants: 'restaurants',
      activities: 'activities',
    }
  },
  computed: {
    activeLocation() {
      return this.$store.state?.activeLocation
    },
    collapseId() {
      return `content${this._uid}`
    },
  },

  mounted() {
    // const user = this.$store.state.user
    // if (!user) {
    //   //   this.$router.push('/login')
    // }
    // this.locateGeoLocation()
  },

  methods: {
    loadDetails(placeId) {
      var request = {
        placeId: placeId,
      }

      const map = this.$refs.map.$mapObject
      const service = new google.maps.places.PlacesService(map)

      service.getDetails(request, (detail) => {
        this.detail = detail
        console.log(detail)
      })
    },
    findPlaces() {
      const request = {
        location: this.activeLocation.geometry.location,
        radius: '500',
        query: this.query,
      }

      const map = this.$refs.map.$mapObject
      const service = new google.maps.places.PlacesService(map)

      service.textSearch(request, (result) => {
        this.results = result
      })
    },
    findMusea() {
      const request = {
        location: this.activeLocation.geometry.location,
        radius: '500',
        query: this.musea,
      }

      const map = this.$refs.map.$mapObject
      const service = new google.maps.places.PlacesService(map)

      service.textSearch(request, (result) => {
        this.results = result
      })
    },
    findRestaurants() {
      const request = {
        location: this.activeLocation.geometry.location,
        radius: '500',
        query: this.restaurants,
      }

      const map = this.$refs.map.$mapObject
      const service = new google.maps.places.PlacesService(map)

      service.textSearch(request, (result) => {
        this.results = result
      })
    },
    findActivities() {
      const request = {
        location: this.activeLocation.geometry.location,
        radius: '500',
        query: this.activities,
      }

      const map = this.$refs.map.$mapObject
      const service = new google.maps.places.PlacesService(map)

      service.textSearch(request, (result) => {
        this.results = result
      })
    },
    signOut() {
      this.$fire.auth.signOut()
      window.location = '/login'
    },
  },
}
</script>

<style lang="scss" scoped>
body {
  background-color: $gray;
  position: relative;
}

.image--dashboard {
  .photo {
    height: 15rem;
    object-fit: cover;
  }
}

.place {
  &:hover {
    color: $primary;
  }
}

.maps {
  position: fixed;
  right: 0;
}
</style>
