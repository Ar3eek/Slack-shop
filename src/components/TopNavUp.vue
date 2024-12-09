<script >
export default {
  name:"InfoBanner",
  data() {
    return {
      isVisible: true
    };
  },
  methods: {
    closeBanner() {
      this.isVisible = false;
    }
  }
}
</script>

<template>
<div v-if="isVisible"  class="w-full bg-blue-200 mx-auto justify-between lg:px-[30px] xl:px-0  flex xl:justify-around xl:gap-x-[580px] 2xl:justify-center 2xl:gap-x-[710px] h-[40px] items-center ">
  <div class="flex items-center  ">
    <img src="../assets/info.png" alt="info" class="h-[16px]"/>
    <p class="text-[0.8rem] pl-[8px]">Dodatkowe 30% widoczne po zalogowaniu</p>
    <router-link to="/login" class="text-[0.8rem] text-blue-500 pl-[8px] ">Zaloguj</router-link>
  </div>
  <div @click="closeBanner">
    <img src="../assets/close.png" alt="close" class="cursor-pointer"/>
  </div>
</div>
</template>

<style scoped>

</style>