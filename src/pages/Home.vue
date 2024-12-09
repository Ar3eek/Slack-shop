<script>
import AsaideBox from '../components/AsaideBox.vue';
import Footer from "../components/Footer.vue";
import Products from "../components/Products.vue";
import TopNav from "../components/TopNav.vue";
import SeoFooter from "../components/SeoFooter.vue";
import menuBar from "../components/menuBar.vue";
import menuBar2 from "../components/menuBar.vue";

export default {
  components: {
    TopNav,
    Products,
    AsaideBox,
    Footer,
    SeoFooter,
    menuBar,
    menuBar2,

  },
};
</script>

<template>
  <div class="mx-auto ">
    <TopNav class="" />
    <div class="md:flex justify-evenly 2xl:justify-center 2xl:gap-x-[20px] gap-x-[10px] mx-auto pt-[30px]  ">
      <menuBar class="flex justify-center md:hidden   "/>
      <AsaideBox class="  hidden md:flex md:flex-col "  />
      <Products class="relative" />
    </div>
  </div>
  <div class="flex flex-col justify-center  pt-[30px] md:pt-[196px] mx-auto   ">
    <SeoFooter/>
    <Footer/>
  </div>


</template>

<style scoped>


</style>