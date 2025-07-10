<template>
    <div class="grid grid-cols-5 ">
      <div class="col-span-1">
        <img :src="Folio" alt="">
      </div>
  
      <div class="col-span-3">
        <p class="font-semibold text-lg leading-6">
          {{ subtitle }}
        </p>
        <h2 class="mt-5 *:font-bold text-[64px] leading-[62px] tracking-[-0.5px]">
          {{ title }}
        </h2>
      </div>
  
      <div class="mt-10 col-span-1 flex justify-end gap-4">
        <span @click="$emit('goPrev')">
          <img :src="BackNext" alt="Back">
        </span>
        <span @click="$emit('goNext')">
          <img :src="BackNext" alt="Next" class="transform -scale-x-100">
        </span>
      </div>
    </div>
  </template>
  
  
  <script setup>
  import Folio from "@/assets/svg/folio.svg"
  import BackNext from "@/assets/svg/BackNext.svg"

  defineProps({
    subtitle: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      required: true
    }
  })

  defineEmits(['goPrev', 'goNext'])
  </script>
  
  <style scoped>
   span img:hover,
    span img:active {
    padding: 1px;
    border-radius: 50%;
    background-color: #5468E7;
}

    </style>
 
  