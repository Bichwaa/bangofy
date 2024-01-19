<template>
    <div class="h-screen">
      <AppHeader />
      <div class="lg:px-64 min-h-full">
        <slot />
      </div>
      <div class="relative">
        <AppFooter />
      </div>
    </div>
  </template>