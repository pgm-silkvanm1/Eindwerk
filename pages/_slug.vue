<template>
  <div>
    <component :is="template" :page="page" />
  </div>
</template>

<script>
import { first, upperFirst, camelCase } from 'lodash'
import pagehead from '~/assets/js/mixins/page-head'

export default {
  data() {
    return {
      page: null,
    }
  },
  mixins: [pagehead],
  async asyncData({ params, app, error }) {
    let page = {}

    if (app.$wp) {
      page = await app.$wp
        .pages()
        .slug(params.slug)
        .embed()
        // .param('lang', i18n.locale)
        .then((res) => first(res))
    } else {
      page = await app
        .$content('pages', params.slug)
        .fetch()
        .catch(() => null)
    }

    if (!page) {
      error({ statusCode: 404, message: 'Pagina niet gevonden' })
    }

    if (page?.translated_slugs) {
      const slugs = {}
      for (const lang in page.translated_slugs) {
        slugs[lang] = { slug: page.translated_slugs[lang] }
      }
      await store.dispatch('i18n/setRouteParams', slugs)
    }

    return {
      page,
    }
  },
  computed: {
    template() {
      if (this.page) {
        const filename = this.page.template
          ? upperFirst(camelCase(this.page.template))
          : 'PageDefault'
        return () => import(`@/components/${filename}.vue`)
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
