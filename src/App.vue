<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div v-if="posts.length === 0">Loading..</div>
    <div v-else v-for="post in posts" :key="post.id">
      <Post v-bind:title="post.title" :description="post.description" />
    </div>
    <Create-post />
  </div>
</template>

<script>
import Post from "./components/Post.vue";
import CreatePost from "./components/CreatePost.vue";
import Log from "./mixins/log.js";

import { mapActions, mapState, mapGetters } from "vuex";
export default {
  name: "App",
  mixins: [Log],
  components: {
    Post,
    CreatePost
  },
  computed: {
    ...mapState(["posts"]),
    ...mapGetters(["singlePost"])
  },
  async created() {
    this.fetchPosts();
  },
  methods: {
    ...mapActions(["fetchPosts"])
  }
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
