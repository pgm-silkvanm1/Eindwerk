<template>
  <nav class="menu column" :class="[location]">
    <div
      class="nav-item"
      v-for="(item, index) in items"
      :key="`nav-item_${index}`"
      :class="{ 'has-children': item.children }"
    >
      <BaseLink
        :to="item.url"
        class="nav-link"
        :class="[item.classes]"
        :label="item.title"
      ></BaseLink>
      <!-- <BaseIcon icon="angle-down" class="ms-1" size="sm" v-if="item.children" /> -->
      <div
        class="nav-item__sub"
        v-if="item.children"
        :aria-labelledby="`menu-dropdown_${index}`"
      >
        <BaseLink
          v-for="(child, cIndex) in item.child_items"
          :key="`nav-item_${index}_${cIndex}`"
          class="nav-link nav-link--sub"
          :class="child.classes"
          :to="child.link"
          v-html="child.title"
        ></BaseLink>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      items: [],
    }
  },
  props: {
    location: {
      type: String,
      required: true,
    },
  },
  async fetch() {
    if (this.$wp) {
      this.items = await this.$wp.menu().param('location', this.location)
    } else {
      const menu = await this.$content('menus', this.location).fetch()
      this.items = menu.items
    }
    this.$store.commit('content/setMenus', { header: this.items })
  },
}
</script>

<style lang="scss" scoped>
.header-menu {
  .nav-item {
    display: flex;
    align-items: center;
    &:not(:last-child):after {
      content: '|';
      display: block;
      color: $light;
      margin: 0 0.6rem;
    }

    position: relative;

    &__sub {
      opacity: 0;
      transition: 300ms all ease-out;
      visibility: hidden;
      transform: translateY(-100%);
      background: #fff;
      position: absolute;
      top: 100%;
      padding: 0.5rem 1rem;
      left: -1rem;
      width: calc(100% + 1rem);
      font-style: italic;
      .nav-link--sub {
        margin-bottom: 0.3rem;
        padding-top: 0.3rem !important;
        border-top: 1px solid $silver;
        &:hover,
        &:focus {
          color: $secondary;
        }
      }
    }

    &:hover,
    &:focus {
      .nav-item__sub {
        opacity: 1;
        transform: translateY(0);
        visibility: visible;
      }
    }
  }
  .nav-link:not(.btn) {
    font-family: $headings-font-family;
    color: $primary;
    padding: 0;
    font-size: 1rem;
    font-weight: 500;
    &:hover,
    &:focus {
      color: $secondary;
    }
  }
}
</style>
