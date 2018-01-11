<template>
	<div class="airx-select" :class="classObj" :value="value">
		<button class="airx-select-btn" @click.stop @click="visible = visible?false:true">
				<span>请选择</span>
				<span class="select-green"></span>
			</button>
		<div class="airx-select-box" v-show="visible" @click.stop>
			<ul>
				<slot></slot>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'airx-select',
		props: {
			value: {
				type: Boolean,
				default: false
			},
			orient: {
				type: String,
				default: 'horizontal'
			},
			zindex: {
				type: Number,
				default: 1
			},
			title: {
				type: String,
				default: '提示'
			},
		},
		data() {
			return {
				visible: false,
				scrollTopSize: 0,
			}
		},
		mounted() {
			let _self = this;
			document.body.addEventListener("click", function() {  
				_self.closeselect();
			})
		},
		watch: {
			value(val) {
				let _self = this;
				console.log(val);
				this.visible = val;
				if(val) {
					_self.jsFun();
				}
			},
			visible(val) {
				this.$emit('input', val);
			}
		},
		computed: {
			classObj() {
				let classObj = {};
				if(this.orient === 'vertical') classObj['flex-vertical'] = true;
				return classObj;
			},
			styleObj() {
				let styleObj = {};
				styleObj['z-index'] = this.zindex;
				return styleObj;
			},
		},
		methods: {
			jsFun() {
				this.scrollTopSize = document.body.scrollTop;
				document.body.scrollTop = document.documentElement.scrollTop = 0;
			},
			closeselect() {
				this.visible = false;
				this.$emit("on-close");
			},
		}
	}
</script>

<style>

</style>