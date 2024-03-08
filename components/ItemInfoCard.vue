<template>
    <Card class="shadow-none p-6 my-3 lg:mr-24">
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
                <div class="my-1 text-grey">Posted:</div> 
                <span class="text-grey">3/03/2022</span>
            </div>
            <div class="flex flex-col lg:flex-row items-center gap-2">
                <IconsEyeIcon current-color="#B2B2B2" class="w-5 h-5"/>
                <span class="text-grey">4000 views</span>
            </div>

            <div class="flex flex-col lg:flex-row items-center gap-2">
                <IconsLocationIcon current-color="#B2B2B2" class="w-5 h-5"/>
                <span class="text-grey">Dar-es-salaam</span>
            </div>
        </div>

        <p class="text-grey my-4 text-sm ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Nam dignissimos praesentium facilis, blanditiis consectetur 
            dolorum tenetur non architecto sequi unde explicabo cupiditate 
            corrupti necessitatibus veritatis doloremque veniam, fugit quos possimus.
        </p>
        
        <div class="flex gap-6 group mt-8">
            <div class="flex items-center gap-2 border border-primary cursor-pointer duration-300 py-2 px-6  rounded-md">
                <IconsShareIcon class="w-4 h-4"/>
                <p class="text-blue-700 text-xs font-medium">share</p>
            </div>

            <div class="flex items-center gap-2 bg-[#E72E4A] py-2 px-6 rounded-md cursor-pointer">
                <IconsFlagIcon class="w-4 h-4"/>
                <span class="text-white text-xs font-medium">Report this Ad</span>
            </div>
        </div>
    </Card>
</template>

<script setup>
import {ref} from 'vue'

const liked = ref(false)
</script>