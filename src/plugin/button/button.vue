<template>
	<button class="airx-button" :class="classObj" :value="value" @click="clickBtn">
		<span>
			<slot></slot>
		</span>
	</button>
</template>

<script>
	export default {
		name: 'airx-button',
		props: {
			value: {
				type: Boolean,
				default: false
			},
			type: {
				type: String,
				default: 'default'
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
				if(this.type == 'primary') classObj['airx-button-primary'] = true;
				if(this.type == 'success') classObj['airx-button-success'] = true;
				if(this.type == 'error') classObj['airx-button-error'] = true;
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
			closebutton() {
				this.visible = false;
				document.body.scrollTop = document.documentElement.scrollTop = this.scrollTopSize;
				this.$emit("on-close");
			},
			clickBtn() {
				this.$emit("click");
			},
		}
	}
</script>

<style>

</style>