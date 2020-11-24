import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/"
    },
    {
      path: "/signUp",
      component: () => import("../views/SignUp.vue")
    },
    {
      path: "/signIn",
      component: () => import("../views/SignIn.vue")
    },
    {
      path: "/posters",
      meta: { auth: true },
      component: () => import("../views/Home.vue")
    },
    {
      path: "/post-editor",
      meta: { auth: true },
      component: () => import("../views/Poster.vue")
    }
  ]
});

router.beforeEach((to, from, next) => {
  const currentUser = store.getters.getUid;
  const requireAuth = to.matched.some(route => route.meta.auth);
  if (requireAuth && !currentUser) {
    next("/SignUp");
  } else {
    next();
  }
});

export default router;
