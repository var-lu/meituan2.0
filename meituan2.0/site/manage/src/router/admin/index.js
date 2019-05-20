import adminLog from "@/components/admin/log";
import login from "@/views/login";
export default [
    {
        path:"/adminLog",
        name:"adminLog",
        component:adminLog
    },
    {
        path:"/login",
        name:"login",
        component:login
    }
]