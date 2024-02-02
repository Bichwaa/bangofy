<template>
    <div class="lg:grid lg:grid-cols-12 lg:gap-6">
        <div class="lg:col-span-3">
            <SearchFilters/>
        </div>
        <div class="lg:col-span-7">
            <div class="lg:flex lg:-flex-row justify-between px-2">
                <h3 class="font-semibold text-xl">Vehicles in Dodoma</h3>
                <div class="drpdwn">
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <div class="flex gap-8 justifly-between items-center border border-[#D0D4DC] bg-[#F5F6F7] p-2">
                                <span>
                                    {{ title }}
                                </span>
                                <IconsUpDownIcon class="w-3 h-3"/>
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                        <DropdownMenuLabel class="font-medium" >Sort by:</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem @click="itemClicked" class="cursor-pointer">Most Recent First</DropdownMenuItem>
                        <DropdownMenuItem @click="itemClicked" class="cursor-pointer">Oldest First</DropdownMenuItem>
                        <DropdownMenuItem @click="itemClicked" class="cursor-pointer">Reviews</DropdownMenuItem>
                        <DropdownMenuItem @click="itemClicked" class="cursor-pointer">A-Z</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
            <div class="py-4">
                <SearchResult/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const title = ref("Most Recent First")

const itemClicked = (e:any)=>{
    if(e.target.innerHTML!==undefined && typeof e.target.innerHTML==="string"){
        title.value = e.target.innerHTML;
    }
}
</script>