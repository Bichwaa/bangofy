<template>
    <div class="hidden lg:flex gap-2 px-24">
        <span class="text-[#214BF6] px-1">Home <span v-if="!isHomePage" >></span> </span>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute()

const isHomePage = computed(()=>{
    return route.name==="index"
})

</script>