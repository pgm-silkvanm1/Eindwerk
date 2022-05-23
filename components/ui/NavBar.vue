<template>
  <div
    class="navbar-wrap"
    :class="[positionClass, { onScroll: !view.topOfPage }]"
  >
    <div class="container navbar__container">
      <div
        class="navbar"
        :class="[
          {
            [`navbar-expand-${expand}`]: expand,
            'navbar-expand': expand === 'always',
          },
        ]"
      >
        <div class="d-none d-lg-block flex-lg-1" style="height: 10px"></div>
        <nuxt-link
          class="d-flex justify-content-center navbar-brand flex-lg-1 me-0"
          to="/"
          ><Logo
        /></nuxt-link>
        <div class="flex-lg-1 d-flex justify-content-end align-items-center">
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
        </div>
      </div>
      <NavigationModal :show="navModalOpen" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

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
    position: {
      type: String,
      default: 'top',
      validator: (value) => ['top', 'bottom'].includes(value),
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
.navbar-nav {
}
.navbar-toggler {
  appearance: none;
  cursor: pointer;
}
.navbar-wrap {
  transition: all 0.2s ease-in-out;

  &.onScroll {
    box-shadow: 0 0 10px $silver;
    background-color: $light;
  }
}
.navbar__container {
  .navbar {
    display: flex;
    align-items: center;
  }
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
