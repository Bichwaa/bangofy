<template>
 <div class="flex items-center gap-2 mx-2 px-4 py-1 border rounded-lg border-slate-300">
    <input 
    type="text"  
    placeholder="What are you looking for? " 
    class="w-full focus-visible:outline-none">  
    <NuxtLink to="/search">
      <IconsSearchicon class="w-6 h-6 cursor-pointer"/>
    </NuxtLink>
 </div> 
</template>