<template>
  <footer class="footer">
    <div class="container">
      <div class="row align-items-start rhythm-mb-5 rhythm-mb-lg-0">
        <div class="col-12 col-lg-6">
          <FooterLogo variant="white" />
        </div>
        <div class="col-12 col-lg-3">
          <Sitemap class="line pt-4 text-uppercase" />
        </div>
        <div class="col-sm-3">
          <p class="contact line pt-4">
            <a href="tel:+3256675456" class="text-decoration-none"
              >+32 56 67 54 56</a
            >
            <br />
            <a href="mailto:info@pironne.be" class="text-decoration-none"
              >info@pironne.be</a
            >
          </p>
          <p>
            Westakkerlaan 4
            <br />
            9120, Beveren
          </p>
          <div class="line pt-4">
            <Socials />
          </div>
        </div>
      </div>
      <ManeuverBadge />
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background: $dark;
  color: $secondary;
  padding-top: 6rem;
  padding-bottom: 6rem;
  position: relative;
}
.line {
  border-top: 1px solid $secondary;
}
</style>
