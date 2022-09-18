<template>
  <div class="profile-view container mx-auto">
    <h1>This is an profile page.</h1>

    <form @submit.prevent="submitForm" class="grid grid-cols-2 gap-x-2 gap-y-4">
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
      <div>
        <span>
          <input type="radio" v-model="event.pets" :value="1" name="pets" />
          <label>Yes</label>
        </span>

        <span>
          <input type="radio" v-model="event.pets" :value="0" name="pets" />
          <label>No</label>
        </span>
      </div> -->

      <input class="submit" type="submit" value="Submit" />
    </form>
  </div>
</template>

<script setup>
import { useProfileStore } from "@/stores/profile";
import AmhInput from "@/elements/AmhInput.vue";
const store = useProfileStore();
console.log(store);

// const props = defineProps({
//   firstName: {
//     type: String,
//     required: true,
//   },
// });
</script>
