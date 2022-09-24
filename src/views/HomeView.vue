<template>
  <div class="home-view container m-2 mx-auto space-y-4 p-2">
    <!-- <p @click="handleSignOut" class="cursor-pointer">SIGN OUT NOW!</p> -->
    <div>
      <div class="flex">
        <ion-icon
          name="book-outline"
          class="mx-auto text-[8rem] text-amber-500 sm:text-[10rem]"
        ></ion-icon>
      </div>
      <h1
        class="mt-2 bg-gradient-to-r from-light-green-400 to-cyan-500 bg-clip-text text-center text-4xl text-6xl font-bold font-extrabold leading-[120%] text-transparent sm:text-7xl md:text-8xl"
      >
        Happe Books
      </h1>
      <div>
        <p
          class="mx-width-[26rem] text-md mt-4 mb-4 text-center italic leading-7"
        >
          But this is test portfolio project to demonstrate my skills from my
          current and prior positions.
        </p>
        <p
          class="mx-width-[26rem] text-md mt-4 mb-4 text-center italic leading-7"
        >
          This project was made with Vue 3, Pinia, Tailwind and more.
        </p>
      </div>
    </div>
    <div class="mt-8" data-testid="signed-off-wrapper" v-if="!isSignedIn">
      <AmhButton
        @click="handleGoogleSignIn"
        :type="'outline'"
        class="mx-auto max-w-[20rem]"
        data-testid="google-sign-in"
        >Sign in with Google</AmhButton
      >
      <p class="mt-2 text-center text-sm italic">
        More sign in methods to come.
      </p>
    </div>
  </div>
</template>

<script setup>
import AmhButton from "@/elements/AmhButton.vue";
import router from "../router";
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/user";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  // signOut,
} from "firebase/auth";
// eslint-disable-next-line no-unused-vars
// import { getFirestore } from "firebase/firestore/lite";

const auth = getAuth();
const isSignedIn = ref(false);
const provider = new GoogleAuthProvider();
const store = useUserStore();
const { displayName } = storeToRefs(store);

function syncAuthedUserWuserStore(authedUser) {
  displayName.value = authedUser.displayName;
}
onMounted(() => {
  isSignedIn.value = auth?.currentUser ? true : false;
});

function handleGoogleSignIn() {
  signInWithPopup(auth, provider)
    .then((result) => {
      isSignedIn.value = true;
      // eslint-disable-next-line no-unused-vars
      // const credential = provider.credentialFromResult(result);
      // FYI -> returns a token. You can use it to access the Google API.

      router.push({
        name: "dashboard",
      });
      syncAuthedUserWuserStore(result.user);
    })
    .catch(() => {
      // TODO fix this
      // eslint-disable-next-line no-unused-vars
      // const errorCode = error.code;
      // console.log(errorCode);
      // const errorMessage = error.message;
      // const email = error.customData.email;
    });
}
// function handleSignOut() {
//   signOut(auth)
//     .then(() => {
//       // Sign-out successful.
//       console.log(auth);
//       alert("you signed the fuck out");
//       isSignedIn.value = false;
//     })
//     .catch((error) => {
//       // An error happened.
//       console.log(error);
//     });
// }
// handleSignOut();
</script>
