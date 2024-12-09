<script >
import FooterProducts from "../components/FooterProducts.vue";
import TopNavUp from "../components/TopNavUp.vue";
import ProductsProduct from "../components/ProductsProduct.vue";
import TopNavP from "../components/TopNavP.vue";

export default {
  components: {
    FooterProducts,
    TopNavUp,
    ProductsProduct,
    TopNavP,


  }
}
</script>

<template>
  <div class=" mx-auto">
    <TopNavUp class="  "/>
    <TopNavP  class="   " />
    <div class=" mx-auto pt-[30px] flex justify-center flex-col  ">
      <ProductsProduct/>
    </div>
    <div class="flex flex-col items-center">
      <FooterProducts />
    </div>
  </div>
</template>

<style scoped>

</style>