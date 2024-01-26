<template>
    <NuxtImg :src="image" class="rounded-md lg:w-24 lg:h-24"/>
  </template>
  
  <script lang="ts" setup>
  export interface Props{
    image:string
  }

  const props = withDefaults(defineProps<Props>(), {
  image:()=>"https://picsum.photos/800/600"
})
  
  </script>
  
  <style>
  
  </style>