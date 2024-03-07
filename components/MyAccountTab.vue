<template>
  <div class="flex flex-col">
    <div class="drpdwn mb-3">
          <DropdownMenu>
              <DropdownMenuTrigger>
                  <div class="flex gap-8 justifly-between items-center border border-grey bg-lightgrey p-2">
                      <span>
                          {{ sortTitle }}
                      </span>
                      <IconsUpDownIcon class="w-3 h-3"/>
                  </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
              <DropdownMenuLabel class="font-medium" >Sort by:</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem @click="sortItemClicked" class="cursor-pointer">All Ads</DropdownMenuItem>
              <DropdownMenuItem @click="sortItemClicked" class="cursor-pointer">Oldest First</DropdownMenuItem>
              <DropdownMenuItem @click="sortItemClicked" class="cursor-pointer">Reviews</DropdownMenuItem>
              <DropdownMenuItem @click="sortItemClicked" class="cursor-pointer">A-Z</DropdownMenuItem>
              </DropdownMenuContent>
          </DropdownMenu>
      </div>
    <div class="border border-[#26262635] rounded-lg p-3">
      <div class="flex justify-between my-3">
        <div class="avatar-group flex flex-col">
          <div class="flex items-center gap-2">
            <NuxtImg src="/img/avatar.png" class="rounded-full"/>
            <div class="flex flex-col">
              <div class="flex items-center gap-2">
                <span class="font-medium text-lg">Christian Tavares</span>
                <IconsVerifiedIcon class="w-5 h-5 font-semibold" current-color="green"/>
              </div>
              <span class="text-xs text-grey">Member since 2022</span>
            </div>
          </div>
        </div>
        <div>
          <button class="text-[#214BF6] text-xs font-medium border border-grey py-2 px-6 rounded-lg transition-all duration-300 hover:border-none hover:text-white hover:bg-[#214BF6]">
            Edit
        </button>
        </div>
      </div>

      <hr class="my-6 lg:ml-6 border-[0.01px] w-10/12 border-[#26262617] col-span-2">

      <div class="flex gap-2 lg:gap-8 flex-wrap">
        <div class="flex gap-2">
          <IconsLocationIcon class="w-4 h-4" colour="#B2B2B2"/>
          <span class="text-grey text-xs font-medium">Mbeya</span>
        </div>
        <div class="flex gap-2">
          <IconsLocationIcon class="w-4 h-4" colour="#B2B2B2"/>
          <span class="text-grey text-xs font-medium">christiantavares@gmail.com</span>
        </div>
        <div class="flex gap-2">
          <IconsPhoneIcon class="w-4 h-4" :current-color="'#B2B2B2'"/>
          <span class="text-grey text-xs font-medium">0791293847</span>
        </div>
      </div>
    </div>

    <MyAdCard v-for="ad,id in myAds" :key="id" :ad="ad"/>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

// type Tab =  "account" | "verification" | "favs"
// const activeTab:Ref<Tab> = ref("account")

  const sortTitle = ref("All Ads")

  const sortItemClicked = (e:any)=>{
    if(e.target.innerHTML!==undefined && typeof e.target.innerHTML==="string"){
        sortTitle.value = e.target.innerHTML;
    }
}

const myAds = ref([
  {isSponsored:true},
  {isSponsored:false},
  {isSponsored:true},
  {isSponsored:true},
  {isSponsored:false},
  {isSponsored:false},
  {isSponsored:true},
  {isSponsored:false}
])


</script>

<style>

</style>