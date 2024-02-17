<template>
    <div class="hidden lg:flex gap-2 px-24" v-if="!isHomePage">
        <span class="text-[#214BF6] px-1"><NuxtLink to="/">Home</NuxtLink> <span>> {{current }}</span> </span>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute()

const isHomePage = computed(()=>{
    // console.log("touched base with breadcrumbs", route.fullPath)
    return route.name==="index"
})

const current = computed(()=>{
    return route.fullPath.slice(1,route.fullPath.length)
})

</script>