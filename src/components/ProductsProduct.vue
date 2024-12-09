<script>
import axios from 'axios';
import ProductSlider from './ProductsSlider.vue';


export default {
  name: 'ProductList',
  components: {
    ProductSlider,
  },
  data() {
    return {
      products: [],
      count: 1,
    };
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get('https://dummyjson.com/products?limit=20&skip=0&select=id,title,price,thumbnail,description');
        this.products = response.data.products;
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    down() {
      if (this.count > 1) this.count--;
    },
    up() {
      this.count++;
    },
  },
  async created() {
    await this.fetchProducts();
  },
};
</script>

<template>
  <div class="flex flex-col text-[0.98rem] mx-auto  ">
    <article class="flex  flex-wrap  justify-center gap-[30px]  ">
      <div class="flex flex-col flex-wrap  ">
        <div class="flex justify-center ">
          <img :src="products[0]?.thumbnail" alt="image" class="lg:h-[540px] h-[230px]">
        </div>
        <div class="flex flex-wrap gap-x-[7px]   justify-center  ">
          <img :src="products[1]?.thumbnail" alt="image" class="h-[169px]">
          <img :src="products[2]?.thumbnail" alt="image" class="h-[168px]">
          <img :src="products[3]?.thumbnail" alt="image" class="h-[169px]">
        </div>
      </div>
      <div class=" xl:pr-[200px]    ">
        <p class="text-[1.5rem] text-gray-600 font-bold pl-[30px] md:pl-0 ">{{ products[0]?.title }}</p>
        <div class="flex items-center pt-[14px]  justify-center md:justify-start">
          <button v-if="products[0]" class="rounded-[5px] bg-green-500 text-white text-[0.9rem] px-[5px] py-[2px] ">-15%</button>
          <p v-if="products[0]" class="line-through pl-[5px] ">{{ (products[0].price * 1.2).toFixed(2) }} zł</p>
        </div>
        <div class="flex items-baseline text-gray-700  justify-center md:justify-start">
          <p v-if="products[0]" class="text-[2.1rem] font-bold">{{ products[0].price.toFixed(2) }} zł</p>
        </div>
        <div class="text-gray-400 text-[0.8rem] hidden md:flex">
          <p v-if="products[0]">Indeks: {{ products[0].id }}</p>
        </div>
        <div class="flex text-[0.8rem] pt-[15px] pb-[15px] pl-[60px] md:pl-0">
          <p class="font-bold text-gray-600">235 osób <p class="text-gray-600 pl-[3px]">kupiło ten produkt</p></p>
        </div>
        <div class=" flex md:gap-x-[150px] gap-x-[40px] justify-center md:justify-start  ">
          <div class="flex flex-col  text-[0.7rem] ">
            <div class="pb-[15px]">
              <p class="text-gray-700">Marka</p>
              <p class="text-gray-600 font-bold">essense</p>
            </div>
            <div class="pb-[15px]">
              <p class="text-gray-700">Materiał</p>
              <p class="text-gray-600 font-bold">Fluid</p>
            </div>
            <div class="pb-[15px]">
              <p class="text-gray-700">Szerokość</p>
              <p class="text-gray-600 font-bold">5cm</p>
            </div>
            <div class="pb-[15px]">
              <p class="text-gray-700"> Czas działania  </p>
              <p class="text-gray-600 font-bold">24h</p>
            </div>
            <div>
              <p class="text-gray-700">Permanentny </p>
              <p class="text-gray-600 font-bold">Nie</p>
            </div>
          </div>
          <div class="flex-col   text-[0.7rem] pb-[20px]  ">
            <div class="pb-[15px]">
              <p class="text-gray-700">Kolor </p>
              <p class="text-gray-600 font-bold">Czarny</p>
            </div>
            <div class="pb-[15px]">
              <p class="text-gray-700">Długość </p>
              <p class="text-gray-600 font-bold">45 cm</p>
            </div>
            <div class="pb-[15px]">
              <p class="text-gray-700">Kolor   </p>
              <p class="text-gray-600 font-bold">Czarny</p>
            </div>
            <div class="pb-[15px]">
              <p class="text-gray-700">Przeznaczenie  </p>
              <p class="text-gray-600 font-bold">Rzęsy</p>
            </div>
            <div>
              <p class="text-gray-700">Grupa wiekowa  </p>
              <p class="text-gray-600 font-bold">16+</p>
            </div>
          </div>
        </div>
        <div class="flex border-y  text-[0.7rem] xl:text-[0.9rem] py-[20px] flex-wrap justify-center gap-x-[30px] md:gap-x-[10px] gap-y-[20px] ">
          <div class="flex border rounded-[5px] ">
            <button @click="down">
              <img   src="../assets/minus.png" alt="minus" class="py-[16px] px-[4px] border-r"/>
            </button>
            <p class="py-[12px] px-[13px] counter-text">{{count}}</p>
            <button @click="up">
              <img src="../assets/plus.png" alt="plus" class="py-[16px] px-[4px] border-l"/>
            </button>
          </div>
          <div class="flex items-center border rounded-[8px]  ">
            <img src="../assets/hearthmore.png" class="mx-[12px] my-[12px]" alt="hearth"/>
          </div>
          <div class="flex text-white bg-blue-600 rounded-[5px] items-center ">
            <button class="pl-[43px]">Dodaj do koszyka</button>
            <img src="../assets/shop22.png" alt="null" class=" pr-[43px] pl-[10px] py-[12px]"/>
          </div>
        </div>
        <div class="flex flex-wrap gap-x-[20px] xl:text-[0.7rem] text-[0.6rem] pt-[38px] pb-[30px] md:pb-0  justify-center gap-y-[15px]  ">
          <div class=" flex flex-col items-center ">
            <div class="pb-[10px]">
              <img src="../assets/delivery.png" alt="delivery" class="max-h-[35px]">
            </div>
            <p>Wysyłka</p>
            <p>Do 3 dni roboczych</p>
            <p>(tylko na terenie Polski)</p>
          </div>
          <div class=" flex flex-col items-center">
            <div  class="pb-[10px]">
              <img src="../assets/box.png" alt="delivery" class="max-h-[35px]">
            </div>
            <p>Koszt Dostawy</p>
            <p>15,00 PLN</p>
            <p>(od 150 PLN bezpłatnie)</p>
          </div>
          <div class=" flex flex-col items-center">
            <div  class="pb-[10px]">
              <img src="../assets/wallet.png" alt="delivery" class="h-[35px]">
            </div>
            <p>Sposoby płatności</p>
            <p>online / płatność</p>
            <p>za pobraniem</p>
          </div>
        </div>
      </div>
    </article>
    <main class="  flex pt-[72px] flex-col  gap-y-[110px] px-[10px] ">
      <div class="flex w-full justify-center  flex-wrap gap-x-[100px] items-center">
        <div class="">
          <img :src="products[6]?.thumbnail" alt="image" class="md:w-[540px] md:h-[404px] w-[300px] h-[300px]  "  />
        </div>
        <div class="">
          <div class=" font-bold  text-[2.4rem] pb-[24px] pt-[54px] ">
            <p>{{ products[6]?.title }}</p>
          </div>
          <div class="flex break-words overflow-hidden whitespace-normal xl:w-64  ">
            {{products[6]?.description}}
          </div>
          <div class="">
            <p class="pt-[15px]">Nie zwlekaj i zamów {{ products[6]?.title }}</p>
          </div>
        </div>
      </div>
      <div class="flex w-full justify-center  flex-wrap flex-row-reverse gap-x-[100px] items-center ">
        <div class="">
          <img :src="products[7]?.thumbnail" alt="image" class="md:w-[540px] md:h-[404px] w-[300px] h-[300px]" />
        </div>
        <div class="">
          <div class=" font-bold  text-[2.4rem] pb-[24px] pt-[54px] ">
            <p>{{ products[7]?.title }}</p>
          </div>
          <div class="flex break-words overflow-hidden whitespace-normal xl:w-64  ">
            {{products[7]?.description}}
          </div>
          <div class="">
            <p class="pt-[15px]">Nie zwlekaj i zamów {{ products[7]?.title }}</p>
          </div>
        </div>
      </div>
      <div class="flex w-full justify-center  flex-wrap gap-x-[120px] items-center ">
        <div class="">
          <img :src="products[8]?.thumbnail" alt="image" class="md:w-[540px] md:h-[404px] w-[300px] h-[300px]" />
        </div>
        <div class="">
          <div class=" font-bold  text-[2.4rem] pb-[24px] pt-[54px] ">
            <p>{{ products[8]?.title }}</p>
          </div>
          <div class="flex break-words overflow-hidden whitespace-normal xl:w-64  ">
            {{products[8]?.description}}
          </div>
          <div class="">
            <p class="pt-[15px]">Nie zwlekaj i zamów {{ products[8]?.title }}</p>
          </div>
        </div>
      </div>
      <div class="flex w-full justify-center  flex-wrap flex-row-reverse gap-x-[100px] items-center ">
        <div class="">
          <img :src="products[9]?.thumbnail" alt="image" class="md:w-[540px] md:h-[404px] w-[300px] h-[300px]" />
        </div>
        <div class="">
          <div class=" font-bold  text-[2.4rem] pb-[24px] pt-[54px] ">
            <p>{{ products[9]?.title }}</p>
          </div>
          <div class="flex break-words overflow-hidden whitespace-normal xl:w-64  ">
            {{products[9]?.description}}
          </div>
          <div class="">
            <p class="pt-[15px]">Nie zwlekaj i zamów {{ products[9]?.title }}</p>
          </div>
        </div>
      </div>
    </main>
  </div>
  <div>
    <h2 class="text-[1.8rem] font-bold pb-[22.5px]  w-full flex justify-center mx-auto   pt-[100px]  ">
      Produkty powiązane
    </h2>
  </div>
  <div class="slider flex  justify-center ">
    <div class="slider ">
      <div class=" relative pb-[100px] ">
        <ProductSlider/>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>