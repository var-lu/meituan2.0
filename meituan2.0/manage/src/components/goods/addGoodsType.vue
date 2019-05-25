// 本组件是公共组件
<template>
    <el-dialog
        :title="addOrUpdate?'添加商品类别':'修改商品类别'"
        :visible="visible"
        @update:visible="v=>$emit('update:visible',v)"
        width="30%"
        @close="$emit('update:visible',false)">
        <el-form :model="form" ref="myForm">
            <el-form-item label="商品类别名称" :rules="goodsTypeRules"  prop="goodsType">
                <el-input  v-model="form.goodsType" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="商品类别图片">
                <el-upload
                    :action="baseURL.updateGoodsType"
                    disabled
                    :auto-upload="false"
                    :file-list="addOrUpdate?[]:[{name:form.goodsTypePic,url:$store.state.config.baseUrl+form.goodsTypePic}]"
                    list-type="picture">
                </el-upload>
                <el-upload
                    :data="form"
                    ref="upload"
                    class="upload-demo"
                    :action="addOrUpdate?baseURL.addGoodsType:baseURL.updateGoodsType"
                    name="goodsTypePic"
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
            <el-button type="primary" @click="addGoodsType">确 定</el-button>
        </span>
    </el-dialog>

</template>


<script>
  export default {
    data() {
      return {
          form:{
              goodsType:"",
          },
          baseURL:{
            addGoodsType:"/meituan/addGoodsType",
            updateGoodsType:"/meituan/updateGoodsType"
          },
          goodsTypeRules:[
              { required: true, message: '商品类别名称不能为空'},
              { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
          ]
      };
    },
    props:["visible","addOrUpdate","goodsData"],
    beforeUpdate(){
      if(!this.addOrUpdate&&this.form._id!==this.goodsData._id){
        console.log("我在被更改")
        this.form.goodsType=this.goodsData.goodsType;
        this.form._id=this.goodsData._id;
        this.form.goodsTypePic=this.goodsData.goodsTypePic;
      }
    },
    methods: {
      upSuccess(res){
          if(res.ok===1){
            this.$message.success(res.msg);
          }else{
            this.$message.error(res.msg)
          }
          // 清空商品类别名称
            this.$refs.myForm.resetFields();
            
          // 清空已上传图片
            this.$refs.upload.clearFiles();
            // 读取商品类别
            this.$store.dispatch("getGoodsTypeList",{
                pageIndex:1
            })
      },
      addGoodsType(){     
          this.$refs.myForm.validate((valid)=>{
              if(valid){
                  if(this.$refs.upload.uploadFiles.length>0||!this.addOrUpdate){
                    if(this.$refs.upload.uploadFiles.length<=0){
                      // 未更改图片
                      this.$store.dispatch("updateNoPic",{
                        goodsType:this.form.goodsType,
                        that:this,
                        _id:this.goodsData._id
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
                  this.$message.error("商品类别名称格式有误")
              }
          });
      }
    }
  };
</script>