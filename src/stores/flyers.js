import { computed, ref } from "vue";
import { defineStore } from "pinia";
import flyerFakeData, { createFlyerFakeData } from "../fake-temp-db/books";

export const useFlyersStore = defineStore("flyers", () => {
  const flyers = ref(flyerFakeData);
  const flyersLength = computed(() => flyers.value.length);

  const createFlyer = createFlyerFakeData;
  function fetchFlyers() {
    return flyers;
  }

  return {
    createFlyer,
    fetchFlyers,
    flyers,
    flyersLength,
  };
});
