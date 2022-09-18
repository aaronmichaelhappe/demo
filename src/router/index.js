import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/books",
    name: "books",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/books/BooksView.vue"),
  },
  {
    path: "/flyers",
    name: "flyers",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/flyers/FlyersView.vue"),
  },
  {
    path: "/flyer-maker/:name",
    name: "flyer-maker",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/flyers/FlyerMakerView.vue"
      ),
    props: true,
  },
  {
    path: "/profile",
    name: "profile",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProfileView.vue"),
  },
  {
    path: "/dev-notes",
    name: "dev-notes",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/dev-notes/DevNotesView.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
