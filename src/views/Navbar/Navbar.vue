<script setup>
import { ref } from 'vue'
import folioLogo from "@/assets/svg/folio-logo.svg"
</script>

<template>
  <div class="container flex items-center justify-between ">

    <!-- Logo -->
    <div class="cursor-pointer">
      <img :src="folioLogo" alt="Folio Logo" />
    </div>

    <!-- NavLinks -->
    <div class=" md:flex gap-12 text-[#8B8B8B] text-lg leading-6  font-semibold cursor-pointer">
        <a href="#">About</a>
        <a href="#">Work</a>
        <a href="#" >Services</a>
        <a href="#" class="relative">
          Jobs
          <span class="absolute -top-2 -right-6 gradient-box ">2</span>
        </a>
    </div>

    <!-- Contact btn -->
    <div >
        <button class="bg-[#232340] hover:bg-[#323259] text-[#fff] px-11.5 py-4.5 rounded-[8px] text-lg  font-bold cursor-pointer">Contact Us</button>
    </div>
   
  </div>
  <RouterView />
</template>

<style scoped>
.gradient-box {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  font-size: 14px;
  line-height: 18px;
  color: #fff;
  background: linear-gradient(180deg, #3A8FFF 0%, #0837AE 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}
a:hover{
  color: #5468E7 ;
  animation: bounce 1s infinite;
}
</style>