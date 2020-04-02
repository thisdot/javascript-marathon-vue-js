export default {
  props: {
    lightTextColour: {
      type: String,
      default: "#252525"
    }
  },
  mounted() {
    console.log("Created triggered");
  },
  methods: {
    logEvent() {
      console.log("This is a log event.");
    }
  }
};
