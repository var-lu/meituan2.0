import axios from 'axios';
const state = {
    from:"",
    address:[],
    info:null
}
const mutations = {
    ADD_STATE(state,form){
       state.form = form
    },
    GET_ADDRESS(state,address){
        state.address = address
    },
    GET_INFO(state,info){
        state.info = info;
        
    }
}  
const actions = {
    addloaction({commit},params){
       
        axios.post("/api/location",params)
        .then(({data})=>{
            console.log(data.ok)
            // this.$store.dispatch("getlocation")
        })
    },
    getlocation({commit}){
        axios.get("/api/getlocation",{params:{
            phoneId:localStorage.phoneId
        }})
        .then(({data})=>{
            console.log(data,111111)
            commit("GET_ADDRESS",data.locationInfo)
        })
    },
    getInfo({commit},that){
        axios.get("/api/current",{params:{
            id : that.form.id
        }})
        .then(({data})=>{
            commit("GET_INFO",data.info)
            for(var key in that.$store.state.location.info){
                if(key!=="id"){
                    that.form[key]=that.$store.state.location.info[key]
                }
                
              }
        })
    },
    reviseInfo({commit},params){
        axios.post("/api/revise",params)
        .then(({data})=>{
            commit("GET_INFO",data.info)
        })
    },
    deleteOne({commit},id){
        axios.get("/api/delete",{params:{
            id:id
        }})
        .then(({data})=>{
            console.log(data.ok)
        })
    }
}
export default {
    state,
    mutations,
    actions
}