<template>
  <div class="">
      <div class="md:max-md:w-1/3 lg:grid lg:grid-cols-12 border border-[#D0D4DC] rounded-lg my-8">
          <div class="lg:col-span-4 xl:col-span-5 p-0 m-0 roundes-sm relative">
            <div class="text-sm absolute left-2 top-2 pill rounded-3xl bg-[#F3DF00] px-4 py-2 font-medium" v-if="props.ad.isSponsored">sponsored</div>
              <NuxtImg src="https://picsum.photos/id/111/300/200" class="rounded-md max-h-[250px] w-full"/>
          </div>
          <div class="lg:col-span-7 lg:m-0 flex flex-col justify-between p-2 lg:p-3">
              <div class="flex justify-between">
                <div class="flex flex-col">
                    <span class="title  pl-1 cursor-pointer">Name and model</span>
                    <span class="font-semibold pl-1 my-1 text-xl">
                        TZS 250,000,000
                    </span>
                </div>
                <button 
                  class="py-2 px-3 bg-[#214BF6] hover:bg-transparent hover:border hover:border-[#214BF6] group duration-300 rounded-md flex gap-1 items-center self-start"
                  v-if="!props.ad.isSponsored"
                  @click="props.ad.isSponsored=!props.ad.isSponsored"
                  >
                  <IconsBoltIcon class="w-4 h-5 text-white group-hover:text-[#214bf6]" />
                  <span class="text-white text-xs font-semibold group-hover:text-[#214bf6]">
                    Sponsor Ad
                  </span>
                </button>
              </div>

              <div class="flex flex-row gap-8 p-1">
                  <div class="flex items-center p-0">
                      <IconsLocationIcon class="h-3 w-3" colour="#888b9b" />
                      <span class="text-slate-500 text-xs">Dar-es-salaam</span>
                  </div>

                  <span class="text-slate-500 text-xs">
                      1 week
                  </span>
              </div>

              <div class="flex lg:flex-row lg:justify-end gap-4 p-1 justify-self-end mt-6">
                  <button 
                    class="flex items-center gap-1 border border-[#214BF6] hover:bg-[#214BF6] group duration-300 py-2 px-4 rounded-md"
                    >
                    <IconsPencilIcon class="w-4 h-4 text-[#214bf6] group-hover:text-white"/>
                    <span class="text-[#214BF6] group-hover:text-white text-xs">Edit</span>
                  </button>
                  <button 
                    class="flex items-center gap-1 border border-[#214BF6] hover:bg-[#214BF6] group duration-300 py-2 px-4 rounded-md"
                    >
                    <IconsPauseIcon class="w-4 h-4 text-[#214bf6] group-hover:text-white"/>
                    <span class="text-[#214BF6] group-hover:text-white text-xs">Disable</span>
                  </button>
                  <button 
                    class="flex items-center gap-1 border border-[#E72E4A] hover:bg-[#E72E4A] group duration-300 py-2 px-4 rounded-md"
                    >
                    <IconsBinIcon class="w-4 h-4 text-[#E72E4A] group-hover:text-white"/>
                    <span class="text-[#E72E4A] group-hover:text-white text-xs">Delete</span>
                  </button>
              </div>
          </div>
      </div>

      
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  ad:{
    type:Object,
    default: {isSponsored:false}
  }
})

</script>