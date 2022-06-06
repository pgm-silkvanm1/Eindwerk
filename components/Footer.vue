<template>
  <footer class="footer">
    <div class="container-fluid">
      <div class="row align-items-start rhythm-mb-5 rhythm-mb-lg-0">
        <div class="col-12 col-lg-2">
          <FooterLogo variant="white" />
          <div>TravelMore</div>
        </div>
        <div class="col-12 col-lg-5">
          <Sitemap />
          <!-- <Socials /> -->
        </div>
        <!-- <div class="col-12 col-lg-5">
          <NewsletterOptin
            variant="white"
            align="right"
            title="Subscribe to our newsletter"
          />
        </div> -->
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background: $primary;
  color: #fff;
  padding: 4rem 0;
  position: relative;
}
</style>
