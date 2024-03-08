<template>
    <Card class="bg-lightgrey shadow-none p-2 w-full">
        <div class="flex p-2 gap-8 mb-2">
            <NuxtImg src="https://picsum.photos/50" class="rounded-full"/>
            <div class="flex flex-col w-full">
                <div class="flex gap-4 items-center">
                    <span class="name font-medium">Named Nameless</span>
                    <IconsBadgeIcon class="w-4 h-4"/>
                </div>
                <span class="text-grey">Member since 2022</span>
            </div>
        </div>
        <div class="flex gap-8 p-2 mb-4">
            <div class="flex gap-6 items-center border border-grey rounded-lg py-2 px-6">
                <IconsPhoneIcon class="w-5 h-5" currentColor="#9ca3af"/>
                <p class="text-greytext">0721345435</p>
            </div>

            <button class="rounded-md bg-blue-700 py-2 px-6 text-white">Call</button>
        </div>
    </Card>
</template>