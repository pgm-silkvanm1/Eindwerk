<template>
  <div class="sitemap">
    <div class="row">
      <div class="col">
        <Menu location="sitemap" class="sitemap__nav" />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.sitemap {
  ::v-deep {
    .nav-item {
      margin-bottom: 1rem;
    }
    .nav-link {
      font-size: 0.75rem;
      font-weight: 400;
      font-family: $headings-font-family;
      color: $secondary;
      display: block;
      text-decoration: none;
      padding: 0;
      &:hover,
      &:focus {
        color: $primary;
      }
    }
  }

  &__title {
    letter-spacing: 2px;
    color: #fff;
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 500;
  }
}
</style>
