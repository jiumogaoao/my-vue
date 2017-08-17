import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
let mutations = {}
Object.assign(mutations, user.mutations)
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    count: 0
  },
  modules: {
    user
  }
})
