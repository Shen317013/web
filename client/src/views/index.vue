<template>
	<div class="index">
		<Header />
		<keep-alive>
		<router-view></router-view>
		</keep-alive>
		<Footer />
	</div>
</template>

<script>
	import Header from "../components/Header.vue";
	import Footer from "../components/Footer.vue"
	
	export default{
		name:"index",
		components:{
			Header,
			Footer
		}
	};
</script>

<style>
</style>
