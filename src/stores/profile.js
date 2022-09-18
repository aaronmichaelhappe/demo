import { reactive } from "vue";
import { defineStore } from "pinia";

export const useProfileStore = defineStore("profile", () => {
  const user = reactive({
    firstName: "",
    lastName: "",
    bio: "",
    email: "",
    gender: "",
  });
  // const fullName = computed(() => `${user.firstName} ${user.lastName}`);

  return {
    user,
  };
});
