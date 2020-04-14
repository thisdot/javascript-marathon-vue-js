<template>
  <div>
    <h2>Create your blog post</h2>
    <label
      >Title
      <input v-model="post.title" type="text" />
    </label>
    <label
      >Description:
      <textarea v-model="post.description"></textarea>
    </label>
    <button @click="addPost">Submit</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      post: {
        title: "ciao",
        description: ""
      }
    };
  },
  methods: {
    ...mapActions(["addPost"])
  }
};
</script>

<style></style>
