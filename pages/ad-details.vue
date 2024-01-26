<template>
    <div class="flex flex-col p-2">
        <div class="grid grid-cols-7">
            <ImageViewer class="col-span-7 lg:col-span-5"/>
            <div class="col-span-2 hidden lg:flex lg:flex-col w-96 gap-12">
            <OwnerInfoCard/>
            <SafetyTips/>
        </div>
        </div>
        <ItemInfoCard/>
        <div class="flex flex-col md:flex-row items-center gap-3 lg:hidden">
            <OwnerInfoCard/>
            <SafetyTips/>
        </div>
    </div>
</template>