<template>
    <div>
      <div class="carou my-6">
        <Carousel class="w-full ">
          <CarouselContent class="">
            <CarouselItem v-for="i in 2" :key="i" class="grid place-content-center">
              <NuxtImg src="/img/LP_Banner.png" alt="banner"/>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>

      <div class="carou2 mt-12">
        <Carousel class="w-full ">
          <CarouselContent class="flex">
            <!-- <transition-group name="slide-fade"> -->
              <CarouselItem v-for="(val, i) in categoryNames" :key="i" class="mr-2 gap-2 basis-1/3 md:basis-1/4 lg:basis-1/6">
                <Card class="mx-1 border-0 shadow-none bg-[#E4E9FE] rounded-md p-1">
                  <CardContent class="p-0 border-0 shadow-none">
                    <div class="flex flex-col items-center pt-1">
                      <!-- <div class="grid place-items-center bg-blue-600 rounded-md m-2 p-2">
                        image
                      </div> -->
                      <NuxtImg class=""  src="https://picsum.photos/100/100"/>
                      <div class="grid place-items-center text-center text-sm font-medium">
                        {{ val }}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            <!-- </transition-group> -->
          </CarouselContent>
          <CarouselPrevious class="hidden lg:block" />
          <CarouselNext class="hidden lg:block" />
        </Carousel>
      </div>

      <h2 class="mt-12 mb-4 text-2xl font-medium px-4">Sponsored Ads</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 px-4 pb-8">
        <!-- <transition-group name="slide-fade"> -->
          <AdCard v-for="i in 9" :key="i" :sponsored="true"/>
        <!-- </transition-group> -->
        <BoostCard/>
      </div>

      <!-- add space  -->
      <div class="flex flex-col-reverse lg:flex-row lg:mx-auto lg:pl-40 px-4">
          <div class="manenoz flex flex-col lg:basis-1/2">
            <h3 class="font-medium text-2xl">
              Unataka kukuza mauzo, au unatafuta bidhaa fulani?
            </h3>
            <div class="text-slate-500 lg:w-1/2">
              Introducing our revolutionary platform that empowers you to earn cash by selling items or find anything you desire—all in one convenient location. 
            </div>

            <div class="p-1 grid place-items-center lg:flex mt-4">
              <button class="border border-[#214BF6] bg-transparent rounded-md p-1 text-sm text-[#214BF6] hover:bg-[#214bf6] hover:text-white duration-300">Jifunze Zaidi</button>
            </div>
          </div>
          <div class="picha grid place-items-center">
            <NuxtImg src="/img/tangazo.png" />
          </div>
      </div>

      <h2 class="mt-12 mb-4 text-2xl font-medium px-4">Latest Ads</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 px-4 pb-8">
        <!-- <transition-group name="slide-fade"> -->
          <AdCard v-for="i in 10" :key="i"/>
        <!-- </transition-group> -->
      </div>

      <h2 class="mt-12 mb-4 text-2xl font-medium px-4">Blog Posts</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 px-4 pb-8">
        <!-- <transition-group name="slide-fade"> -->
          <BlogCard v-for="i in 5" :key="i"/>
        <!-- </transition-group> -->
      </div>
    </div>
  </template>

  <script setup lang="ts">
  import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
  import {Card} from "@/components/ui/card"


  const categoryNames :string[] = [
    'Vehicles', 'Smartphones', 'Electronics', "Men'swear",
    "Women'swear", "Home", "Health & Beauty", "Kids",
    "Hobbies & Sports", "Jobs", "Real Estate", "Others",
    ] 
</script>

<style scoped>

</style>