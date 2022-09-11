<template>
  <div class="flyers-view container mx-auto m-2 p-2">
    <span>Create Flyer +</span>
    <span>All Your Flyers</span>
    <span>All User Flyers</span>
    <div>
      <h3>Highlighed Flyers</h3>

      <li v-for="flyer in flyers" :key="flyer.id">
        {{ flyer.name }}
      </li>
      <div></div>
    </div>

    <!-- will be in modal -->
    <div>
      <label for="flyer-name"></label>
      <input
        v-model="newFlyerName"
        name="flyer-name"
        placeholder="flyer name"
      />
      <p>Message is: {{ newFlyerName }}</p>
      <button
        class="my-4 mr-4 px-4 py-2 bg-blue-500 text-white"
        @click="
          () => {
            addFlyer(newFlyerName);
          }
        "
      >
        Add Flyer
      </button>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
import { useFlyersStore } from "@/stores/flyers";

const store = useFlyersStore();
const { flyers } = storeToRefs(store);
const { fetchAllFlyers, addFlyer } = store;

let newFlyerName = ref("");

onMounted(() => {
  console.log("asdf");
  fetchAllFlyers();
});
</script>
