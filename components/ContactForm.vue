<template>
  <div class="contact py-6 py-lg-12">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <div
            class="contact__inner rhythm-mb-3 mb-6 d-flex flex-column justify-content-center"
          >
            <MiniLogo class="minilogo" />
            <div v-if="title" class="my-5 h3 text-center">{{ title }}</div>
            <Separator />
          </div>
          <BaseForm @submit="handleSubmit">
            <div class="mb-8">
              <div class="h4 mb-4 text-center">Kies jouw type event</div>
              <IconSelect
                name="eventType"
                :options="eventTypes"
                v-model="eventType"
              />
            </div>
            <div class="mb-8">
              <div class="h4 mb-4 text-center">Praktisch</div>

              <div class="mb-2">
                <client-only>
                  <VueDatePicker
                    :locale="locale"
                    color="#db642a"
                    format="DD MMMM YYYY"
                    v-model="eventDate"
                    placeholder="Datum*"
                    class="form-control form-control--icon form-control--icon-date"
                  />
                </client-only>
                <div class="invalid-feedback">Datum is verplicht</div>
              </div>
              <div class="mb-2">
                <input
                  type="number"
                  class="form-control form-control--icon form-control--icon-number"
                  placeholder="Aantal personen*"
                  inputmode="numeric"
                  pattern="[0-9]*"
                  v-model="numPersons"
                  required
                />
                <div class="invalid-feedback">Aantal personen is verplicht</div>
              </div>
              <div class="mb-2">
                <select
                  type="text"
                  class="form-control form-control--icon form-control--icon-timespan"
                  placeholder="Tijdspanne*"
                  v-model="timespan"
                  required
                >
                  <option value="">Tijdspanne*</option>
                  <option
                    v-for="n in 24"
                    :value="`${n} uur`"
                    :key="`timespan-${n}`"
                  >
                    {{ n }} uur
                  </option>
                </select>
                <div class="invalid-feedback">Geef een aantaal uur in aub</div>
              </div>
            </div>

            <div class="mb-8">
              <div class="h4 mb-4 text-center">Extra opties</div>
              <div class="text-center mb-6">
                Wij nemen contact met je op om deze opties<br />
                vrijblijvend te bespreken
              </div>

              <div class="mb-4 col-12">
                <CustomCheckboxList
                  :items="extraOptions"
                  v-model="eventOptions"
                  class="mb-3"
                />
                <textarea
                  class="form-control options__container"
                  placeholder="Extra vragen, opmerkingen ..."
                  v-model="message"
                  rows="3"
                ></textarea>
              </div>
            </div>

            <div class="mb-8">
              <div class="h4 mb-4 text-center">Jouw gegevens</div>
              <div class="mb-2">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Voornaam + Familienaam*"
                  v-model="name"
                  autocomplete="name"
                  required
                />
                <div class="invalid-feedback">Naam is verplicht</div>
              </div>
              <div class="mb-2">
                <input
                  type="email"
                  class="form-control"
                  placeholder="E-mailadres*"
                  v-model="email"
                  autocomplete="email"
                  required
                />
                <div class="invalid-feedback">E-mail is verplicht</div>
              </div>

              <div class="">
                <input
                  type="phone"
                  class="form-control"
                  placeholder="Telefoon / GSM*"
                  v-model="phone"
                  autocomplete="tel"
                  required
                />
                <div class="invalid-feedback">Telefoon is verplicht</div>
              </div>
            </div>
            <div class="d-flex justify-content-center">
              <BaseButton
                type="submit"
                label="Verstuur"
                :disabled="submitting"
                :loader="submitting"
              />
            </div>
          </BaseForm>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
import axios from 'axios'
import locale from '~/assets/js/vue-datepicker-locale.js'

export default {
  props: {
    title: String,
  },
  data() {
    return {
      locale,
      submitting: false,
      extraOptions: [
        {
          id: 'food',
          label: 'Food',
        },
        {
          id: 'drinks',
          label: 'Drinks',
        },
        {
          id: 'decoratie',
          label: 'Decoratie',
        },
      ],
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
    fields() {
      return this.$store.state.event.fields
    },
  },
  mounted() {
    this.batchConfig = {
      targets: this.$el,
      autoReveal: true,
    }
  },
  methods: {
    async handleSubmit() {
      this.submitting = true
      const posted = await axios.post(
        'https://submit-form.com/r7kSxPqM',
        this.fields
      )
      this.submitting = false
      if (posted) {
        this.$router.push({
          path: '/bedankt',
        })
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.custom {
  -webkit-appearance: none;
  background-color: transparent;
  border: 1px solid $dark;
  padding: 9px;
  border-radius: 3px;
  display: inline-block;
  position: relative;
  vertical-align: middle;
}

.custom:checked {
  background-color: transparent;
  border: 1px solid $dark;
  color: $dark;
}

.custom:checked:after {
  content: '\2714';
  font-size: 13px;
  position: absolute;
  top: 0px;
  left: 3px;
  color: $dark;
}

.contact {
  background-color: $secondary;
  &__inner {
    align-items: center;
    .minilogo {
      fill: $primary;
    }
    .h3 {
      text-transform: uppercase;
      font-size: 1.25rem;
    }
  }
  .square__container {
    width: 50%;
    margin: 0 auto;
    .square {
      /* height: 176px; */
      border: 1px solid $dark;

      svg {
        height: 35px;
      }
    }
  }
  .options {
    &__text {
      font-size: 1rem;
    }
    &__container {
      border: 1px solid $dark;
      padding: 0.5rem 1rem;
    }
  }

  .options {
    width: 50%;
    margin: 0 auto;
  }
}
</style>
