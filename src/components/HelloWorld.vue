<template>
  <div class="flex">yoo? {{ msg }}</div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  msg: {
    type: String,
    required: true,
  },
});
console.log(props);
</script>
