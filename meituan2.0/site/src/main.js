import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from "@/store/index"
import axios from "axios"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import components from './components';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import {SwitchCell, Cell, CellGroup} from "vant";
import 'vant/lib/index.css';import BScroll from 'better-scroll';
Vue.use(MintUI);
import VueLazyload from "vue-lazyload";
import Login from "./views/Login/index"
import { from } from '_array-flatten@2.1.2@array-flatten';
Vue.prototype.$axios = axios
//增加token验证
axios.interceptors.request.use(config=>{
  config.headers = {
    "authorization":localStorage.token
  }
  return config
})
//路由拦截
router.beforeEach((to,from,next)=>{
  if(to.meta.isAuthorization){
    if(localStorage.token){
      next()
    }else{
      store.commit("OUT_LOGIN")
    }
  }else{
    //不需要
    next()
  }
})
Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false
Vue.prototype.$axios=axios;
Vue.use(ElementUI);
Vue.use(components);
Vue.use(SwitchCell).use(CellGroup).use(Cell);
// 自定义懒加载
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: './assets/img/img-error.jpeg',
  loading: './assets/img/shop-lazyload.png',
  attempt: 1
  })
new Vue({
  router,
  store,
  render: function (h) { return h(this.$store.state.login.token?App:Login) }
}).$mount('#app')

