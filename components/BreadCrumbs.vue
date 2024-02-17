<template>
    <div class="hidden lg:flex gap-2 px-24" v-if="!isHomePage">
        <span class="text-[#214BF6] px-1">Home <span>></span> </span>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute()

const isHomePage = computed(()=>{
    console.log("touched base with breadcrumbs", route.name)
    return route.name==="index"
})

</script>