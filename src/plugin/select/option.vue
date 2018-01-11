<template>
	<li value="" @click="hello">
		<slot></slot>
	</li>
</template>

<script>
	export default {
		name: 'airx-option',
		props: {
			value: {
				type: String,
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
			hello() {
				
			},
			jsFun() {
				this.scrollTopSize = document.body.scrollTop;
				document.body.scrollTop = document.documentElement.scrollTop = 0;
			},
			closeModal() {
				this.visible = false;
				document.body.scrollTop = document.documentElement.scrollTop = this.scrollTopSize;
				this.$emit("on-close");
			},
		}
	}
</script>

<style>

</style>