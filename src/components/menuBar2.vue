<script >
import Slider from '@vueform/slider'
import '@vueform/slider/themes/default.css'

export default {
  data () {
    return {
      isExp: true,
      isBedroom:true,
      isLiving:true,
      isExpanded: true,
      isBedroomExpanded:true,
      isLivingRoomExpanded:true,
      value: [30, 30000],
    }
  },
  components: {
    Slider,
  },

  methods: {
    toggleBed() {
      this.isBedroom = !this.isBedroom;
    },


  }
}
</script>

<template>
  <div v-if="isExp" class=" flex flex-col  ">
    <router-link to="/"  class=" flex justify-start  px-[20px] bg-gray-100 py-[10px] items-center ">
      <img  src="/src/assets/menub.png" alt="menu" @click="toggleBed" class="h-[50px] cursor-pointer border rounded-[50%] px-[10px] py-[10px]">
      <div  class=" pl-[20px]">Strona Główna </div>
    </router-link>

  </div>
</template>

<style >

</style>