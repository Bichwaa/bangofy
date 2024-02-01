<template>
    <div class="flex flex-col p-2 2xl:px-48">
        <div class="grid grid-cols-12">
            <ImageViewer class="col-span-12 lg:col-span-8"/>
            <div class="col-span-2 hidden lg:flex lg:flex-col w-96 gap-12">
            <OwnerInfoCard/>
            <SafetyTips/>
        </div>
        </div>
        <div class="lg:grid lg:grid-cols-12">
            <ItemInfoCard class="lg:col-span-8"/>
        </div>
        <div class="flex flex-col md:flex-row items-center gap-3 lg:hidden">
            <OwnerInfoCard/>
            <SafetyTips/>
        </div>
    </div>
</template>