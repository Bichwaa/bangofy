<template>
  <div class="grid place-items-center lg:pt-24">

    <h2 class="font-semibold my-4">Login</h2>
    
    <form 
      @submit.prevent="formSubmitted" 
      class="form-card bg-slate-200 p-8 rounded-lg">

        <div class="flex gap-8 justify-between py-2">
          <div class="grp flex flex-col ">
            <label for="phoneNumber" class="text-xs font-medium">Phone Number</label>
            <input type="text" name="phoneNumber" class=" border border-1 border-slate-400 rounded-md lg:h-8 w-full">
          </div>
        </div>

        <div class="otp-inputs flex flex-col text-xs my-2" >
          <label for="otp my-1"> Please enter OTP (One Time Password) to complete registration</label>
          <div class="flex my-2">
            <input type="text" name="" id="" class="otp w-12 mx-2 rounded-md lg:h-8" v-for="i in 5">
          </div>

          <p>Didnt receive otp? <nuxt-link to="#" class="text-blue-500 my-2">Resend code</nuxt-link></p>
        </div>

        <div class="flex flex-col">
          <div class="grid grid-cols-8 content-center items-center">
            <hr class="inline border border-slate-300 col-span-2"/>
            <p class="a col-span-4 text-center">Or sign up with</p>
            <hr class="inline border border-slate-300 col-span-2"/>
          </div>
          <div class="flex gap-2">

          </div>
          <div class="grid place-items-center">
            <div class="flex gap-6 my-4">
              <icons-google-icon  class="w-6 h-6"/>
              <icons-facebook-icon  class="w-6 h-6"/>
            </div>
            <p>Don't have an account? <nuxt-link to="/register" class="text-blue-500 my-2">Register here</nuxt-link></p>
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