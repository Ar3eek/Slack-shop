<script >
import Slider from '@vueform/slider'
import '@vueform/slider/themes/default.css'

export default {
  data () {
    return {
      isExpanded: true,
      isBedroomExpanded:true,
      isLivingRoomExpanded:true,
      isColor:true,
      isPrice:true,
      value: [30, 30000]

    }
  },
  components: {
    Slider,

  },

  methods: {
    toggleBedroom() {
      this.isBedroomExpanded = !this.isBedroomExpanded;
    },
    toggleLivingRoom() {
      this.isLivingRoomExpanded = !this.isLivingRoomExpanded;
    },
    toggleColor() {
      this.isColor = !this.isColor;
    },
    togglePrice() {
      this.isPrice = !this.isPrice;
    }

  },

}
</script>

<template>
  <aside>
    <div>
      <div class="flex justify-between items-center ">
        <p class="text-black py-[4px] text-[0.9rem]">Kategoria</p>
        <img src="../assets/minus.png" alt="minus" class="px-[8px] py-[8px]"/>
      </div>
      <div v-if="isExpanded" class="">
        <div class="flex justify-between  items-center text-[0.9rem]   " @click="toggleBedroom" >
          <p>Sypialnia</p>
          <img
              :src="isBedroomExpanded ? 'src/assets/upp.png' : 'src/assets/downn.png'"
              alt="toggle"
              class="h-[32px] cursor-pointer"
          />
        </div>
      </div>
      <div v-if="isBedroomExpanded" class="flex flex-col  items-start pl-[15px] text-[0.9rem] ">
        <router-link to="/product" > Pościel (127) </router-link>
        <button to="/slider" class="text-gray-500 " >Prześcieradła (22)</button>
        <button class="text-gray-500" >Kołdry, poduszki (6)</button>
        <button class="text-gray-500" >Koce, narzuty (209)</button>
        <button class="text-gray-500" >Dywany (67)</button>
        <button class="text-gray-500" >Zasłony, firany (76)</button>
        <button class="text-gray-500" >Poszewki dekoracyjne (244)</button>
      </div>
      <div class="flex justify-between  items-center text-[0.9rem] h-[32px]" @click="toggleLivingRoom">
        <p>Salon</p>
        <img
            :src="isLivingRoomExpanded ? 'src/assets/upp.png' : 'src/assets/downn.png'"
            alt="toggle"
            class="h-[32px] cursor-pointer"
        />
      </div>
      <div v-if="isLivingRoomExpanded" class="flex flex-col  items-start pl-[15px] text-[0.9rem]  ">
        <button class="text-gray-500" >Dekoracje (706)</button>
        <button class="text-gray-500" >Ramki, obrazy (110)</button>
        <button class="text-gray-500" >Zegary (113)</button>
      </div>
      <div class="flex justify-between  items-center text-[0.9rem]   ">
        <p>Łazienka</p>
        <img src="../assets/downn.png" alt="upp" class="h-[32px] cursor-pointer " @click="up"/>
      </div>
      <div class="flex justify-between  items-center text-[0.9rem]   py-[6px]  ">
        <p>Kuchnia</p>
        <img src="../assets/downn.png" alt="upp" class="h-[32px] cursor-pointer " @click="up"/>
      </div>
      <div class="flex justify-between  items-center text-[0.9rem]   py-[6px] ">
        <p>Jadalnia</p>
        <img src="../assets/downn.png" alt="upp" class="h-[32px] cursor-pointer " @click="up"/>
      </div>
      <div class="flex justify-between  items-center text-[0.9rem] h-[32px]  py-[6px]  ">
        <p>Akcesoria</p>
        <img src="../assets/downn.png" alt="upp" class="h-[32px] cursor-pointer " @click="up"/>
      </div>
      <div class="flex justify-between  items-center text-[0.9rem] h-[32px]  py-[6px] mb-[21px ] ">
        <p>Wyprzedaż</p>
        <img src="../assets/downn.png" alt="upp" class="h-[32px] cursor-pointer " @click="up"/>
      </div>
    </div>
    <hr/>
    <div   class="flex justify-between pr-[8px] pt-[6px] pb-[4px] " @click="toggleColor">
      <p>Kolor</p>
      <img :src="isColor ? 'src/assets/minus.png' : 'src/assets/plus.png'"/>
    </div>
    <div  v-if="isColor" class="  grid grid-cols-6  py-[20px]">
      <button class=" mb-[8px]  w-[30px] h-[30px] bg-orange-200 text-orange-200">.</button>
      <button class=" mb-[8px]  w-[30px] h-[30px] bg-sky-200"   ></button>
      <button class=" mb-[8px]  w-[30px] h-[30px] bg-green-600" ></button>
      <button class=" mb-[8px]  w-[30px] h-[30px] bg-green-200" ></button>
      <button class=" mb-[8px]  w-[30px] h-[30px] bg-orange-300"></button>
      <button class=" mb-[8px]  w-[30px] h-[30px] bg-green-600" ></button>
      <button class=" mb-[8px]  w-[30px] h-[30px] bg-orange-300" ></button>
      <button class=" mb-[8px]  w-[30px] h-[30px] bg-green-200" ></button>
      <button class=" mb-[8px]  w-[30px] h-[30px] bg-orange-300" ></button>
      <button class=" mb-[8px]  w-[30px] h-[30px] bg-sky-200 text-sky-200" >2</button>
      <button class=" mb-[8px]  w-[30px] h-[30px] bg-green-600" ></button>
      <button class=" mb-[8px]  w-[30px] h-[30px] bg-sky-200"></button>
      <button class=" mb-[8px]  w-[30px] h-[30px] bg-blue-300" ></button>
      <button class=" mb-[8px]  w-[30px] h-[30px] bg-green-200"></button>
      <button class=" mb-[8px]  w-[30px] h-[30px] bg-rose-200" ></button>
      <button class=" mb-[8px]  w-[30px] h-[30px] bg-green-200" ></button>
      <button class=" mb-[8px]  w-[30px] h-[30px] bg-orange-200" ></button>
      <button class=" mb-[8px]  w-[30px] h-[30px] bg-green-200 text-green-200" >2</button>
    </div>
    <hr/>
    <div class="flex justify-between pr-[8px] pt-[6px] pb-[4px] text-[1rem]  ">
      <p>Cena</p>
      <img src="../assets/minus.png" alt="minus"/>
    </div>
    <div>
      <div class="pt-[20px] px-[10px]" >
        <Slider v-model="value" :min="30" :max="30000" range class="custom-slider"/>
      </div>
      <div class="flex justify-between pt-[20px] pb-[20px] items-center text-[0.7rem] ">
        <p> {{ value[0] }} zł - {{ value[1] }} zł </p>
        <button class="text-white bg-blue-600 px-[16px] py-[8px] rounded-[5px]">Filtruj</button>
      </div>
    </div>
    <hr/>
    <div  class="flex justify-between pr-[8px] pt-[6px] pb-[20px]  text-gray-800">
      <p>Cena</p>
      <img :src="isPrice ? 'src/assets/minus.png' : 'src/assets/plus.png'" @click="togglePrice"/>
    </div>
    <div v-if="isPrice" class="">
      <div class="flex pl-[16px] text-[0.9rem]">
        <input type="checkbox" class="" >
        <p class="pl-[10px]">home&you (1969)</p>
      </div>
      <div class="flex pl-[16px] text-[0.9rem]">
        <input type="checkbox">
        <p class="pl-[8px]" >Disney (3)</p>
      </div>
      <div class="flex pl-[16px] text-[0.9rem]">
        <input type="checkbox">
        <p class="pl-[8px]">Essex (2)</p>
      </div>
      <div class="flex pb-[40px] pl-[16px] text-[0.9rem]">
        <input type="checkbox">
        <p class="pl-[8px]">Nachtmann (2)</p>
      </div>
    </div>
    <hr/>
    <div class="flex items-center justify-center md:justify-start ">
      <button class="pt-[20px] pl-[16px]"> Resetuj Wszystkie filtry</button>
    </div>

  </aside>
</template>

<style >
.slider-connect {
  background: black;
}
.slider-touch-area {
  height: 100%;
  background: black;
  border-radius: 50%;
}
.slider-connects {
  overflow: hidden;
  z-index: 0;
  background:whitesmoke ;
}
.slider-tooltip {
  display: none;
}

</style>