import { computed, ref } from "vue";
import { defineStore } from "pinia";
import { myFetch } from "@/utils/store-helpers.js";

export const useUserStore = defineStore("flyers", () => {
  // TODO move this to pretend DB

  const user = ref(myFetch("user"));

  const name = computed(() => {
    return `${user.value.first}  ${user.value.last}`;
  });

  return {
    name,
  };
});
