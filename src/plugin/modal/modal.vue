<template>
	<div class="xs-modal" :class="classObj" :value="value" v-show="visible">
		<div class="xs-modal-mask" @click="closeModal"></div>
		<div class="xs-modal-box">
			<div class="xs-modal-title">
				<div class="xs-modal-title-content">
					标题
				</div>
				<div class="xs-modal-title-close" @click="closeModal"><i class="fa fa-times" aria-hidden="true"></i></div>
			</div>
			<div class="xs-modal-content">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'xs-modal',
		props: {
			value: {
				type: Boolean,
				default: false
			},
			orient: {
				type: String,
				default: 'horizontal'
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
				if(this.orient === 'vertical') classObj['flex2-vertical'] = true;
				return classObj;
			}
		},
		methods: {
			jsFun() {
				this.scrollTopSize = document.body.scrollTop;
				document.body.scrollTop = document.documentElement.scrollTop = 0;
			},
			closeModal() {
				this.visible = false;
				document.body.scrollTop = document.documentElement.scrollTop = this.scrollTopSize;
			},
		}
	}
</script>

<style>

</style>