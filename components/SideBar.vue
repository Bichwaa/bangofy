<template>
    <div class="flex flex-col w-5/6 md:w-5/12 gap-4 h-screen bg-white absolute p-4 my-component z-[1000]">

        <div class="p2 flex justify-between bg-white">
            <div class="invisible">0</div>
            <IconsCloseIcon class="w-6 h-6 text-red cursor-pointer" @click="emit('close')"/>
        </div>

        <div class="mobile-profile-menu">
            <div class="bg-[#F5F6F7] flex flex-col justify-around items-center lg:h-[40vh] py-3 px-4">

            <div class="flex flex-col gap-1">
                <div 
                class="flex gap-8 cursor-pointer p-2 transition-all duration-300" 
                :class="activeTab==='account'? 'bg-[#214BF6]':'bg-transparent'"
                @click="activeTab='account'">
                <IconsAvatarIcon class="w-5 h-5 my-1" :current-color="activeTab==='account'?'white':'#262626'"/>
                <span :class="activeTab==='account'? 'text-white':'text-[#262626]'">My account</span>
                </div>

                <div 
                class="flex gap-8 cursor-pointer p-2 transition-all duration-300" 
                :class="activeTab==='verification'? 'bg-[#214BF6]':'bg-transparent'"
                @click="activeTab='verification'">
                <IconsVerifiedIcon class="w-5 h-5 my-1" :current-color="activeTab==='verification'?'white':'#262626'"/>
                <span :class="activeTab==='verification'? 'text-white':'text-[#262626]'">Verification</span>
                </div>

                <div 
                class="flex gap-8 cursor-pointer p-2 transition-all duration-300" 
                :class="activeTab==='favs'? 'bg-[#214BF6]':'bg-transparent'"
                @click="activeTab='favs'">
                <IconsHollowHeartIcon class="w-5 h-5 my-1" :current-color="activeTab==='favs'?'white':'#262626'"/>
                <span :class="activeTab==='favs'? 'text-white':'text-[#262626]'">Favourite Ads</span>
                </div>
            </div>

            <div class="flex gap-8 lg:-ml-9 cursor-pointer">
                <IconsLogoutIcon class="w-5 h-5 my-1" :current-color="'#262626'"/>
                <span class="text-[#262626]">Log out</span>
                </div>
            </div>
        </div>

        <div class="p2 grid place-content-center bg-white">
            <nuxt-link to="/login" class="text-center">Login</nuxt-link>
        </div>

        <div class="p2 grid place-content-center bg-white">
            <nuxt-link to="/register">Register</nuxt-link>
        </div>

        <button class="bg-[#214bf6] rounded-xl text-white font-medium py-2">Post AD</button>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue"

type Tab =  "account" | "verification" | "favs"
const activeTab:Ref<Tab> = ref("account")
const emit = defineEmits(['close'])
</script>


<style scoped>
/* .my-component{
    z-index: 1000 !important;
} */
</style>