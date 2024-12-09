<script>
import axios from 'axios';
import { mapActions } from 'vuex';

export default {
  name: 'ProductList',
  data() {
    return {
      products: [],
      highlightedPrices: [19.99, 8.99, 69.99, 79.99, 2.99, 6.99],
      shopCount: 0,
      notification: {
        visible: false,
        message: '',
      },
    };
  },
  async created() {
    await this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        this.products = response.data.products;
      } catch (error) {
        console.error('Błąd podczas pobierania produktów:', error);
      }
    },
    highlightProduct(price) {
      return this.highlightedPrices.includes(price);
    },
    handleAddToCart(product) {
      this.addToCart(product);
      this.notification.message = `Dodano produkt: ${product.title} do koszyka!`;
      this.notification.visible = true;

      setTimeout(() => {
        this.notification.visible = false;
      }, 3000);
    },
    ...mapActions(['addToCart']),
  }
};

</script>

<template>
  <div class="flex flex-col   px-[20px] md:px-0 ">
    <div v-if="notification.visible" class="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-4  rounded shadow-lg z-50 ">
      {{ notification.message }}
    </div>
    <div class="flex md:justify-between  justify-center pb-[28px]  flex-col sm:flex-row  items-center   ">
      <p class="text-[0.8rem] text-gray-700 py-[8px]">Produkty 1-30 z 1242</p>
      <div class="flex  ">
        <div class="py-[8px] pr-[10px] text-[0.7rem]">
          <p>Sortuj</p>
        </div>
        <div class="flex  border text-gray-700 py-[8px] rounded-[5px] px-[12px] items-center text-[0.7rem] ">
          <button class="pr-[16px]">Polecane </button>
          <img src="../assets/arrowdown.png"  alt="arrowdonw" />
        </div>
      </div>
    </div>
    <main class=" w-full justify-center flex  ">
      <div v-if="products.length === 0">
        <p>Brak produktów do wyświetlenia.</p>
      </div>
      <div v-else class=" grid grid-cols-2  gap-x-[4px] sm:grid-cols-2 sm:gap-x-[40px] md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-[10px] lg:gap-x-[5px] xl:gap-x-[30px] gap-y-[20px]    ">
        <div v-for="product in products" :key="product.id" :class=" {'product-card': true, 'highlight': product.price === 19.99}  " class="md:w-[255px]    ">
          <div class="image-container ">
            <img :src="product.thumbnail" alt="imageprodukt" class="product-image md:h-[233px]     "/>
          </div>
          <div class="flex justify-start px-[23px] md:hidden flex-wrap">
            <p class=" text-[0.7rem] ">{{ product.title }}</p>
          </div>
          <div v-if="highlightProduct(product.price)" class="px-[23px] md:flex justify-between hidden   ">
            <div class="flex items-center ">
              <button class="rounded-[5px] bg-green-500 text-white text-[0.9rem] px-[5px] py-[2px]">-15%</button>
              <p class="line-through pl-[5px] ">{{ product.price }} zł</p>
            </div>
            <div v-if="highlightProduct(product.price)">
              <button class="favorite-button border border-blue-500 rounded-[5px] py-[8px] px-[8px]  ">
                <img src="../assets/hearth3.png" alt="hearth" class="favorite-icon max-h-[16px]"/>
              </button>
            </div>
          </div>
          <div class=" flex text-[0.8rem]  md:text-[1.5rem] font-bold px-[23px] justify-between  ">
            <div class="price">
              <p class="price-main">{{ product.price.toFixed(2) }} zł</p>
            </div>
            <div v-if="!highlightProduct(product.price)">
              <button class=" border border-blue-500 rounded-[5px] py-[8px] px-[8px] hidden md:flex ">
                <img src="../assets/hearth3.png" alt="hearth" class="favorite-icon max-h-[16px] "/>
              </button>
            </div>
          </div>
          <div class="net-price text-[0.8rem]  text-gray-400 px-[23px]  md:pb-[20px] md:flex hidden">
            <p>{{ (product.price * 1.23).toFixed(2) }} zł netto</p>
          </div>
          <div class="buttons md:flex justify-between px-[23px] hidden">
            <button class="free-shipping-button px-[8px] py-[4px] bg-blue-200 text-blue-600 rounded-[5px] text-[0.8rem]">Darmowa dostawa</button>
            <button class="cashback-button px-[8px] py-[4px] bg-gray-200 rounded-[5px] ml-[5px] text-[0.8rem]">Cashback</button>
          </div>
          <div class="description pt-[10px] text-gray-700 pb-[10px] px-[23px] text-[0.8rem] hidden md:flex">
            <p>{{ product.description }}</p>
          </div>
          <div class=" flex justify-between px-[23px] text-[0.7rem] pt-[10px]">
            <button @click="handleAddToCart(product)"  class="add-to-cart-button text-blue-500 md:text-[0.7rem] text-[0.6rem] px-[4px] border border-blue-500 py-[4px] md:py-[8px] md:px-[16px] rounded-[5px] shop-button">Dodaj do koszyka</button>
            <button class="follow-button text-gray-700 py-[8px] pl-[16px] hidden md:flex">Obserwuj</button>
          </div>
          <div class=" md:pt-[20px] pb-[25px] text-gray-400 md:px-[23px]   text-[0.7rem] ">
            <p class="md:flex hidden">Dodatkowa treść uzupełniająca</p>
          </div>
        </div>
      </div>
    </main>
    <div class="flex md:justify-between pt-[40px] menu2 flex-wrap justify-center ">
      <div class="flex  text-[0.7rem] md:text-[0.9rem] productSide ">
        <button class="py-[8px] pr-[12px]">1</button>
        <button class="py-[8px] px-[12px]">2</button>
        <button class="py-[8px] px-[12px]">3</button>
        <button class="py-[8px] px-[12px] bg-blue-500 text-white rounded-[3px]">4</button>
        <button class="py-[8px] px-[12px]">5</button>
        <button class="py-[8px] px-[12px]">6</button>
        <button class="py-[8px] px-[12px]">7</button>
        <div class="py-[4] px-[7px] flex items-center">
          <img src="../assets/rightarrow.png" alt="rightarrow" class="h-[32px]"/>
        </div>
      </div>
      <div class="flex items-center productSide text-[0.7rem] md:text-[0.9rem] pt-[20px] md:pt-0">
        <p class="pr-[10px]">Pokaż</p>
        <div class="flex border text-gray-700 px-[12px] py-[8px] rounded-[5px] items-center  ">
          <button class="pr-[16px]">1 </button>
          <img src="../assets/arrowdown.png"  alt="arrowdonw" class="" />
        </div>
        <p class="pl-[10px] hidden md:flex">produktow na stronę</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.product-card {
  flex: 1;
  border: 1px solid #ddd;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}

.image-container {
  padding: 16px;
}

.shop-button:active {
  transform:scale(0.99);
  background: #fdf4f8;
}

</style>