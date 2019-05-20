import redpackage from "@/components/my/redpackage";
import address from "@/components/my/address";
import question from "@/components/my/question";
import agreement from "@/components/my/agreement";
import editAddress from "@/components/my/editAddress";
import addAddress from "@/components/my/addAddress"
export default[
    {
        path:"/my/redpackage",
        name:"redpackage",
        component:redpackage
    },
    {
        path:"/my/address",
        name:"address",
        component:address,
        // children:[
        //     {
        //         path:"/my/address/editaddress",
        //         name:"editAddress",
        //         component:editAddress
        //     }
        // ]
    },
    {
        path:"/my/question",
        name:"question",
        component:question
    },
    {
        path:"/my/agreement",
        name:"agreement",
        component:agreement
    },
    {
        path:"/my/address/editaddress",
        name:"editAddress",
        component:editAddress
    },
    {
        path:"/my/address/addAddress",
        name:"addAddress",
        component:addAddress
    }
]