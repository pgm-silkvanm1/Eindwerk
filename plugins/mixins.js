import Vue from 'vue'
import global from '~/assets/js/mixins/global'
import loading from '~/assets/js/mixins/loading'
import animation from '~/assets/js/mixins/animation'

export default function ({ app }) {
  Vue.mixin(global)
  Vue.mixin(loading)
  Vue.mixin(animation)
}
