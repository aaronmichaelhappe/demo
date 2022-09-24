<template>
  <div class="login-view center flex flex-col p-2 sm:p-12 md:p-16">
    <AmhHeroH1></AmhHeroH1>
    <h1 class="pt-8 text-center text-2xl font-bold text-amber-700 sm:text-4xl">
      LOGIN PAGE
    </h1>
    <AmhButton
      @click="handleGoogleSignIn"
      :type="'outline'"
      class="mx-auto mt-6 mb-2 max-w-[20rem]"
      >Log in with Google</AmhButton
    >

    <p class="mt-2 text-center text-sm italic">More sign in methods to come.</p>
  </div>
</template>
<script setup>
import AmhButton from "@/elements/AmhButton.vue";
import AmhHeroH1 from "@/elements/AmhHeroH1.vue";
import router from "../router";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  // signOut,
} from "firebase/auth";

const auth = getAuth();
const provider = new GoogleAuthProvider();

// eslint-disable-next-line no-unused-vars
function syncAuthedUserWuserStore(_authedUser) {
  // displayName.value = authedUser.displayName;
}

function handleGoogleSignIn() {
  signInWithPopup(auth, provider)
    .then((result) => {
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
</script>
