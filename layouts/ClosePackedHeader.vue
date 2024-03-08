<template>
    <div class="h-screen">
      <AppHeaderClosePacked />
      <div class="lg:px-16 xl:px-24 min-h-full">
        <slot />
      </div>
      <div class="relative">
        <AppFooter />
      </div>
    </div>
  </template>