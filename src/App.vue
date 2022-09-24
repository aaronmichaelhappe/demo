<!-- eslint-disable no-unused-vars -->
<template>
  <div>
    <div id="pre-header-hook"></div>
    <header class="bg-grey-700 pl-4 text-white">
      <div class="mx-auto flex justify-between p-2">
        <ion-icon name="menu-outline" class="text-4xl text-grey-500"></ion-icon>
        <ion-icon
          name="book-outline"
          class="text-4xl text-amber-500"
        ></ion-icon>
        <div v-show="isSignedIn">
          <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/profile">Create Profile</router-link> |
            <router-link to="/books">Books</router-link> |
            <router-link to="/flyers">Flyers</router-link>
          </nav>
          <p>
            <span>Hello,</span
            ><span data-testid="display-name">{{ displayName }}</span>
          </p>
        </div>
      </div>
    </header>
    <router-view />
  </div>
</template>

<script setup>
import { getAuth } from "firebase/auth";
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/user";

const auth = getAuth();
const isSignedIn = ref(false);
const store = useUserStore();
const { user } = storeToRefs(store);

const displayName = ref(user.displayName);
// TODO maybe move this to a composable
function handleIsSignedIn() {
  if (auth?.currentUser && auth?.currentUser.displayName) {
    displayName.value = auth.currentUser.displayName;
    return true;
  }
  return (isSignedIn.value = false);
}

auth?.onAuthStateChanged(() => {
  isSignedIn.value = handleIsSignedIn();
});

onMounted(() => {
  isSignedIn.value = handleIsSignedIn();
});
</script>
