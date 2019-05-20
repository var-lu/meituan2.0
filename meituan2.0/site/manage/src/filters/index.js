const filters={
    date(v){
        const date = new Date(v);
		date.setTime(v);
        return new Date(v).toLocaleString()
    }
}
export default{
    install(Vue){
        for(var key in filters){
            Vue.filter(key,filters[key]);
        }
    }
}