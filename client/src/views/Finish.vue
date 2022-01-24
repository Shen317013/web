<template>
	<div class="finish">
		<div class="finish-container">
			<div class="finish-mask">
				<div class="finish-title">
					訂單已完成!!
				</div>
				
				<!--步驟條-->
				<div class="finish-steps">
					<el-steps :active="3">
						<el-step title="已完成"></el-step>
						<el-step title="已完成"></el-step>
						<el-step title="完成訂單!"></el-step>
					</el-steps>
				</div>
				
				
				<!--按鈕群組-->
				<div class="finish-btn-group">
					<button type="button" class="finish-in" @click="$router.push('/home')">回首頁</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { Steps } from 'element-ui';
	
	export default{
		name:"Finish",
		computed:{
			orderInfo(){
				return	this.$store.getters.orderInfo;
			},
			totalPrice(){
				return this.$store.getters.totalPrice;
			},
			addressInfo(){
				return this.$store.getters.addressInfo;
			}
		}
	}
</script>

<style>
	.finish{
		background: url(../../../carousel/bg.png)no-repeat center center;
		width: 100%;
		height: 100%;
	}
	
	.finish-container{
		width: 100%;
		height: 100%;
	}
	
	.finish-mask{
		background: rgba(233, 233, 233, 0.7);
		width: 80vw;
		height: 90vh;
		margin: auto;
		overflow-y: auto;
	}
	
	.finish-title{
		font-size: 2rem;
		color: #000000;
		display: flex;
		justify-content: center;
		padding: 1.875rem 0;
	}
	
	.finish-steps{
		width: 50%;
		margin: auto;
		padding: 1.875rem 0;
	}
	
	.finish-btn-group{
		margin: 5%;
		display: flex;
		justify-content: center;
	}
	
	.finish-in{
		width: 12.5rem;
		height: 3.5rem;
		background: #000000;
		color: #FFFFFF;
		cursor: pointer;
		font-size: 1rem;
		border: 1px solid#000000;
	}
	
	.finish-in:hover{
		background: #FFFFFF;
		color: #000000;
		border: 1px solid#000000;
	}
	
	@media (max-width: 414px){
		.finish-title{
			font-size: 1.5rem;
		}
		
		.finish-steps{
			width: 85%;
		}
		
		.finish-btn-group{
			width: 8rem;
			margin: auto;
		}
	}
	
</style>
