<template>
  <div class="modal-comp fixed top-0 right-0 bottom-0 left-0 bg-gray-500/50">
    <div
      class="relative top-[25%] left-[25%] w-1/2 p-4 bg-white border-4 border-gray-100 shadow"
    >
      <button
        v-if="props.showCloseX"
        @click="emit('closeModal')"
        class="absolute top-[-1rem] left-[-1.5rem] w-4 h-4 font-bold rounded-full"
      >
        <ion-icon
          name="close-circle"
          class="absolute top-0 text-green-500 text-4xl"
        ></ion-icon>
      </button>
      <div>
        <slot></slot>
        <div class="flex space-x-2 pt-2">
          <AmhButton
            @click="
              () => {
                // TODO
                // reserach emit again the erros I am geting
                emit('okModal');
              }
            "
          >
            {{ props.okTextValue
            }}<ion-icon name="add-outline" class="ml-2 text-xl"></ion-icon>
          </AmhButton>
          <AmhButton
            @click="
              () => {
                emit('cancelModal');
              }
            "
          >
            {{ props.cancelTextValue }}
          </AmhButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import AmhButton from "@/elements/AmhButton.vue";
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
