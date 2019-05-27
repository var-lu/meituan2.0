import Vuex from "vuex"
import Vue from "vue"
import shop from './shop';
import login from './login';
import location from "./location";
import home from "./home"
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        footIndex:0
    },
    modules:{
        shop,
        login,
        location,
        home
    }
})