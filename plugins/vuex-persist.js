import VuexPersistence from 'vuex-persist'
export default ({ store }) => {
  window.onNuxtReady(() => {
    new VuexPersistence({
      key: 'travel',
      storage: window.localStorage,
      //reducer: (state) => ({ voucherShop: state.voucherShop }),
    }).plugin(store)
  })
}
