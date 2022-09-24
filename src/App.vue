<!-- eslint-disable no-unused-vars -->
<template>
  <div>
    <div id="pre-header-hook"></div>
    <header class="bg-grey-700 py-2">
      <div class="container mx-auto">
        <HeaderLoggedInPartial v-if="isSignedIn"></HeaderLoggedInPartial>
        <HeaderLoggedOutPartial v-else></HeaderLoggedOutPartial>
      </div>
    </header>
    <router-view />
  </div>
</template>

<script setup>
import HeaderLoggedInPartial from "@/views/partials/HeaderLoggedInPartial.vue";
import HeaderLoggedOutPartial from "@/views/partials/HeaderLoggedOutPartial.vue";
import { getAuth } from "firebase/auth";
import { ref, onMounted } from "vue";

const auth = getAuth();
const hasRunLoginCheck = ref(false);
const isSignedIn = ref(false);

function handleIsSignedIn() {
  if (auth?.currentUser && auth?.currentUser.displayName) {
    return true;
  }
  return (isSignedIn.value = false);
}

auth?.onAuthStateChanged(() => {
  isSignedIn.value = handleIsSignedIn();
  hasRunLoginCheck.value = true;
});

onMounted(() => {
  if (!hasRunLoginCheck.value) isSignedIn.value = handleIsSignedIn();
});
</script>
