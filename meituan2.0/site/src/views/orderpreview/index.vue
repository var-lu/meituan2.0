<template>
	<div class="order_preview">
		<!--<div class="order_header">
			<i></i>
			<span>提交订单</span>
		</div>-->
		<backTop class="order_header" topBg="#fff" topColor="#333" routeName="/shop" topName="提交订单"></backTop>
		<div class="order_section">
			<div class="order_inner_section">
				<div class="order_preview_head">
					<div class="op_head_address">
						<span class="address_span"></span>
						<p class="address_p">选择收货地址</p>
						<i></i>
					</div>
					<div class="op_head_time">
						<span class="time_span"></span>
						<p class="time_p"><b>立即送出</b>(大约20:26送达)</p>
						<i></i>
					</div>
				</div>
				<div class="order_preview_head order_preview_main">
					<div class="op_head_address opm_head_address">
						<span class="shop_span"></span>
						<p class="shop_p">北京麦当劳沙河餐厅</p>
						<i></i>
					</div>
				</div>
				<div class="opm_goods">
					<div class="opm_goods_inner">
						<img alt="goods" src="../../assets/img/orderpreview/food-enjoy1.png">
						<div class="goods_right">
							<p><span>牛气冲天三件套</span><span>¥36</span></p>
							<p><span>牛气冲天三件套</span><span class="discount">¥49.5</span></p>
							<p>x1</p>
						</div>
					</div>
					<div class="opm_goods_inner">
						<img alt="goods" src="../../assets/img/orderpreview/food-enjoy2.png">
						<div class="goods_right">
							<p><span>安格斯厚牛芝士堡</span><span>¥29</span></p>
							<p><span>份</span><span></span></p>
							<p>x1</p>
						</div>
					</div>
				</div>
				<div class="opm_fee">
					<div class="opm_fee_inner">
						<p><span>配送费</span><span>¥9</span></p>
						<div class="opm_fee_line"><i></i><i></i></div>
						<div class="opm_fee_total">
							<div>
								<span >共计￥87.5&nbsp;&nbsp;&nbsp;已优惠 ¥13.5</span>
								<span >
									小计
									<span class="small_fee">¥74</span>
								</span>
							</div>
						</div>
					</div>
				</div>
				<div class="opm_pay">
					<div class="pay_choice">
						<div class="opm_pay_inner pay_method">
							<p><span>支付方式</span><span>在线支付</span></p>
						</div>
						<div class="opm_pay_inner">
							<i></i>
							<p><span>餐具数量</span><span>1人</span></p>
						</div>
						<div class="opm_pay_inner">
							<i></i>
							<p><span>备注</span><span class="ask">口味、偏好等要求</span></p>
						</div>
						<van-switch-cell v-model="checked" title="发票" class="pay_receipt" title-style="text-align:left;" />
						<van-cell-group class="pay_group">
							<div class="opm_pay_inner">
								<p>
									<input class="pay_name" type="text" placeholder="请填写个人或公司名称" />
								</p>
							</div>
							<div class="opm_pay_inner">
								<p>
								<input class="pay_identify_num" type="text" placeholder="请填写纳税人识别号（选填）" />
								</p>
							</div>
						</van-cell-group>
					</div>
				</div>
			</div>
		</div>
		<div class="order_footer">
			<div class="order_footer_left">
				<span class="of_discount">已优惠 ¥13.5</span>
				<span class="order_total">合计<i>¥<a>41</a></i></span>
			</div>
			<div class="order_footer_right">
				<button class="order_submit" @click="goOrder">
					<span>提交订单</span>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "orderPreview",
		data(){
		    return {
		      checked: false
		    }
		},
		methods:{
			//去往订单界面
			goOrder(){
      			this.$router.push("/order");
			}
		}
	}
</script>

