<template>
    <div class="carou2 mt-12">
      <!-- ON LARGE DEVICES ONLY -->
        <div class="hidden lg:flex justify-between ">
          <Card v-for="(val, i) in categoryNames" :key="i" class="border-0 shadow-none bg-[#E4E9FE] rounded-md p-1 w-[12vh] h-[12vh] flex items-center justify-center">
            <CardContent class="p-0 border-0 shadow-none">
              <div class="flex flex-col items-center pt-1">
                <!-- <div class="grid place-items-center bg-blue-600 rounded-md m-2 p-2">
                  image
                </div> -->
                <NuxtImg class="h-20 w-20"  :src="val.url"/>
                <div class="grid place-items-center text-center text-sm font-medium">
                  {{ val.name }}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      <!-- ON SMALLEr DEvICES -->
      <Carousel :opts="{loop:true}" class="w-full lg:hidden">
          <CarouselContent class="flex">
            <!-- <transition-group name="slide-fade"> -->
              <CarouselItem v-for="(val, i) in categoryNames" :key="i" class="mr-2 gap-2 basis-[31%] md:basis-[19%] lg:basis-[15%] xl:basis-[8%]">
                <Card class="mx-1 border-0 shadow-none bg-[#E4E9FE] rounded-md p-1 w-[12vh] h-[12vh] flex items-center justify-center">
                  <CardContent class="p-0 border-0 shadow-none">
                    <div class="flex flex-col items-center pt-1">
                      <!-- <div class="grid place-items-center bg-blue-600 rounded-md m-2 p-2">
                        image
                      </div> -->
                      <NuxtImg class=""  :src="val.url"/>
                      <div class="grid place-items-center text-center text-sm font-medium">
                        {{ val.name }}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            <!-- </transition-group> -->
          </CarouselContent>
          <!-- <CarouselPrevious class="hidden lg:block" /> -->
          <!-- <CarouselNext class="hidden lg:block" /> -->
        </Carousel>
      </div>
</template>

<script setup lang="ts">
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import {Card} from "@/components/ui/card"

interface Category {
    name: string,
    url: string
}

// const categoryNames :string[] = [
//     'Vehicles', 'Smartphones', 'Electronics', "Men'swear",
//     "Women'swear", "Home", "Health & Beauty", "Kids",
//     "Hobbies & Sports", "Jobs", "Real Estate", "Others",
//     ] 


const categoryNames: Array<Category>= [
{ name:"Vehicles", url:"/img/vehicles.png"}, { name:"Smartphones", url:"/img/smartphones.png"},
{ name:"Electronics", url:"/img/electronics.png"}, { name:"Mens's fashion", url:"/img/men-fashion.png"},
{ name:"Women's fashion", url:"/img/women-fashion.png"}, { name:"Home", url:"/img/home.png"},
{ name:"Health & beauty", url:"/img/health-beauty.png"}, { name:"Kids", url:"/img/kids.png"},
{ name:"Hobbies & Sports", url:"/img/hobby-sports.png"}, { name:"Jobs", url:"/img/jobs.png"},
{ name:"Real Estate", url:"/img/real-estate.png"}, { name:"Others", url:"/img/others.png"},
]
</script>