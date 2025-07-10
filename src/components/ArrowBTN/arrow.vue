<template>
    <Button class="flex gap-3 items-center font-semibold text-lg text-[#8B8B8B] cursor-pointer">
        <img :src="Arrow" alt="" class="bg-[#C897E4] py-2 px-3.5 rounded-[50%] "> Scroll down
    </Button>
</template>

<script setup>
import Arrow from "@/assets/svg/arrow.svg"
</script>