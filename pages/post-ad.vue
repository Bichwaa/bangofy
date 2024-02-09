<template>
  <div class="flex flex-col lg:px-72">
    <h3 class="font-semibold text-xl p-2 my-2">Post Ad </h3>
    <form class="border border-[#3e4e707d] rounded-md p-3 flex flex-col mx-2">
      <h3 class="font-semibold text-xs my-2">Upload images</h3>
      <div id="img-container" class="flex gap-2 overflow-x-scroll ">
        <div :class="activeImg=='1st'? 'border-2 border-dotted border-[#214bf6] p-4':'border-2 border-dotted border-[#939393] p-4'">
          <IconsImageIcon class="w-24 h-24"/>
        </div>

        <div :class="activeImg=='2nd'? 'border-2 border-dotted border-[#214bf6] p-4':'border-2 border-dotted border-[#939393] p-4'">
          <IconsImageIcon class="w-24 h-24" :fill-color="activeImg=='2nd'?'':'#64748b '"/>
        </div>

        <div :class="activeImg=='3rd'? 'border-2 border-dotted border-[#214bf6] p-4':'border-2 border-dotted border-[#939393] p-4'">
          <IconsImageIcon class="w-24 h-24"   :fill-color="activeImg=='3rd'?'':'#64748b '"/>
        </div>

        <div :class="activeImg=='4th'? 'border-2 border-dotted border-[#214bf6] p-4':'border-2 border-dotted border-[#939393] p-4'">
          <IconsImageIcon class="w-24 h-24" :fill-color="activeImg=='4th'?'':'#64748b '"/>
        </div>
      </div>
      <div class="col-span-12 md:col-span-6 flex flex-col my-3">
        <label for="title" class="font-medium pl-1 text-xs mb-1">Title</label>
        <input type="text" name="title" class=" border border-1 border-[#939393] rounded-md lg:h-8 w-full">
      </div>

      <div class="grid grid-cols-12 gap-2 items-center">
        <div class="col-span-12 md:col-span-6 flex flex-col my-1">
          <label for="firstname" class="font-medium pl-1 text-xs mb-1">Main category</label>
          <select name="cars" id="cars" class=" border border-1 border-[#939393] bg-transparent rounded-md lg:h-8 w-full text-xs py-1 px-2 text-gray-700">
            <option value="one" class="text-xs text-[#939393]">category 1</option>
            <option value="two" class="text-xs text-[#939393]">category 2</option>
            <option value="three" class="text-xs text-[#939393]">category 3</option>
            <option value="four" class="text-xs text-[#939393]">category 4</option>
          </select>
        </div>

        <div class="col-span-12 md:col-span-6 flex flex-col my-1">
          <label for="firstname" class="font-medium pl-1 text-xs mb-1">Subcategory</label>
          <select name="cars" id="cars" class=" border border-1 border-[#939393] bg-transparent rounded-md lg:h-8 w-full text-xs py-1 px-2 text-gray-700">
            <option value="one" class="text-xs text-[#939393]">subcategory 1</option>
            <option value="two" class="text-xs text-[#939393]">subcategory 2</option>
            <option value="three" class="text-xs text-[#939393]">subcategory 3</option>
            <option value="four" class="text-xs text-[#939393]">subcategory 4</option>
          </select>
        </div>
      </div>

      <div class="flex flex-col my-3">
        <p for="price" class="font-medium pl-1 text-xs mb-1">Item Condition</p>
        <div class="flex items-center gap-8">
          <div class="flex gap-2">
          <input type="radio" checked id="html" name="condition" value="New" class=" border border-1 border-[#939393]">
          <label for="html">New</label>
        </div>
        <div class="flex gap-2">
          <input type="radio" id="html" name="condition" value="New" class=" border border-1 border-[#939393]">
          <label for="html">Used</label>
        </div>
        </div>
      </div>

      <div class="flex flex-col my-3">
        <label for="description" class="font-medium pl-1 text-xs mb-1">Description</label>
        <textarea name="description" placeholder="add item description" class=" border border-1 border-[#939393] rounded-md lg:h-8 w-full p-2 text-sm"></textarea>
      </div>

      <div class="flex flex-col my-3">
        <label for="price" class="font-medium pl-1 text-xs mb-1">Price</label>
        <input type="text" name="price" class=" border border-1 border-[#939393] rounded-md lg:h-8 w-full">
      </div>

      <div class="flex flex-col my-3">
        <p for="price" class="font-medium pl-1 text-xs mb-1">Negotiable</p>
        <div class="flex items-center gap-8">
          <div class="flex gap-2">
          <input type="radio" checked id="html" name="condition" value="New" class=" border border-1 border-[#939393]">
          <label for="html">Yes</label>
        </div>
        <div class="flex gap-2">
          <input type="radio" id="html" name="condition" value="New" class=" border border-1 border-[#939393]">
          <label for="html">No</label>
        </div>
        </div>
      </div>

      <div class="flex flex-col my-3">
        <p class="font-medium pl-1 text-xs mb-1">Select package</p>
        <div class="flex flex-col gap-4 md:flex-row md:gap-8 md:flex-wrap">
          <PackageCard/>
          <PackageCard/>
          <PackageCard :is-active="true"/>
        </div>
      </div>

      <button class="rounded-md bg-[#214bf6] w-full text-white py-2 px-4">Next</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';

type ActiveImage = "1st" | "2nd" | "3rd" | "4th"
const activeImg:Ref<ActiveImage> = ref("1st")
</script>

<style>
 /* Hide scrollbar for Chrome, Safari and Opera */
 #img-container::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
#img-container {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
} 
</style>