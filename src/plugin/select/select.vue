<template>
	<div class="airx-select" :class="classObj">
		<button class="airx-select-btn" @click.stop @click="visible = visible?false:true">
			<span>{{setValue==''?'请选择':setValue}}</span>
			<span class="select-green"></span>
		</button>
		<div class="airx-select-box" v-show="visible" @click.stop>
			<ul>
				<li v-for="(item,index) in optionData" :key="item.value" :class="{hover:item.set}" @click="setItem(index)">{{item.value}}</li>
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
			setvalue: {
				type: String,
				default: ''
			},
			data: {
				type: Array,
				default: []
			}
		},
		data() {
			return {
				visible: false,
				scrollTopSize: 0,
				setValue: this.setvalue,
				optionData: this.data,
			}
		},
		created() {
		},
		mounted() {
			let _self = this;
			document.body.addEventListener("click", function() {
				_self.visible = false;
			})
		},
		watch: {
			/*
			value(val) {
				let _self = this;
				this.visible = val;
				if(val) {
					//_self.jsFun();
				}
			},
			visible(val) {
				let _self = this;
				console.log(val)
				this.$emit('input', _self.setValue);
			}
			*/
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
			setItem(index) {
				let _self = this;
				_self.setValue = _self.optionData[index]['value'];
				for(let i = 0; i < _self.optionData.length; i++) {
					_self.optionData[i]['set'] = false;
				}
				let obj = _self.optionData[index];
				obj['set'] = true;
				_self.$set(_self.optionData, index, obj);
				_self.visible = false;
				//console.log(_self.setValue)
				_self.$emit("input", _self.setValue);
			},
		}
	}
</script>

<style>

</style>