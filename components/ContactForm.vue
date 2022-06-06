<template>
  <div class="contact p-8" :style="coverStyle" :class="[coverType]">
    <component
      :is="titleTag"
      v-if="title"
      class="contact__title col-4 h1 text-dark"
      v-html="title"
    />
    <!-- 
    <BaseForm @submit="handleSubmit"> -->
    <div class="d-flex justify-content-between p-15">
      <div class="m-10" v-for="item in cards" :key="item.name">
        <div class="contact__item p-2 p-xl-4 bg-white text-black">
          <BaseImage :src="item.image" class="contact__image col-4 pb-5" />
          <div class="contact__item__title h3 mb-1 mb-xl-3">
            <div>
              Book a meeting with
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="row gx-10">
        <div class="col-lg-6">
          <div class="row form-row">
            <div class="col-sm-6">
              <div class="mb-4">
                <input
                  type="text"
                  autocomplete="given-name"
                  class="form-control"
                  placeholder="Voornaam*"
                  v-model="fields.firstname"
                  required
                />
                <div class="invalid-feedback">Voornaam is verplicht</div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="mb-4">
                <input
                  type="text"
                  autocomplete="family-name"
                  class="form-control"
                  placeholder="Achternaam*"
                  v-model="fields.lastname"
                  required
                />
                <div class="invalid-feedback">Achternaam is verplicht</div>
              </div>
            </div>
          </div>
          <div class="mb-4">
            <input
              class="form-control"
              placeholder="Bedrijfsnaam"
              autocomplete="organization"
              v-model="fields.organization"
              type="text"
            />
          </div>
          <div class="mb-4">
            <input
              type="text"
              autocomplete="street-address"
              class="form-control"
              placeholder="Straat + Nummer*"
              v-model="fields.address"
              required
            />
            <div class="invalid-feedback">Straat + Nummer</div>
          </div>
          <div class="row form-row">
            <div class="col-sm-6">
              <div class="mb-4">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Postcode*"
                  v-model="fields.zip"
                  required
                  autocomplete="postal-code"
                />
                <div class="invalid-feedback">Postcode is verplicht</div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="mb-4">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Gemeente*"
                  v-model="fields.city"
                  autocomplete="address-level2"
                  required
                />
                <div class="invalid-feedback">Gemeente is verplicht</div>
              </div>
            </div>
          </div>
          <div class="mb-4">
            <input
              class="form-control"
              required
              placeholder="Telefoon*"
              autocomplete="tel"
              v-model="fields.phone"
              type="text"
            />
            <div class="invalid-feedback">Telefoon is verplicht</div>
          </div>
          <div class="">
            <input
              class="form-control"
              required
              autocomplete="email"
              placeholder="email*"
              v-model="fields.email"
              type="email"
            />
            <div class="invalid-feedback">E-mail is verplicht</div>
          </div>
        </div>
        <div class="col-lg-6 d-flex flex-column">
          <div class="flex-grow-1 mb-4 d-flex flex-column">
            <textarea
              required
              class="form-control flex-grow-1"
              placeholder="Welke boodschap wil je meegeven*"
              v-model="fields.message"
              rows="3"
            ></textarea>
            <div class="invalid-feedback">Boodschap is verplicht</div>
          </div>
          <BaseButton
            class="align-self-start"
            type="submit"
            label="Verstuur"
            variant="outline-primary"
            :disabled="submitting"
            :loader="submitting"
          />
        </div>
      </div> -->
    <!-- </BaseForm> -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: {
    coverType: {
      type: String,
      default: 'square',
    },
    title: String,
    titleTag: {
      type: String,
      default: 'h1',
    },
    image: {
      type: String,
    },
    name: {
      type: String,
    },
    cards: {
      type: Array,
    },
  },
  data() {
    return {
      submitting: false,
      fields: {},
    }
  },
  methods: {
    async handleSubmit() {
      this.submitting = true
      // const checkCaptcha = await validateRecaptcha(this.$recaptcha)

      // if (checkCaptcha) {
      const posted = await axios.post(
        'https://forms.maneuver.be/ep/xx/xxx',
        this.formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      )
      if (posted) {
        this.$router.push({
          path: '/bedankt',
        })
      }
      // }
    },
  },
  computed: {
    formData() {
      const fd = new FormData()
      Object.keys(this.fields).forEach((key) => {
        fd.append(key, this.fields[key])
      })
      return fd
    },
    coverStyle() {
      if (this.image) {
        return {
          backgroundImage: `url('${this.imageStyle(this.image, 'cover')}')`,
        }
      }
    },
    overlayStyle() {
      if (this.overlayOpacity) {
        return {
          opacity: parseInt(this.overlayOpacity) / 100,
        }
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.contact {
  &__title {
    text-align: center;
    margin: 0 auto;
  }
  &__item {
    border-radius: 25px;
    box-shadow: 0px 0px 29px -7px rgba(0, 0, 0, 0.75);
  }
}
</style>
