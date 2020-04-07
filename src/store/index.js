import Vue from "vue";
import Vuex from "vuex";
import fakeApiCall from "../data/fakeApiCall";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    SET_POSTS(state, payload) {
      state.posts = payload;
    }
  },
  actions: {
    async fetchPosts({ commit }) {
      const posts = await fakeApiCall.fetchData();
      commit("SET_POSTS", posts);
    }
  },
  modules: {}
});
