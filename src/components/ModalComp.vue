<template>
  <div class="modal-comp fixed top-0 right-0 bottom-0 left-0 bg-gray-500/50">
    <div
      class="relative top-[25%] left-[25%] w-1/2 p-4 bg-white border-4 border-gray-100 shadow"
    >
      <button
        v-if="props.showCloseX"
        @click="emit('closeModal')"
        class="absolute top-1 left-1 w-8 h-8 p-2 m-2 text-green-500 font-bold bg-gray-100 rounded-full"
      >
        X
      </button>
      <div class="mx-auto pt-6 px-6 pb-2">
        <slot></slot>
        <button
          class="button-main mr-4 px-4 py-2 bg-green-400 text-white font-bold rounded-full"
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
