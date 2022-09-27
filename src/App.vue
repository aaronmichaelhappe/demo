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
        <HeaderLoggedOutPartial v-else></HeaderLoggedOutPartial>
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
  // TODO: auth by uid not displayName
  if (auth?.currentUser && auth?.currentUser.displayName) {
    return true;
  }
  return (isSignedIn.value = false);
}

auth?.onAuthStateChanged(() => {
  isSignedIn.value = handleIsSignedIn();
  hasRunLoginCheck.value = true;
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
