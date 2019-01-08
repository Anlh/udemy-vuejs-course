<template>
  <div class="container">
    <Header></Header>
    <hr>
    <div class="row">
      <Servers></Servers>
      <ServerDetails></ServerDetails>
    </div>
    <hr>
    <Footer></Footer>
  </div>
</template>
<script>
import Servers from './Server/Servers.vue';
import ServerDetails from './Server/ServerDetails.vue';
export default {
    components: {
        Servers,
        ServerDetails
    }
}
</script>

<style>

</style>
