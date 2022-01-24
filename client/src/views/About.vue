<template>
	<div class="about">
		<div class="about-container">
			<div class="about-mask">
				<h2>咖啡Q&A</h2>
				<div class="about-line"></div>
					<div class="about-question">
						<el-collapse accordion>
						<el-collapse-item title="咖啡的理想溫度?">
						    <div>咖啡沖煮溫度通常在90度上下，雖然咖啡可以飲用的溫度範圍很廣，但適合沖煮的溫度範圍卻較狹窄，水溫若超過95度，可能會沖出咖啡的焦苦味，若是低於85度，可能會導致萃取不足，導致咖啡可能有臭酸味，我們建議沖煮水溫介於88-92度。</div>
						</el-collapse-item>
						<el-collapse-item title="喝咖啡有助於減重，是早餐前喝還是早餐後喝才有幫助呢？">
						    <div>答案是早餐後，利用咖啡因達到促進新陳代謝、加速脂肪分解的作用，而且還會帶來短暫抑制食慾的效果。想要減重得順利，適當的熱量攝取是必要的，不要想著少吃一餐就可以瘦一點的心態，反而會帶來反效果喔！</div>
						</el-collapse-item>
						<el-collapse-item title="一般咖啡因咖啡及低咖啡因咖啡，何者可降低糖尿病風險？">
						    <div>喝咖啡能夠幫助控制血糖，但要選擇無添加奶精及糖的黑咖啡較好。透過咖啡因刺激交感神經、促進身體代謝，過程中消耗許多能量和糖分，進而有助於調節體內血糖。</div>
						</el-collapse-item>
						<el-collapse-item title="哪些人不適合飲用咖啡？">
							<div>有腦血管瘤患者不適合喝咖啡，心臟病患應喝不含或低咖啡因的咖啡，因為咖啡因會增加心跳速度而造成心臟缺氧。</div>
						</el-collapse-item>
					</el-collapse>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { Timeline } from 'element-ui'
	
	export default{
		name:"About"
	}
</script>

<style>
	.about{
		background: url(../../../carousel/bg.png)no-repeat center center;
		width: 100%;
		height: 100%;
	}
	
	.about-container{
		width: 100%;
		height: 100%;
	}
	
	.about-mask{
		background: rgba(233, 233, 233, 0.7);
		width: 80vw;
		height: 90vh;
		margin: auto;
		overflow-y: auto;
	}
	
	.about-mask h2{
		padding: 20px 0 0 7.5%;
		font-size: 2rem;
		color: #000000;
	}
	
	.about-line{
		width: 85%;
		height: 2px;
		background-color: #000000;
		margin: 20px auto;
	}
	
	.about-question{
		width: 80%;
		margin: 50px auto;
		box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
	}
	
	.el-collapse{
		border: 0;
	}
	
	.el-collapse-item__header{
		background-color: transparent;
		border: 1px solid#000000;
		font-weight: 700;
		padding-left: 10px;
		font-size: 24px;
		height: 70px;
		line-height: 70px;
	}
	
	.el-collapse-item__content{
		font-size: 20px;
		padding: 15px 0;
	}
	
	.el-collapse-item__wrap{
		background-color: transparent;
		border: 2px solid#000000;
		padding:0 10px;
	}
	
	@media (max-width: 1024px){
		.el-collapse-item__header{
			font-size: 18px;
		}
	}
	
	@media (max-width: 768px){
		.el-collapse-item__header{
			line-height: 25px;
		}
	}
	
	@media (max-width: 414px){
		.about-mask h2{
			font-size: 1.5rem;
		}
		
		.el-collapse-item__header{
			font-size: 14px;
		}
		
		.el-collapse-item__header{
			height: 47px;
			line-height: 16px;
		}
		
		.el-collapse-item__content{
			font-size: 14px;
		}
	}
</style>
