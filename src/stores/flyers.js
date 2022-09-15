import { computed, ref } from "vue";
import { defineStore } from "pinia";
import { myFetch } from "@/utils/store-helpers.js";

export const useFlyersStore = defineStore("flyers", () => {
  // TODO move this to pretend DB
  const userTEMP_EXAMPLE = {
    name: "Aaron Happe",
    id: 3,
  };

  const flyers = ref(null);

  const flyersLength = computed(() =>
    flyers.value !== null ? flyers.value.length : 0
  );
  function fetchFlyers() {
    flyers.value = myFetch("flyers");
  }
  function addFlyer(name) {
    // TODO check this is the F type i wana use.
    const newFlyer = {
      id: flyersLength.value + 1,
      name: name,
      user_id: userTEMP_EXAMPLE.id,
    };
    flyers.value = [
      ...flyers.value,
      { id: flyersLength.value + 1, name: name, user_id: userTEMP_EXAMPLE.id },
    ];

    return newFlyer;
  }

  function sliceFlyers(index) {
    return flyers.value.slice(0, index);
  }

  return {
    addFlyer,
    fetchFlyers,
    sliceFlyers,
    flyers,
    flyersLength,
  };
});
