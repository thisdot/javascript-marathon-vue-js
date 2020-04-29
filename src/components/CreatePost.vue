<template>
  <div>
    <h2>Create your blog post</h2>
    <label
      >Title
      <input data-testId="title" v-model="post.title" type="text" />
    </label>
    <label
      >Description:
      <textarea data-testId="description" v-model="post.description"></textarea>
    </label>
    <button @click="addPost(post)">Submit</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      post: {
        title: "default title",
        description: "default description"
      }
    };
  },
  methods: {
    ...mapActions(["addPost"])
  }
};
</script>

<style></style>
