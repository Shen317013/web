<template>
	<div class="header">
		<div class="head">
			<p>K&F自家烘焙咖啡</p>
		</div>
		<el-menu class="el-menu-demo" mode="horizontal" active-text-color="#ffd04b" >
			<span class="logo" @click="$router.push('/home')">
				<img src="../assets/LOGO.png">
			</span>
			<div class="header-middle">
				<el-menu-item index="1" style="border-bottom-color: #FFFFFF;" @click="$router.push('/home')"><p>首頁</p></el-menu-item>
				<el-menu-item index="2" style="border-bottom-color: #FFFFFF;" @click="$router.push('/goods')"><p>線上購物</p></el-menu-item>
				<el-menu-item index="3" style="border-bottom-color: #FFFFFF;" @click="$router.push('/about')"><p>關於咖啡</p></el-menu-item>
			</div>
			<div class="header-wrapper">
				<el-menu-item index="4" style="border-bottom-color: #FFFFFF;" @click="memberClick()"><i class="fa fa-user"></i></el-menu-item>
				<el-menu-item index="5" style="border-bottom-color: #FFFFFF;" @click="$router.push('/shopcart')"><i class="fa fa-shopping-cart"></i></el-menu-item>
			</div>
			
			<div class="hamburgar" @click="isShow=!isShow?true:false">
				<label for="menu_control" class="menu-btn">
					<i class="el-icon-s-fold"></i>
				</label>
				
				<transition name="slide-fade">
					<ul v-show="isShow">
						<div class="member-list">
							<li @click="memberClick()"><i class="fa fa-user"></i></li>
							<li @click="$router.push('/shopcart')"><i class="fa fa-shopping-cart"></i></li>
						</div>
						
						<li @click="$router.push('/home')">首頁</li>
						<li @click="$router.push('/goods')">線上購物</li>
						<li @click="$router.push('/about')">關於咖啡</li>
					</ul>
				</transition>
			</div>
			
		</el-menu>
		

		
	</div>
</template>

<script>
	import { NavMenu } from "element-ui";
	
	export default{
		name:"Header",
		data(){
			return{
				showCart:false,
				isShow:false
			}
		},
		methods:{
			memberClick(){
				if(localStorage.eleToken){
					this.$router.push("/me");
				}else{
					this.$router.push("/login");
				}
			}
		},
		components:{
			NavMenu
		},
	}
</script>

<style scoped>
	
	.header{
		position: relative;
		width: 100%;
	}
	
	.head{
		display: flex;
		justify-content: center;
		align-items: center;
		background-image: linear-gradient(to bottom, #c79081 0%, #dfa579 100%);
		color: #FFFFFF;
		height: 40px;
		font-weight: 700;
	}
	
	.logo{
		width: 60px;
		height: 60px;
		margin: 10px 45px;
		cursor: pointer;
	}
	
	.logo img{
		width: 100%;
		height: 100%;
	}
	
	.logo p {
		display: inline-block;
		width:200px;
		vertical-align: bottom;
		line-height: 50px;
		padding-left: 10px;
		font-size: 1.5rem;
		font-weight: bold;
	}
	
	.el-menu-demo{
		display: flex;
		justify-content: space-between;
		background-image: linear-gradient(to top, #e6b980 0%, #eacda3 100%);
	}
	
	.header-middle{
		display: flex;
		margin: 10px 0 10px 0;

	}
	
	.el-menu.el-menu--horizontal {
		border: 0;
	}
	
	.header-middle p{
		font-size: 1.3rem;
		color: #FFFFFF;
	}
	
	.header-wrapper{
		display: flex;
		margin: 10px 0 10px 0;
	}
	
	.el-menu-item i{
		color:#ffffff;
		font-size: 1.5rem;
	}
	
	.el-submenu__title:hover, .el-menu-item:focus, .el-menu-item:hover{
		background-color: transparent;
		border: 1px solid#FFFFFF;
	}
	
	.el-menu-item{
		transition: none;
	}
	
	.hamburgar nav{
		display: none;
	}
	
	.hamburgar{
		display: none;
	}
	
	.menu-btn{
		display: none;
	}
	
	@media (max-width: 1024px) {
		.menu-btn{
			position: absolute;
			top:12px;
			right: 15px;
			background: transparent;
			color: #FFFFFF;
			border: 1px solid#FFFFFF;
			height: 50px;
			width: 50px;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 1.75rem;
			cursor: pointer;
		}
		
		.logo{
			margin: 10px;
		}
		
		.el-menu-demo{
			display: grid;
		}

		.hamburgar ul{
			display: block;
			width: 50%;
			height: calc(100vh - 120px);
			background-color: #eacda3;
			position: absolute;
			top: 80px;
			left: 0;
			z-index: 9999;
			color: #FFFFFF;
			font-size: 1.25rem;
		}
		
		.hamburgar li{
			margin: 10px 0;
			cursor: pointer;
		}
		
		.hamburgar li:hover{
			border: 1px solid#FFFFFF;
		}
		
		.member-list{
			display: flex;
			justify-content: space-around;
		}
		
		.slide-fade-enter-active {
		  transition: all .3s ease;
		}
		
		.slide-fade-leave-active {
		  transition: all .2s ease-out;
		}
		
		.slide-fade-enter, .slide-fade-leave-to {
		  transform: translateX(-100%);
		  opacity: 0;
		}
		
		.hamburgar{
			display: block;
		}
		
		.hamburgar li{
			display: block;
			padding: 10px 20px;
		}
		
		.header-middle{
			display: none;
		}
		
		.header-wrapper{
			display: none;
		}
	
	}
	
	@media (max-width: 414px){
		.logo{
			width: 40px;
			height: 40px;
		}
		
		.menu-btn{
			top: 11px;
			width: 35px;
			height: 35px;
		}
		
		.head{
			height: 30px;
			font-size: 14px;
		}
		
		.hamburgar ul{
			top: 60px;
		}
	}
	
</style>
