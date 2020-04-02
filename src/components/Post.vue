<template>
  <div>
    <h2 v-text="title"></h2>
    <p v-if="!fullText">{{ shortText }}</p>
    <p v-else>{{ description }}</p>

    <button @click="toggleText">{{ buttonText }}</button>
  </div>
</template>

<script>
import Log from "../mixins/log.js";

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
  mixins: [Log],
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
      this.logEvent();
      this.fullText = !this.fullText;
    }
  }
};
</script>

<style lang="scss">
h2 {
  color: red;
}
</style>
