<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{switchName()}}</p>
    <button>Switch the name assign in the parent from the children's component</button>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String
    }
  },
  methods: {
    switchName() {
      return this.name
        .split("")
        .reverse()
        .join("");
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
