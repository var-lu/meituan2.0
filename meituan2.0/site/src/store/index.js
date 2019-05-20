import Vuex from "vuex"
import Vue from "vue"
import shop from './shop';
import login from './login';
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        footIndex:0
    },
    modules:{
        shop,
        login,
    }
})