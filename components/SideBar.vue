<template>
    <div class="flex flex-col w-5/6 md:w-5/12 gap-4 h-screen bg-white absolute p-4 my-component">

        <div class="p2 flex justify-between">
            <div class="invisible">0</div>
            <IconsCloseIcon class="w-6 h-6 text-red cursor-pointer" @click="emit('close')"/>
        </div>

        <div class="p2 grid place-content-center">
            <nuxt-link to="#" class="text-center">Login</nuxt-link>
        </div>

        <div class="p2 grid place-content-center">
            <nuxt-link to="#">Register</nuxt-link>
        </div>

        <button class="bg-[#214bf6] rounded-xl text-white font-medium py-2">Post AD</button>
  </div>
</template>

<script setup>

const emit = defineEmits(['close'])
</script>


<style scoped>

</style>