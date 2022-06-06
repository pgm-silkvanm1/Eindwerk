<template>
  <div class="modal popup fade" tabindex="-1" ref="popup">
    <div class="modal-dialog modal-md modal-dialog-centered">
      <div class="modal-content">
        <div
          class="modal-body py-6 px-8 d-flex align-items-center justify-content-center text-center"
        >
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
          <div class="rhythm-mb-4" v-if="popup">
            <div class="h6 mb-3 popup__prefix" v-if="popup.prefix">
              {{ popup.prefix }}
            </div>
            <div class="h1 text-primary">{{ popup.title }}</div>
            <div class="bodytext" v-html="popup.body"></div>
            <BaseButton
              v-if="popup.button"
              :label="popup.button.title"
              :href="popup.button.url"
              variant="outline-primary"
            />
            <NewsletterOptin
              v-if="popup.newsletter"
              align="center"
              variant="primary"
            />
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
      popups: [],
      modal: {},
    }
  },
  mounted() {
    this.modal = new Modal(this.$refs.popup)
  },
  computed: {
    popup() {
      if (this.popups && this.popups.length) {
        return this.popups[0]
      }
    },
  },
  watch: {
    popup() {
      if (this.popup && this.modal) {
        setTimeout(() => {
          this.modal.show()
        }, 2000)
      }
    },
  },
  async fetch() {
    // fetch popups to be displayed
    this.popups = await this.$content('popup')
      .where({
        dateFrom: {
          $lte: new Date().getTime() / 1000,
        },
        dateUntil: {
          $gt: new Date().getTime() / 1000,
        },
      })
      .fetch()
      .catch((err) => {
        console.log(err)
      })
  },
}
</script>

<style lang="scss" scoped>
.btn-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
}
.popup {
  &__prefix {
    font-weight: 400;
    color: $gray;
  }
}
</style>
