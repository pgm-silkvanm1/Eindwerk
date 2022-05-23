<template>
  <transition name="nav">
    <div
      id="navigation-modal"
      class="navigation-modal"
      v-show="show"
      @keyup.esc="toggle()"
      tabindex="0"
      ref="modal"
    >
      <div class="inner">
        <Logo class="mb-3" />
        <Menu location="hamburger-menu" />
      </div>

      <!-- <div @click="toggle()" class="closer">
          <div class="line"></div>
          <div class="line line2"></div>
        </div> -->

      <BaseIcon
        class="closer"
        icon="times"
        size="lg"
        variant="white"
        @click="toggle()"
      />
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
  z-index: 9999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba($dark, 0.95);
  outline: none; // the tabindex renders an outline when focussed

  &__link:not(.btn) {
    &:hover,
    &:focus {
      color: $primary;
    }
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
  /* text-align: center; */
  // font-size: 1.75rem;
  color: #fff;
  font-weight: normal;
  text-align: center;
  font-family: $headings-font-family;
}
.closer {
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
}
</style>
