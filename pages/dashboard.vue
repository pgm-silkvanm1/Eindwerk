<template>
  <div>
    <button color="primary" v-on:click="signOut()">Sign Out</button>
    <div class="d-md-flex">
      <div class="col-12 col-md-8">
        <div class="image--dashboard">
          <img class="photo w-100" key="" src="../static/img/dashboard.jpg" />
        </div>
        <div class="underline d-flex justify-content-center pt-3">
          <h2 class="underline__text" v-if="activeLocation">
            Trip To {{ activeLocation.name }}
          </h2>
        </div>
        <div class="mt-5 px-5">
          <h3>Explore</h3>
          <div class="d-flex justify-content-between py-5">
            <div class="row">
              <div class="musea" @click="findMusea">
                <button class="search">
                  Search musea in {{ activeLocation.name }}
                </button>
              </div>
            </div>
            <div class="row">
              <div class="restaurants" @click="findRestaurants">
                <button class="search">
                  Search restaurants in {{ activeLocation.name }}
                </button>
              </div>
            </div>
            <div class="row">
              <div class="activities" @click="findActivities">
                <button class="search">
                  Search Activities in {{ activeLocation.name }}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-5 p-5">
          <h3 class="pb-5">Search</h3>
          <label>
            <input type="text" v-model="query" placeholder="e.g. pubs" />
            <button @click="findPlaces">Search</button>
          </label>
        </div>
        <div class="mt-5 px-5">
          <h3 class="pb-5">Places to visit</h3>
          <div>
            <ol id="details">
              <li
                @click="loadDetails(result.place_id)"
                v-for="(result, index) in results"
                :key="result.name"
                class="place py-3"
              >
                <div
                  class="place__name d-flex text-center collapsed"
                  data-bs-toggle="collapse"
                  :data-bs-target="`#${collapseId}-${index}`"
                >
                  <div>
                    {{ result.name }}
                  </div>
                  <div class="tag">
                    {{ result.types[0] }}
                  </div>
                  <BaseIcon icon="angle-down" class="icon" />
                </div>
                <div
                  :id="`${collapseId}-${index}`"
                  class="collapse py-2"
                  data-bs-parent="#details"
                >
                  <p>
                    <strong class="pe-2">Rating:</strong> {{ result.rating }}
                    <BaseIcon icon="star" variant="secondary" />
                  </p>
                  <p>
                    <strong class="pe-2">Address:</strong>
                    {{ result.formatted_address }}
                  </p>
                  <p v-if="detail">
                    <strong class="pe-2">Telephone:</strong>
                    <a :href="`tel:${detail.formatted_phone_number}`"></a>
                    {{ detail.formatted_phone_number }}
                  </p>
                  <p v-if="detail">
                    <strong class="pe-2">Website:</strong>
                    <a :href="detail.website"> {{ detail.website }}</a>
                    >
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4 maps">
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
        // console.log(detail)
      })
    },
    findPlaces() {
      const request = {
        location: this.activeLocation.geometry.location,
        radius: '1000',
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
        radius: '1000',
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
        radius: '1000',
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
        radius: '1000',
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

.search {
  background-color: $secondary;
  padding: 1rem 2rem;
  border: none;
  border-radius: 25px;
}

.place {
  border-bottom: 1px solid $gray;
  padding-left: 1rem;
  &__name {
    font-weight: bold;
    font-size: 1.2rem;
    align-items: center;

    .tag {
      background-color: black;
      color: white;
      padding: 0.5rem 1rem;
      margin-left: 1rem;
      border-radius: 25px;
      font-size: 0.8rem;
      font-weight: 300;
      margin-right: 2rem;
    }
    .icon {
      transform: rotate(-180deg);
      /* right: -35rem; */
      color: black;
      transition: 150ms all ease-out;
    }

    &.collapsed {
      .icon {
        color: gray;
        transform: rotate(0);
      }
    }
  }
  /* &:hover {
    color: $primary;
  } */
  &::marker {
    /* content: url(../assets/svg/marker.svg); */
  }
}

.maps {
  display: block;
  @media (min-width: 720px) {
    position: fixed;
    right: 0;
  }
}
</style>
