<template>
  <div>
    <div>
      <h1>
        Welcome <span v-if="currentUser">{{ currentUser.displayName }}</span>
      </h1>
      <div elevcation="2" class="pa-5">
        <SignIn />
      </div>
    </div>
  </div>
</template>

<script>
import SignIn from '../components/SignIn.vue'
export default {
  computed: {
    currentUser() {
      return this.$store.state.user
    },
  },
  methods: {
    signOut() {
      console.log('Signed Out')
      this.$fire.auth.signOut()
      window.location = '/login'
    },
  },
  components: { SignIn },
}
</script>

<style></style>
