<template>
  <div class="profile-view container mx-auto">
    <h1>This is an profile page.</h1>

    <form class="grid grid-cols-2 gap-x-2 gap-y-4">
      <div>
        <AmhInput
          :model="store.firstName"
          :label="'First Name'"
          :placeholder="'Enter your first name'"
          :styleOptions="['widthFull']"
        ></AmhInput>
      </div>
      <div>
        <AmhInput
          :model="store.lastName"
          :label="'Last Name'"
          :placeholder="'Enter your last name'"
          :styleOptions="['widthFull']"
        ></AmhInput>
      </div>
      <div>
        <AmhInput
          :model="store.email"
          :label="'Email'"
          :placeholder="'Enter your email'"
          :styleOptions="['widthFull']"
        ></AmhInput>
      </div>
      <div class="col-span-2">
        <AmhTextarea
          :model="store.bio"
          :label="'Bio'"
          :placeholder="'Tell us a little about yourself.'"
          :styleOptions="['widthFull']"
        ></AmhTextarea>
      </div>
      <div class="col-span-2">
        <AmhRadios
          :model="store.gender"
          :name="'gender'"
          :values="[{ value: 'he' }, { value: 'she' }, { value: 'they' }]"
        ></AmhRadios>
      </div>
      <!-- <div>
        <label for="email">Email</label>
        <input
          v-model="store.firstName"
          name="first-name"
          type="text"
          placeholder="Enter your name"
        />
        {{ store.firstName }}
      </div>

    -->
      <!-- TODO should be input submit -->
      <AmhButton>Submit</AmhButton>
    </form>
  </div>
</template>

<script setup>
import { useProfileStore } from "@/stores/profile";
import { storeToRefs } from "pinia";
import AmhInput from "@/elements/AmhInput.vue";
import AmhButton from "@/elements/AmhButton.vue";
import AmhTextarea from "@/elements/AmhTextarea.vue";
import AmhRadios from "@/elements/AmhRadios.vue";
const store = useProfileStore();
// eslint-disable-next-line no-unused-vars
const { bio, email, firstName, lastName } = storeToRefs(useProfileStore());
console.log(store);

// const props = defineProps({
//   firstName: {
//     type: String,
//     required: true,
//   },
// });
</script>
