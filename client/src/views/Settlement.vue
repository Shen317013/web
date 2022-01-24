<template>
	<div class="settlement">
		<div class="settlement-container">
			<div class="settlement-mask">
				<div class="settlement-title">
					收件人資訊
				</div>
				
				<!--步驟條-->
				<div class="settlement-steps">
					<el-steps :active="2">
						<el-step title="已完成"></el-step>
						<el-step title="填寫收件人資料"></el-step>
						<el-step title="完成訂單!"></el-step>
					</el-steps>
				</div>
				
				<!--購物車內容-->
				<div class="settlement-body">
					<el-form :model="addressInfo" :rules="rules" ref="addressForm" label-width="80px" class="settlementForm">
						<div class="settlement-name">
							<el-form-item label="用戶名" prop="name">
								<el-input v-model="addressInfo.name" placeholder="收件人姓名"></el-input>
							</el-form-item>
						</div>
						
						<div class="settlement-phone">
							<el-form-item label="手機號碼" prop="phone">
								<el-input v-model="addressInfo.phone" oninput="value=value.replace(/[^\d]/g,'')" placeholder="手機號碼"></el-input>
							</el-form-item>
						</div>
						
						<div class="settlement-time">
							  <el-form-item label="取貨時間" required>
							    <el-col :span="11">
							      <el-form-item prop="date1">
							        <el-date-picker type="date" placeholder="選擇日期" v-model="addressInfo.date1" style="width: 100%;"></el-date-picker>
							      </el-form-item>
							    </el-col>
							    <el-col class="line" :span="2">-</el-col>
							    <el-col :span="11">
							      <el-form-item prop="date2">
							        <el-time-picker placeholder="選擇時間" v-model="addressInfo.date2" style="width: 100%;"></el-time-picker>
							      </el-form-item>
							    </el-col>
							  </el-form-item>
						</div>
						
						<div class="settlement-address">
							<el-form-item label="地址" prop="address">
								<el-input v-model="addressInfo.address" placeholder="地址(選填)"></el-input>
							</el-form-item>
						</div>
						
						<div class="settlement-content">
							<el-form-item label="備註" prop="content">
								<el-input v-model="addressInfo.content" placeholder="備註欄(選填)"></el-input>
							</el-form-item>
						</div>
					</el-form>
				</div>
				
				<!--按鈕群組-->
				<div class="settlement-btn-group">
					<button type="button" class="settlement-back" @click="$router.push('/shopcart')">上一步</button>
					<button type="button" class="settlement-in"  @click="addAddress('addressForm')">下一步</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { Steps,Form } from 'element-ui';
	
	export default{
		name:"Settlement",
		data(){
			return{
				addressInfo:{
					name:"",
					phone:"",
					date1:"",
					date2:"",
					address:"",
					content:"",
				},
				rules:{
					name:[
						{
							required:true,message:"用戶名不能為空",trigger:"blur"
						}
					],
					phone:[
						{ 
							required: true, message: '手機不能為空'
						},
						{ 
							min:10,max:10,message:"請輸入10位數字"
						}
					],
					date1:[
						{
							required:true,message:"取貨日期不能為空",trigger:"blur"
						}
					],
					date2:[
						{
							required:true,message:"取貨時間不能為空",trigger:"blur"
						}
					],
				}
			}
		},
		computed:{
			orderInfo(){
				return	this.$store.getters.orderInfo;
			},
			totalPrice(){
				return this.$store.getters.totalPrice;
			}
		},
		methods:{
			addAddress(formName){
				this.$refs[formName].validate((valid)=>{
					if(valid){
						this.$store.dispatch("setAddressInfo",{
							addressInfo:this.addressInfo
						});
						
						let orderlist = {
							orderInfo:this.orderInfo,
							totalPrice:this.totalPrice,
							addressInfo:this.addressInfo
						}
						
						const token = localStorage.eleToken.value;
						const config = {
							headers:{ Authorization: `Bearer ${token}` }
						}
						
						const bodyParameters = {
							key: "value"
						};
						
						this.$axios.post('/api/profiles/add_order/',orderlist,bodyParameters,config)
						.then(res => {
						//console.log(res.data);
						})
										 
						this.$router.push('/finish')
					}
				})
			}
				
		}
	}
</script>

<style>
	.settlement{
		background: url(../../../carousel/bg.png)no-repeat center center;
		width: 100%;
		height: 100%;
	}
	
	.settlement-container{
		width: 100%;
		height: 100%;
	}
	
	.settlement-mask{
		background: rgba(233, 233, 233, 0.7);
		width: 80vw;
		height: 90vh;
		margin: auto;
		overflow-y: auto;
	}
	
	.settlement-title{
		font-size: 2rem;
		color: #000000;
		display: flex;
		justify-content: center;
		padding: 1.875rem 0;
	}
	
	.settlement-list{
		margin: 0 20%;
		font-size: 1.4rem;
		/* font-weight: 700; */
		display: flex;
		align-items: center;
		border-bottom: 1px solid#000000;
		padding: 0.625rem 0;
	}
	
	.settlement-list img{
		width: 10%;
		height: 10%;
		padding-right:5%;
	}
	
	.settlement-info{
		display: flex;
		justify-content: space-between;
		flex:0 0 82%; 
	}
	
	.settlement-price{
		flex: 0 0 30%;
	}
	
	.settlement-steps{
		width: 50%;
		margin: auto;
		padding: 1.875rem 0;
	}
	
	.el-step__head.is-wait{
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
	
	.settlement-body{
		display: flex;
		justify-content: center;
		margin-top: 2rem;
	}
	
	.settlement-total{
		margin: 2rem 20%;
		display: flex;
		justify-content: flex-end;
		font-size: 1.5rem;
		font-weight: 700;
	}
	
	.settlement-subtotal{
		width: 20%;
	}
	
	.settlement-total-price{
		padding-left:5%;
	}
	
	.settlement-btn-group{
		margin: 0 22%;
		display: flex;
		justify-content: space-between;
	}
	
	.settlement-btn-group button{
		width: 12.5rem;
		height: 3.5rem;
		background: #000000;
		color: #FFFFFF;
		cursor: pointer;
		font-size: 1rem;
		border: 1px solid#000000;
	}
	
	.settlement-btn-group button:hover{
		background: #FFFFFF;
		color: #000000;
		border: 1px solid#000000;
	}
	
	.settlement-btn-left{
		width: 60%;
	}
	
	.settlement-back{
		margin-right: 2%;
	}
	
	@media (max-width: 1024px){
		.settlement-btn-group button{
			width: 10rem;
		}
	}
	
	@media (max-width: 414px){
		.settlement-steps{
			width: 85%;
		}
		
		.el-input__inner{
			padding: 0 0 0 15px;
			width: 98%;
		}
		
		.el-input{
			font-size: 12px;
		}
		
		.el-form-item__label{
			font-size: 12px;
		}
	}
	
</style>
