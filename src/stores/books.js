import { computed, reactive } from "vue";
import { defineStore } from "pinia";
import bookFakeData, { createBookFakeData } from "../fake-temp-db/books";

export const useBooksStore = defineStore("books", () => {
  const books = reactive(bookFakeData);
  const booksLength = computed(() => books.length);

  const createBook = createBookFakeData;
  function fetchBooks() {
    return books;
  }

  return {
    createBook,
    fetchBooks,
    booksLength,
  };
});
