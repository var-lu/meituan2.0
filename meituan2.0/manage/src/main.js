import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import ElementUI from 'element-ui';
import axios from "axios";
import 'element-ui/lib/theme-chalk/index.css';
import login from "@/views/login";
import filters from "@/filters/index";
import bus from "@/bus";
import components from "@/components/index";
Vue.use(ElementUI);
Vue.use(components);
Vue.use(filters);
Vue.config.productionTip = false;
Vue.prototype.$axios=axios;
Vue.prototype.$bus=bus;
// axios拦截器
axios.interceptors.request.use(config=>{
  // 添加meituan前缀反向代理
  store.commit("SET_IS_LOADING",true)
  config.url = "/meituan/"+config.url+"?t="+Date.now();
  config.headers={
    "authorization":localStorage.token
  };
  return config;
});
// 过滤返回的数据
axios.interceptors.response.use(({data})=>{
  store.commit("SET_IS_LOADING",false)
  if(data.ok===-2){
    // 如果token异常就让他去登录
    store.commit("OUT_LOGIN")
  }else{
    return data;
  }
});

// 路由拦截
// router.beforeEach(function(to,from,next){

// })
new Vue({
  router,
  store,
  render: function (h) { return h(this.$store.state.admin.token?App:login) }
}).$mount('#app');
