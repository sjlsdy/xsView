<template>
	<div class="airx-select" :class="classObj" :style="styleObj">
		<button class="airx-select-btn" @click.stop @click="visible = visible?false:true">
			<span>{{setValue==''?'请选择':setLabel}}</span>
			<!--真实value：{{value}}-->
			<span class="select-green"></span>
		</button>
		<div class="airx-select-box" v-show="visible" @click.stop>
			<ul>
				<li v-for="(item,index) in optionData" :key="item.value" :class="{hover:item.set}" @click="setItem(item.value)">{{item.label}}</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		components: {},
		name: 'airx-select',
		props: {
			value: {
				type: String,
				default: ''
			},
			orient: {
				type: String,
				default: 'horizontal'
			},
			zindex: {
				type: Number,
				default: 1
			},
			data: {
				type: Array,
				default: []
			}
		},
		data() {
			return {
				visible: false,
				setValue: this.value,
				setLabel: '',
				optionData: this.data,
			}
		},
		created() {
			this.viewLabel()
		},
		mounted() {
			let _self = this;
			document.body.addEventListener("click", function() {
				_self.visible = false;
			})
		},
		watch: {
			value() {
				this.setItem(this.value);
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
			// 通过value值找到下标以及标注选中项
			setItem(value) {
				let _self = this;
				let index = 0;
				_self.setValue = value;
				for(let i = 0; i < _self.optionData.length; i++) {
					if(_self.optionData[i]['value'] == value) {
						_self.optionData[i]['set'] = true;
						index = i;
					} else {
						_self.optionData[i]['set'] = false;
					}
				}
				let obj = _self.optionData[index];
				_self.$set(_self.optionData, index, obj);
				_self.viewLabel();
				_self.visible = false;
				_self.$emit("input", _self.setValue);
			},
			// 生成选中项显示的字符
			viewLabel() {
				let _self = this;
				for(let i = 0; i < _self.optionData.length; i++) {
					if(_self.setValue === _self.optionData[i]['value']) {
						_self.setLabel = _self.optionData[i]['label'];
					}
				}
			}
		}
	}
</script>

<style>

</style>