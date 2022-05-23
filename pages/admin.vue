<script>
export default {
  async asyncData({ store, redirect }) {
    // redirect(store.getters.backendUrl)
    redirect('https://wp.mnvr.be/wp-admin')
  },
}
</script>
