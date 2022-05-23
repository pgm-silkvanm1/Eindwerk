<template>
  <div class="container mb-6">
    <BaseForm>
      <div class="d-flex text-center row">
        <div class="col-sm-6 col-lg-3 form__list">
          <label for="cars">Type event:</label>
          <select class="form-select" id="event">
            <option value="Feest">Feest</option>
            <option value="Moment">Moment</option>
            <option value="Business">Business</option>
          </select>
        </div>
        <div class="col-sm-6 col-lg-3 form__list">
          <input type="date" placeholder="Datum" v-model="fields.date" />
        </div>
        <div class="col-sm-6 col-lg-3 form__list">
          <label for="cars">Aantal personen:</label>
          <select class="form__select" id="people">
            <option value="Feest">- 100</option>
            <option value="Moment">100 - 200</option>
            <option value="Business">> 200</option>
          </select>
        </div>
        <BaseLink
          class="col-sm-6 col-lg-3 form__list text-primary d-flex justify-content-center align-items-center text-uppercase options text-decoration-none"
          :to="`#contact`"
        >
          Bekijk opties
        </BaseLink>
      </div>
    </BaseForm>
  </div>
</template>

<script>
export default {
  data() {
    return {
      submitting: false,
      fields: {},
    }
  },
}
</script>

<style lang="scss" scoped>
.form__list {
  border: 1px solid $dark;
  padding: 1rem 2rem;
  color: $dark;

  input {
    background: transparent;
    border: none;
    color: $dark;
  }

  .form__select {
    border: none;
    background-color: transparent;
  }
}

.options {
  font-family: $headings-font-family;
  font-weight: $headings-font-weight;
  font-size: $small-font-size;
}
</style>
