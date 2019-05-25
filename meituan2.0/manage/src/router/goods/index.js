import goodsList from "@/components/goods/goodsList";
import goodsTypeList from "@/components/goods/goodsTypeList";
export default[
    {
        path:"/goodsList",
        name:"goodsList",
        component:goodsList,
        meta:{
            isAuthorization:true// 如果值为true是需要登陆以后才可以进入该路由
        }
    },
    {
        path:"/goodsTypeList",
        name:"goodsTypeList",
        component:goodsTypeList,
        meta:{
            isAuthorization:true
        }
    }
]