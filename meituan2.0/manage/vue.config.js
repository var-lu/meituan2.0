module.exports={
    devServer:{
        proxy:{
            "/meituan":{
                target:"http://127.0.0.1",
                changeOrigin:true,
                pathRewrite:{
                    "^/meituan":""
                }
            }
        }
    }
}