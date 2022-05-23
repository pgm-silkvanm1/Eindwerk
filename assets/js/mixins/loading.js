export default {
  data() {
    return {
      loadingUnwatch: null,
    }
  },
  mounted() {
    const load = () => {
      if (typeof this.$options.loaded === 'function') {
        this.$options.loaded.call(this)
      }
    }

    if (this.$store.state.ui.siteLoading !== true) {
      this.$on('hook:mounted', load)
    } else {
      this.loadingUnwatch = this.$store.watch(
        (state) => state.ui.siteLoading,
        () => load()
      )
    }
  },
  beforeDestroy() {
    if (typeof this.loadingUnwatch === 'function') {
      this.loadingUnwatch()
    }
  },
}
