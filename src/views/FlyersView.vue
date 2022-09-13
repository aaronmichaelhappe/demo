<template>
  <div class="flyers-view container m-2 space-y-2 p-2">
    <Teleport to="#pre-header-hook">
      <ModalComp
        v-if="modalIsVisible"
        @closeModal="modalIsVisible = false"
        @okModal="() => handleOKClicked()"
        @cancelModal="modalIsVisible = false"
        :okTextValue="'Add Flyer'"
      >
        <div class="w-full">
          <label for="flyer-name">Flyer Name</label>
          <input
            v-model="newFlyerName"
            name="flyer-name"
            placeholder="Cool Name"
            class="my-2 w-full border-2 border-gray-200 bg-white p-2"
          />
        </div>
      </ModalComp>
    </Teleport>
    <div class="grid h-[90vh] grid-cols-[1fr,3fr] gap-4">
      <div class="flex flex-col gap-y-4 pt-6">
        <AmhButton :type="'outline'" class="w-[10rem]">Search</AmhButton>
        <AmhButton @click="modalIsVisible = true" class="w-[10rem]"
          >Create Flyer +</AmhButton
        >
      </div>
      <div class="border-l-2 border-gray-100 pl-4">
        // TODO eventually move to its own element
        <h1
          class="mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-8xl font-extrabold leading-[120%] text-transparent"
        >
          Flyer Designer
        </h1>
        <div>
          <h3>Recent Flyers</h3>

          <ul class="no-wrap flex space-x-6 bg-gray-100 p-6">
            <li
              v-for="flyer in slicedFlyers"
              :key="flyer.id"
              class="w-[20%] bg-white p-4 text-xs"
            >
              {{ flyer.name }}
            </li>
          </ul>

          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import ModalComp from "@/components/ModalComp.vue";
import { useFlyersStore } from "@/stores/flyers";
import AmhButton from "@/elements/AmhButton.vue";

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
