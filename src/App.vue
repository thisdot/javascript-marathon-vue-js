<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div v-if="posts.length === 0">Loading...</div>
    <div v-else v-for="post in posts" :key="post.id">
      <Post v-bind:title="post.title" :description="post.description" />
    </div>
  </div>
</template>

<script>
import Post from "./components/Post.vue";
import Log from "./mixins/log.js";

import { mapActions, mapState } from "vuex";

export default {
  name: "App",
  mixins: [Log],
  components: {
    Post
  },
  // data() {
  //   return {
  //     posts: []
  //   };
  // },
  computed: {
    ...mapState(["posts"])
  },
  methods: {
    ...mapActions(["fetchPosts"])
  },
  async mounted() {
    this.fetchPosts();
    //this.posts = await fakeApiCall.fetchData();
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
