<template>
  <div class="flyers-view container mx-auto m-2 p-2">
    <Teleport to="#pre-header-hook">
      <ModalComp
        v-if="createFlyerModalIsVisible"
        @closeModal="createFlyerModalIsVisible = false"
        @okModal="
          () => {
            // TODO instead of adding flyer here maybe add it in next page after sending param? so I can work with the returned object from addFlyer
            addFlyer(newFlyerName);
            createFlyerModalIsVisible = false;
            // TODO useRouter perhaps instead
            this.$router.push({
              path: '/flyer-maker',
              params: { name: newFlyerName },
            });
          }
        "
        @cancelModal="createFlyerModalIsVisible = false"
        :okTextValue="'Add Flyer yo yo'"
      >
        <div class="w-full mt-12">
          <label for="flyer-name" class="w-1/2"></label>
          <input
            v-model="newFlyerName"
            name="flyer-name"
            placeholder="flyer name"
            class="my-2 p-2 w-3/4 bg-white border-2 border-gray-200"
          />
        </div>
      </ModalComp>
    </Teleport>
    <div>
      <h1
        class="leading-[200%] text-8xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600 font-extrabold"
      >
        Flyer Designer
      </h1>
    </div>
    <div>
      <h3>Recent Flyers</h3>

      <ul class="flex no-wrap bg-gray-100 p-8">
        <li
          v-for="flyer in slicedFlyers"
          :key="flyer.id"
          class="w-[20%] mr-4 p-4 bg-white text-xs"
        >
          {{ flyer.name }}
        </li>
      </ul>

      <div></div>
    </div>
    <button
      class="button-main my-4 mr-4 px-4 py-2 bg-green-400 text-white font-bold rounded-full"
      @click="createFlyerModalIsVisible = true"
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
let slicedFlyers = ref(null);
const { fetchAllFlyers, addFlyer } = store;

let newFlyerName = ref("");
let createFlyerModalIsVisible = ref(false);

onMounted(() => {
  fetchAllFlyers();
  slicedFlyers.value = flyers.value.slice(0, 4);
});
</script>
