<template>
	<div class="food" v-if="isShow">
		<div class="food-wrapper">
			<div class="food-mask">
				<div class="food-title">
					<p class = "food-font" @click="$emit('close')">商品列表</p>
					<p class="food-right-arrow">></p>
					<p>{{food.name}}</p>
				</div>
				<div class="food-line"></div>
				
				<!--商品詳情-->
				<div class="food-box">
					<div class="food-img">
						<img :src="food.img">
					</div>
					
					<div class="food-content">
						<p>{{food.name}}</p>
						<div class="food-price">${{food.price}}</div>
						<div class="food-text">{{food.text}}</div>
						
						<!--商品數量控制-->
						<div class="food-control">
							<div class="food-remove" @click="removeFood()" v-if="food.count>0"><i class="el-icon-minus"></i></div>
							<div class="food-count" >{{food.count}}</div>
							<div class="food-add" @click="addFood()"><i class="el-icon-plus"></i></div>
						</div>
						
						<!--結帳按鈕-->
						<div class="not-shopcart" v-if="isEmpty">
							<button type="button" class="nothing-btn">尚未選購</button>
						</div>
						<div class="food-shopcart" v-else>
							<button type="button" @click="settlement" class="food-btn">加入購物車</button>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	</div>
</template>

<script>
	
	export default{
		name:"Food",
		data(){
			return{
				totalCount:0,
				totalPrice:0,
				selectFoods:[]
			}
		},
		props:{
			food:Object,
			isShow:Boolean,
			shopInfo:null
		},
		computed:{
			isEmpty(){
				let empty = true;
				this.totalCount = 0;
				this.totalPrice = 0;
				this.selectFoods = [];
				this.shopInfo.forEach(food => {
					if(food.count){
						empty = false;
						this.totalCount += food.count;
						this.totalPrice += food.price * food.count;
						this.selectFoods.push(food);
						// console.log(food)
					}
				});
				return empty;
			}
		},
		methods:{
			removeFood(){
				this.food.count--;
			},
			addFood(){
				this.food.count++;
			},
			settlement(){
				if(localStorage.eleToken){
					this.$store.dispatch("setOrderInfo",{
						selectFoods:this.selectFoods
					})
					
					this.$message({
						message:"成功加入購物車",
						type:"success"
					});
				}else{
					this.$message({
						message:"請先登入會員",
						type:"warning"
					});
					this.shopInfo.forEach(food=>{
						food.count = 0;
					});
					this.$router.push("/login");
				}
			}
		}
	}
</script>

<style>
	.food{
		position: absolute;
		top:12.8%;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 100;
	}
	
	.food-wrapper{
		width: 100%;
		height: 90%;
		background: url(../../../carousel/bg.png)no-repeat center center;
	}
	
	.food-mask{
		background: rgba(233, 233, 233, 0.7);
		width: 80vw;
		height: 90vh;
		margin: auto;
		overflow-y: auto;
	}
	
	.food-title{
		display: flex;
		margin: 1.25rem 0 0 7.5%;
		font-size: 2rem;
		color: #000000;
	}
	
	.food-right-arrow{
		padding: 0 0.625rem;
	}
	
	.food-font:hover{
		cursor: pointer;
		color: #FFFFFF;
	}
	
	.food-line{
		width: 85%;
		height: 2px;
		background-color: #000000;
		margin: 20px auto;
	}
	
	.food-box{
		display: flex;
		justify-content: center;
		padding-top: 30px;
		flex-wrap: wrap;
	}
	
	.food-img{
		width: 500px;
		height: 500px;
		padding-right: 18%;	
	}
	
	.food-img img {
		max-width: 100%;
		max-height: 100%;
		box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
	}
	
	.food-content p{
		font-size: 2rem;
		font-weight: 700;
		color: #000000;
	}
	
	.food-price{
		margin-top: 2.5rem;
		font-size: 1.5rem;
		color: #000000;
	}
	
	.food-text{
		margin-top: 5rem;
		font-size: 1.5rem;
		color: #000000;
		width: 31.25rem;
		height: 3.75rem;
	}
	
	.food-control{
		display: flex;
		margin-top: 4.8rem;
		height: 60px;
	}
	
	.food-remove{
		border: 1px solid#000000;
		border-right: 0;
		background: #000000;
		color: #FFFFFF;
		border-radius: 3px;
		line-height: 60px;
		width: 60px;
		text-align: center;
		cursor: pointer;
		font-size: 2rem;
	}
	
	.food-remove:hover{
		background: #FFFFFF;
		color: #000000;
	}
	
	.food-add{
		border: 1px solid#000000;
		border-left: 0;
		background: #000000;
		color: #FFFFFF;
		border-radius: 3px;
		line-height: 60px;
		width: 60px;
		text-align: center;
		cursor: pointer;
		font-size: 2rem;
	}
	
	.food-add:hover{
		background: #FFFFFF;
		color: #000000;
	}
	
	.food-count{
		width: 150px;
		background: #FFFFFF;
		border: 1px solid#000000;
		text-align: center;
		line-height: 60px;
		font-size: 1.75rem;
	}
	
	.not-shopcart button{
		width: 300px;
		height: 60px;
		background: #5c5c5c;
		color: #FFFFFF;
		margin-top: 4rem;
		font-size: 1rem;
		border: 1px solid#5c5c5c;
	}
	
	.food-shopcart button{
		width: 300px;
		height: 60px;
		background: #000000;
		color: #FFFFFF;
		cursor: pointer;
		margin-top: 4rem;
		font-size: 1rem;
		border: 1px solid#000000;
	}
	
	.food-shopcart button:hover{
		background: #FFFFFF;
		color: #000000;
		border: 1px solid#000000;
	}
	
	@media (max-width: 1024px){
		.food{
			top: 120px;
		}
		
		.food-img{
			padding-right: 0;
		}
		
		.food-content p{
			margin: 20px 0;
		}
		
		.not-shopcart button,.food-shopcart button{
			margin: 2.5rem 0;
		}
		
		.food-control{
			margin-top: 2rem;
		}
		
		.food-text{
			margin-top: 2.5rem;
		}
	}
	
	@media (max-width: 414px){
		.food{
			top: 91px;
		}
		
		.food-title{
			display: flex;
			margin: 1.25rem 0 0 7.5%;
			font-size: 1.5rem;
			color: #000000;
		}
		
		.food-img{
			width: 250px;
			height: 250px;
		}
		
		.food-content p{
			font-size: 1.25rem;
		}
		
		.food-price{
			font-size: 1.25rem;
		}
		
		.food-text{
			width: 16rem;
			font-size: 1.25rem;
		}
		
		.food-content{
			width: 16rem;
		}
		
		.food-count{
			width: 120px;
			line-height: 50px;
			font-size: 1.5rem;
		}
		
		.food-add{
			line-height: 50px;
			width: 50px;
			font-size: 1.25rem;
		}
		
		.food-remove{
			line-height: 50px;
			width: 50px;
			font-size: 1.25rem;
		}
		
		.food-control{
			height: 50px;
		}
		
		.not-shopcart button{
			width: 250px;
			height: 50px;
		}
		
		.food-shopcart button{
			width: 250px;
			height: 50px;
		}
	}
</style>
