<script >

export default {
  name: 'App',
  components: {
  }
};
</script>

<template>
  <ul>
    <li><router-link to="/"></router-link></li>
    <li><router-link to="/product"></router-link></li>
    <li><router-link to="/cart"></router-link></li>
    <li><router-link to="/login"></router-link></li>
  </ul>
  <router-view/>
</template>

<style scoped>


</style>

