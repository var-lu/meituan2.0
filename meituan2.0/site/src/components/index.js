import footNav from './common/footNav.vue';
import componentLazyloading from "./common/loading.vue";
import shopPop from './common/shop/shopPop.vue';
import backTop from "./common/backTop.vue";
import homeNav from './common/homeNav.vue';
import outLogin from "./common/outLogin.vue";
import addressForm from "./common/addressForm.vue";
import show from "./common/delete.vue";
import timer from "./common/timer.vue"
const components = {
	backTop,
    shopPop,
    componentLazyloading,
    homeNav,
    footNav,
    outLogin,
    addressForm,
    show,
    timer
};
export default{
    install(Vue){
        for(var key in components){
            Vue.component(key,components[key])
        }
    }
} 