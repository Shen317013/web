<template>
	<div class="me">
		<div class="me-container">
			<div class="me-mask">
				<div class="me-wrapper">
					<div class="me-img">
						<img src="../assets/user.png">
					</div>
					<div class="me-box">
						<span>會員名字
						<p class="me-name">{{userInfo.name}}</p>
						</span>
						<span>電子郵件
						<p class="me-email">{{userInfo.email}}</p>
						</span>
					</div>
				</div>
				
				<div class="me-logout">
					<button type="button" @click="Logout">登出</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"Me",
		data(){
			return{
				userInfo:"",
				orderlist:[]
			}
		},
		beforeRouteEnter(to, from ,next){
			next(vm => vm.getData());
		},
		methods:{
			Logout(){
				localStorage.removeItem("eleToken");
				this.$router.push('/login');
			},
			getData(){
				const token = localStorage.eleToken.value;
				const config = {
					headers: { Authorization: `Bearer ${token}` }
				};
								
				const bodyParameters = {
					key: "value"
				};
				this.$axios(`/api/users/current/`,bodyParameters,config)
				.then(res=>{
					//console.log(res.data);
					this.userInfo = res.data;
				});
			}
		}
	}
</script>

<style>
	.me{
		background: url(../../../carousel/bg.png)no-repeat center center;
		width: 100%;
		height: 100%;
	}
	
	.me-container{
		width: 100%;
		height: 100%;
	}
	
	.me-mask{
		background: rgba(233, 233, 233, 0.7);
		width: 88vw;
		height: 90vh;
		margin: auto;
		overflow-y: auto;
	}
	
	.me-wrapper{
		border: 2px solid#9f9f9f;
		border-radius: 5px;
		margin: 3% 25%;
		padding: 0.625rem 0;
		background: #FFFFFF;
		display: flex;
		justify-content: space-around;
	}
	
	.me-img{
		width: 5rem;
		height: 5rem;
		border-radius: 50%;
		padding: 10px 0 10px 5rem;
	}
	
	.me-img img{
		width: 100%;
		height: 100%;
	}
	
	.me-box{
		line-height: 50px;
		flex: 0 0 75%;
	}
	
	.me-box span{
		display: flex;
		align-items: center;
		font-size: 1.25rem;
		font-weight: 700;
	}
	
	.me-name{
		border: 1px solid#9f9f9f;
		width: 30rem;
		height: 2rem;
		display: flex;
		align-items: center;
		background: #cacaca;
		color: #484848;
		margin-left: 10px;
		padding-left: 10px;
		cursor: not-allowed;
	}
	
	.me-email{
		border: 1px solid#9f9f9f;
		width: 30rem;
		height: 2rem;
		display: flex;
		align-items: center;
		background: #cacaca;
		color: #484848;
		margin-left: 10px;
		padding-left: 10px;
		cursor: not-allowed;
	}
	
	.order-wrapper{
		border: 2px solid#9f9f9f;
		border-radius: 5px;
		margin: 3% 25%;
		padding: 0.625rem 0;
		background: #FFFFFF;
		display: flex;
		
	}
	
	.me-logout{
		display: flex;
		justify-content: center;
	}
	
	.me-logout button{
		width: 12.5rem;
		height: 3.5rem;
		background: #000000;
		color: #FFFFFF;
		cursor: pointer;
		font-size: 1rem;
		border: 1px solid#000000;
	}
	
	.me-logout button:hover{
		background: #FFFFFF;
		color: #000000;
		border: 1px solid#000000;
	}
	
	@media (max-width: 1024px){
		.me-name,.me-email{
			width: 25rem;
		}
		
		.me-img{
			padding: 0;
			width: 6rem;
			height: 6rem;
		}
		
		.me-wrapper{
			margin: 4% 2%;
			padding: 1.25rem 0;
		}
		
		.me-box span{
			font-size: 1rem;
		}
	}
	
	@media (max-width: 768px){
		.me-name,.me-email{
			width: 24rem;
		}
	}
	
	@media (max-width: 414px){
		.me-wrapper{
			flex-wrap: wrap;
		}
		
		.me-box span{
			font-size: 1rem;
			flex-wrap: wrap;
		}
		
		.me-name,.me-email{
			width: 19rem;
		}
		
		.me-logout button{
			width: 8.5rem;
			height: 2.5rem;
		}
	}
	
	@media (max-width: 360px){
		.me-name,.me-email{
			width: 16rem;
		}
		
		.me-box span{
			font-size: 0.7rem;
		}
	}
</style>
