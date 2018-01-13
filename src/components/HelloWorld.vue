<template>
	<div class="hello">
		<img src="../assets/logo.png" />
		<h1>{{ msg }}</h1>
		<br /><br />
		<h2>Links</h2>
		<ul>
			<li>
				<a href="https://cn.vuejs.org/" target="_blank">Vue</a>
			</li>
			<li>
				<a href="https://www.iviewui.com/docs/guide/start" target="_blank">iView</a>
			</li>
			<li>
				<a href="https://router.vuejs.org/zh-cn/" target="_blank">vue-router</a>
			</li>
			<li>
				<a href="https://vuex.vuejs.org/zh-cn/" target="_blank">vuex</a>
			</li>
			<li>
				<a href="https://vue-loader.vuejs.org/zh-cn/" target="_blank">vue-loader</a>
			</li>
			<li>
				<a href="http://fontawesome.io/icons/" target="_blank">fontawesome</a>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				msg: '欢迎使用Air-x View开发'
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.hello {
		padding-top: 80px;
		text-align: center;
		color: #4a596c;
	}
	
	h1,
	h2 {
		font-weight: normal;
	}
	
	ul {
		list-style-type: none;
		padding: 0;
	}
	
	li {
		display: inline-block;
		margin: 0 10px;
	}
	
	a {
		color: #42b983;
	}
</style>