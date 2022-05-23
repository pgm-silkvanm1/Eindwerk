<template>
  <div class="map">
    <GmapMap
      ref="mapRef"
      :center="center"
      :zoom="15"
      :options="mapOptions"
      class="map__gmap"
    >
      <GmapMarker
        v-for="(marker, index) in markers"
        :key="'marker-' + index"
        :position="marker.location"
        :icon="defaultIcon"
        :clickable="true"
        @click="toggleInfoWindow(marker, index)"
      ></GmapMarker>
      <GmapInfoWindow
        :options="infoOptions"
        :position="infoWindowPos"
        :opened="infoWinOpen"
        @closeclick="infoWinOpen = false"
      />
    </GmapMap>
  </div>
</template>

<script>
import { gray } from 'assets/js/google-maps-styles'
export default {
  props: {
    center: {
      type: Object,
      default() {
        return { lat: 51.21291770029837, lng: 4.256688823931368 }
      },
    },
    markers: {
      type: Array,
    },
  },
  data() {
    return {
      mapOptions: {
        styles: gray,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        maxZoom: 16,
      },
      defaultIcon: {
        url: '/marker.svg',
        anchor: { x: 10, y: 20 },
        scaledSize: { width: 20, height: 20 },
      },
      infoWindowPos: null,
      infoWinOpen: false,
      currentMidx: null,
      infoOptions: {
        content: '',
        //optional: offset infowindow so it visually sits nicely on top of our marker
        pixelOffset: {
          width: 0,
          height: -35,
        },
      },
    }
  },
  mounted() {
    this.$refs.mapRef.$mapPromise.then((map) => {
      const bounds = new google.maps.LatLngBounds()
      if (this.markers.length) {
        this.markers.forEach((marker) => {
          bounds.extend(marker.location)
        })
        map.fitBounds(bounds)
      }
    })
  },
  methods: {
    toggleInfoWindow: function (marker, idx) {
      this.infoWindowPos = marker.location
      this.infoOptions.content = `<div class="h5 text-primary">${marker.title}</div>`

      //check if its the same marker that was selected if yes toggle
      if (this.currentMidx == idx) {
        this.infoWinOpen = !this.infoWinOpen
      }
      //if different marker set infowindow to open and reset current marker index
      else {
        this.infoWinOpen = true
        this.currentMidx = idx
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.map {
  &__gmap {
    width: 100%;
    height: 100%;
    min-height: 250px;
  }
}
</style>
