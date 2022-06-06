<template>
  <div id="signin">
    <h2>Sign Up</h2>
    <input type="email" placeholder="Email" v-model="email" />
    <br />
    <input type="password" placeholder="Password" v-model="password" />
    <br />
    <button @click="signUp">Sign In</button>
    <p>Already an account?<a to="/signup">Login</a></p>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
