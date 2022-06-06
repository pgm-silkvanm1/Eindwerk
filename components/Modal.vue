<template>
  <div class="modal popup fade" tabindex="-1" ref="modal">
    <div class="modal-dialog modal-md modal-dialog-centered">
      <div class="modal-content">
        <div
          class="modal-body py-6 px-md-8 d-flex align-items-center justify-content-center text-center"
        >
          <button
            type="button"
            v-if="!noCloseButton"
            class="btn-close"
            @click="close"
          ></button>
          <div class="rhythm-mb-4 w-100">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modal: {},
      unwatch: null,
    }
  },
  props: {
    type: String,
    noCloseButton: Boolean,
  },
  methods: {
    show() {
      this.modal.show()
      this.$emit('open')
    },
    close() {
      this.modal.hide()
      this.$emit('close')
    },
  },
  created() {
    // watch the store and trigger the modal
    this.unwatch = this.$store.watch(
      (state) => state.ui.modalsOpen[this.type],
      (show) => (show ? this.show() : this.close())
    )
  },
  destroyed() {
    // unwatch to avoid memory leaks
    this.unwatch()
  },
  mounted() {
    // create modal and listen for an internal close event to update the store
    this.modal = new Modal(this.$refs.modal)
    this.$refs.modal.addEventListener('hide.bs.modal', () =>
      this.$store.commit('ui/toggleModal', this.type, false)
    )
  },
  computed: {
    isOpen() {
      return this.$store.state.ui.modalsOpen[this.type]
    },
  },
}
</script>

<style lang="scss" scoped>
.btn-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
}
</style>
