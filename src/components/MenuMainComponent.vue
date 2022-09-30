<template>
  <div
    data-testid="menu-main-component"
    class="menu-main-comp bg-grey-50 shadow"
  >
    <button
      data-testid="menu-close-button"
      class="absolute top-2 right-9 h-4 w-4 rounded-full font-bold"
      @click="handleCloseMenu"
    >
      <transition name="fade">
        <ion-icon
          name="close"
          class="absolute top-0 text-4xl text-grey-500"
          v-show="isMenuOpen"
        ></ion-icon>
      </transition>
    </button>
    <nav class="flex flex-col">
      <router-link to="/">Home</router-link> |
      <router-link to="/profile">Create Profile</router-link> |
      <router-link to="/books">Books</router-link> |
      <router-link to="/flyers">Flyers</router-link>
    </nav>
  </div>
</template>

<script setup>
import { defineEmits, defineProps } from "vue";

const emit = defineEmits(["custom-click-child"]);
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  isMenuOpen: {
    type: Boolean,
    default: false,
  },
});

function handleCloseMenu() {
  emit("custom-click-child");
}
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
// later in some func
