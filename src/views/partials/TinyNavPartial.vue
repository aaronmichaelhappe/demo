<template>
  <div class="flex flex-col items-center">
    <ion-icon name="book-outline" class="text-4xl text-amber-500"></ion-icon>
    <div class="flex cursor-pointer items-center gap-x-2">
      <!-- // TODO current page style indication -->
      <router-link to="/">Home</router-link><span>|</span
      ><router-link to="/about">About</router-link>
    </div>
  </div>
</template>
