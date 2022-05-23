<template>
  <div class="icon-select row g-1 g-md-3">
    <div
      class="col-4 col-md-4 col-lg col-xxl flex-grow-xxl-1"
      v-for="(option, index) in options"
      :key="option.value"
    >
      <div class="icon-select__option">
        <input
          @change="updateValue($event.target.value)"
          class="icon-select__input"
          :name="name"
          type="radio"
          :id="`${name}-${index}`"
          required
          :value="option.value"
          :checked="option.value === value"
        />
        <label class="icon-select__label" :for="`${name}-${index}`">
          <div class="icon-select__icon mb-1">
            <component :is="option.icon"></component>
          </div>
          <div class="icon-select__title">{{ option.title }}</div>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import PartyIcon from '~/assets/svg/party.svg?inline'
import MomentIcon from '~/assets/svg/moment.svg?inline'
import BusinessIcon from '~/assets/svg/business.svg?inline'

export default {
  props: {
    name: String,
    options: Array,
    value: {
      type: String,
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    if (!this.value && this.options && this.options.length) {
      this.updateValue(this.options[0].value)
    }
  },
  methods: {
    updateValue: function (value) {
      this.$emit('input', value)
    },
  },
  components: {
    PartyIcon,
    MomentIcon,
    BusinessIcon,
  },
}
</script>

<style lang="scss" scoped>
.icon-select {
  // display: flex;
  &__input {
    display: none;
    &:checked ~ .icon-select__label {
      background: $dark;
      border: 1px solid $dark;
      color: #fff;

      .icon-select__icon {
        path,
        line {
          stroke: #fff;
        }
      }
    }
  }
  &__icon {
    width: 40px;
    height: 40px;
    display: block;
    svg {
      width: 100%;
      height: 100%;
    }
  }
  &__label {
    transition: 500ms all ease-out;
    cursor: pointer;
    // border-radius: 15px;
    border: 1px solid $dark;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    padding: 0.75rem;
    @include media-breakpoint-up(md) {
      padding: 2.5rem 1.5rem;
    }
    text-align: center;
    color: $dark;
  }
}
</style>
