export const state = () => ({
  pagenotfound: null,
  menus: {
    header: [],
    hamburger: [],
    sitemap: [],
  },
  options: {},
})

export const getters = {
  headerMenu(state) {
    return state.menus.header
  },
  hamburgerMenu(state) {
    return state.menus.hamburger
  },
  sitemapMenu(state) {
    return state.menus.sitemap
  },
}

export const mutations = {
  setPageNotFound(state, { page }) {
    state.pagenotfound = page
  },
  setMenus(state, menus) {
    Object.entries(menus).forEach(([location, items]) => {
      state.menus[location] = items
    })
  },
  setOptions(state, options) {
    state.options = options
  },
}
