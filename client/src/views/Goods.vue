<template>
	<div class="goods">
		<div class="goods-container" >
			<div class="goods-mask">
				<h2>商品列表</h2>
				<div class="goods-line"></div>
				<div class="goods-box">
					<div class="goods-wrapper" @click="handleFood(food)" v-for="(food,index) in shopInfo" :key="index">
						<div class="goods-img">
							<img :src="food.img">
						</div>
						<p class="goods-name">{{food.name}}</p>
						<p class="goods-price">${{food.price}}</p>
					</div>
				</div>
			</div>
		</div>
		
		<Food :shopInfo="shopInfo" :food = "selectedFood" :isShow = "showFood" @close = "showFood = false" />
	</div>
</template>

<script>
	import Food from './Food.vue'
	
	export default{
		name:"Goods",
		data(){
			return{
				shopInfo:null,
				selectedFood:null,
				showFood:false
			}
		},
		created(){
			this.getData();
		},
		methods:{
			getData(){
				this.$axios("/api/users/shop").then(res=>{
					 res.data.food.forEach(food =>{
					 		food.count = 0;
					 	});
					
					//console.log(res.data);
					this.shopInfo = res.data.food;
					//console.log(this.shopInfo);
				})
			},
			handleFood(food){
				//console.log(food);
				this.selectedFood = food;
				this.showFood = true;
			}
		},
		components:{
			Food
		}
	}
</script>

<style>
	.goods{
		background: url(../../../carousel/bg.png)no-repeat center center;
		width: 100%;
		height: 100%;
	}
	
	.goods-container{
		width: 100%;
		height: 100%;
	}
	
	.goods-mask{
		background: rgba(233, 233, 233, 0.7);
		width: 80vw;
		height: 90vh;
		margin: auto;
		overflow-y: auto;
	}
	
	.goods-mask h2{
		padding: 20px 0 0 7.5%;
		font-size: 2rem;
		color: #000000;
	}
	
	.goods-line{
		width: 85%;
		height: 2px;
		background-color: #000000;
		margin: 20px auto;
	}
	
	.goods-box{
		display: flex;
		flex-wrap: wrap;
		margin: 10px 9rem;
	}
	
	.goods-img{
		width: 378px;
		height: 378px;
		box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
	}
	
	.goods-img img{
		max-width: 100%;
		max-height: 100%;
	}
	
	.goods-wrapper{
		margin: 20px 15px;
	}
	
	.goods-wrapper:hover{
		border: 2px solid#FFFFFF;
		cursor: pointer;
		color: #FFFFFF;
		background: rgba(0,0,0, 0.6);
	}
	
	.goods-name{
		font-weight: 700;
		font-size: 1.5rem;
		margin:1rem 0 0 0.25rem;
	}
	
	.goods-price{
		font-size: 1.25rem;
		margin:0.5rem 0 0.5rem 0.25rem;
	}
	
	@media (max-width: 1024px){
		.goods-wrapper{
			margin: 0;
		}
	}
	
	@media (max-width: 414px){
		.goods-img{
			width: 200px;
			height: 200px;
		}
		
		.goods-box{
			margin: 10px 3rem;
		}
		
		.goods-mask h2{
			font-size: 1.5rem;
		}
		
		.goods-name{
			font-size: 1.25rem;
		}
		
		.goods-price{
			font-size: 1rem;
		}
	}
	
</style>
