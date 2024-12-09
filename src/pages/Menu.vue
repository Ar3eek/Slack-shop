<script >
import AsaideBox from "../components/AsaideBox.vue";
import menuBar from "../components/MenuBar.vue";
import menuBar2 from "../components/MenuBar2.vue";

export default {
  components: {
    AsaideBox,
    menuBar,
    menuBar2,


  }
}
</script>

<template>
  <div class=" pb-[50px] ">
    <menu-bar2/>
    <AsaideBox class=" mx-[20px] "/>
  </div>

</template>

<style scoped>

</style>