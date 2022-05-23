export default {
  data() {
    return {
      scrolltriggers: [],
      batchConfig: null,
    }
  },
  mounted() {
    // Use event listener to fire this mounted hook after
    // the elements own mounted hook.
    this.$on('hook:mounted', () => {
      if (this.batchConfig?.targets && this.batchConfig?.autoReveal) {
        // Set hidden, to use autoAlpha in effect.
        this.$gsap.set(this.batchConfig.targets, { visibility: 'hidden' })
      }
    })
  },
  loaded() {
    if (this.batchConfig) {
      // Use batched scrolltrigger
      const { targets, autoReveal, ...config } = this.batchConfig
      this.$ScrollTrigger
        .batch(targets, {
          start: 'top 80%',
          onEnter: (batch) => {
            if (typeof this.$options.scrollReveal === 'function') {
              this.$options.scrollReveal.call(this, batch)
            } else if (autoReveal) {
              this.$gsap.effects.fadeUp(batch)
            }
          },
          onLeaveBack: (batch, triggers) =>
            triggers.forEach((t) => t.disable(false)), // Don't animate again on re-entry.
          ...config,
        })
        .forEach((st) => this.scrolltriggers.push(st))
    } else if (typeof this.$options.scrollReveal === 'function') {
      // Use one scrolltrigger
      const tween = this.$options.scrollReveal.call(this)

      if (tween) {
        const st = this.$ScrollTrigger.create({
          trigger: this.$el,
          start: 'top 87%',
          animation: tween,
          markers: false, // enable for debugging
        })
        this.scrolltriggers.push(st)
      }
    }
  },
  beforeDestroy() {
    if (Array.isArray(this.scrolltriggers)) {
      this.scrolltriggers.forEach((st) => st.kill())
    }
  },
}
