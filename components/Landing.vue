<template>
  <div class="landing">
    <div class="d-flex">
      <div class="col-6 p-15">
        <h1>
          <span class="underline">Build your tri</span>p from <br />
          start to finish
        </h1>
        <h2 class="pt-10">Perfect for citytrips and <br />road trips</h2>
        <nuxt-link to="/login">
          <BaseButton class="mt-10" label="Start planning" />
        </nuxt-link>
      </div>
      <div class="col-6">
        <img class="w-100" src="../static/img/home.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
h1 {
  z-index: 2;
  display: block;
}
</style>
