<template>
    <div>
        <div class="lg:grid lg:grid-cols-12 border border-[#D0D4DC] rounded-lg my-8" v-for="i in 7">
            <div class="col-span-5 p-0 m-0 roundes-sm">
                <NuxtImg src="https://picsum.photos/id/111/300/200" class="rounded-md"/>
            </div>
            <div class="col-span-7 p-0 m-0 flex flex-col justify-between">
                <div class="flex flex-col p-1">
                    <span class="title  pl-1 cursor-pointer">Name and model</span>
                    <span class="font-semibold pl-1 my-1 text-xl">
                        TZS 250,000,000
                    </span>

                    <p class="text-justify w-5/6 text-[#888B9B] my-6">
                        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.
                    </p>
                </div>

                <div class="flex flex-col-reverse md:flex-row md:justify-between p-1">
                    <div class="flex items-center p-0">
                        <IconsLocationIcon class="h-3 w-3" colour="#888b9b" />
                        <span class="text-slate-500 text-xs">Dar-es-salaam</span>
                    </div>

                    <span class="text-slate-500 text-xs">
                        1 week
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>