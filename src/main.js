import "./registerServiceWorker";
import "./styles/app.css";
import App from "./App.vue";
import router from "./router";
import "./router/before-route";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase-config.js";
// import { getAnalytics } from "firebase/analytics";

const firebase = initializeApp(firebaseConfig);
const pinia = createPinia();

getAuth(firebase);

createApp(App).use(firebase).use(pinia).use(router).mount("#app");
