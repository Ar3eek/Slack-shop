<script >
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      shopCount: 0
    };
  },
  computed: {
    ...mapGetters(['cartItems']),
    totalCartQuantity() {
      return this.cartItems.reduce((total, item) => total + item.quantity, 0);
    },
  },
};
</script>
<template>
  <body class="m-0 p-0 ">
  <header class=" py-[19px]  flex flex-wrap mx-auto sticky top-0 z-50 bg-white        ">
    <nav class="w-full   flex justify-around 2xl:justify-center 2xl:gap-x-[180px] xl:gap-x-[50px]  items-center flex-wrap     ">
      <div class=" flex flex-wrap items-center justify-center   " >
        <router-link to="/" class="pr-[29px]    flex  gap-y-[20px]">
          <img src="/src/assets/slacklogo.png" alt="slackLogo" class=" lg:h-[25px] lg:w-[100px] h-[40px] ">
        </router-link>
        <div class=" flex items-center py-[4px] rounded-[5px]  border pr-[12px]   ">
          <img src="/src/assets/img_3.png" alt="" class="h-[16px] pl-[12px] pr-[8px]">
          <input type="text" placeholder="Szukaj" class="outline-none text-[0.7rem] min-w-[256px]">
        </div>
        <div class=" flex gap-x-[10px] pl-[29px] text-[0.8rem] py-[20px] md:py-0 ">
          <button>O nas</button>
          <button>Sklepy</button>
          <button>Kontakt</button>
        </div>
      </div>
      <div class="flex  flex-wrap text-[0.8rem] md:gap-x-[8px] gap-x-[4px] lg:gap-x-[4px]  ">
        <button class="border py-[8px] px-[16px] rounded-[8px]">PL</button>
        <router-link to="/login" class="flex border bg-blue-600 rounded-[5px] items-center py-[8px] px-[16px] ">
          <button class=" text-white">Zaloguj</button>
          <img src="/src/assets/facio.png" alt="facio" class="h-[16px] pl-[8px]">
        </router-link>
        <div class="border rounded-[5px] flex items-center px-[8px] py-[8px] pointer ">
          <img src="/src/assets/hearth2.png" alt="shop" class="">
        </div>
        <router-link to="/cart" class="border rounded-[5px] flex items-center px-[17px] py-[8px] pointer">
          <img src="/src/assets/shop2.png" alt="shop" class="">
          <button  class="pl-[4px]">{{ totalCartQuantity }}</button>
        </router-link>
      </div>
    </nav>
  </header>
  <div class=" w-full flex  justify-around  border-y 2xl:justify-center 2xl:gap-x-[150px]  py-[17px] text-[0.8rem] mx-auto flex-col lg:flex-row md:px-[20px] lg:px-0 items-center  ">
    <div class=" gap-x-[20px] flex-wrap grid grid-cols-3 sm:flex pb-[30px] md:pb-0  ">
      <div class="  flex ">
        <img src="/src/assets/up.png" alt="up" class="h-[16px] pr-[4px]  ">
        <button class=" ">Wszystkie</button>
      </div>
      <button class=" ">Kategoria 1</button>
      <button class=" ">Kategoria 2</button>
      <button class=" ">Kategoria 3</button>
      <button class=" ">Kategoria 4</button>
      <button class=" ">Kategoria 5</button>
      <button class=" ">Kategoria 6</button>
      <button class=" ">Kategoria 7</button>
      <button class=" ">Kategoria 8</button>
    </div>
    <div class="flex gap-x-[10px] flex-wrap flex-col md:flex-row md:pt-[20px] lg:pt-0">
      <button class="">Nowości</button>
      <button class="">Wyprzedaż</button>
    </div>
  </div>
  <article class="w-full mx-auto  flex   lg:max-w-[965px] xl:max-w-[1180px] 2xl:max-w-[1065px] justify-center md:justify-start md:px-[20px] lg:px-0 ">
    <div class="flex  text-[0.75rem] col-span-4 items-center">
      <p class="py-[15px] text-gray-700">Strona Główna</p>
      <p class="px-[8px]">→</p>
      <p class="py-[15px]">Pościel</p>

    </div>
  </article>
  </body>
</template>

<style scoped>

</style>