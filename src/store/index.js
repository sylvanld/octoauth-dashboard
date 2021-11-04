import Vue from 'vue'
import Vuex from 'vuex'

import application from './application'
import cdn from './cdn'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    application,
    cdn
  }
})
