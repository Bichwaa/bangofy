<template>
  <Carousel :items-to-show="1.5" :autoplay="1000">
    <Slide v-for="source in sources" :key="source">
        <nuxt-img :src="source"/>
    </Slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </Carousel>
</template>


<script setup>
import {ref} from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'


const sources = ref(['/img/LP_Banner_1.png', '/img/LP_Banner_2.png', '/img/LP_Banner.svg'])


</script>

<style>

</style>