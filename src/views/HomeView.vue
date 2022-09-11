<template>
  <div class="home-view container mx-auto m-2 p-2">
    <div>
      <img alt="Vue logo" src="../assets/logo.png" />
    </div>
    <h1 class="text-8xl font-bold flex flex-wrap">
      <span class="whitespace-nowrap">Hipsters and</span
      ><span class="whitespace-nowrap">Hipsters First</span>
    </h1>
    <h2 class="whitespace-nowrap text-6xl font-bold">Book Store</h2>
    <h3 class="text-2xl italic">
      Where our logo looks suspiciously like Vue.js
    </h3>
    <div>
      <h4>Hi Aaron!</h4>
      <p>Books Projects Assigned<span>14</span></p>
      <p>
        Flyers <span>{{ flyersLength }}</span>
      </p>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useFlyersStore } from "@/stores/flyers";

const store = useFlyersStore();
const { flyersLength } = storeToRefs(store);
</script>
