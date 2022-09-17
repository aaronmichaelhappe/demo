<template>
  <!-- <div class="flyers-view container m-2 space-y-2 p-2"> -->
  <div class="books-view container">
    <p v-for="book in books" :key="book.id">
      {{ book }}
    </p>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useBooksStore } from "../../stores/books";

onMounted(() => {
  // may have made a bug here
  console.log("asdf");
  const store = useBooksStore();
  console.log(store.books);
});
</script>
