<template>
	<div v-transfer-dom :data-transfer="transfer" class="airx-modal" :class="classObj" :value="value" v-show="visible">
		<div class="airx-modal-mask" :style="styleObj" @click="closeModal" v-if="maskVisible"></div>
		<div class="airx-modal-box" :style="styleObj">
			<div class="airx-modal-title">
				<div class="airx-modal-title-content">{{title}}=={{count}}</div>
				<div class="airx-modal-title-close" @click="closeModal"><i class="fa fa-times" aria-hidden="true"></i></div>
			</div>
			<div class="airx-modal-content">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
	import TransferDom from '../directives/transfer-dom';

	export default {
		name: 'airx-modal',
		directives: {
			TransferDom
		},
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
			// 是否将当前元素置于页面DOM最底部
			transfer: {
				type: Boolean,
				default: true
			},
		},
		data() {
			return {
				visible: false,
				scrollTopSize: 0,
				maskVisible: true,
				count: 0,
			}
		},
		created() {},
		mounted() {
			console.log('装载了');
			this.count++;
		},
		watch: {
			value(val) {
				let _self = this;
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
				let asds = document.getElementsByClassName("airx-modal-mask");
				console.log(asds.length);
				if(asds.length >= 1) {
					this.maskVisible = false;
				}
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