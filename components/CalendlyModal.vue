<template>
  <Modal type="calendly">
    <div class="calendly-modal">
      <div class="h2 text-primary mb-4">Calendly</div>
      <vue-calendly
        url="https://calendly.com/maneuver-david/60min"
        :height="862"
      ></vue-calendly>
    </div>
  </Modal>
</template>
<style lang="scss" scoped>
.calendly-modal {
  width: 100%;
}
</style>
