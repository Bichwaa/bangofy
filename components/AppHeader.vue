<template>
  <div>
    <div 
      class="relative lg:hidden"
      :class="{ 'slide-in': openMenu, 'slide-out': !openMenu }" 
      >
        <SideBar @close="openMenu=false" class="bg-white"/>
    </div>
    <div class="flex lg:justify-between p-3 lg:px-24 gap-20 lg:gap-6 shadow-sm border border-b border-slate-300 mb-12">
        <IconsMenuIcon class="w-6 h-6 cursor-pointer lg:hidden" @click="openMenu=true"/>
        
        <div class="flex gap-24 w-9/12">
          <nuxt-link to="/" class=" text-red-400">
          <NuxtImg :src="'/img/bangofy-logo.svg'" class="h-[4vh]"/>
        </nuxt-link>

        <SearchBar class="hidden lg:flex w-8/12" />
        </div>

        <div class="hidden lg:flex items-center gap-4">

          <div v-if="isLoggedIn">
            <NuxtLink to="/my-account">
              <NuxtImg src="/img/avatar.png" class="w-12 h-12 rounded-full "/>
            </NuxtLink>
          </div>

          <div v-else class="flex gap-2">
            <div class="grid">
                <nuxt-link to="/login" class="text-center">Login</nuxt-link>
            </div>

            <div class="">
                <nuxt-link to="/register">Register</nuxt-link>
            </div>
          </div>

          <NuxtLink to="/post-ad">
            <button class="bg-[#214bf6] rounded-xl lg:rounded-3xl text-white font-medium py-2 lg:px-8">Post AD</button>
          </NuxtLink>
        </div>
    </div>
    <!-- <BreadCrumbs/> -->
    <SearchBar class="md:hidden" v-if="isLoggedIn"/>
  </div>
  </template>

<script setup>
import {ref, computed} from'vue';
import {useAuthStore} from '@/stores/auth.store'

const authStore = useAuthStore()
// authStore.$state.isloggedIn
const isLoggedIn = computed(()=>authStore.isloggedIn)
const openMenu = ref(false)



</script>

<style scoped>
/* Assuming this is in the parent component's style or in a global style file */

/* Define the keyframes for the animation */
@keyframes slideIn {
  from {
    transform: translateX(-100%); /* Start off the viewport on the left */
  }
  to {
    transform: translateX(0%); /* Move to its normal position */
  }
}

/* Apply the animation to the element with the class 'slide-in' */
.slide-in {
  animation: slideIn 0.5s ease-out; /* Adjust the animation duration and easing as needed */
}

/* Optional: Apply transition to smoothly handle hiding the element */
.slide-out {
  transition: transform 0.5s ease-in-out;
  transform: translateX(-100%); /* Move the element out of the viewport when hidden */
  /* display: none; Hide the element when not shown */
}
</style>