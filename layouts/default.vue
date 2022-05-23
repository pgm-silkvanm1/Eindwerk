<template>
  <div class="layout">
    <NavBar id="site-header" :sticky="true" expand="lg" />
    <div class="site-content">
      <Nuxt />
    </div>
    <Footer />

    <div class="custom-cursor" ref="cursor" :style="cursorStyle">
      <div class="custom-cursor__inner">
        <BaseIcon :icon="$store.state.ui.customCursorIcon" size="2x" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      customCursorSize: 100,
    }
  },
  computed: {
    cursorStyle() {
      return {
        '--size': `${this.customCursorSize}px`,
      }
    },
  },
  mounted() {
    /**
     * CUSTOM CURSOR
     */

    let raf = null
    let clientX,
      clientY = null
    let cursor = this.$refs.cursor

    const cursorTween = this.$gsap.timeline({
      paused: true,
      onReverseComplete: () => {
        if (raf) cancelAnimationFrame(raf)
      },
    })
    cursorTween.from(this.$refs.cursor, {
      autoAlpha: 0,
      duration: 0.25,
    })
    cursorTween.from(
      this.$refs.cursor,
      {
        // autoAlpha: 0,
        scale: 0.6,
        duration: 0.45,
        ease: 'back.out',
      },
      '<.2'
    )

    document.addEventListener('mousemove', (e) => {
      clientX = e.clientX
      clientY = e.clientY
    })
    const positionCustomCursor = () => {
      this.$gsap.set(cursor, {
        x: clientX - this.customCursorSize * 0.5,
        y: clientY - this.customCursorSize * 0.5,
      })
      raf = requestAnimationFrame(positionCustomCursor)
    }

    const toggleCustomCursor = (enable) => {
      if (enable) {
        cursorTween.play(null, true)
        positionCustomCursor()
      } else {
        cursorTween.reverse(null, false)
      }
    }

    this.$store.watch(
      (state) => state.ui.customCursor,
      (toggle) => {
        toggleCustomCursor(toggle)
      }
    )
  },
}
</script>
<style lang="scss" scoped>
.custom-cursor {
  position: fixed;
  z-index: 99999;
  visibility: hidden;
  pointer-events: none;

  &__inner {
    backdrop-filter: invert(100%) blur(2px);
    border-radius: 50%;
    display: grid;
    width: var(--size);
    height: var(--size);
    place-items: center;
    color: #fff;
    font-weight: bold;
    font-size: 0.75rem;
    text-transform: uppercase;
  }
}
.cc {
  cursor: none;
}
</style>
