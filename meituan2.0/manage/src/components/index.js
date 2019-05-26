import pageInfo from "./common/pageInfo.vue";
import pageInfoTwo from "./common/pageInfoTwo.vue";
import addUser from "./user/addUser.vue";
import editUser from "./user/editUser.vue";
import addShopType from "./shop/addShopType.vue";
import addShop from "./shop/addShop.vue";
import addGoodsType from "./goods/addGoodsType.vue";
import shopList from "./shop/shopList.vue";

const components ={
    pageInfo,
    pageInfoTwo,
    addShopType,
 	addUser,
    editUser,	
	addShop,
	shopList,
    addGoodsType
};
export default{
    install(Vue){
        for(var key in components){
            Vue.component(key,components[key]);
        }
    }
}