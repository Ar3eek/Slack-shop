<script >

import ProductsCart from "../components/ProductsCart.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    Footer,
    ProductsCart,
  }
}
</script>

<template>
  <div class="flex flex-col   ">
    <ProductsCart/>
    <div class="flex flex-col items-center">
      <Footer />
    </div>
  </div>
</template>

<style scoped>

</style>