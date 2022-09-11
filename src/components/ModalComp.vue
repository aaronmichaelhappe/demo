<template>
  <span @click="emit('closeModal')">X</span>
  <slot></slot>
</template>

<script setup>
import { defineEmits } from "vue";
const emit = defineEmits(["showsidebar"]); // later in some func
</script>
