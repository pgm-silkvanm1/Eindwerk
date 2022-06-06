<template>
  <div class="layout" style="overflow-x: hidden">
    <NavBar id="site-header" :sticky="true" expand="lg" />
    <div class="site-content">
      <Nuxt />
      <!-- <CalendlyModal /> -->
    </div>
    <Footer />
  </div>
</template>
