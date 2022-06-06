<template>
  <div
    class="navbar__container"
    :class="{ onScroll: !view.topOfPage || navModalOpen }"
  >
    <div
      class="navbar container"
      :class="[
        {
          [`navbar-expand-${expand}`]: expand,
          'navbar-expand': expand === 'always',
        },
      ]"
    >
      <nuxt-link class="navbar-brand mr-auto" to="/">
        <!-- <Logo :scrolled="!view.topOfPage || navModalOpen"/> -->
      </nuxt-link>

      <div class="collapse navbar-collapse justify-content-end" v-if="!!expand">
        <!-- <Menu location="header-menu" class="navbar-nav ml-auto" /> -->
      </div>

      <!-- <button
        class="navbar-toggler d-block ms-auto ms-lg-2"
        type="button"
        aria-controls="navigation-modal"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="$store.commit('ui/toggleNav')"
      > -->
      <div
        class="navbar-toggler d-flex"
        aria-controls="navigation-modal"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="$store.commit('ui/toggleNav')"
      >
        <div class="menu-hamburger">Menu</div>

        <div class="hamburger ms-1">
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>
      <!-- </button> -->
    </div>
    <NavigationModal :show="navModalOpen" />
  </div>
</template>

<script>
export default {
  props: {
    fixed: {
      type: Boolean,
      default: false,
    },
    sticky: {
      type: Boolean,
      default: false,
    },
    expand: {
      type: String,
    },
  },
  data() {
    return {
      view: {
        topOfPage: true,
      },
    }
  },
  mounted() {
    window.requestAnimationFrame(this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.view.topOfPage = window.pageYOffset <= 100
      window.requestAnimationFrame(this.handleScroll)
    },
  },
  computed: {
    positionClass() {
      if (this.fixed) {
        return `fixed-${this.position}`
      }
      if (this.sticky) {
        return `sticky-${this.position}`
      }
    },
    navModalOpen() {
      return this.$store.state.ui.navOpen
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar__container {
  position: fixed;
  width: 100%;
  height: 70px;
  background-color: transparent;
  display: flex;
  align-items: center;
  transition: all 400ms ease-in-out;
  z-index: 999;

  &.onScroll {
    box-shadow: 0 0 10px #aaa;
    background-color: $light;
    z-index: 999;

    .navbar-toggler {
      color: $dark;
      &:hover {
        color: $secondary;
      }
    }
  }
  .navbar {
    width: 100%;
    z-index: 999;
  }
}
.navbar-toggler {
  appearance: none;
  padding-left: 0;
  padding-right: 0;
}

.menu-hamburger {
  text-transform: uppercase;
  font-family: $headings-font-family;
  font-size: 10px;
}

.hamburger {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  cursor: pointer;
  .line {
    width: 30px;
    height: 1.5px;
    background-color: $dark;
  }
}
</style>
