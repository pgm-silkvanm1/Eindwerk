<template>
  <transition name="nav">
    <div
      id="navigation-modal"
      class="navigation-modal pt-15"
      v-show="show"
      @keyup.esc="toggle()"
      tabindex="0"
      ref="modal"
    >
      <div class="container">
        <Menu location="hamburger-menu" class="" />
      </div>
    </div>
  </transition>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      showItems: false,
    }
  },
  methods: {
    ...mapMutations({
      toggle: 'ui/toggleNav',
    }),
    beforeNavEnters() {
      this.showItems = false
    },
    afterNavEnters() {
      this.$refs.modal.focus()
      this.showItems = true
    },
  },
}
</script>

<style lang="scss" scoped>
.navigation-modal {
  position: fixed;
  z-index: 998;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba($dark, 1);
  background-image: url('/img/modal-bottom.svg');
  background-repeat: no-repeat;
  background-position: bottom 60px left;
  outline: none; // the tabindex renders an outline when focussed

  &__link:not(.btn) {
    color: $white;
    text-decoration: none;

    &:hover,
    &:focus {
      color: $primary;
    }
  }
  &__title {
    color: $gray;
  }
}
.inner {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  outline: none; // the tabindex renders an outline when focussed
}
.menu {
  // text-align: center;
  font-size: 1.75rem;
  color: $white;
  font-family: $headings-font-family;
}
.closer {
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
}
</style>
