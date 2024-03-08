<template>
    <div class="flex flex-col">
        <div class="imgs flex flex-col md:grid md:grid-cols-12 md:gap-2 ">
            <div class="md:col-span-10 flex flex-col">
                <NuxtImg :src="mainImg"  class="rounded-md"/>
                <!-- captions -->
                <ItemInfoCard class="w-full"/> 
                <!-- captions end -->
            </div>
            <div class="grid grid-cols-4 md:flex flex-col gap-2 my-3 md:my-0">
                <ThumbNail 
                    v-for="i, idx in 4" 
                    :key="i" 
                    class="cursor-pointer"
                    :image="mainImg"
                    />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref } from 'vue';

export interface Props {
imageList?: string[]
}

const mainImg:Ref<string> = ref("https://picsum.photos/980/550")

// const props = withDefaults(defineProps<Props>(), {
//   imageList:()=>[
//     "https://picsum.photos/980/400","https://picsum.photos/980/550",
//     "https://picsum.photos/980/400", "https://picsum.photos/980/550"  
//                 ]
// })

// function thumbnailClicked(i:string){
//     mainImg.value = i
// }
</script>