<style lang="scss" scoped>
	.order_preview {
		color: #333;
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		/*.order_header {
			z-index: 1000;
			height: 0.5rem;
			display: flex;
			text-align: center;
			justify-content: space-between;
			background-color: rgb(255, 255, 255);
			i {
				width: 0.4rem;
				background: url(../../assets/img/orderpreview/head-arrow-back.png) no-repeat;
				background-size: 20% 30%;
				background-position: center;
			}
			span {
				padding: 0.18rem 0.4rem 0.18rem 0;
				width: 100%;
			}
		}*/
		.order_section {
			flex: 1;
			overflow: auto;
			width: 100%;
			.order_inner_section{
				background-color: #F4F4F4;
				min-height: 100vh;
				padding: 0 0.1rem 0;
			    overflow:hidden;
				.order_preview_head{
					margin-top: 0.1rem;
				    padding:0 0.1rem;
				    background-color: #fff;
				    overflow: hidden;
					.op_head_address,.op_head_time,.opm_head_address{
						box-sizing: border-box;
					    padding: 0.15rem 0.15rem 0.13rem 0;
						position: relative;
						span{
							display: inline-block;
						    height: 0.2rem;
						    width: 0.2rem;
						    background: url(../../assets/img/orderpreview/add.png) no-repeat;
						    background-size: 0.2rem 0.2rem;
						    position: absolute;
						    left: 0.02rem;
						    top: 50%;
						    margin-top: -0.08rem;
						}
						p{
						    font-size: 16px;
    						color: #FFB000;
    						height: 0.21rem;
						    line-height: 0.21rem;
						    font-weight: bold;
						    padding-right: 0.15rem;
    						margin-left: 0.3rem;
    						text-align: left;
						}
						i{
							top: 50%;
						    right: 0;
						    margin-top: -0.05rem;
						    display: inline-block;
						    height: 0.11rem;
						    width: 0.06rem;
						    background: url(../../assets/img/orderpreview/right-select.png) no-repeat ;
						    background-size: 0.06rem 0.11rem;
						    position: absolute;
						}
					}
					.op_head_time::before{
						content: '';
					    position: absolute;
					    top: -50%;
					    bottom: -50%;
					    left: -50%;
					    right: -50%;
					    -webkit-transform: scale(0.5);
					    transform: scale(0.5,0.5);
					    border-top: 1px solid #D7D7D7;
					}
					.op_head_time{
						padding: 0.12rem 0;
						.time_span{
							background: url(../../assets/img/orderpreview/arrive-time.png) no-repeat;
							background-size: 0.2rem 0.2rem;
						}
						.time_p{
						    white-space: nowrap;
						    overflow: hidden;
						    text-overflow: ellipsis;
						    font-size: 14px;
						    color: #348BED;
						    vertical-align: middle;
						    font-weight: normal;
						    b{
						    	font-size: 15px;
							    color: #333;
							    font-weight: bold;
							    margin-right: 0.05rem;
						    }
						}
					}
					.opm_head_address{
						.shop_span{
							background: url(../../assets/img/orderpreview/shop-mdl.jpg) no-repeat;
							background-size: 0.2rem 0.2rem;
							border-radius: 50%;
						}	
						.shop_p{
    						font-weight: normal;
    						white-space: nowrap;
						    overflow: hidden;
						    text-overflow: ellipsis;
						    font-size: 14px;
						    color: #666;
						    max-width: 70%;
    						margin-top: 0.01rem; 
						}
						i{
							height: 0.15rem;
						    width: 0.5rem;
						    font-size: 10px;
						    color: #333;
						    object-fit: cover;
						    box-sizing: border-box;
						    position: absolute;
						    right: 0;
						    background: url(../../assets/img/orderpreview/shop-autogamy.png) no-repeat ;
						    background-size: cover;
						}
					}
				}
				.opm_goods{
					width: 100%;
				    background-color: #fff;
				    padding-bottom: 0.05rem;
				    .opm_goods_inner{
				    	margin-bottom: 0.05rem;
				    	height: 0.75rem;
				    	background-color: #F8F8F8;
				    	padding: 0.1rem;
				    	display: flex;
				    	justify-content: space-between;
					    img{
					    	object-fit: cover;
						    height: 0.55rem;
						    width: 0.55rem;
					    }
					    .goods_right{
					    	flex: 1;
						    padding-left: 0.1rem;
						    position: relative;
						    p{
						    	display: flex;
						    	justify-content: space-between;
						    	:nth-child(1){
						    		display: block;
								    max-width: 1.8rem;
								    overflow: hidden;
								    text-overflow: ellipsis;
								    white-space: nowrap;
						    	}
						    }
						    p:nth-child(1){
					    		font-size: 14px;
								color: #333;
								height: 0.2rem;
								line-height: 0.2rem;
					    	}
					    	p:nth-child(2),:nth-child(3){
					    		font-size: 12px;
								color: #999;
								height: 0.17rem;
								line-height: 0.17rem;
					    	}
					    	.discount{
				    		    text-decoration: line-through;
					    	}
					    }
				    }
				}
				.opm_fee{
					width: 100%;
				    background-color: #fff;
				    .opm_fee_inner{
				    	position: relative;
				    	overflow: hidden;
    					p{
    						padding: 0 0.1rem;
    						display: flex;
				    		justify-content: space-between;
				    		margin-bottom: 0.2rem;
				    		height: 0.2rem;
						    line-height: 0.2rem;
    					}
    					.opm_fee_line{
    						position: absolute;
    						top: 0.4rem;
    						height: 0.02rem;
    						width: 100%;
    						left: 0;
						    border-bottom: 0.02rem dashed #d7d7d7;
						    i{
						    	position: absolute;
							    height: 0.12rem;
							    width: 0.12rem;
							    top: -0.06rem;
							    background-color: #f4f4f4;
							    border-radius: 50%;
							    bottom: -0.09rem;
						    }
						    i:nth-child(1){
						    	left: -0.05rem;
						    }
						    i:nth-child(2){
						    	right: -0.05rem;
						    }
    					}
    					.opm_fee_total{
    						padding: 0 0.1rem;
						    >div{
						    	display: flex;
						    	padding: 0.12rem 0 0.12rem 0;
						    	line-height: 0.2rem;
						    	>span:nth-child(1){
								    flex: 1;
								    text-align: right;
								    font-size: 12px;
								    color: #999;
								    padding-right: 0.15rem;
						    	}
						    	span:nth-child(2){
						    		text-align: right;
						    		font-size: 14px;
								    font-weight: bold;
								    color: #333;
						    	}
						    	.small_fee{
						    		color: #FB4E44;;
						    	}
						    }
    					}
				    }
					
				}
				.opm_pay{
					width: 100%;
				    background-color: #fff;
				    margin: 0.2rem 0 0.1rem;
				    .pay_choice{
				    	padding: 0 0.1rem;
				    }
				    .van-cell{
						padding: 0.1rem 0;
					}
					.van-switch--on{
						background: #ffd300;;
					}
				    .opm_pay_inner{
						padding: 0.15rem 0.18rem 0.15rem 0;
					    display: flex;
					    position: relative;
					    line-height: 0.2rem;
						overflow: hidden;
						p{
							flex: 1;
							display: flex;
							justify-content: space-between;
							.ask{
								font-size: 14px;
								color: #999;
							}
							input{
								border: 0;
								height: 20px;
    							width: 100%;
							}
						}
						i{
							top: 50%;
						    right: 0;
						    margin-top: -0.05rem;
						    display: inline-block;
						    height: 0.11rem;
						    width: 0.06rem;
						    background: url(../../assets/img/orderpreview/right-select.png) no-repeat ;
						    background-size: 0.06rem 0.11rem;
						    position: absolute;
						}
				    }	
				    .opm_pay_inner::before,.pay_receipt::before{
					    content: '';
					    position: absolute;
					    top: -50%;
					    bottom: -50%;
					    left: -50%;
					    right: -50%;
					    -webkit-transform: scale(0.5);
					    transform: scale(0.5,0.5);
					    border-top: 0.02rem solid #E4E4E4;
				    }
				    .pay_method::before{
				    	border:none;
				    }
				}
			}
		}
		.order_footer {
			display: flex;
			justify-content: space-between;
			height: 0.5rem;
			background-color: #fff;
			position: relative;
			font-size: 16px;
			.order_footer_left{
				flex: 1;
				position: relative;
				margin-right: 1.25rem;
				padding: 0 0.15rem;
			    color: #333;
			    .of_discount{
			    	font-size: 14px;
			    	position: absolute;
			    	top: 0.18rem;
    				left: 0.15rem;
			    }
			    .order_total{
			    	position: absolute;
				    top: 0.17rem;
				    right: 0.15rem;
			    }
			    .order_total i{
					color: #FB4E44;
				    font-style: normal;
				    font-weight: bold;
				}
			}
			.order_footer_right{
				position: absolute;
				right: 0;
				width: 1.25rem;
				.order_submit{
					font-size: 16px;
					height: 0.5rem;
			    	width: 100%;
				    border-radius: 0;
				    background-color: #f8c74e;
				    font-weight: bold;
				    border: 0;
				    outline: 0;
				}
			}
		}
	}
</style>