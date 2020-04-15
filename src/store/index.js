import Vue from "vue";
import Vuex from "vuex";
import fakeApiCall from "../data/fakeApiCall";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: []
  }, //data
  getters: {
    singlePost: state => state.posts[0]
  }, //computed
  mutations: {
    SET_POSTS(state, payload) {
      state.posts = payload;
    },
    ADD_POSTS(state, payload) {
      state.posts = [...state.posts, payload];
    }
  },
  actions: {
    async fetchPosts({ commit }) {
      const posts = await fakeApiCall.fetchData();
      commit("SET_POSTS", posts);
    },
    addPost({ commit }, payload) {
      commit("ADD_POSTS", payload);
    }
  }
});
