import pageInfo from "./common/pageInfo.vue";
import addShopType from "./shop/addShopType.vue";
import addUser from "./user/addUser.vue";
import editUser from "./user/editUser.vue";
const components ={
    pageInfo,
    addShopType,
    addUser,
    editUser
};
export default{
    install(Vue){
        for(var key in components){
            Vue.component(key,components[key]);
        }
    }
}