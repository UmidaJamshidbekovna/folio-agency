<script setup>
import HeroImg from "@/assets/svg/heroAbout.svg"
import Folio from "@/assets/svg/folio.svg"
import img1 from "@/assets/svg/img1.svg"
import img2 from "@/assets/svg/img2.svg"
import img3 from "@/assets/svg/img3.svg"
import BG from "@/assets/svg/bg3D.svg"

import Button from "@/components/BTN-ui/Button.vue";
import arrow from "@/components/ArrowBTN/arrow.vue";
import Header from "@/components/Header/Header.vue";

import { ref } from 'vue'
import 'vue3-carousel/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

const years = [2017, 2018, 2019, 2020, 2021]

const images = [
  img1, img2, img3
];

const carouselRef = ref(null)
const goNext = () => {
  carouselRef.value?.next()
}
const goPrev = () => {
  carouselRef.value?.prev()
}
</script>
<template>
    <div>
        <!-- Hero Section -->
        <section class="hero  container mb-30">
            <div class="grid grid-cols-3  items-center gap-6 p-8">
                <div class="heroLeft col-span-1 space-y-6">
                    <h1 class="text-[84px] text-[#232340] leading-[84px] font-bold tracking-[-1px]">
                        Stand Out
                        from The Crowd.
                    </h1>
                    <p class="font-normal text-lg text-[#606060] leading-[32px]">
                        Agency is a full-service agency, busy designing and building beautiful digital products, brands, and experiences.
                    </p>
                    <Button  label="Recent Work"/>

                    <div class="mt-20 mb-0">
                        <arrow />
                    </div>
                </div>
                <div class="heroRight col-span-2 flex justify-center">
                    <img :src="HeroImg" alt="">
                </div>
            </div>
            
        </section>
        
        <!-- Who We Are -->
         <section class="relative bg-[#232340] pb-35">
            
            <img :src="BG" alt="Background Shape" class="absolute -top-[50px] right-0 w-[802px] h-auto z-0 pointer-events-none" />


            <div class="container relative z-10 mb-35">
                <Header
                    subtitle="Who We Are" 
                    title="We Make Designs that Lead and Inspire." 
                    class="pt-20 mb-10 text-[white]"
                      @goNext="goNext"
                      @goPrev="goPrev"
                />
                <div class="grid grid-cols-5 mt-20">
                    <div class="col-span-1  flex flex-col pt-10 gap-17 space-y-17 text-[#8B8B8B] font-semibold text-lg leading-6">
                        <div
                            v-for="year in years"
                            :key="year"
                            class="hover:text-[#FFFFFF] cursor-pointer"
                        >
                            {{ year }}
                        </div>
                    </div>
                    <div class="col-span-4">
                        <Carousel ref="carouselRef" :items-to-show="1" :wrap-around="true" :autoplay="3000">
                            <Slide v-for="(img, index) in images" :key="index">
                                <img :src="img" class="w-full h-auto rounded-lg shadow" />
                            </Slide>
                        </Carousel>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="grid grid-cols-5">
                    <div class="col-span-1">
                        <div class="w-[2px] h-[80px] bg-[white] rounded-[2px]"></div>
                    </div>
                    <div class="col-span-2 space-y-8">
                        <h1 class="font-bold text-[32px] leading[40px] tracking-tight text-[#FFFFFF]">
                            A design team building a curated marketplace for UI designers.
                        </h1>
                        <p class="font-normal text-lg leading-[32px] text-[#8B8B8B]">
                            4,404 curated design resources to energize your creative workflow. We're a growing family of 334,531 designers and makers from around the world
                        </p>
                        <Button  label="Contact Us"/>
                    </div>
                    <div class="col-span-2 flex flex-col items-center justify-center p-0 m-0 leading-none">
                        <h2 class="font-semibold text-[200px] text-[white] p-0">
                            28
                        </h2>
                        <p class="font-bold text-[24px] leading-[32px]  tracking-tight text-white">
                            Bigest Branding
                        </p>
                    </div>
                </div>
            </div>

         </section>

         <!-- What We Do -->
          <section>
            <div class="container">
                <Header
                    subtitle="What We Do" 
                    title="We Make Designs that Lead and Inpire." 
                    class="pt-20 mb-10 text-[#232340]"
                      @goNext="goNext"
                      @goPrev="goPrev"
                />
            </div>
          </section>
    </div>
</template>