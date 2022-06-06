import { isUndefined } from 'lodash'

export const state = () => ({
  navOpen: false,
  modalsOpen: {
    calendly: false,
  },
  siteLoading: false, // Set to true when implementing the loader component.
})

export const getters = {
  modalOpen(state, modal) {
    return state.modalsOpen[modal]
  },
}

export const mutations = {
  toggleNav(state, open) {
    if (isUndefined(open)) {
      state.navOpen = !state.navOpen
    } else {
      state.navOpen = !!open
    }
  },
  toggleModal(state, modal, open) {
    if (isUndefined(open)) {
      state.modalsOpen[modal] = !state.modalsOpen[modal]
    } else {
      state.modalsOpen[mopdal] = !!open
    }
  },
  setSiteLoaded(state) {
    state.siteLoading = false
  },
}
