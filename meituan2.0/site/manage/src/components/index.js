import pageInfo from "./common/pageInfo.vue";
import addShopType from "./shop/addShopType.vue";
const components ={
    pageInfo,
    addShopType
};
export default{
    install(Vue){
        for(var key in components){
            Vue.component(key,components[key]);
        }
    }
}