import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notices: [],
    currentNotice: null,
  },
  mutations: {
    queueNotice(state, payload) {
      state.notices.push(payload);
    },
  },
  actions: {
    queueNotice({ commit }, payload) {
      commit('queueNotice', payload);
    },
  }
})
