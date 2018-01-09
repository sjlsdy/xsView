<template>
	<div>
		<h3>Modal 模态框</h3>
		<h4>概述</h4>
		<p>
			模态对话框，在弹层中显示。
		</p>
		<airx-button type="success" @click="modal1 = true">打开弹窗</airx-button>
		<airx-modal :zindex='101' title="First" v-model="modal1">
			<airx-button type="primary" @click="modal2 = true">open second</airx-button>
			<br /><br /> First Modal.
			<airx-modal :zindex='102' orient="vertical" title="Second" :mask="false" size="md" v-model="modal2">
				<airx-button type="primary" @click="modal3 = true">open third</airx-button>
				<br /><br /> Second Modal.
				<airx-modal :zindex='103' orient="vertical" title="Third" :mask="false" size="sm" v-model="modal3">
					<airx-button type="primary" @click="modal4 = true">open fourth</airx-button>
					<br /><br />Third Modal.
					<airx-modal :zindex='104' orient="vertical" title="fourth" :mask="false" size="xs" v-model="modal4">
						Fourth Modal.
					</airx-modal>
				</airx-modal>
			</airx-modal>
		</airx-modal>
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
				modal1: false,
				modal2: false,
				modal3: false,
				modal4: false,
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
				},{
						value: 'zindex',
						des: '模态框的z轴深度',
						type: 'Number',
						defaultVal: 1,
						switchVal: ''
				},{
						value: 'mask',
						des: '模态框是否显示遮罩。默认为true，当你的项目里需要模态框里再次弹出模态框的话，需要设定此项为false，以消除遮罩层和模态框阴影。当然你不一定非得这么做，但是不这么设置的话，模态框的阴影和遮罩层都会越叠越深。',
						type: 'Boolean',
						defaultVal: 'true',
						switchVal: ''
				},{
						value: 'shadow',
						des: '模态框是否显示阴影。默认为true。',
						type: 'Boolean',
						defaultVal: 'true',
						switchVal: ''
				},{
						value: 'size',
						des: '模态框的尺寸。',
						type: 'Boolean',
						defaultVal: 'lg',
						switchVal: 'lg / md / sm / xs'
				},{
						value: 'transfer',
						des: '模态框的外层DOM元素如果有使用定位，则当前模态框的定位可能会出现问题，因为模态框的内容层使用了absolute定位。transfer设置为true的话，会将当前模态框移动到</body>之前，以脱离外层DOMain元素的定位影响。但这样做的话，模态框内部的模态框会因为优先级较低而无法显示，这个时候需要设定zindex的值，提高模态框的内部模态框的z轴深度。',
						type: 'Boolean',
						defaultVal: 'true',
						switchVal: ''
				},]
			}
		}
	}
</script>

<style></style>