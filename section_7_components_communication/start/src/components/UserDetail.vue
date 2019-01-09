<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{name}}</p>
    <!-- <button>Switch the name assign in the parent from the children's component</button> -->
    <button @click="resetName">Reset name</button>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  methods: {
    switchName() {
      return this.name
        .split("")
        .reverse()
        .join("");
    },
    resetName() {
      this.name = 'Hatori';
      this.$emit('nameWasReset', this.name);
    }
  },
  created() {
    console.log("created()");
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
