<template>
  <PageDefault :page="page" :front="true" />
</template>

<script>
import pagehead from '~/assets/js/mixins/page-head'

export default {
  data() {
    return {
      page: null,
    }
  },
  mixins: [pagehead],
  async asyncData({ app, error }) {
    let page = {}

    if (app.$wp) {
      page = await app.$wp.frontpage()
    } else {
      page = await app.$content('pages', 'index').fetch()
    }

    if (!page) {
      error({ statusCode: 404, message: 'Pagina niet gevonden' })
    }

    return {
      page,
    }
  },
}
</script>
