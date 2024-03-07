<template>
    <div>
      <div class="carou my-6">
        <Carousel :opts="{loop: true }"  class="w-full" :plugins="[Autoplay({delay:2000})]">
          <CarouselContent class="">
            <CarouselItem v-for="source,idx in sources" :key="idx" class="flex place-content-center px-0">
              <NuxtImg :src="source" alt="banner" class="w-full"/>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>

      <CategoryCarousel/>

      <h2 class="mt-12 mb-4 text-2xl font-medium px-4">Sponsored Ads</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 px-4 pb-8">
        <!-- <transition-group name="slide-fade"> -->
          <AdCard v-for="i in 11" :key="i" :sponsored="true"/>
        <!-- </transition-group> -->
        <BoostCard/>
      </div>

      <!-- add space  -->
      <!-- <div class="flex flex-col-reverse lg:flex-row lg:mx-auto lg:pl-20 px-4">
          <div class="manenoz flex flex-col lg:basis-1/2">
            <h3 class="font-medium text-2xl">
              Unataka kukuza mauzo, au unatafuta bidhaa fulani?
            </h3>
            <div class="text-grey lg:w-1/2">
              Introducing our revolutionary platform that empowers you to earn cash by selling items or find anything you desire—all in one convenient location. 
            </div>

            <div class="p-1 grid place-items-center lg:flex mt-4">
              <button class="border border-[#214BF6] bg-transparent rounded-md py-2 px-2 md:px-8 text-sm text-[#214BF6] hover:bg-[#214bf6] hover:text-white duration-300">Jifunze Zaidi</button>
            </div>
          </div>
          <div class="picha grid place-items-center">
            <NuxtImg src="/img/tangazo.png" class="lg:w-[500px]"/>
          </div>
      </div> -->

      <h2 class="mt-12 mb-4 text-2xl font-medium px-4">Latest Ads</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 px-4 pb-8">
        <!-- <transition-group name="slide-fade"> -->
          <AdCard v-for="i in 10" :key="i"/>
        <!-- </transition-group> -->
      </div>

      <h2 class="mt-12 mb-4 text-2xl font-medium px-4">Blog Posts</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 px-4 pb-8">
        <!-- <transition-group name="slide-fade"> -->
          <BlogCard v-for="i in 4" :key="i"/>
        <!-- </transition-group> -->
      </div>
    </div>
  </template>

  <script setup lang="ts">
  import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
  import Autoplay from '../components/autoplay'
  
  const sources = ref(['/img/LP_Banner_1.png', '/img/LP_Banner_2.png', '/img/LP_Banner.png'])


</script>

<style scoped>

</style>