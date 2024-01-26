<template>
    <Card class="shadow-none p-3 my-3 lg:mr-24">
        <div class="flex justify-between">
            <span class="name">Item  Name 4n5Model</span>
            <IconsHollowHeartIcon v-if="!liked" class="w-5 h-5" @click="liked = !liked"/>
            <IconsFilledHeartIcon v-else class="w-5 h-5" @click="liked = !liked"/>
        </div>  
        <div class="price font-semibold text-xl my-2">
            240,000 Tsh
        </div> 
        <div class="flex gap-2 justify-between lg:justify-around">
            <div class="flex flex-col lg:flex-row items-center">
                <divx class="my-1">Posted:</divx> 
                <span class="text-slate-300">3/03/2022</span>
            </div>
            <div class="flex flex-col lg:flex-row items-center gap-2">
                <IconsEyeIcon class="w-5 h-5"/>
                <span class="text-slate-300">4000 views</span>
            </div>

            <div class="flex flex-col lg:flex-row items-center gap-2">
                <IconsLocationIcon class="w-5 h-5"/>
                <span class="text-slate-300">Dar-es-salaam</span>
            </div>
        </div>

        <p class="text-slate-500 my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Nam dignissimos praesentium facilis, blanditiis consectetur 
            dolorum tenetur non architecto sequi unde explicabo cupiditate 
            corrupti necessitatibus veritatis doloremque veniam, fugit quos possimus.
        </p>
        
        <div class="flex gap-6">
            <div class="flex items-center gap-2 border border-blue-700 p-1 rounded-md">
                <IconsShareIcon class="w-4 h-4"/>
                <p class="text-blue-700">share</p>
            </div>

            <div class="flex items-center gap-2 bg-[#E72E4A] py-1 px-2 rounded-md">
                <IconsFlagIcon classsclass="w-2 h-2"/>
                <span class="text-white">Report this Ad</span>
            </div>
        </div>
    </Card>
</template>

<script setup>
import {ref} from 'vue'

const liked = ref(false)
</script>