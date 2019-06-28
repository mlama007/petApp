import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notices: [],
    currentNotice: null,
  },
  getters: {
    currentNotices(state) {
      if (!state.currentNotice) {
        return [];
      }
      return [state.currentNotice];
    },
    hasNoticeToDisplay(state) {
      return !!state.currentNotice;
    }
  },
  mutations: {
    queueNotice(state, payload) {
      state.notices.push(payload);
    },
    notify(state) {
      if (!state.notices.length) {
        state.currentNotice = '';
        return;
      }
      state.currentNotice = state.notices.shift();
    },
  },
  actions: {
    queueNotice({ commit, state }, payload) {
      commit('queueNotice', payload);
      if (!state.currentNotice) {
        commit('notify');
      }
    },
    showNextNotice({ commit }) {
      commit('notify');
    },
  }
})
