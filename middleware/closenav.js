/** closes nav on route change */
export default function ({ route, store }) {
  store.commit('ui/toggleNav', false)
}
