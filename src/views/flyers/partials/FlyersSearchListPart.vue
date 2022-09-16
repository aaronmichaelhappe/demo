<template>
  <div class="flyers-search-list-part">
    <h3>Recent Flyers</h3>
    <ul class="no-wrap flex flex-col gap-y-4 pt-2">
      <li
        v-for="flyer in flyers"
        :key="flyer.id"
        class="h-[14rem] bg-white p-2 text-xs"
      >
        {{ flyer.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  flyers: {
    type: Array,
    required: true,
  },
});
</script>
