<template>
  <div class="home-view" :class="containerMainLayout">
    <div class="relative z-[-1]">
      <div class="flex">
        <ion-icon
          name="book-outline"
          class="mx-auto text-[5rem] text-amber-800 sm:text-[6rem] sm:text-[10rem] md:text-[8rem]"
        ></ion-icon>
      </div>
      <AmhHeroH1 class="pb-4"></AmhHeroH1>
      <div>
        <p class="mx-width-[26rem] text-md pb-4 text-center italic leading-7">
          But this is test portfolio project to demonstrate my skills from my
          current and prior positions.
        </p>
        <p class="mx-width-[26rem] text-md pb-4 text-center italic leading-7">
          This project was made with Vue 3, Pinia, Tailwind and more.
        </p>
        <TinyNavPartial class="mt-2"></TinyNavPartial>
      </div>
    </div>
  </div>
</template>

<script setup>
import AmhHeroH1 from "@/elements/AmhHeroH1.vue";
import TinyNavPartial from "@/views/partials/TinyNavPartial.vue";
import { containerMainLayout } from "../../tailwind";
</script>
