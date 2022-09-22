<template>
  <div class="home-view container m-2 mx-auto space-y-4 p-2">
    <p @click="handleSignOut" class="cursor-pointer">SIGN OUT NOW!</p>
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
        <h3 class="mt-4 mb-4 text-center text-xl italic leading-8 sm:text-2xl">
          I actually work for a publishing company.
        </h3>
        <p class="text-md mt-4 mb-4 text-center italic leading-7">
          But this is test portfolio project.
        </p>
      </div>
    </div>
    <div class="mt-8">
      <AmhButton
        @click="handleGoogleSignIn"
        :type="'outline'"
        class="mx-auto max-w-[20rem]"
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
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { ref } from "vue";
// import { getFirestore } from "firebase/firestore/lite";

const auth = getAuth();
const provider = new GoogleAuthProvider();
const user = ref(auth.currentUser);

function handleGoogleSignIn() {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      user.value = result.user;
      // FYI -> returns a token. You can use it to access the Google API.
      credential.accessToken;
      console.log("code not running, please help");
      router.push({
        name: "dashboard",
      });
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
function handleSignOut() {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      alert("you signed the fuck out");
    })
    .catch((error) => {
      // An error happened.
      console.log(error);
    });
}
</script>
