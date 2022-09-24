<template>
  <MenuMainComponent
    v-show="isMenuOpen"
    @click="isMenuOpen = false"
  ></MenuMainComponent>
  <div class="align-items grid grid-cols-3 justify-items-center gap-8">
    <div class="justify-self-start">
      <ion-icon
        v-show="!isMenuOpen"
        @click="handleOpenMenu"
        data-testid="menu-icon"
        name="menu-outline"
        class="cursor-pointer justify-center text-4xl text-grey-500"
      ></ion-icon>
    </div>
    <div>
      <ion-icon name="book-outline" class="text-4xl text-amber-500"></ion-icon>
    </div>
    <div class="justify-self-end">
      <p
        @click="handleLogOut"
        class="flex cursor-pointer items-center text-grey-300"
      >
        log out
      </p>
    </div>
  </div>
</template>
<script setup>
import { getAuth, signOut } from "firebase/auth";
import { ref } from "vue";
import MenuMainComponent from "@/components/MenuMainComponent.vue";

const isMenuOpen = ref(false);
const auth = getAuth();

function handleLogOut() {
  signOut(auth)
    .then(() => {
      console.log(auth);
      alert("you signed the fuck out");
    })
    .catch((error) => {
      // An error happened.
      console.log(error);
    });
}

function handleOpenMenu() {
  isMenuOpen.value = true;
}
</script>
