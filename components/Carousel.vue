<template>
  <carousel :items-to-show="1.5">
    <slide v-for="source in sources" :key="source">
        <nuxt-img :src="source"/>
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>


<script setup>
import {ref} from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'


const sources = ['/img/LP_Banner.svg', '/img/LP_Banner.svg']


</script>

<style>

</style>