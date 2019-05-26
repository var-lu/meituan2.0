
// 本组件是公共组件
<template>
    <el-dialog
        :title="addOrUpdate?'添加用户信息':'修改用户信息'"
        :visible="visible"
        @update:visible="v=>$emit('update:visible',v)"
        width="30%"
        @close="$emit('update:visible',false)">
        <el-form :model="form" ref="myForm">
            <el-form-item label="用户名称" :rules="userNameRules"  prop="userName">
                <el-input  v-model="form.userName" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="性别" 
            align="left"
            required>
                <el-radio-group v-model="form.userSex">
                  <el-radio label="男"></el-radio>
                  <el-radio label="女"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item required label="生日">
                <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.userBirth" style="width: 100%;"></el-date-picker>
                </el-col>
            </el-form-item>
            <el-form-item  label="手机号" required :rules="userPhoneRules"  prop="userPhone">
                <el-input maxLength="11" v-model="form.userPhone" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="用户头像">
                <el-upload
                    :action="baseURL.updateUser"
                    disabled
                    :auto-upload="false"
                    :file-list="addOrUpdate?[]:[{name:form.userPic,url:$store.state.config.baseUrl+form.userPic}]"
                    list-type="picture">
                </el-upload>
                <el-upload
                    :data="form"
                    ref="upload"
                    class="upload-demo"
                    :action="addOrUpdate?baseURL.addUser:baseURL.updateUser"
                    name="userPic"
                    :auto-upload="false"
                    :limit="1"
                    :on-success="upSuccess"
                    list-type="picture">
                    <el-button size="small" type="primary">{{addOrUpdate?"点击上传":"修改图片"}}</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
                
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
          form:{
                userName:"",
                userSex:"",
                userBirth:"",
                userPhone:""
          },
          baseURL:{
            addUser:"/meituan/addUser",
            updateUser:"/meituan/updateUser"
          },
          userNameRules:[
              { required: true, message: '姓名不能为空'},
              { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
          ],
          userPhoneRules:[
             {validator:checkPhone,trigger:"blur"}
          ]  
      };
    },
    props:["visible","addOrUpdate","userData"],
    beforeUpdate(){
      if(!this.addOrUpdate&&this.form._id!==this.userData._id){
        console.log("我在被更改");
        for(var key in this.form){
           this.form[key]=this.userData[key]
        }
        this.form._id=this.userData._id;
        // 为啥需要单独写啊
        this.form.userPic=this.userData.userPic;
      }
    },
    methods: {
      upSuccess(res){
          if(res.ok===1){
            this.$message.success(res.msg);
          }else{
            this.$message.error(res.msg)
          }
          // 清空用户信息
            this.$refs.myForm.resetFields();
          // 清空已上传图片
            this.$refs.upload.clearFiles();
            // 读取店铺类别
            this.$store.dispatch("getUserList",{
                pageIndex:1
            })
      },
      addUser(){     
          this.$refs.myForm.validate((valid)=>{
              if(valid){
                  if(this.$refs.upload.uploadFiles.length>0||!this.addOrUpdate){
                    if(this.$refs.upload.uploadFiles.length<=0){
                      // 未更改图片
                      this.$store.dispatch("updateUserNoPic",{
                        form:this.form,
                        that:this,
                        _id:this.userData._id
                      })
                    }else{
                        this.$refs.upload.submit();
                        console.log(this.$refs.upload)
                    }
                    // 关闭dialog
                    this.$emit("update:visible",false)
                    
                  }else{
                    //  判断图片是否添加到列表里
                    this.$message.error("上传图片不能为空")
                  }
              }else{
                  this.$message.error("填写格式有误")
              }
          });
      }
    }
  };
</script>