<template>
	<div class="home">
		<!--輪播圖-->
		<div class="carousel">
			<el-carousel :interval="5000" arrow="always" height="31vw">
				<el-carousel-item>
					<img src="../../../carousel/picture.png">
				</el-carousel-item>
				<el-carousel-item>
					<img src="../../../carousel/picture1.png">
				</el-carousel-item>
			</el-carousel>
		</div>
		
		<!--熱門商品-->
		<div class="hot-wrapper">
			<div class="hot1" @mouseover="upHere = true"  @mouseleave="upHere = false">
				<img src="../../../carousel/hot.png">
				<div class="hot1hover" v-show="upHere" @click="$router.push('/goods')">
					<p>前往購物</p>
				</div>
			</div>
			<div class="hot2">
				<img src="../../../carousel/hot1.png">
			</div>
		</div>
		
		<!--品牌精神-->
		<div class="item-wrapper">
			<div class="mask">
				<h2>品牌精神</h2>
				<div class="home-line"></div>
				<div class="content-wrapper">
					<div class="content1"  >
						<img src="../../../carousel/item1.png">
						<div class="content1hover">
							<p>金牛迎春</p>
						</div>
					</div>
					<div class="content2">
						<img src="../../../carousel/item2.png">
						<div class="content2hover">
							<p>烘培特調</p>
						</div>
					</div>
					<div class="content3">
						<img src="../../../carousel/item3.png">
						<div class="content3hover">
							<p>香醇濃郁</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14480.823641352916!2d121.822852!3d24.856816!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x185b2dd2d0ffe76f!2zSyZGIOiHquWutueDmOeEmeePiOeQsg!5e0!3m2!1szh-TW!2stw!4v1642157964702!5m2!1szh-TW!2stw" width="100%" height="450" allowfullscreen="" loading="lazy"></iframe>
	</div>
</template>

<script>
	import { Carousel } from "element-ui"
	
	export default{
		name:"Home",
		data(){
			return{
				upHere:false
			}
		}
	}
</script>

<style>
	.carousel{
		width: 100%;
		height: 100%;
	}
	
	.el-carousel__item img{
		max-width: 100%;
		max-height: 100%;
	}
	
	.hot-wrapper{
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding: 40px 0;
		background-image: linear-gradient(to top, #e6b980 0%, #eacda3 100%);
	}
	
	.item-wrapper{
		width: 100%;
		height: 100%;
		background: url(../../../carousel/bg.png)no-repeat center center;
	}
	
	.mask{
		background: rgba(233, 233, 233, 0.7);
		width: 80vw;
		height: 80vh;
		margin: auto;
	}
	
	.mask h2{
		padding-top: 5%;
		text-align: center;
		font-size: 2.5rem;
		font-weight: 700;
		color: #000000;
	}
	
	.home-line{
		width: 85%;
		height: 2px;
		background-color: black;
		margin:50px auto;
	}
	
	.content-wrapper{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}
	
	.content1,.content2,.content3{
		width: 450px;
		height: 400px;
		display: flex;
		justify-content: center;
		position: relative;
	}
	
	.content-wrapper img {
		max-width: 100%;
		max-height: 100%;
	}
	
	.hot1,.hot2{
		width: 930px;
		height: 370px;
		position: relative;
		display: flex;
		justify-content: center;
	}
	
	.hot1 img,.hot2 img{
		max-width: 100%;
		max-height: 100%;
	}
	
	.hot1hover{
		background: rgba(0,0,0, 0.6);
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 2rem;
		color: #FFFFFF;
		position: absolute;
		width: 100%;
		height: 100%;
		cursor: pointer;
	}
	
	.content1hover,.content2hover,.content3hover{
		background: rgba(0,0,0, 0.6);
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 2rem;
		color: #FFFFFF;
		position: absolute;
		width: 89%;
		height: 100%;
	}
	
	.el-carousel__item.is-animating{
		transition: opacity 1s ease-in-out;
	}

	.el-carousel__item.is-active{
		opacity: 1;
	}
	
	.el-carousel__item{
		opacity: 0;
	}
	
	@media (max-width: 1024px){
		.hot1,.hot2{
			width: 400px;
			height: 200px;
		}
		
		.el-carousel__item img{
			width: 100%;
			max-height: 100%;
		}
		
		.content1,.content2,.content3{
			width: 600px;
			height: 220px;
			margin: 15px 0;
		}
		
		.content1hover,.content2hover,.content3hover{
			width: 37%;
		}
		
		.home iframe{
			height: 300px;
		}
	}
	
	@media (max-width: 768px){
		.content1,.content2,.content3{
			width: 570px;
			height: 200px;
			margin: 10px 0;
		}
		
		.content1hover,.content2hover,.content3hover{
			width: 35%;
		}
		
		.home-line{
			margin: 30px auto;
		}
		
		.hot1,.hot2{
			width: 370px;
			height: 180px;
		}
	}
	
	@media (max-width: 414px){
		.hot1,.hot2{
			width: 200px;
			height: 90px;
		}
		
		.hot-wrapper{
			padding: 10px 0;
		}
		
		.content1,.content2,.content3{
			width:350px;
			height: 130px;
			margin: 5px 0;
		}
		
		.content1hover,.content2hover,.content3hover{
			width: 40%;
			font-size: 1rem;
		}
		
		.mask h2{
			font-size: 1.5rem;
		}
		
		.home-line{
			margin:10px auto ;
		}
		
		.mask{
			height: 60vh;
		}
		
		.home iframe{
			height: 150px;
		}
	}
	
	@media (max-width: 400px){
		.content1hover,.content2hover,.content3hover{
			width: 37%;
		}
		
		.content1,.content2,.content3{
			height: 115px;
		}
	}
	
	@media (max-width: 375px){
		.content1hover,.content2hover,.content3hover{
			width: 29%;
		}
		
		.content1,.content2,.content3{
			height: 80px;
		}
	}
</style>
