<!-- eslint-disable no-unused-vars -->
<template>
  <div>
    <div id="pre-header-hook"></div>
    <header class="bg-grey-700 py-2">
      <div class="container mx-auto">
        <HeaderLoggedInPartial
          v-if="isSignedIn"
          :isMenuOpen="isToggled"
          @custom-click="toggle"
        ></HeaderLoggedInPartial>
        <HeaderLoggedOutPartial
          v-else-if="!isSignedIn"
        ></HeaderLoggedOutPartial>
      </div>
    </header>
    <router-view />
  </div>
</template>

<script setup>
import HeaderLoggedInPartial from "@/views/partials/HeaderLoggedInPartial.vue";
import HeaderLoggedOutPartial from "@/views/partials/HeaderLoggedOutPartial.vue";
import { useRoute } from "vue-router";
import { getAuth } from "firebase/auth";
import { ref, onMounted, watch } from "vue";

const auth = getAuth();
const isSignedIn = ref(false);
const route = useRoute();
const routeName = ref(route);
const isToggled = ref(false);

function handleIsSignedIn() {
  if (auth?.currentUser && auth?.currentUser.uid) {
    return true;
  }
  return (isSignedIn.value = false);
}

auth?.onAuthStateChanged(() => {
  isSignedIn.value = handleIsSignedIn();
});

function toggle() {
  isToggled.value = !isToggled.value;
}

watch(routeName.value, () => {
  isToggled.value = !isToggled.value;
});

onMounted(() => {
  isSignedIn.value = handleIsSignedIn();
});
</script>
