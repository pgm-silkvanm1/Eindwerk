<template>
  <nav class="menu" :class="[location]">
    <div
      class="nav-item"
      v-for="(item, index) in items"
      :key="`nav-item_${index}`"
      :class="{ 'has-children': item.children }"
    >
      <BaseLink
        :to="item.url"
        class="nav-link"
        :target="item.target"
        :class="[item.classes]"
        :label="item.title"
      ></BaseLink>
      <template v-if="item.children && item.children.length">
        <BaseIcon icon="angle-down" class="ms-1" size="sm" />
        <!-- <div class="nav-item__sub" :aria-labelledby="`menu-dropdown_${index}`">
          <BaseLink
            v-for="(child, cIndex) in item.child_items"
            :key="`nav-item_${index}_${cIndex}`"
            class="nav-link nav-link--sub"
            :class="child.classes"
            :to="child.link"
            :target="child.target"
            :label="child.title"
          ></BaseLink>
        </div> -->
      </template>
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
.hamburger-menu {
  .nav-item {
    margin-bottom: 0.5rem;
  }
  .nav-link {
    padding: 0;
    font-size: 2rem;
    transition: 300ms all ease;

    &:hover {
      color: $secondary;
    }
  }
}
</style>
