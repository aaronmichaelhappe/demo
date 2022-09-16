import { ref } from "vue";
import { defineStore } from "pinia";
import { myFetch } from "@/utils/store-helpers";
import bookFakeData, { createBookFakeData } from "../fake-temp-db/books";

export const useBooksStore = defineStore("flyers", () => {
  function fetchBooks() {
    return (books.value = myFetch("flyers"));
  }

  const books = ref(bookFakeData);
  const createBook = createBookFakeData;

  return {
    createBook,
    fetchBooks,
    books,
  };
});
