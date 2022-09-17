<template>
  <!-- <div class="flyers-view container m-2 space-y-2 p-2"> -->
  <div class="flyers-view container">
    <Teleport to="#pre-header-hook">
      <ModalComponent
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
      </ModalComponent>
    </Teleport>
    <!-- // two layouts? -->
    <div class="grid h-[90vh] grid-cols-[1fr,1fr,3fr]">
      <div class="bg-gray-800 p-4 pt-6">
        <div class="flex flex-col gap-y-4">
          <AmhButton :type="'outline'" class="w-[100%]">Search</AmhButton>
          <AmhButton @click="modalIsVisible = true" class="w-[100%]"
            >Create Flyer +</AmhButton
          >
        </div>
      </div>
      <!-- // switch these out when flyer chosen -->
      <!-- // change layout when switched? -->
      <div class="bg-gray-100 p-4 pt-6">
        <FlyersSearchListPart :flyers="flyers"></FlyersSearchListPart>
      </div>
      <div class="p-4 pt-6">
        <FlyersMainPart></FlyersMainPart>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import ModalComponent from "@/components/ModalComponent.vue";
import AmhButton from "@/elements/AmhButton.vue";
import { useFlyersStore } from "@/stores/flyers";
import FlyersMainPart from "../flyers/partials/FlyersMainPart.vue";
import FlyersSearchListPart from "../flyers/partials/FlyersSearchListPart.vue";

const store = useFlyersStore();
const flyers = ref([]);

const router = useRouter();

let newFlyerName = ref("");
let modalIsVisible = ref(false);

onMounted(() => {
  flyers.value = store.fetchFlyers();
});

function handleOKClicked() {
  store.createFlyer(newFlyerName);
  modalIsVisible = false;

  // TODO:
  // check name is filled

  router.push({
    name: "flyer-maker",
    params: {
      name: newFlyerName.value,
    },
  });
}
</script>
