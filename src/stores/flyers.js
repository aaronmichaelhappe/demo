import { computed, ref } from "vue";
import { defineStore } from "pinia";
import { myFetch } from "@/utils/store-helpers";

export const useFlyersStore = defineStore("flyers", () => {
  // TODO move this to pretend DB
  const userTEMP_EXAMPLE = {
    name: "Aaron Happe",
    id: 3,
  };

  const flyers = ref([]);

  const flyersLength = computed(() => flyers.value.length);
  function fetchFlyers() {
    return (flyers.value = myFetch("flyers"));
  }
  function createFlyer(name) {
    // TODO check this return from data file.
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

  return {
    createFlyer,
    fetchFlyers,
    flyers,
    flyersLength,
  };
});
