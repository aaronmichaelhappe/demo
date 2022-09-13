<template>
  <button
    class="flex items-center justify-center self-center rounded-full border-green-400 px-4 py-2 font-bold text-white"
    :class="altStyles"
  >
    <slot></slot>
  </button>
</template>
<script setup>
import { defineProps, ref } from "vue";
const props = defineProps({
  type: {
    type: String,
    required: false,
    default: "",
  },
});

let altStyles = ref("bg-green-400");
console.log(altStyles);

// let type = props.type;

const styleLookup = {
  outline: "text-green-400 border-2 border-green-400 ",
};

if (props.type !== "") {
  altStyles.value = styleLookup[props.type];
}
</script>
