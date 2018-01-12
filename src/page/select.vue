<template>
	<div>
		<h3>Select 下拉框</h3>
		<h4>概述</h4>
		<p>
			模态对话框，在弹层中显示。
		</p>
		<airx-select :value="value1" @input="value1 = $event" :data="cityList"></airx-select>
		==> {{value1}}
		<h3>API说明</h3>
		<h4>Props</h4>
		<airx-table :columns="columns1" :data="data1"></airx-table>
		<h4>Events</h4>
		<airx-table :columns="columns1" :data="data1"></airx-table>
		<h4>Slot</h4>
		<airx-table :columns="columns1" :data="data1"></airx-table>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				value1: '',
				cityList: [{
						value: 'New York',
						label: 'New York'
					},
					{
						value: 'London',
						label: 'London'
					},
					{
						value: 'Sydney',
						label: 'Sydney'
					},
					{
						value: 'Ottawa',
						label: 'Ottawa'
					},
					{
						value: 'Paris',
						label: 'Paris'
					},
					{
						value: 'Canberra',
						label: 'Canberra'
					}
				],
				columns1: [{
						title: '属性',
						key: 'value',
						width: 100,
					},
					{
						title: '类型',
						key: 'type',
						width: 100,
					},
					{
						title: '默认值',
						key: 'defaultVal',
						width: 100,
					},
					{
						title: '可选值',
						key: 'switchVal',
						width: 200,
					},
					{
						title: '说明',
						key: 'des'
					},
				],
				data1: [{
					value: 'title',
					des: '模态框的标题',
					type: 'String',
					defaultVal: '提示',
					switchVal: ''
				}, {
					value: 'zindex',
					des: '模态框的z轴深度',
					type: 'Number',
					defaultVal: 1,
					switchVal: ''
				}, {
					value: 'mask',
					des: '模态框是否显示遮罩。默认为true，当你的项目里需要模态框里再次弹出模态框的话，需要设定此项为false，以消除遮罩层和模态框阴影。当然你不一定非得这么做，但是不这么设置的话，模态框的阴影和遮罩层都会越叠越深。',
					type: 'Boolean',
					defaultVal: 'true',
					switchVal: ''
				}, {
					value: 'shadow',
					des: '模态框是否显示阴影。默认为true。',
					type: 'Boolean',
					defaultVal: 'true',
					switchVal: ''
				}, {
					value: 'size',
					des: `
						模态框的尺寸。<br />
						lg: 两侧各距body 5%距离<br />
						md: 两侧各距body 15%距离<br />
						sm: 两侧各距body 25%距离<br />
						xs: 两侧各距body 35%距离<br />
						`,
					type: 'Boolean',
					defaultVal: 'lg',
					switchVal: `
						lg / md / sm / xs
						`
				}, {
					value: 'transfer',
					des: '模态框的外层DOM元素如果有使用定位，则当前模态框的定位可能会出现问题，因为模态框的内容层使用了absolute定位。transfer设置为true的话，会将当前模态框移动到</body>之前，以脱离外层DOMain元素的定位影响。但这样做的话，模态框内部的模态框会因为优先级较低而无法显示，这个时候需要设定zindex的值，提高模态框的内部模态框的z轴深度。',
					type: 'Boolean',
					defaultVal: 'true',
					switchVal: ''
				}, ]
			}
		},
		methods: {
			hello(e) {
				console.log(e)
			}
		}
	}
</script>

<style></style>