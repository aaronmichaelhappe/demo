import { ref } from "vue";
import { defineStore } from "pinia";
import fakeDbUser from "../fake-temp-db/user";

export const useUserStore = defineStore("user", () => {
  const user = ref({
    firstName: "",
    lastName: "",
    bio: "",
    email: "",
    gender: "",
  });

  function initUser() {
    return (user.value = { ...user.value, ...fakeDbUser });
  }

  return {
    user,
    initUser,
  };
});
