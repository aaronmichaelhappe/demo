import { defineStore } from "pinia";
import { computed, ref } from "vue";
export const useFlyersStore = defineStore("flyers", () => {
  // pretend DB
  const userTEMP_EXAMPLE = {
    name: "Aaron Happe",
    id: 3,
  };
  let dbFlyersTEMP_EXAMPLE = [
    {
      id: 1,
      name: "Flying Food",
      user_id: 1,
    },
    {
      id: 2,
      name: "F The System",
      user_id: 1,
    },
    {
      id: 3,
      name: "We Tried to Warn You. - How Donald Trump turned 1/3 of America into a fascist cult of conspiracy theorists",
      user_id: 1,
    },
  ];
  const flyers = ref(null);

  const flyersLength = computed(() => flyers.value.length);

  function addFlyer(name) {
    flyers.value = [
      ...flyers.value,
      { id: flyersLength.value + 1, name: name, user_id: userTEMP_EXAMPLE.id },
    ];
    dbFlyersTEMP_EXAMPLE = flyers.value;
  }
  function fetchAllFlyers() {
    dbFlyersTEMP_EXAMPLE;
    flyers.value = dbFlyersTEMP_EXAMPLE;
  }

  return {
    addFlyer,
    fetchAllFlyers,
    flyers,
    flyersLength,
  };
});
