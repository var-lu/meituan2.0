import axios from "axios"
const state = {
    code:"",
    token: localStorage.token,
}
const mutations = {
    SET_CODE(state,code){
        state.code =code
    },
    OUT_LOGIN(state){
        localStorage.clear();
        state.token=localStorage.token;
    },
    SET_TOKEN(state,token){
        state.token = localStorage.token = token;
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
        axios.post("/api/login",{
            phoneId:that.phoneId,
            code : that.$store.state.login.code
        })
        .then(({data})=>{
            if(data.ok===1){
                console.log(data.token)
                commit("SET_TOKEN",data.token);
            }
        })
    }
}
export default{
    state,
    mutations,
    actions
}