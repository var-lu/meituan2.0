import home from "@/views/home/index"
import order from "@/views/order/index"
import my from "@/views/my/index"
export default[
    {
        path:"/",
        name:"home",
        component:home
    },
    {
        path:"/order",
        name:"order",
        component:order
    },
    {
        path:"/my",
        name:"my",
        component:my
    }
]