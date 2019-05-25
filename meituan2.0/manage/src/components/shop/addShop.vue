<template>
    <el-dialog title="添加店铺" :visible="visible"  @update:visible="v=>$emit('update:visible',v)">
        <el-form :model="form" ref="myForm">
            <el-form-item prop="shopTypeName" label="店铺名称" label-width="150px">
                <el-input v-model="form.shopName" style="width:300px;" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="shopTypeId" label="店铺类别" label-width="150px">
                <el-select v-model="form.shopTypeId" placeholder="请选择">
                    <el-option v-for="item in $store.state.shop.allShopTypeList"
                            :key="item._id"
                            :label="item.shopTypeName"
                            :value="item._id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="店铺图片" label-width="150px">
                <el-upload
                        :data = "form"
                        ref="upload"
                        class="upload-demo"
                        action="/meituan/addShop"
                        name="shopPic"
                        :auto-upload = "false"
                        :limit="1"
                        :on-success = "upSuccess"
                        list-type="picture">
                    <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="$emit('update:visible',false)">取 消</el-button>
            <el-button type="primary" @click="addShop">确 定</el-button>
        </div>
    </el-dialog>

</template>

<script>
    // import bus from "@/bus"
    export default {
        name: "add-shop",
        props:["visible","shopTypeId"],
        data(){
            return {
                form:{
                    shopName:"",
                    shopTypeId:""
                }
            }
        },
        methods:{
            upSuccess(res){
                // console.log(res);
                // 清空表单
                this.$refs.myForm.resetFields();
                // 清空上传的文件
                this.$refs.upload.clearFiles();
                //this.$bus.$emit("getShopList",1);
                if(this.$route.name !== "shopList"){
                    this.$router.push({name:"shopList"});
                }
                //console.log(33333,this.$route.name);
                this.$emit('update:visible',false);
            },
            addShop(){
            	console.log(this.$refs.upload);
                this.$refs.upload.submit();
            }
        },
        watch:{
          shopTypeId(newValue,oldValue){
              //console.log(22222,newValue);
              if(newValue){
                  this.form.shopTypeId=newValue;
              }
          }
        },
        mounted(){
            this.$store.dispatch("getAllShopTypeList");
            // if(this.shopTypeId){
            //     this.form.shopTypeId=this.shopTypeId;
            // }
            // console.log(111111,this.shopTypeId)
        }
    }
</script>

<style scoped>

</style>