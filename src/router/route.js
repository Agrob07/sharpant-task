import VueRouter from "vue-router";
import Vue from "vue";

import HomePage from "../pages/HomePage.vue";
import SecondPage from "../pages/SecondPage.vue";
import Step3 from "../pages/Step-3.vue";

export const router = new VueRouter({
  mode: "history",
  routes: [
    { name: "home", component: HomePage, path: "/" },
    { name: "step2", component: SecondPage, path: "/step2" },
    { name: "step3", component: Step3, path: "/step3" },
  ],
});

Vue.use(VueRouter);
