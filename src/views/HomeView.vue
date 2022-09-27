<template>
  <div class="home-view container m-2 mx-auto space-y-4 p-2">
    <div>
      <div class="flex">
        <ion-icon
          name="book-outline"
          class="mx-auto text-[8rem] text-amber-500 sm:text-[10rem]"
        ></ion-icon>
      </div>
      <AmhHeroH1></AmhHeroH1>
      <div>
        <p
          class="mx-width-[26rem] text-md mt-4 mb-4 text-center italic leading-7"
        >
          But this is test portfolio project to demonstrate my skills from my
          current and prior positions.
        </p>
        <p
          class="mx-width-[26rem] text-md mt-4 mb-4 text-center italic leading-7"
        >
          This project was made with Vue 3, Pinia, Tailwind and more.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import AmhHeroH1 from "@/elements/AmhHeroH1.vue";
</script>
