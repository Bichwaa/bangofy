<template>
  <div class="grid place-items-center lg:pt-24">

    <h2 class="font-semibold my-4">Login</h2>
    
    <form 
      @submit.prevent="formSubmitted" 
      class="form-card bg-[#F5F6F7] p-2 lg:p-16 rounded-lg">

        <div class="flex flex-col lg:flex-row gap-8 justify-between py-1">
          <div class="grp flex flex-col ">
            <label for="phoneNumber" class="text-xs font-medium">Phone Number</label>
            <input type="text" name="phoneNumber" class=" border border-1 border-slate-400 rounded-md lg:h-8 w-full">
          </div>
        </div>

        <div class="otp-inputs flex flex-col text-xs my-4" >
          <label for="otp my-2"> Please enter OTP (One Time Password) to complete registration</label>
          <div class="flex my-3">
            <input type="text" name="" id="" class="otp w-12 mx-2 rounded-md lg:h-8" v-for="i in 5">
          </div>

          <p class="my-2">Didnt receive otp? <nuxt-link to="#" class="text-blue-500 ">Resend code</nuxt-link></p>
        </div>

        <div class="flex flex-col">
          <div class="grid grid-cols-8 content-center items-center">
            <hr class="inline border border-slate-300 col-span-2"/>
            <p class="a col-span-4 text-center">Or login with</p>
            <hr class="inline border border-slate-300 col-span-2"/>
          </div>
          <div class="flex gap-2">

          </div>
          <div class="grid place-items-center">
            <div class="flex gap-6 my-4">
              <icons-google-icon  class="w-6 h-6"/>
              <icons-facebook-icon  class="w-6 h-6"/>
            </div>
            <p>Don't have an account? <nuxt-link to="/register" class="text-blue-500 my-2">Register</nuxt-link></p>
          </div>
        </div>
    </form>

    
    
  </div>
</template>

<script lang="ts" setup>


const formSubmitted = ()=> console.log("form submitted")

</script>

<style>

</style>