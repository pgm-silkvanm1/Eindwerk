<template>
  <div :class="sliceClasses">
    <component :is="`Lazy${sliceName}`" v-bind="properties"></component>
  </div>
</template>

<script>
import {
  mapValues,
  mapKeys,
  isArray,
  map,
  has,
  upperFirst,
  camelCase,
  startsWith,
  last,
} from 'lodash'

export default {
  name: 'Slice',
  props: {
    slice: Object,
  },
  computed: {
    sliceName() {
      if (this.slice.acf_fc_layout) {
        // WordPress
        return upperFirst(camelCase(this.slice.acf_fc_layout))
      } else {
        // Prismic
        return upperFirst(camelCase(this.slice.slice_type))
      }
    },
    properties() {
      if (this.slice.acf_fc_layout) {
        // WordPress
        return this.parseFieldsWp(this.slice)
      } else {
        // Prismic
        return {
          // map fields of non-repeatable zone to first class props
          ...this.parseFieldsPrismic(this.slice.primary),
          // map repeatable fields to the items array prop
          items: map(this.slice.items, this.parseFields),
        }
      }
    },
    sliceClasses() {
      return {
        container: ['MediaText', 'Subscription'].includes(this.sliceName),
      }
    },
  },
  methods: {
    parseFieldsWp(dictionary) {
      // Filter out props we don't need.
      const { acf_fc_layout, acfe_flexible_toggle, layout_settings, ...props } =
        dictionary

      return this.camelCaseFieldKeys(props)
    },
    camelCaseFieldKeys(props) {
      const entries = Object.entries(props).map(([key, val]) => {
        if (isArray(val) && val.length && typeof val[0] === 'object') {
          val = val.map(this.camelCaseFieldKeys)
        }
        return [camelCase(key), val]
      })

      return Object.fromEntries(entries)
    },
    parseFieldsPrismic(dictionary) {
      return mapValues(dictionary, (value, field) => {
        if (isArray(value)) {
          if (value[0]?.type === 'paragraph') {
            return this.$prismic.asHtml(value)
          } else {
            return this.$prismic.asText(value)
          }
        } else if (has(value, 'link_type')) {
          return value
          // return this.$prismic.asLink(value)
        } else {
          return value
        }
      })
    },
  },
}
</script>
