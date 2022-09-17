<template>
  <!-- <div class="flyers-view container m-2 space-y-2 p-2"> -->
  <p>asdf</p>
  <div class="books-view container">
    <p v-for="book in books" :key="book.id">{{ book.title }}asdf</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useBooksStore } from "../../stores/books";

const store = useBooksStore();
const books = ref(store.fetchBooks());
</script>
