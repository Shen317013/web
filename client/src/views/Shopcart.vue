<template>
	<div class="shopcart">
		<div class="shopcart-container">
			<div class="shopcart-mask">
				<div class="shopcart-title">
					購物車清單
				</div>
				
				<!--步驟條-->
				<div class="shopcart-steps">
					<el-steps :active="1">
						<el-step title="確認購買清單"></el-step>
						<el-step title="填寫收件人資料"></el-step>
						<el-step title="完成訂單!"></el-step>
					</el-steps>
				</div>
				
				<!--購物車內容-->
				<div class="shopcart-body">
					<div class="shopcart-item">
						<div class="shopcart-content">
							<span>商品</span>
							<span>價格</span>
							<span>數量</span>
						</div>
						<div class="shopcart-none" v-if="orderInfo == null || orderInfo.selectFoods == null">購物車沒有東西哦</div>
						<ul v-if="orderInfo != null">
							<li class="shopcart-list" v-for="(item,index) in orderInfo.selectFoods" :key="index">
								<img :src="item.img">
								<div class="shopcart-info">
									<span class="shopcart-name">{{item.name}}</span>
									<span class="shopcart-price">${{item.price}}</span>
									<span class="shopcart-count">x{{item.count}}</span>
								</div>	
							</li>
							<li class="shopcart-total">
								<div class="shopcart-subtotal">
									<span>總計金額</span>
									<span class="shopcart-total-price">$ {{totalPrice}}</span>
								</div>
							</li>
						</ul>
					</div>
				</div>
				
				<!--按鈕群組-->
				<div class="shopcart-btn-group">
					<div class="shopcart-btn-left">
						<button type="button" class="shopcart-back" @click="$router.push('/goods')">繼續購物</button>
						<button type="button" class="shopcart-clear" @click="handledelete">清空</button>
					</div>
					<button type="button" class="shopcart-in" v-if="totalPrice != 0" @click="$router.push('/settlement')">下一步</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { Steps } from 'element-ui';
	
	export default{
		name:"shopcart",
		computed:{
			orderInfo(){
				return this.$store.getters.orderInfo;
			},
			totalPrice(){
				return this.$store.getters.totalPrice;
			}
		},
		methods:{
			settlement(){
				if(localStorage.eleToken){
					this.$router.push('/settlement');	
				}else{
					this.$message({
						message:"請先登入會員",
						type:"warning"
					});
					this.$router.push("/login");
				}
			},
			handledelete(){
				this.$store.dispatch("setOrderInfo",{
					selectFoods:null
				})
				this.$axios('/api/users/shop').then(res=>{
					this.shopInfo = res.data.food
					this.shopInfo.forEach(food=>{
						food.count = 0
					})
				})
				
			}
		}
	}
</script>

<style>
	.shopcart{
		background: url(../../../carousel/bg.png)no-repeat center center;
		width: 100%;
		height: 100%;
	}
	
	.shopcart-container{
		width: 100%;
		height: 100%;
	}
	
	.shopcart-mask{
		background: rgba(233, 233, 233, 0.7);
		width: 80vw;
		height: 90vh;
		margin: auto;
		overflow-y: auto;
	}
	
	.shopcart-title{
		font-size: 2rem;
		color: #000000;
		display: flex;
		justify-content: center;
		padding: 1.875rem 0;
	}
	
	.shopcart-content{
		text-align: center;
		font-size: 1.5rem;
		font-weight: 700;
		display: flex;
		justify-content: space-between;
		margin:0.625rem 20% 0 20%;
		border-top: 2px solid#000000;
		border-bottom: 2px solid#000000;
		padding: 0.625rem 0;
	}
	
	.shopcart-content span{
		padding: 0 2%;
	}
	
	.shopcart-list{
		margin: 0 20%;
		font-size: 1.4rem;
		/* font-weight: 700; */
		display: flex;
		align-items: center;
		border-bottom: 1px solid#000000;
		padding: 0.625rem 0;
	}
	
	.shopcart-list img{
		width: 10%;
		height: 10%;
		padding-right:5%;
	}
	
	.shopcart-info{
		display: flex;
		justify-content: space-between;
		flex:0 0 82%; 
	}
	
	.shopcart-name{
		width: 15%;
	}
	
	.shopcart-price{
		flex: 0 0 30%;
	}
	
	.shopcart-steps{
		width: 50%;
		margin: auto;
		padding: 1.875rem 0;
	}
	
/* 	.el-step__icon.is-text{
		border-color: #000000;
	}
		
	.el-step__icon-inner{
		color: #000000;
	} */
	
	.el-step__head.is-wait {
	    color: #000000;
	    border-color: #000000;
	}
		
	.el-step__line{
		background-color: #000000
	}
		
	.el-step__title.is-wait{
		color: #000000;
		font-size: 1.25rem;
	}
	
	.shopcart-body{
		display: flex;
		justify-content: center;
		margin-top: 2rem;
	}
	
	.shopcart-none{
		width: 50rem;
		text-align: center;
		font-size: 2rem;
		margin: 10% 0;
	}
	
	.shopcart-total{
		margin: 2rem 20%;
		display: flex;
		justify-content: flex-end;
		font-size: 1.5rem;
		font-weight: 700;
	}
	
	.shopcart-subtotal{
		width: 30%;
	}
	
	.shopcart-total-price{
		padding-left:5%;
	}
	
	.shopcart-btn-group{
		margin: 0 22%;
		display: flex;
		justify-content: space-between;
	}
	
	.shopcart-btn-group button{
		width: 12.5rem;
		height: 3.5rem;
		background: #000000;
		color: #FFFFFF;
		cursor: pointer;
		font-size: 1rem;
		border: 1px solid#000000;
	}
	
	.shopcart-btn-group button:hover{
		background: #FFFFFF;
		color: #000000;
		border: 1px solid#000000;
	}
	
	.shopcart-btn-left{
		width: 60%;
	}
	
	.shopcart-back{
		margin-right: 2%;
	}
	
	@media (max-width: 1024px){
		.shopcart-btn-group button{
			width: 10rem;
			margin: 10px 0;
		}
		
		.shopcart-subtotal{
			width: 50%;
		}
		
		.shopcart-list{
			font-size: 1.2rem;
		}
	}
		
	@media (max-width: 414px){
		.shopcart-title{
			font-size: 1.5rem;
		}
		
		.el-step__title{
			font-size: 14px;
		}
		
		.shopcart-steps{
			width: 85%;
		}
		
		.el-step__title.is-wait{
			font-size: 14px;
		}
		
		.shopcart-none{
			width: 21rem;
			font-size: 1.25rem;
		}
		
		.shopcart-content{
			font-size: 1.25rem;
			margin: 0.625rem 8% 0 8%;
		}
		
		.shopcart-total{
			font-size: 1.05rem;
		}
		
		.shopcart-subtotal{
			width: 60%;
		}
		
		.shopcart-btn-group{
			margin: 0 5%;
		}
		
		.shopcart-btn-group button{
			width: 8rem;
		}
		
		.shopcart-list{
			margin: 0 8%;
		}
		
		.shopcart-name{
			width: 17%;
		}
	}
	
	@media (max-width: 360px){
		.shopcart-name{
			width: 20%;
		}
	}
</style>
