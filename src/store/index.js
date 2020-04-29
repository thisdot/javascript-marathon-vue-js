import Vue from "vue";
import Vuex from "vuex";
import { API, graphqlOperation } from "aws-amplify";
import { listTodos } from "../graphql/queries";

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
      const {
        data: {
          listTodos: { items }
        }
      } = await API.graphql(graphqlOperation(listTodos));
      commit("SET_POSTS", items);
    },
    addPost({ commit }, payload) {
      commit("ADD_POSTS", payload);
    }
  }
});
