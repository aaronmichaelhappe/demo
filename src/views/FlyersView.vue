<template>
  <div class="flyers-view container mx-auto m-2 p-2">
    <Teleport to="#pre-header-hook">
      <ModalComp
        v-if="createNewFlyerModalIsVisible"
        @closeModal="createNewFlyerModalIsVisible = false"
      >
        <div class="modal-comp">
          <label for="flyer-name"></label>
          <input
            v-model="newFlyerName"
            name="flyer-name"
            placeholder="flyer name"
          />
          <p>Message is: {{ newFlyerName }}</p>
          <button
            class="button-main my-4 mr-4 px-4 py-2 bg-green-400 text-white font-bold rounded-full"
            @click="
              () => {
                addFlyer(newFlyerName);
              }
            "
          >
            Add Flyer
          </button>
        </div>
      </ModalComp>
    </Teleport>

    <button
      class="button-main my-4 mr-4 px-4 py-2 bg-green-400 text-white font-bold rounded-full"
      @click="createNewFlyerModalIsVisible = true"
    >
      Create Flyer +
    </button>
    <button
      class="button-main my-4 mr-4 px-4 py-2 bg-green-400 text-white font-bold rounded-full"
    >
      All My Flyers
    </button>
    <button
      class="button-main my-4 mr-4 px-4 py-2 bg-green-400 text-white font-bold rounded-full"
    >
      All Flyers
    </button>
    <div>
      <h3>Highlighed Flyers</h3>

      <li v-for="flyer in flyers" :key="flyer.id">
        {{ flyer.name }}
      </li>
      <div></div>
    </div>

    <!-- will be in modal -->
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
import { useFlyersStore } from "@/stores/flyers";
import ModalComp from "@/components/ModalComp.vue";

const store = useFlyersStore();
const { flyers } = storeToRefs(store);
const { fetchAllFlyers, addFlyer } = store;

let newFlyerName = ref("");
let createNewFlyerModalIsVisible = ref(false);

onMounted(() => {
  console.log("asdf");
  fetchAllFlyers();
});
</script>
