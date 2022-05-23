import slugify from 'slugify'
export default {
  methods: {
    slugify(string) {
      return slugify(string, { lower: true, strict: true })
    },
    formatDate(dateString, format) {
      if (!format) {
        format = 'D MMMM'
      }
      return this.$dayjs(dateString).locale(this.$i18n.locale).format(format)
    },
    imageStyle(url, presetKey) {
      if (this.$config.useImageKit) {
        const src = url.replace(this.$config.cms_url, '')
        const style = this.$img(src, null, {
          preset: presetKey,
        })
        return style
      }
      return url
    },
  },
}
