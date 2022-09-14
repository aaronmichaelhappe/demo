<template>
  <div class="flyer-maker-view container"><p>asdf</p></div>
  <span
    >Flyers <span>{{ flyersLength }}</span></span
  >
</template>

<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { useFlyersStore } from "@/stores/flyers";

onMounted(() => {
  const route = useRoute();
  console.log(route);
  route.params;
});

const store = useFlyersStore();
const { flyersLength } = storeToRefs(store);
</script>
