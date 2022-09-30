<template>
  <div>
    <transition name="fade2">
      <div v-show="isMenuOpen">
        <div
          class="absolute top-0 right-0 bottom-0 left-0 z-10 bg-brown-900 opacity-40"
          :class="[!isMenuOpen && 'static w-0']"
        ></div>
      </div>
    </transition>
    <transition name="slide">
      <MenuMainComponent
        v-show="isMenuOpen"
        @custom-click-child="emitEvent"
        class="main-menu-component z-20"
        :isMenuOpen="isMenuOpen"
      ></MenuMainComponent>
    </transition>

    <div
      class="container mx-auto grid grid-cols-3 items-center justify-items-center gap-8"
    >
      <div class="justify-self-start">
        <transition name="fade">
          <ion-icon
            v-show="!isMenuOpen"
            @click="emitEvent"
            data-testid="menu-icon"
            name="menu-outline"
            class="cursor-pointer justify-center text-4xl text-grey-500"
          ></ion-icon>
        </transition>
      </div>
      <div>
        <ion-icon
          name="book-outline"
          class="text-4xl text-amber-800"
        ></ion-icon>
      </div>
      <div class="justify-self-end">
        <p
          @click="handleLogOut"
          class="sm:text-md flex cursor-pointer items-center text-sm text-grey-300"
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
<style>
.main-menu-component {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 25rem;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.6s ease-in-out;
}

.slide-enter-to {
  position: absolute;
  right: 25rem;
  width: 25rem;
  opacity: 1;
}

.slide-enter-from {
  position: absolute;
  left: -15rem;
  width: 5rem;
  opacity: 0;
}

.slide-leave-to {
  position: absolute;
  left: -15rem;
  width: 5rem;
  opacity: 1;
}
.slide-leave-from {
  position: absolute;
  right: 25rem;
  width: 25rem;
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade2-enter-active,
.fade2-leave-active {
  transition: all 0.8s ease;
}

.fade2-enter-from,
.fade2-leave-to {
  opacity: 0;
}

@media (max-width: 600px) {
  .main-menu-component {
    width: 100%;
  }
  .slide-enter-to {
    right: 100%;
    width: 100%;
  }
  .slide-leave-from {
    right: 100%;
    width: 100%;
  }
  .slide-enter-from {
    left: -25vw;
    right: 2rem;
    width: 0;
    opacity: 0;
  }

  .slide-leave-to {
    left: -25vw;
    right: 2rem;
    width: 0;
    opacity: 1;
  }
}
</style>
