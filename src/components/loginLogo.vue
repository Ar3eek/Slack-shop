<script>
export default {
  name: "LoginLogo",
  data() {
    return {
      passwordVisible: false,

    }
  },
  methods: {
    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
    }
  }
};
</script>

<template>
  <main class="flex flex-col   pt-[101px] w-full mx-auto   ">
    <div class="flex justify-center flex-wrap ">
      <article class="  px-[60px] md:p-0    ">
        <router-link to="/" class="flex  justify-between  ">
          <img src="../assets/slacklogo.png" alt="logo" class="h-[25px]">
          <div>
            <img src="../assets/left-arrow.png" alt="left-arrow" />
          </div>
        </router-link>
        <div class="pt-[86.88px] flex justify-center md:justify-start pb-[20px]">
          <p class="text-[1.4rem] font-bold">Zaloguj się do xyz</p>
        </div>
        <div class="flex  justify-center border rounded-[5px] py-[12px] cursor-pointer flex-wrap ">
          <img src="../assets/google.png" alt="google"/>
          <button class="pl-[8px] ">Zaloguj się przez Google</button>
        </div>
        <div class="separator">
          <div class="line bg-gray-200"></div>
          <span class="text">LUB</span>
          <div class=" line bg-gray-200"></div>
        </div>
        <div class="pb-[8px]">
          <p>Adres e-mail lub nazwa użytkowanika</p>
        </div>
        <div class="border  rounded-[5px]">
          <input type="text" placeholder="Adres e-mail lub nazwa użytkownika" class="px-[16px] py-[10px] outline-none w-full" />
        </div>
        <div class="flex  md:justify-between pt-[42px] pb-[18px] flex-col justify-center items-center md:flex-row  ">
          <p>Hasło</p>
          <button class="underline text-gray-500">Nie pamietasz hasła ?</button>
        </div>
        <div class="border rounded-[5px] flex justify-between items-center">
          <input id="password" :type="passwordVisible ? 'text' : 'password'" placeholder="Hasło" class="px-[16px] py-[10px] outline-none w-full">
          <img id="passwordVisible"  src="../assets/eye.png" alt="eye" class="h-[16px] pr-[16px] cursor-pointer " @click="togglePasswordVisibility"/>
        </div>
        <div class="flex justify-around items-center  pb-[66px] flex-wrap gap-x-[46px] ">
          <div class="flex px-[16px] pt-[38px]">
            <input type="checkbox" class="">
            <p class="pl-[8px]">Zapamiętaj mnie </p>
          </div>
          <div class="pt-[38px]    ">
            <div class="flex text-white bg-blue-600 rounded-[5px] items-center ml-[4px] ">
              <button  class="py-[12px] px-[53px] buttonOne   ">Zaloguj się</button>
            </div>
          </div>
        </div>
        <hr/>
        <div class="pt-[50px]">
          <p class="font-bold text-[1.5rem]">Nie masz jeszcze konta ? </p>
          <div class="  justify-center flex  pt-[20px]">
            <button class="py-[12px] text-[1.2rem] font-bold   button px-[20px]">Zarejestruj się do XYZ</button>
          </div>
        </div>
      </article>
    </div>
  </main>
</template>

<style scoped>
.separator {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  margin: 20px 0;
}

.line {
  flex: 1;
  height: 1px;
  margin: 0 10px;
}

.text {
  padding: 0 10px;
  color: #000;
  font-weight: bold;
}
.button:active {
  cursor: pointer;
  transform:scale(0.99);
  background: #f4f4f4;
}
.buttonOne:active {
  transform:scale(0.99);
  background: #4b7acc;
}
</style>