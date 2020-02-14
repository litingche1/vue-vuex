import Vue from 'vue'
import Vuex from 'vuex'
import mp from './mp/mp'
import mm from './mm/mm'
import ms from './ms/ms'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'I am litingchen'
  },
  mutations: {},
  actions: {},
  modules: {
    mp: mp,
    mm: mm,
    ms: ms,
  },
  getters: {

  }
})