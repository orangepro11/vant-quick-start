import Vue from "vue";
import VueRouter from "vue-router";
import { TabBar } from "@/layout";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: TabBar,
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "Home",
        component: () => import("@/views/tabBar/Home.vue"),
      },
      {
        path: "class",
        name: "Class",
        component: () => import("@/views/tabBar/Class.vue"),
      },
      {
        path: "other",
        name: "Other",
        component: () => import("@/views/tabBar/Other.vue"),
      },
      {
        path: "my",
        name: "My",
        component: () => import("@/views/tabBar/My.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
