<template>
	<div class="footer">
		<el-descriptions title="K&F自家烘焙咖啡">
		    <el-descriptions-item label="服務時間">9:00 ~ 15:00</el-descriptions-item>
		    <el-descriptions-item label="聯絡電話">0928-526-799</el-descriptions-item>
		    <el-descriptions-item label="主打商品">
		      <el-tag size="small">咖啡</el-tag>
		    </el-descriptions-item>
		    <el-descriptions-item label="聯絡地址">宜蘭縣頭城鎮開蘭路85之3號</el-descriptions-item>
		</el-descriptions>
	</div>
</template>

<script>
	export default{
		name:"Footer"
	}
</script>

<style>
	.footer{
		position: relative;
		bottom: 0;
		background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);
	}
	
	.el-descriptions__header{
		justify-content: center;
	}
	
	.el-descriptions__title{
		margin-top: 1rem;
	}
	
	.el-descriptions__body{
		display: flex;
		justify-content: center;
		background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);
	}
	
	.el-descriptions__body .el-descriptions__table{
		width: 30%;
	}
	
	.el-tag{
		background-color: #fbecb4;
		border-color: #ffa344;
		color: #f39811;
	}
	
	@media (max-width: 1024px){
		.el-descriptions__body .el-descriptions__table{
			width: 60%;
		}
	}
	
	@media (max-width: 414px){
		.el-descriptions__body .el-descriptions__table{
			width: 80%;
		}
		
		.el-descriptions{
			font-size: 2px;
		}
		
		.el-descriptions-item__container{
			flex-wrap: wrap;
		}
	}
</style>
