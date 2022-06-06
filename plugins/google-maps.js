import * as VueGoogleMaps from 'vue2-google-maps'
import Vue from 'vue'
// import VueGeoLocation from 'vue-browser-geolocation'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDz-hMLtWScsPc1XlhshgXVyoebbzYpNmA',
    // key: process.env.GOOGLEMAP_ACCESS_TOKEN,
    libraries: 'places',
  },
})

// Vue.use(VueGeoLocation)
