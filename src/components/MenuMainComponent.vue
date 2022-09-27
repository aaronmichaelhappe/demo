<template>
  <div
    data-testid="menu-main-component"
    class="menu-main-comp fixed right-[66%] top-0 bottom-0 left-0 bg-grey-50 shadow"
  >
    <button
      data-testid="menu-close-button"
      class="absolute top-2 right-9 h-4 w-4 rounded-full font-bold"
      @click="handleCloseMenu"
    >
      <ion-icon
        name="close"
        class="absolute top-0 text-4xl text-grey-500"
      ></ion-icon>
    </button>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/profile">Create Profile</router-link> |
      <router-link to="/books">Books</router-link> |
      <router-link to="/flyers">Flyers</router-link>
    </nav>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["custom-click-child"]);

function handleCloseMenu() {
  emit("custom-click-child");
}
</script>

// later in some func
