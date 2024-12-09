<script >

import ProductsCart from "../components/ProductsCart.vue";
import CartFooter from "../components/CartFooter.vue";
export default {
  components: {
    CartFooter,
    ProductsCart,
  }
}
</script>

<template>
  <div class="flex flex-col   ">
    <ProductsCart/>
    <div class="flex flex-col items-center">
      <CartFooter />
    </div>
  </div>
</template>

<style scoped>

</style>