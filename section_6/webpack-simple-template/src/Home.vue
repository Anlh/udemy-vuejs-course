<template>
  <div>
    <p>1 paragraph</p>
    <p>2 paragraph</p>
    <server-status></server-status>
    <server-status></server-status>
    <server-status></server-status>
  </div>
</template>
<script>
import ServerStatus from './ServerStatus.vue'
export default {
    components: {
        ServerStatus
    }
};
</script>
<style>
</style>


