<template>
	<div class="login">
		<div class="login-container">
			<div class="login-mask">
				<h2>用戶登入</h2>
				<div class="login-wrapper">
					<el-form :model="loginUser" :rules="rules" ref="loginForm" label-width="80px" class="loginForm">
						<div class="login-email">
							<el-form-item label="Email" prop="email">
								<el-input v-model="loginUser.email" placeholder="請輸入Email"></el-input>
							</el-form-item>
						</div>
						<div class="login-password">
							<el-form-item label="密碼" prop="password">
								<el-input type="password" v-model="loginUser.password" placeholder="請輸入密碼"></el-input>
							</el-form-item>
						</div>
				
					<el-form-item>
						<el-button type="primary" class="login-btn" @click="submitForm('loginForm')">登入</el-button>
					</el-form-item>
					
					<div class="createmember">
						<p><router-link to = "/register">創建帳號</router-link></p>
					</div>
					</el-form>
				</div>	
			</div>
		</div>
	</div>
</template>

<script>
	import jwt_decode from "jwt-decode";
	import { Form } from "element-ui";
	
	export default{
		name:"Login",
		data(){
			return{
				loginUser:{
					email:"",
					password:""
				},
				rules:{
					email:[
						{
							type:"email",
							required:true,
							message:"電子郵件格式不正確",
							trigger:"blur"
						}
					],
					password:[
						{
							required:true,
							message:"密碼不能為空",
							trigger:"blur"
						},
						{
							min:6,
							max:30,
							message:"長度在6到30之間",
							trigger:"blur"
						}
					]
				}
			}
		},
		methods:{
			submitForm(formName){
				this.$refs[formName].validate((valid) => {
				if (valid) {
				    this.$axios.post("/api/users/login",this.loginUser)
					.then(res=>{
						//console.log(res)
						//token
						const { token } = res.data;
						//存儲到ls
						localStorage.setItem("eleToken", token);
						
						//解析token
						const decoded = jwt_decode(token);
						//console.log(decoded);
						
						//token儲存到vuex中
						this.$store.dispatch("setAuthenticated", !this.isEmpty(decoded));
						this.$store.dispatch("setUser", decoded);
						
						this.$router.push("/home");
						})
					} 
				});
			},
			isEmpty(value){
				return(
					value === undefined ||
					value === null ||
					(typeof value === "object" && Object.keys(value).length === 0) ||
					(typeof value === "string" && value.trim().length === 0)
				);
			}
		},
		components:{
			Form
		}
	}
</script>

<style>
	.login{
		background: url(../../../carousel/bg.png)no-repeat center center;
		width: 100%;
		height: 100%;
	}
	
	.login-container{
		width: 100%;
		height: 100%;
	}
	
	.login-mask{
		background: rgba(233, 233, 233, 0.7);
		width: 80vw;
		height: 80vh;
		margin: auto;
	}
	
	.login-mask h2{
		text-align: center;
		padding-top:10%;
		font-size: 2rem;
		color: #000000;
	}
	
	.login-wrapper{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.loginForm {
		margin-top: 20px;
		padding: 50px 60px 20px 20px;
		border-radius: 5px;
		border: 2px solid#000000;
		box-shadow: 0px 5px 10px #cccc;
	}
	
	.el-input__inner{
		padding: 0 100px 0 10px;
	}

	.submit_btn {
		width: 100%;
	}
	
	.el-button--primary{
		background: #f8b972;
		border-color: #f8b972;
	}
	
	.el-button--primary:hover{
		background: #6d3e35;
		color: #f8b972;
		border: 1px solid#6d3e35;
	}

	.el-form-item label{
		color: #000000;
		font-size: 1rem;
	}
	
	.el-form-item.is-required:not(.is-no-asterisk)>.el-form-item__label:before{
		display: none;
	}
	
	.login-name,.login-email,.login-password,.login-password2{
		padding-bottom: 10px;
	}
	
	.login-btn{
		width: 100%;
	}
	
	.createmember a{
		color:#FFFFFF;
		font-weight: bold;
	}
	
	.createmember{
		text-align: center;
		padding-left: 30px;
	}
	
	@media (max-width: 414px){
		.el-input__inner{
			padding: 0 0 0 10px;
		}
		
		.el-form-item__content{
			margin-left: 0;
		}
		
		.el-form-item__label{
			text-align: start;
		}
		
		.el-input{
			width: 127%;
		}
		
		.login-mask h2{
			font-size: 1.5rem;
		}
	}
	
</style>
