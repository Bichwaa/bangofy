<template>
  <div class="border  p-4 flex flex-col rounded-md" :class="isActive?'border-[#214bf6]':'border-[#939393]'">
    
    <h3 class="text-center text-lg font-medium" :class="isActive?'text-[#214bf6]':'text-[#262626]'">
      {{ title }}
    </h3>

    <div class="flex gap-3 my-2" v-for="perk, idx in perks" :key="idx">
      <IconsCheckMark  current-color="#00B400"/>
      <span class="text-[#3d3c3c]">{{ perk }}</span>
    </div>

    <div class="grid place-items-center my-2">
      <span class="font-semibold text-[#3d3c3c]">{{ price }}</span>
    </div>

    <div class="my-2 grid place-items-center">
      <button 
        class="text-xs font-semibold py-2 px-4  rounded-md hover:bg-[#214bf6] hover:text-white hover:border-none duration-300" 
        :class="isActive?'bg-[#214bf6] text-white border-none':'border-[#939393] text-[#3d3c3c] border'"
        @click.prevent
        >{{ isActive?'selected':'Select package' }}</button>
    </div>

  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';


defineProps({
  perks:{
    default: [ "lorem ipsum sijui mengine ni nini", "what is love?", "baby don't hurt me no more", "pure liquid energy, no dash"],
    type: Array
  },
  title:{
    default:'retail',
    type: String
  },
  price:{
    default:'TZS 0.0',
    type:String
  },
   isActive:{
    default:false,
    type:Boolean
   }
})





</script>

<style>

</style>