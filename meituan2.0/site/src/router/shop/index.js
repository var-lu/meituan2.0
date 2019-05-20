import shop from "@/views/shop/index"
import shopOrder from '@/components/shop/order';
import shopMerchant from '@/components/shop/merchant';
import shopEvaluate from '@/components/shop/evaluate';
import orderPreview from "@/views/orderpreview/index"

export default[
    {
        path:"/shop",
        name:"shop",
        component:shop,
        children:[
            {
                path:"/shop/",
                name:"shopOrder",
                component:shopOrder,
            },
            {
                path:"/shop/shopmerchant",
                name:"shopMerchant",
                component:shopMerchant,
            },
            ,
            {
                path:"/shop/shopevaluate",
                name:"shopEvaluate",
                component:shopEvaluate,
            }
        ]
    },
    {
        path:"/orderpreview",
        name:"orderpreview",
        component:orderPreview,
    }
]