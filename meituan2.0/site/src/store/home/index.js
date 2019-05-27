import axios from 'axios';
const state = {
    shopTypeList:[]
}
const mutations = {
   SHOP_TYPE(state,shopType){
       state.shopTypeList = shopType
   }
}
const actions = {
     getShopList({commit}){
         axios.get("/api/getShopType")
         .then(({data})=>{
             commit("SHOP_TYPE",data.shopTypeList)
             console.log(data,111111111111111)
         })
     }
}
export default {
    state,
    mutations,
    actions
}