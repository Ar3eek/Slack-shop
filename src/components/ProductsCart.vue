<script >
import { mapGetters, mapActions } from 'vuex';
import TopNavShopCard from "./TopNavShopCard.vue";
export default {
  data () {
    return {

    }
  },
  components: {
    TopNavShopCard,
  },
  name: 'Cart',
  computed: {
    ...mapGetters(['cartItems']),

    totalCartPrice() {
      return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    },
    totalPay() {
      const deliveryCost = 15;
      return (parseFloat(this.totalCartPrice) + deliveryCost).toFixed(2);
    },

  },
  methods: {

    ...mapActions(['removeFromCart', 'updateQuantity']),

    incrase(itemId) {
      const currentQuantity = this.getProductQuantity(itemId);
      this.updateQuantity({ id: itemId, quantity: currentQuantity + 1 });
    },
    decrase(itemId) {
      const currentQuantity = this.getProductQuantity(itemId);
      if (currentQuantity > 1) {
        this.updateQuantity({ id: itemId, quantity: currentQuantity - 1 });
      }
    },
    getProductQuantity(itemId) {
      const item = this.cartItems.find(item => item.id === itemId);
      return item ? item.quantity : 1;
    }
  },
  created() {
    this.$store.dispatch('fetchCart')
  },
}
</script>

<template>
  <header class="flex flex-col  md:px-0  ">
    <TopNavShopCard class=""/>
    <article class=" flex   w-full font-bold xl:text-[1.4rem] text-[0.7rem] xl:pt-[97px] xl:pb-[101px] pb-[20px] pt-[30px]   justify-center  flex-wrap  ">
      <div class="items-center flex   w-full justify-center  ">
        <p class="py-[15px] text-gray-700  ">Koszyk</p>
        <div>
          <img src="../assets/chewron-right.png" alt="chewron-right" class=" h-[20px] pl-[7px]" />
        </div>
        <p class="py-[15px] text-gray-400  ">Dostawa i Płatność</p>
        <div>
          <img src="../assets/chewron-right.png" alt="chewron-right" class=" h-[20px] pl-[7px]" />
        </div>
        <p class="py-[15px] text-gray-400  ">Potwierdzenie</p>
      </div>
    </article>
    <div class="flex  flex-wrap justify-center pb-[76px] ">
      <div class="flex flex-wrap          ">
        <section class="flex flex-col pr-[30px]   ">
          <div class="md:flex  text-[1.1rem] pb-[14px] border-b hidden   ">
            <p class="  xl:px-[110px] md:px-[110px] ">Nazwa</p>
            <p class=" xl:px-[38px] md:px-[38px]">Cena</p>
            <p class="xl:px-[28px] md:px-[28px]">Ilość</p>
            <p class="xl:px-[40px] md:px-[40px]">Suma</p>
          </div>
          <div v-if="cartItems.length === 0" class="empty-cart ">
            <p class="text-[1rem] md:text-[1.8rem] flex justify-center pt-[100px] pb-[100px] pl-[30px] md:pl-0 ">Twój koszyk jest pusty !</p>
          </div>
          <div v-else class=" grid grid-cols-1">
            <div v-for="item in cartItems" :key="item.id" class="cart-item   ">
              <div class="flex border-b py-[16px]  ">
                <img :src="item.thumbnail"   alt="Obrazek produktu" class="h-[80px] relative pl-[15px] pr-[20px]"/>
                <div class=" border rounded-[50%] absolute ml-[82px] mt-[-12px]">
                  <img  @click="removeFromCart(item.id)" src="../assets/close2.png" alt="images "  class=" py-[4px] px-[4px] bg-white rounded-[50%]"/>
                </div>
                <div class="flex flex-col justify-center  flex-wrap w-[150px] ">
                  <h3 class="">{{ item.title }}</h3>
                  <p class="text-gray-600"> </p>
                </div>
                <div class="md:flex items-center justify-center w-[150px] hidden  ">
                  <p>{{ item.price }} zł</p>
                </div>
                <div class="flex items-center pl-[30px] md:pl-0  ">
                  <div class="flex border rounded-[5px]   md:max-w-[79px] w-[79px] ">
                    <button @click="decrase(item.id)">
                      <img src="../assets/minus.png" alt="minus" class=" button-image "/>
                    </button>
                    <p class="py-[12px]  counter-text  border-x">{{ item.quantity  }}</p>
                    <button @click="incrase(item.id)">
                      <img src="../assets/plus.png" alt="plus" class=" button-image  "/>
                    </button>
                  </div>
                </div>
                <div class="md:flex items-center  px-[30px] hidden ">
                  <p class=" w-[80px]">{{ (item.price * item.quantity).toFixed(2) }} zł</p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex  md:justify-between pt-[14px]  pb-[20px] flex-wrap  justify-center gap-y-[10px]  ">
            <div class="border rounded-[5px] flex flex-col md:flex-row ">
              <input type="text" placeholder="Kod rabatowy" class="py-[10px] pl-[16px] outline-none text-center md:text-start">
              <button class="pr-[16px] text-blue-500 pl-[20px] ">Aktywuj</button>
            </div>
            <div>
              <button class="text-gray-400 border rounded-[5px] px-[19.5px] py-[10px] ">Aktualizuj koszyk</button>
            </div>
          </div>
        </section>
      </div>
      <div class=" flex flex-col  rounded-[5px] px-[18px]  border  ">
        <p class="text-[1.1rem] font-bold pt-[33px]  pb-[25px] ">Podsumowanie</p>
        <div class="flex flex-col">
          <div class="flex justify-between  ">
            <p class="text-gray-600  text-[1rem]">Dostawa</p>
            <p class="text-gray-700 font-bold text-[1.1rem]">15,00 zł</p>
          </div>
          <p class="text-gray-400">Kurier - wysyłka do 3 dni roboczych</p>
          <div class="flex justify-between border-b pb-[15px] pt-[27px]  ">
            <p class="text-gray-600 ">Suma koszyka</p>
            <p class="text-gray-700 font-bold">{{ totalCartPrice }}</p>
          </div>
          <div class="flex items-center justify-between pt-[16px]  ">
            <p class="text-gray-700 text-[1.1rem] ">Do zapłaty</p>
            <p class="text-gray-700 text-[1.7rem]  font-bold ">{{ totalPay }}</p>
          </div>
          <div class="flex pt-[21px]  ">
            <button  class="flex items-center w-full justify-center bg-blue-500 text-white  py-[12px] px-[73.5px] rounded-[5px] text-[1.1rem]">
              <p>Dodaj do Koszyka</p>
              <img src="../assets/rrche.png" alt="chewron" class="h-[22px] pl-[16px]"/>
            </button>
          </div>
          <div class="flex  pt-[20px] md:pt-0 pb-[10px] ">
            <div class="flex items-center justify-center  w-full pt-[18px] ">
              <img src="../assets/delivery2.png" alt="delivery2" class="h-[20px] pr-[5px]">
              <p class="text-gray-700 text-[0.7rem] ">Do darmowej dostawy brakuje:</p>
              <p class="text-gray-700 text-[0.7rem] font-bold pl-[3px] ">{{ 105 - totalPay > 0 ? (105 - totalPay).toFixed(2) + " zł" : "0 zł" }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

</template>

<style scoped>
.counter-text {
  width: 40px;
  text-align: center;
}
.fixed-size {
  display: flex;
  align-items: center;
}
.button-image {
  width: 20px;
  height: 20px;
}
</style>