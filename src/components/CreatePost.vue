<template>
  <div>
    <h2>Create a blog post</h2>
    <label
      >Title:
      <input type="text" v-model="title" />
    </label>
    <label
      >Description:
      <textarea v-model="description"></textarea>
    </label>
    <button @click="createPost">Create</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      description: ""
    };
  },
  methods: {
    createPost() {
      this.$emit("createPost", {
        title: this.title,
        description: this.description
      });
    }
  }
};
</script>

<style></style>
