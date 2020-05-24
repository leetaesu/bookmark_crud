import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import BookCreate from "../views/BookCreate.vue";
import BookDelete from "../views/BookDelete.vue";
import BookList from "../views/BookList.vue";
import BookReplace from "../views/BookReplace.vue";
import BookUpdate from "../views/BookUpdate.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: 'create',
        name: 'BookCreate',
        component: BookCreate
      },
      {
        path: 'delete',
        name: 'BookDelete',
        component: BookDelete
      },
      {
        path: 'list',
        name: 'BookList',
        component: BookList
      },
      {
        path: 'replace',
        name: 'BookReplace',
        component: BookReplace
      },
      {
        path: 'update',
        name: 'BookUpdate',
        component: BookUpdate
      }
    ]
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
