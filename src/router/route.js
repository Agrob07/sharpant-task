import VueRouter from "vue-router";
import Vue from "vue";

import HomePage from "../pages/HomePage.vue";
import QuizPage from "../pages/QuizPage.vue";

export const router = new VueRouter({
  mode: "history",
  routes: [
    { name: "home", component: HomePage, path: "/" },
    { name: "quiz", component: QuizPage, path: "/quiz" },
  ],
});

Vue.use(VueRouter);
