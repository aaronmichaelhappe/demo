<template>
  <div>
    <MenuMainComponent
      v-show="isMenuOpen"
      @custom-click-child="emitEvent"
    ></MenuMainComponent>
    <div class="align-items grid grid-cols-3 justify-items-center gap-8">
      <div class="justify-self-start">
        <ion-icon
          v-show="!isMenuOpen"
          @click="emitEvent"
          data-testid="menu-icon"
          name="menu-outline"
          class="cursor-pointer justify-center text-4xl text-grey-500"
        ></ion-icon>
      </div>
      <div>
        <ion-icon
          name="book-outline"
          class="text-4xl text-amber-500"
        ></ion-icon>
      </div>
      <div class="justify-self-end">
        <p
          @click="handleLogOut"
          class="flex cursor-pointer items-center text-grey-300"
        >
          Log Out
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { getAuth, signOut } from "firebase/auth";
import { defineEmits, defineProps } from "vue";
import router from "../../router";
import MenuMainComponent from "@/components/MenuMainComponent.vue";

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  isMenuOpen: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["custom-click"]);

const auth = getAuth();

function emitEvent() {
  emit("custom-click");
}

function handleLogOut() {
  signOut(auth)
    .then(() => {
      router.push({
        name: "login",
      });
    })
    .catch((error) => {
      // An error happened.
      console.log(error);
    });
}
</script>
