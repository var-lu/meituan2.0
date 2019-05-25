import Vue from 'vue';
import Router from 'vue-router';
import login from '@/views/login.vue';
import manage from "@/views/manage";
import admin from "./admin/index";
import shop from "./shop/index";
import goods from "./goods/index";
import user from "./user/index";
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...admin,
    ...shop,
    ...goods,
    ...user
  ]
})
