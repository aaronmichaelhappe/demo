<template>
  <div class="home-view container mx-auto m-2 p-2">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>BooksNThings</h1>
    // books from pinia
    {{ name }}

    {{ flyersLength }}
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useFlyersStore } from "@/stores/flyers";

const store = useFlyersStore();
const { flyersLength, name } = storeToRefs(store);
console.log(flyersLength);
</script>
