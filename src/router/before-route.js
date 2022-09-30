import router from "./index.js";
import { getApp } from "firebase/app";

export function initBeforeEachRoute() {
  // router needs to use Auth. so thus outside of router.js
  router.beforeEach(async (to) => {
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

    if (requiresAuth && !(await getApp().getCurrentUser())) {
      if (to.name !== "login") return { path: "/login" };
    }
  });
}
