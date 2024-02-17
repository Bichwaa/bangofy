<template>
        <Transition name="slide-fade">
        <div class="border border-slate-200 rounded-lg hover:shadow-lg hover:shadow- hover:shadow-gray-300 duration-300">
            <div class="inner relative rounded-lg" >
                <div class="text-sm absolute left-2 top-2 pill rounded-3xl bg-[#F3DF00] px-4 py-2" v-if="isSponsored">sponsored</div>
                <NuxtImg class="rounded-t-lg w-full cursor-pointer"  src="https://picsum.photos/300/300" @click="openDetails"/>
            </div>

            <div class="flex flex-col p-1">
                <span class="title text-sm font-medium pl-1 cursor-pointer" @click="openDetails">Name and model</span>
                <span class="font-semibold pl-1">
                    TZS 250,000,000
                </span>
            </div>

            <div class="flex flex-col-reverse md:flex-row md:justify-between p-1">
                <div class="flex items-center p-0">
                    <IconsLocationIcon class="h-3 w-3" colour="#888b9b" />
                    <span class="text-slate-500 text-xs">Dar-es-salaam</span>
                </div>

                <span class="text-slate-500 text-xs">
                    1 week
                </span>
            </div>
        </div>
    </Transition>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    sponsored:{
        type:Boolean,
        default:false
    }
})

//temporary computed propto randomly make some cards have a "sponsored" label
const isSponsored = computed(()=>{
    if(!props.sponsored){
        const arr = [true, false]
        let gen = Math.floor(Math.random() * 2);
        return arr[gen]
    }else{
        return true
    }
})

const openDetails = async () =>{
  await navigateTo({
  path: '/ad-details',
  // query: {
  //   page: 1,
  //   sort: 'asc'
  // }
})
}

</script>

<style scoped>
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 1s 0.3s ease-out;
  animation: bounce-in 1s;
}

.slide-fade-leave-active {
  transition: all 1s 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  animation: bounce-in 1s;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  animation: bounce-in 1s;
  opacity: 0;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

</style>

