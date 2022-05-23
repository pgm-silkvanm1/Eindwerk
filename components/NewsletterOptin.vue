<template>
  <div
    class="newsletter-optin"
    :class="[`newsletter-optin--${variant}`, `newsletter-optin--${align}`]"
  >
    <div class="h4 newsletter-optin__title mb-2">
      {{ title }}
    </div>
    <form class="row mb-2 row-cols-auto g-0" @submit.prevent="subscribe">
      <div class="col-12 col-sm-8 mb-1 mb-sm-0">
        <label class="visually-hidden" for="email">E-mail</label>
        <input
          type="email"
          class="form-control newsletter-optin__email"
          :class="`border-${variant}`"
          id="email"
          required
          placeholder="E-mailadres"
          v-model="fields.email"
        />
        <div class="invalid-feedback">E-mail is verplicht</div>
      </div>
      <div class="col-12 col-sm-4 d-flex">
        <BaseButton
          :loader="submitting"
          :disabled="submitting"
          type="submit"
          :variant="`outline-${variant}`"
          class="newsletter-optin__button flex-grow-1"
          label="Inschrijven"
        />
      </div>
      <div v-if="error" class="alert alert-danger px-1 mt-1">{{ error }}</div>
    </form>
    <div class="small newsletter-optin__privacy">
      <p class="text-italic">
        Door het ingeven van je e-mailadres stem je toe dat wij je
        persoonsgegevens verwerken voor het bovenvermelde doeleinde in
        overeenstemming met ons <a href="/privacybeleid">privacybeleid</a>
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  methods: {
    async subscribe(event) {
      this.submitting = true
      const formData = { ...this.fields }
      try {
        const { data, status } = await axios.post('/api/mailchimp', formData)
        if (status === 200) {
          this.$router.push({
            path: '/bedankt',
          })
        }
      } catch (e) {
        this.error = e.response.data
      }
      this.submitting = false
    },
  },
  data() {
    return {
      submitting: false,
      error: '',
      fields: {
        email: '',
      },
    }
  },
  props: {
    variant: {
      type: String,
      default: 'primary',
    },
    title: {
      type: String,
      default: 'Inschrijven nieuwsbrief',
    },
    align: {
      type: String,
      default: 'left',
    },
  },
}
</script>

<style lang="scss" scoped>
.newsletter-optin {
  max-width: 450px !important;

  &--left {
    margin-left: 0;
    text-align: left;
  }
  &--center {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
  &--right {
    @include media-breakpoint-up(lg) {
      margin-left: auto;
      text-align: right;
    }
  }

  &__title {
    color: $primary;
  }

  &__email {
    height: 100%;
  }
  &--white {
    .newsletter-optin__title {
      color: #fff;
    }
    .newsletter-optin__email {
      color: #fff;
      &::placeholder {
        color: #fff;
      }
    }
    .newsletter-optin__privacy {
      color: #fff;
    }
  }
}
</style>
