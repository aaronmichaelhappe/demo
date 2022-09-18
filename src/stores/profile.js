import { computed, ref } from "vue";
import { defineStore } from "pinia";

export const useProfileStore = defineStore("profile", () => {
  const firstName = ref("");
  const lastName = ref("");
  const fullName = computed(() => `${firstName.value} ${lastName.value}`);

  return {
    firstName,
    lastName,
    fullName,
  };
});
