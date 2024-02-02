<template> 
    <div class="parent">
        <Accordion type="single" class="w-full" collapsible :default-value="defaultValue">
            <AccordionItem v-for="item in accordionItems" :key="item.value" :value="item.value">
            <AccordionTrigger class="p-0">
                <div class="flex flex-col p-0">
                    <h3>{{ item.title }}</h3>
                    <div v-if="item.defaultSelected.trim().length>0" class="text-xs text-[#B2B2B2] text-left">
                        {{ item.defaultSelected }}
                    </div>
                </div>
            </AccordionTrigger>
            <AccordionContent>
                <ul v-if="item.title==='Category'">
                    <li v-for="cat,idx in categoryNames" :key="idx" class="cursor-pointer hover:text-blue-500 duration-300">
                        {{ cat.name }}
                    </li>
                </ul>

                <ul v-else-if="item.title==='Location'">
                    <li v-for="mkoa,idx in mikoa" :key="idx" class="cursor-pointer hover:text-blue-500 duration-300">
                        {{ mkoa}}
                    </li>
                </ul>

                <ul v-else-if="item.title==='Condition'">
                    <li v-for="cond,idx in conditions" :key="idx" class="cursor-pointer hover:text-blue-500 duration-300">
                        {{ cond}}
                    </li>
                </ul>

                <div v-else-if="item.title==='Price'" class="flex gap-8">
                    <div>
                        <label for="min" class="text-xs text-[#B2B2B2] pr-1">TZS</label>
                        <input type="number" min="1" placeholder="min" name="min">
                    </div>
                    <div>
                        <label for="max" class="text-xs text-[#B2B2B2] pr-1">TZS</label>
                        <input type="number" min="1" placeholder="max" name="max">
                    </div>
                </div>

                <div v-else>{{ item.content }}</div>
            </AccordionContent>
            </AccordionItem>
        </Accordion>
    </div>
</template>

<script setup lang="ts">
interface Category {
    name: string,
    url: string
}
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion'

const defaultValue = 'item-3'

const accordionItems = [
  { value: 'item-1', title: 'Category', content: 'Yes. It adheres to the WAI-ARIA design pattern.', defaultSelected:"All" },
  { value: 'item-2', title: 'Location', content: 'Yes. It\'s unstyled by default, giving you freedom over the look and feel.', defaultSelected:"Dodoma" },
  { value: 'item-3', title: 'Price', content: 'Yes! You can use the transition prop to configure the animation.', defaultSelected:"" },
  { value: 'item-4', title: 'Condition', content: 'Yes! You can use the transition prop to configure the animation.', defaultSelected:"used" },
]

const categoryNames: Array<Category>= [
{ name:"Vehicles", url:"/img/vehicles.png"}, { name:"Smartphones", url:"/img/smartphones.png"},
{ name:"Electronics", url:"/img/electronics.png"}, { name:"Mens's fashion", url:"/img/men-fashion.png"},
{ name:"Women's fashion", url:"/img/women-fashion.png"}, { name:"Home", url:"/img/home.png"},
{ name:"Health & beauty", url:"/img/health-beauty.png"}, { name:"Kids", url:"/img/kids.png"},
{ name:"Hobbies & Sports", url:"/img/hobby-sports.png"}, { name:"Jobs", url:"/img/jobs.png"},
{ name:"Real Estate", url:"/img/real-estate.png"}, { name:"Others", url:"/img/others.png"},
]

const mikoa:string[]= [
  "Arusha", "Dar es Salaam", "Dodoma", "Iringa",
  "Kagera", "Kaskazini Pemba", "Kaskazini Unguja", "Kigoma",
  "Kilimanjaro", "Kusini Pemba", "Kusini Unguja", "Lindi", "Manyara",
  "Mara", "Mbeya", "Mjini Magharibi", "Morogoro", "Mtwara", "Mwanza",
  "Pwani", "Rukwa", "Ruvuma", "Shinyanga", "Singida","Tabora",
  "Tanga"
]

type Condition = 'used'|'new'|'refurbished'
const conditions:Condition[] = ['used','new','refurbished']
</script>
