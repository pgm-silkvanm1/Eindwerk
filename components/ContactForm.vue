<template>
  <div class="contact container-fluid p-sm-4 p-lg-8">
    <div class="d-flex flex-column align-items-center">
      <div class="col-lg-4">
        <div class="underline justify-content-center">
          <h2 class="contact__title underline__text text-center">Contact us</h2>
        </div>
      </div>
      <div v-if="submitted" class="text-primary p-4 rounded text-center">
        <BaseIcon icon="comment-alt-check" type="fas" size="2x" />
        <div class="mt-1 fs-4">
          {{ `Thanks for reaching out to us. You're awesome.` }}
        </div>
      </div>

      <BaseForm
        v-else
        @submit="handleSubmit"
        class="col-md-8 col-lg-6 col-xl-4"
      >
        <div>
          <div class="mb-2">
            <input
              id="form-name"
              type="text"
              autocomplete="full-name"
              class="form-control"
              placeholder="Full Name*"
              v-model="fields.name"
              required
            />
            <div class="invalid-feedback">{{ req }}</div>
          </div>
          <div class="mb-2">
            <input
              id="form-mail"
              class="form-control"
              required
              autocomplete="email"
              placeholder="Email*"
              v-model="fields.email"
              type="email"
            />
            <div class="invalid-feedback">{{ req }}</div>
          </div>
          <div class="mb-2">
            <div class="flex-grow-1 mb-4 d-flex flex-column">
              <textarea
                required
                class="form-control flex-grow-1"
                placeholder="Your Message*"
                v-model="fields.message"
                rows="3"
              ></textarea>
              <div class="invalid-feedback">Boodschap is verplicht</div>
            </div>
          </div>
          <div class="d-grid">
            <BaseButton
              block
              class="submit_btn"
              type="submit"
              label="Sent"
              variant="primary"
              :disabled="submitting"
              :loader="submitting"
            />
          </div>
        </div>
      </BaseForm>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  //   props: {
  //     title: String,
  //     titleTag: {
  //       type: String,
  //       default: 'h3',
  //     },
  //     prefix: String,
  //     prefixTag: {
  //       type: String,
  //       default: 'p',
  //     },
  //   },
  data() {
    return {
      submitting: false,
      submitted: false,
      fields: {},
      errorMessage: '',
      req: 'This is a required field',
    }
  },
  methods: {
    async handleSubmit() {
      this.submitting = true
      this.errorMessage = ''
      // const checkCaptcha = await validateRecaptcha(this.$recaptcha)

      //   if (checkCaptcha) {
      try {
        await axios.post('https://formspree.io/f/mayvklzy', {
          ...this.fields,
          _redirect: false,
        })
        this.submitted = true
      } catch (err) {
        this.errorMessage = 'Did not work'
      }
      //   const posted = await axios.post(
      //     'https://submit-form.com/gafPWcmL',
      //     this.fields
      //   )
      //   if (posted) {
      //     this.$router.push({
      //       path: '/bedankt',
      //     })
      // }
      //   }
    },
  },
  //   computed: {
  //     formData() {
  //       const fd = new FormData()
  //       Object.keys(this.fields).forEach((key) => {
  //         fd.append(key, this.fields[key])
  //       })
  //       return fd
  //     },
  //   },
}
</script>
<style lang="scss" scoped>
.contact {
  &__title {
    padding-bottom: 2rem;
  }
  &__prefix {
    color: $dark;
  }

  .form-control {
    /* border: none; */
    /* border-bottom: 1px solid $secondary; */
    padding: 1rem 0;
    color: $dark;
    border-radius: 25px;

    &::placeholder {
      color: $dark;
      text-align: center;
    }

    input {
      color: $dark;
    }
  }
}
</style>
