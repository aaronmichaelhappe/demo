<template>
  <div class="home-view container m-2 mx-auto space-y-4 p-2">
    <div>
      <div>
        <img alt="Vue logo" src="../assets/logo.png" />
      </div>
      <ion-icon name="heart"></ion-icon>
      <ion-icon name="book-outline"></ion-icon>
      <h1 class="flex flex-wrap text-8xl font-bold">
        <span class="whitespace-nowrap">Lorum Ipsum Dolar</span>
      </h1>
      <h2 class="mb-2 whitespace-nowrap text-6xl font-bold">Book Store</h2>
      <h3 class="text-2xl italic">
        Where our logo looks suspiciously like Vue.js
      </h3>
    </div>

    <div>
      <h4>Hi {{ name }}</h4>
      <p>Books Projects Assigned<span>14</span></p>
      <p></p>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/user.js";
const store = useUserStore();

const { name } = storeToRefs(store);
</script>
