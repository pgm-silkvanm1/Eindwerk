<template>
  <div class="sitemap">
    <Menu location="sitemap" class="sitemap__nav" />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.sitemap {
  ::v-deep {
    .sitemap__nav {
      display: flex;
      .nav-item {
        display: flex;

        &:not(:last-child):after {
          content: '|';
          display: block;
          color: $light;
          margin: 0 0.6rem;
        }
      }
    }
    .nav-link {
      font-size: 0.9rem;
      font-weight: 400;
      font-family: $headings-font-family;
      color: #fff;
      display: block;
      text-decoration: none;
      padding: 0;

      &:hover {
        color: $secondary;
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
