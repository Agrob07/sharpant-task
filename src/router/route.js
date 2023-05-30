import VueRouter from "vue-router";
import Vue from "vue";

import HomePage from "../pages/HomePage.vue";
import SecondPage from "../pages/SecondPage.vue";

export const router = new VueRouter({
  mode: "history",
  routes: [
    { name: "home", component: HomePage, path: "/" },
    { name: "step2", component: SecondPage, path: "/step2" },
  ],
});

Vue.use(VueRouter);
