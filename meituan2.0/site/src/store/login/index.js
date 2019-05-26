import axios from "axios"
const state = {
    code:"",
    token: localStorage.token,
    phoneId:localStorage.phoneId
}
const mutations = {
    SET_CODE(state,code){
        state.code =code
    },
    OUT_LOGIN(state){
        localStorage.clear();
        state.token=localStorage.token;
        state.phoneId=localStorage.phoneId;
    },
    SET_TOKEN(state,token){
        state.token = localStorage.token = token;
    },
    SET_PHONEID(state,phoneId){
        state.phoneId = localStorage.phoneId = phoneId;
    }
}
const actions = {
    getCode({commit},that){
        axios.get("/api/sendCode",{params:{
            phoneId:that.phoneId
        }})
        .then(({data})=>{
            commit("SET_CODE",data.code)
            console.log(data.code)
            that.$refs.code.value = data.code
        })
    },
    login({commit},that){
        axios.post("/api/userLogin",{
            phoneId:that.phoneId,
            code : that.$store.state.login.code
        })
        .then(({data})=>{
            if(data.ok===1){
                console.log(data,11111)
                commit("SET_TOKEN",data.token);
                commit("SET_PHONEID",data.phoneId);
            }
        })
    }
}
export default{
    state,
    mutations,
    actions
}