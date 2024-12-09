<script>
import axios from 'axios';
import { mapActions } from 'vuex';
import gsap from 'gsap';

export default {
  name: 'ProductList',
  data() {
    return {
      products: [],
      highlightedPrices: [19.99, 8.99, 69.99, 79.99, 2.99, 6.99],
      shopCount: 0,
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
    },
    ...mapActions(['addToCart']),
    nextSlide() {
      const productList = this.$el.querySelector('.product-list');
      const productCount = this.products.length;
      const visibleProducts = 4;
      const productWidth = 285;

      const maxTranslateX = -(productCount - visibleProducts) * productWidth;

      const currentTranslateX = gsap.getProperty(productList, 'x');


      if (currentTranslateX - productWidth >= maxTranslateX) {
        gsap.to(productList, {
          x: currentTranslateX - productWidth,
          duration: 0.3,
          ease: 'power2.inOut'
        });
      } else {

        gsap.to(productList, {
          x: maxTranslateX,
          duration: 0.3,
          ease: 'power2.inOut'
        });
      }
    },

    prevSlide() {
      const productList = this.$el.querySelector('.product-list');
      const currentTranslateX = gsap.getProperty(productList, 'x');

      if (currentTranslateX < 0) {
        gsap.to(productList, {
          x: '+=285px',
          duration: 0.3,
          ease: 'power2.inOut'
        });
      }
    },
    handleMouseDown(event) {
      this.isDragging = true;
      this.startX = event.clientX || event.touches[0].clientX;
    },
    handleMouseMove(event) {
      if (!this.isDragging) return;
      const x = event.clientX || event.touches[0].clientX;
      const deltaX = x - this.startX;

      if (Math.abs(deltaX) > 50) {
        if (deltaX < 0) {
          this.nextSlide();
        } else {
          this.prevSlide();
        }
        this.startX = x;
        this.isDragging = false;
      }
    },
    handleMouseUp() {
      this.isDragging = false;
    },
    addMouseAndTouchEvents() {
      const productList = this.$el.querySelector('.product-list');

      productList.addEventListener('mousedown', this.handleMouseDown);
      productList.addEventListener('mousemove', this.handleMouseMove);
      productList.addEventListener('mouseup', this.handleMouseUp);
      productList.addEventListener('mouseleave', this.handleMouseUp);

      productList.addEventListener('touchstart', this.handleMouseDown);
      productList.addEventListener('touchmove', this.handleMouseMove);
      productList.addEventListener('touchend', this.handleMouseUp);
    }
  },
  mounted() {
    this.addMouseAndTouchEvents();
  },
};
</script>
<template>
  <div class="slider-container flex    lg:overflow-hidden  px-[15px] md:px-0 ">

    <div class="product-list ">
      <div v-if="products.length === 0">
        <p>Brak produktów do wyświetlenia.</p>
      </div>
      <div v-else class="  md:gap-[30px]  lg:gap-x-[10px] gap-x-[8px] gap-y-[30px] md:gap-x-[30px] xl:gap-x-[30px] flex-col xl:flex-row  grid grid-cols-2   lg:grid md:grid-cols-3 xl:flex  ">
        <div v-for="product in products" :key="product.id" :class=" {'product-card': true, 'highlight': product.price === 19.99} " class=" border md:w-[255px]">
          <!-- Zawartość karty produktu -->
          <div class="image-container  flex justify-center ">
            <img :src="product.thumbnail" alt="imageprodukt" class="product-image"/>
          </div>
          <div class="flex justify-start px-[23px] md:hidden flex-wrap pt-[20px]">
            <p class=" text-[0.7rem] ">{{ product.title }}</p>
          </div>
          <div v-if="highlightProduct(product.price)" class="px-[23px] md:flex justify-between hidden  ">
            <div class="flex items-center">

              <button class="rounded-[5px] bg-green-500 text-white text-[0.9rem] px-[5px] py-[2px]">-15%</button>
              <p class="line-through pl-[5px]">{{ product.price }} zł</p>
            </div>
            <div v-if="highlightProduct(product.price)">
              <button class="favorite-button border border-blue-500 rounded-[5px] py-[8px] px-[8px] hidden md:flex">
                <img src="../assets/hearth3.png" alt="hearth" class="favorite-icon max-h-[16px] "/>
              </button>
            </div>
          </div>
          <div class="price-and-favorite flex md:text-[1.5rem] font-bold px-[23px] justify-between">
            <div class="price">
              <p class="price-main">{{ product.price.toFixed(2) }} zł</p>
            </div>
            <div v-if="!highlightProduct(product.price)">
              <button class="favorite-button border border-blue-500 rounded-[5px] py-[8px] px-[8px] hidden md:flex">
                <img src="../assets/hearth3.png" alt="hearth" class="favorite-icon max-h-[16px]"/>
              </button>
            </div>
          </div>
          <div class="net-price text-gray-400 px-[23px] pb-[20px] hidden md:flex ">
            <p>{{ (product.price * 1.23).toFixed(2) }} zł netto</p>
          </div>
          <div class="buttons md:flex justify-between px-[23px]  hidden">
            <button class="free-shipping-button px-[8px] py-[4px] bg-blue-200 text-blue-600 rounded-[5px] text-[0.8rem]">Darmowa dostawa</button>
            <button class="cashback-button px-[8px] py-[4px] bg-gray-200 rounded-[5px] ml-[5px] text-[0.8rem]">Cashback</button>
          </div>
          <div class="description pt-[10px] text-gray-700 pb-[10px] px-[23px] text-[0.8rem] hidden md:flex">
            <p>{{ product.description }}</p>
          </div>
          <div class="actions flex justify-between px-[23px]  text-[0.6rem]  md:text-[0.7rem] pt-[10px] pb-[20px] md:pb-0">
            <button @click="handleAddToCart(product)"  class="add-to-cart-button text-blue-500 border border-blue-500 py-[8px] px-[16px] rounded-[5px] shop-button">Dodaj do koszyka</button>
            <button class="follow-button text-gray-700 py-[8px] pl-[16px] hidden md:flex">Obserwuj</button>
          </div>
          <div class="additional-info pt-[10px] pb-[25px] text-gray-400 px-[23px] text-[0.8rem] hidden md:flex ">
            <p>Dodatkowa treść uzupełniająca</p>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden xl:flex">
      <div class=" absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-full xl:flex items-center  arrow arrow-left" @click="prevSlide">
        <img src="../assets/cherwon-left.png" alt="chewron left" class="cursor-pointer"/>
      </div>
      <div class=" absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-full xl:flex items-center  arrow arrow-right"  @click="nextSlide">
        <img src="../assets/chewron-right.png" alt="chewron right" class="cursor-pointer"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slider-container {
  max-width: 1110px;
}


.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

}

.arrow-left {
  left: -35px;

}

.arrow-right {
  right: -35px;

}
.shop-button:active {
  transform:scale(0.99);
  background: #fdf4f8;
}
</style>