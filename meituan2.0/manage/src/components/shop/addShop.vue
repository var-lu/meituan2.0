<template>
	<el-dialog title="添加店铺" :visible="visible" @update:visible="v=>$emit('update:visible',v)">
		<el-form :model="form" ref="myForm">
			<el-form-item prop="shopType" label="店铺名称" label-width="150px">
				<el-input v-model="form.shopName" style="width:300px;" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="起送价" label-width="150px">
				<el-input v-model="form.startDeliveryCost" style="width:300px;" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="配送费用" label-width="150px">
				<el-input v-model="form.deliveryCost" style="width:300px;" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="月售" label-width="150px">
				<el-input v-model="form.monthSaleCount" style="width:300px;" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="人均" label-width="150px">
				<el-input v-model="form.perCapita" style="width:300px;" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item prop="shopTypeId" label="店铺类别名称" label-width="150px">
				<el-select v-model="form.shopTypeId" placeholder="请选择">
					<el-option v-for="item in $store.state.shop.allShopTypeList" :key="item._id" :label="item.shopType" :value="item._id">
					</el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="店铺图片" label-width="150px">
				<el-upload :data="form" ref="upload" class="upload-demo" action="/meituan/addShop" name="shopPic" :auto-upload="false" :limit="1" :on-success="upSuccess" list-type="picture">
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
		props: ["visible", "shopTypeId"],
		data() {
			return {
				form: {
					shopName: "",
					shopTypeId: "",
					startDeliveryCost: "",
					deliveryCost: "",
					monthSaleCount: "",
					perCapita: ""
				}
			}
		},
		methods: {
			upSuccess(res) {
				if(res && res.ok === 1) {
					this.$message.success(res.msg);
				} else {
					this.$message.error(res.msg)
				}
				// 清空表单
				this.$refs.myForm.resetFields();
				// 清空上传的文件
				this.$refs.upload.clearFiles();
				this.$bus.$emit("getShopList", 1);
				if(this.$route.name !== "shopList") {
					this.$router.push({
						name: "shopList"
					});
				}
				//              // 读取店铺类别
				//	            this.$store.dispatch("getShopTypeList",{
				//	                pageIndex:1
				//	            })
				//console.log(33333,this.$route.name);
				// 关闭dialog
				this.$emit("update:visible", false)
			},
			addShop() {
				//console.log(44444,this.$refs.upload);
				this.$refs.upload.submit();

			}
		},
		watch: {
			shopTypeId(newValue, oldValue) {
				//console.log(22222,newValue);
				if(newValue) {
					this.form.shopTypeId = newValue;
				}
			}
		},
		mounted() {
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