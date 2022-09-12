<template>
  <div
    class="modal-comp fixed flex justify-center w-full h-[100vh] mx-auto bg-gray-500/50"
  >
    <div
      class="relative w-1/2 h-[50vh] mt-[20vh] p-4 bg-white border-4 border-gray-100 shadow"
    >
      <button
        v-if="props.showCloseX"
        @click="emit('closeModal')"
        class="absolute top-1 left-1 flex justify-center items-center w-8 h-8 p-2 m-2 text-green-500 font-bold bg-gray-100 rounded-full"
      >
        X
      </button>
      <div class="mx-auto w-3/4">
        <slot></slot>
        <button
          class="button-main my-4 mr-4 px-4 py-2 bg-green-400 text-white font-bold rounded-full"
          @click="
            () => {
              // TODO
              // reserach emit again the erros I am geting
              emit('okModal');
            }
          "
        >
          {{ props.okTextValue }}
        </button>
        <button
          class="button-main my-4 mr-4 px-4 py-2 bg-green-400 text-white font-bold rounded-full"
          @click="
            () => {
              emit('okModal');
            }
          "
        >
          {{ props.cancelTextValue }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
const emit = defineEmits(["closeModal, okModal"]);
const props = defineProps({
  showCloseX: {
    type: Boolean,
    required: false,
    default: false,
  },
  okTextValue: {
    type: String,
    required: false,
    default: "OK",
  },
  cancelTextValue: {
    type: String,
    required: false,
    default: "Cancel",
  },
});
</script>
