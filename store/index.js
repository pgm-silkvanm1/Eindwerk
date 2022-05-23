export const state = () => ({
  settings: {},
})

export const getters = {
  backendUrl(state) {
    return `${state.settings.url}/wp-admin`
  },
}

export const mutations = {
  initSettings(state, data) {
    state.settings = data
  },
}

export const actions = {
  async nuxtServerInit({ commit }, { app }) {
    let options, settings

    if (app.$wp) {
      const page404 = await app.$wp.notfound()
      commit('content/setPageNotFound', { page: page404 })
      settings = await app.$wp.settings()
      options = await app.$wp.options()
    } else {
      settings = await this.$content('settings').fetch()
      options = await this.$content('options').fetch()
    }

    if (options) commit('content/setOptions', options)
    if (settings) commit('initSettings', settings)
  },
}
