import Vue from 'vue';
import Router from 'vue-router';
import common from "./common/index";
import shop from './shop/index';
import home from "./home/index";
import order from "./order/index";
import seach from "./seach/index";
import my from "./my/index";
import Error from "./error/index";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...common,
    ...shop,
    ...seach,  
    ...order,
    ...home,
    ...my,
    Error
  ]
})
