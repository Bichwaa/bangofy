<template>
    <div class="sticky flex flex-col lg:grid lg:grid-cols-4 gap-8 lg:gap-4 bg-[#262626] top-0 w-full min-h-64 px-4 lg:px-24 py-4">
      <div class="flex flex-col">
        <IconsAppLogo theColor="white" class="w-24 h-24 cursor-pointer" />

        <p class="text-white text-sm lg:w-2/3">
          Discover a wide range of classified ads on Mkebe, your go-to destination 
          for buying and selling items in your local community.</p>

        <div class="flex gap-6 mt-6">
          <LazyIconsYoutubeIcon class="w-5 h-5 cursor-pointer"/>
          <IconsWhatsappIcon class="w-5 h-5 cursor-pointer"/>
          <IconsFacebookIcon currentColor="#262626" class="w-5 h-5 cursor-pointer"/>
          <IconsInstagramIcon class="w-5 h-5 cursor-pointer"/>
        </div>
      </div>

      <div class="flex flex-col items-start lg:pt-8">
        <h3 class="font-semibold text-white text-sm">
          Categories
        </h3>

        <ul class="grid place-items-start">
          <li class="text-white text-sm my-2 cursor-pointer">Vehicles</li>
          <li class="text-white text-sm my-2 cursor-pointer">Smartphones</li>
          <li class="text-white text-sm my-2 cursor-pointer">Multimedia</li>
          <li class="text-white text-sm my-2 cursor-pointer">Men's fashion</li>
          <li class="text-white text-sm my-2 cursor-pointer">Women's fashion</li>
          <li class="text-white text-sm my-2 cursor-pointer">Home</li>
          <li class="text-white text-sm my-2 cursor-pointer">health & beauty</li>
        </ul>
      </div>

      <div class="flex flex-col items-start lg:pt-8">
        <h3 class="font-semibold text-white text-sm">
          Quick access
        </h3>

        <ul class="grid place-items-start">
          <li class="text-white text-sm my-2 cursor-pointer">Browse ads</li>
          <li class="text-white text-sm my-2 cursor-pointer">Terms and conditions</li>
          <li class="text-white text-sm my-2 cursor-pointer">Privacy policy</li>
        </ul>

      </div>

      <div class="flex flex-col items-start lg:pt-8">
        <h3 class="font-semibold text-white text-sm">
          Contact us
        </h3>

        <ul class="grid place-items-start">
          <li class="text-white text-sm my-2">+255658094941</li>
          <li class="text-white text-sm my-2">info@bangofy.co.tz</li>
          <li class="text-white text-sm my-2">Dar-es-salaaam, Tanzania</li>
        </ul>

      </div>
    </div>
  </template>

  <script setup>
</script>