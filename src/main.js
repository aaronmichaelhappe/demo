import "./registerServiceWorker";
import "./styles/app.css";
import App from "./App.vue";
import router from "./router";
import beforeRouter from "./router/before-route";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC73o8fshu40eTkxnpzs0Ra2aoD-7Z-qd0",
  authDomain: "happe-books-8481b.firebaseapp.com",
  projectId: "happe-books",
  storageBucket: "happe-books.appspot.com",
  messagingSenderId: "788070773248",
  appId: "1:788070773248:web:d14e5bce55b2d7b3931ee5",
};
const firebase = initializeApp(firebaseConfig);
const pinia = createPinia();

getAuth(firebase);

createApp(App)
  .use(firebase)
  .use(pinia)
  .use(router)
  .use(beforeRouter)
  .mount("#app");
