<template>
    <el-form :model="adminForm" status-icon :rules="rules"  ref="adminForm" label-width="100px" class="container">
        <h3>美团外卖管理后台</h3>
        <el-form-item label="账号" prop="adminName">
            <el-input type="text" v-model="adminForm.adminName" autocomplete="off" placeholder="请输入管理员账户"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="passWord">
            <el-input type="passWord" v-model="adminForm.passWord" placeholder="请输入管理员密码" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" :loading="isLoading" @click="login">登录</el-button>
            <el-button type="reset" @click="resetForm" >重置</el-button>
        </el-form-item>
    </el-form>
</template>


<script>
  export default {
      data(){
          return {
              isLoading:false,
              adminForm:{
                  adminName:"",
                  passWord:""
              },
              rules:{
                adminName: [
                    { required: true, message: '请输入管理员账户', trigger: 'blur' },
                    { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
                ],
                passWord: [
                    { required: true,message: '请输入管理员密码', trigger: 'blur' },
                    { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
                ]
              }
          }
      },
      methods:{
        resetForm(formName) {
            this.$refs.adminForm.resetFields();
        },
        login(){
            this.isLoading=true;
            this.$refs.adminForm.validate(valid=>{
                if(valid){
                    this.$store.dispatch("login",this);
                }else{
                    this.message.error("您输入的格式有误哦，请认真填写")
                }
            })
        }
      }
  }
</script>
<style lang="less" scoped>
.container{
    width: 400px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border: 1px solid #ccc;
    padding: 10px 30px;
    border-radius: 10px;
    box-shadow: 0 0 10px lightblue;
    h3{
        text-align: center;
    }
}
</style>
