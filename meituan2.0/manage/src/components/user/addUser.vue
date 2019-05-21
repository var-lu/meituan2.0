

<template>
    <el-dialog
        title="添加用户"
        :visible="visible"
        @update:visible="bool=>$emit('update:visible',bool)"
        width="30%">
        <el-form :model="userForm" ref="userForm" label-width="100px" class="demo-ruleForm" :rules="rules">
            <el-form-item
                label="用户手机号"
                prop="userPhone"
                reuired>
                <el-input type="age" v-model.number="userForm.userPhone" maxlength="11" auto-complete="off"></el-input>
            </el-form-item>
            </el-form>      
        <span slot="footer" class="dialog-footer">
            <el-button @click="$emit('update:visible',false)">取 消</el-button>
            <el-button type="primary" @click="addUser">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script>
  export default {
    data() {
        var checkPhone=(rule,value,cb)=>{
            if(!value){
                return cb(new Error('手机号不能为空'));
            }else{
                const reg =/^1(3|4|5|6|7|8|9){1}[0-9]{9}$/;
                if(reg.test(value)){
                    cb()
                }else{
                    return cb(new Error("请输入正确的手机格式"))
                }
            }
        };
        return {
            userForm:{
                userPhone:""
            },
            rules:{
                userPhone:[
                    {validator:checkPhone,trigger:"blur"}
                    
                ]
            }
        };
    },
    props:["visible"],
    methods: {
        addUser(){
            this.$refs.userForm.validate(valid=>{
                if(valid){
                    this.$store.dispatch('addUser',{that:this,userPhone:this.userForm.userPhone});
                    this.$emit("update:visible",false);
                }else{
                        this.$message.error("手机号有误")
                }
            })
        }
    },
    watch:{
        // "userForm.userPhone":{
        //     immediate:true,
        //     handler(newPhone,oldPhone){
        //         if(newPhone.toString().length>11){
        //             this.userForm.userPhone=oldPhone
        //         }
        //     }
        // }
    }
  };
</script>