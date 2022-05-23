<template>
  <div class="lead-form">
    <BaseForm>
      <div class="text-center row gx-0">
        <div class="col-12 col-lg-3 d-flex">
          <div class="lead-form__action">
            <div class="d-flex align-items-center w-100">
              <img
                class="d-block ms-1 me-1"
                style="width: 14px"
                src="/img/input-icons/date.svg"
              />
              <select v-model="eventType" class="lead-form__select">
                <option value="">Type Event</option>
                <option
                  v-for="et in eventTypes"
                  :value="et.value"
                  :key="et.value"
                >
                  {{ et.title }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-3 d-flex">
          <div class="lead-form__action d-flex justify-content-center">
            <client-only>
              <VueDatePicker
                color="#db642a"
                format="DD MMMM YYYY"
                :locale="locale"
                v-model="eventDate"
                placeholder="Datum*"
                class="form-control border-0 form-control--icon form-control--icon-date"
              />
            </client-only>
          </div>
        </div>
        <div class="col-12 col-lg-3 d-flex mb-2 mb-lg-0">
          <div class="lead-form__action">
            <input
              type="number"
              inputmode="numeric"
              pattern="[0-9]*"
              class="form-control border-0 form-control--icon form-control--icon-number"
              placeholder="Aantal personen*"
              v-model="numPersons"
              required
            />
          </div>
        </div>
        <div class="col-12 col-lg-3 d-flex">
          <div class="lead-form__action last">
            <BaseButton
              class="lead-form__submit border-0"
              variant="link"
              href="#contact"
              label="Event aanvragen"
            />
          </div>
        </div>
      </div>
    </BaseForm>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
import locale from '~/assets/js/vue-datepicker-locale.js'
export default {
  data() {
    return {
      submitting: false,
      fields: {},
      locale,
    }
  },
  mounted() {
    this.batchConfig = {
      targets: this.$el,
      autoReveal: true,
    }
  },
  computed: {
    eventTypes() {
      return this.$store.state.event.eventTypes
    },
    ...mapFields('event', [
      'fields.eventType',
      'fields.eventDate',
      'fields.numPersons',
      'fields.timespan',
      'fields.eventOptions',
      'fields.message',
      'fields.name',
      'fields.email',
      'fields.phone',
    ]),
  },
}
</script>

<style lang="scss" scoped>
.lead-form {
  &__action {
    position: relative;
    border-bottom: 1px solid $dark;

    &.last {
      border-bottom: none;
    }

    @include media-breakpoint-up(lg) {
      border: 1px solid $dark;
      border-left: 0;
      &.last {
        border-right: none;
        border-bottom: 1px solid $dark;
      }
    }
    padding: 0.5rem 2rem;
    color: $dark;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__select {
    // A reset of styles, including removing the default dropdown arrow
    // appearance: none;
    // Additional resets for further consistency
    background-color: transparent;
    border: none;
    border-radius: 0;
    padding: 0.5rem 1em 0.5rem 0;
    margin: 0;
    width: 100%;
    min-width: 150px;
    font-family: inherit;
    font-size: inherit;
    cursor: inherit;
    line-height: inherit;
    color: $dark;
    // text-align: center;
    // max-width: 200px;
  }
}

.form-control {
  // max-width: 200px;
  // background: rgba($primary, 0.05);
}
</style>
