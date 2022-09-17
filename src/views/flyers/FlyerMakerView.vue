<template>
  <div class="flyer-maker-view container"><p>asdf</p></div>
  <span
    >Flyers <span>{{ flyersLength }}</span></span
  >
</template>

<script setup>
import { defineProps, onMounted } from "vue";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { useFlyersStore } from "@/stores/flyers";

const props = defineProps({
  name: {
    type: String,
    // required: true,
  },
});

const route = useRoute();

onMounted(() => {
  console.log("props", props.name);
  route.params;
});

const store = useFlyersStore();
const { flyersLength } = storeToRefs(store);
</script>
