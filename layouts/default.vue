<template>
    <div class="h-screen">
      <AppHeader />
      <div class="lg:px-16 xl:px-24 min-h-full">
        <slot />
      </div>
      <div class="relative">
        <AppFooter />
      </div>
    </div>
  </template>