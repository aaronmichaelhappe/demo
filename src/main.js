import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import "./styles/app.css";
import { createPinia } from "pinia";
import router from "./router";

const pinia = createPinia();

createApp(App).use(pinia).use(router).mount("#app");
