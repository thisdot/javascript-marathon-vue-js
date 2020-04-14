import Vue from "vue";
import Vuex from "vuex";
import Post from "./module/post";
import Comment from "./module/post";
import User from "./module/post";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Post
  }
});
