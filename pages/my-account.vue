<template>
  <div class="grid grid-cols-12 lg:gap-8  px-3">
    <!-- <div class="hidden lg:block lg:col-span-1"></div> -->
    <div class="desktop sidebar hidden lg:block lg:col-span-3">
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
    <!-- <div class="hidden lg:block lg:col-span-1"></div> -->
    <div class="col-span-12 lg:col-span-7 my-6 lg:my-0" v-if="activeTab=='account'">
      <MyAccountTab/>
    </div>
    <div class="col-span-12 lg:col-span-9 xl:col-span-8 my-6 lg:my-0" v-else-if="activeTab=='verification'">
      <VerificationTab />
    </div>
    <div class="col-span-12 lg:col-span-9 my-6 lg:my-0" v-else>
      <div class="grid place-items-center text-6xl" >🤏🏾</div>
    </div>

    <div class="hidden lg:block lg:col-span-2"></div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue"

type Tab =  "account" | "verification" | "favs"
const activeTab:Ref<Tab> = ref("account")

</script>

<style>

</style>