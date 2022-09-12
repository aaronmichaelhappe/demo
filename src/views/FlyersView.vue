<template>
  <div class="flyers-view container mx-auto m-2 p-2">
    <Teleport to="#pre-header-hook">
      <ModalComp
        v-if="modalIsVisible"
        @closeModal="modalIsVisible = false"
        @okModal="() => handleOKClicked()"
        @cancelModal="modalIsVisible = false"
        :okTextValue="'Add Flyer yo yo'"
      >
        <div class="w-full">
          <label for="flyer-name">Flyer Name</label>
          <input
            v-model="newFlyerName"
            name="flyer-name"
            placeholder="Cool Name"
            class="my-2 p-2 w-full bg-white border-2 border-gray-200"
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
      @click="modalIsVisible = true"
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
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import ModalComp from "@/components/ModalComp.vue";
import { useFlyersStore } from "@/stores/flyers";

const store = useFlyersStore();
const { flyers } = storeToRefs(store);
const { fetchAllFlyers, addFlyer } = store;

const router = useRouter();

let slicedFlyers = ref(null);
let newFlyerName = ref("");
let modalIsVisible = ref(false);

onMounted(() => {
  fetchAllFlyers();
  // TODO: not sure about this. Only on mount?
  slicedFlyers.value = flyers.value.slice(0, 4);
});

function handleOKClicked() {
  // TODO instead of adding flyer here maybe add it in next page after sending param? so I can work with the returned object from addFlyer
  addFlyer(newFlyerName);
  modalIsVisible = false;
  // TODO am I doing this right? I don't see params in the next route
  router.push({
    path: "/flyer-maker",
    params: { name: newFlyerName },
  });
}
</script>
