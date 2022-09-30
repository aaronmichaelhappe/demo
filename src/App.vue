<template>
  <div>
    <div id="pre-header-hook"></div>
    <header class="space-y-4 bg-brown-600 px-4 py-2 sm:px-6">
      <HeaderLoggedInPartial
        v-if="isSignedIn"
        :isMenuOpen="isOpen"
        @custom-click="toggle"
        class="container mx-auto"
      ></HeaderLoggedInPartial>
      <HeaderLoggedOutPartial
        v-else-if="!isSignedIn"
        class="container mx-auto"
      ></HeaderLoggedOutPartial>
    </header>
    <router-view />
  </div>
</template>

<script setup>
import HeaderLoggedInPartial from "@/views/partials/HeaderLoggedInPartial.vue";
import HeaderLoggedOutPartial from "@/views/partials/HeaderLoggedOutPartial.vue";
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { getApp } from "firebase/app";

// const auth = getAuth();
const app = getApp();
const isOpen = ref(false);
const isSignedIn = ref(false);
const route = useRoute();
const routeName = ref(route);

function toggle() {
  isOpen.value = !isOpen.value;
}

watch(routeName.value, () => {
  isOpen.value = false;
  isSignedIn.value = callGetCurrentUser();
});

async function callGetCurrentUser() {
  const value = await app.getCurrentUser();
  isSignedIn.value = !!value && true;
}

onMounted(() => {
  isSignedIn.value = callGetCurrentUser();
  isOpen.value = false;
});
</script>
