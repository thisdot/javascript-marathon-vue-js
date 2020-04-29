<template>
  <div class="post">
    <h2 data-testID="title" v-text="title">a</h2>

    <p data-testID="shortText" v-if="!fullText">{{ shortText }}</p>
    <p data-testId="description" v-else>{{ description }}</p>

    <button @click="toggleText">{{ buttonText }}</button>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: {
      type: String,
      required: false,
      default: "Default description",
      validator: function() {
        return true;
      }
    }
  },
  data() {
    return {
      fullText: false
    };
  },
  computed: {
    shortText() {
      const shortText = this.description.substring(0, 124);

      return `${shortText}...`;
    },
    buttonText() {
      return this.fullText ? "Show less" : "Show more";
    }
  },
  methods: {
    toggleText() {
      this.fullText = !this.fullText;
    }
  }
};
</script>

<style lang="scss" scoped>
.post {
  width: 600px;
  border: 1px solid grey;
  border-radius: 5px;
  box-shadow: 3px 3px 10px lightgray;
  margin-bottom: 15px;
  margin-left: auto;
  margin-right: auto;
  padding: 25px 10px;

  button {
    padding: 10px 15px;
    background-color: lightsalmon;
    border: 2px solid burlywood;
    border-radius: 10px;
    font-weight: bold;
    cursor: pointer;
  }
}
</style>
