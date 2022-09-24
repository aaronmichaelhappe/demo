import router from "./index.js";
import { getAuth } from "firebase/auth";

// router needs to use Auth. so thus outside of router.js
router.beforeEach(async (to) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth && !getAuth().currentUser) {
    if (to.name !== "login") return { path: "/login" };
  }
});
