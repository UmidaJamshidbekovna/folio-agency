<template>
    <button class="bg-[#5468E7] text-white text-lg font-bold leading-6 rounded-xl px-9.5 py-5">
        {{ label }}
    </button>
</template>

<script setup>
    defineProps({
    label: String
    })
</script>