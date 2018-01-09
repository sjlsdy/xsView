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
			<airx-modal :zindex='102' orient="vertical" title="Second" :mask="false" v-model="modal2">
				<airx-button type="primary" @click="modal3 = true">open third</airx-button>
				<br /><br /> Second Modal.
				<airx-modal :zindex='103' orient="vertical" title="Third" :mask="false" v-model="modal3">
					Third Modal.
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
						title: '说明',
						key: 'des'
					},
				],
				data1: [{
						value: 'title',
						des: '模态框的标题',
						type: 'String',
						defaultVal: '提示'
				},{
						value: 'title',
						des: '模态框的标题',
						type: 'String',
						defaultVal: '提示'
				},{
						value: 'title',
						des: '模态框的标题',
						type: 'String',
						defaultVal: '提示'
				},{
						value: 'title',
						des: '模态框的标题',
						type: 'String',
						defaultVal: '提示'
				},{
						value: 'title',
						des: '模态框的标题',
						type: 'String',
						defaultVal: '提示'
				},{
						value: 'title',
						des: '模态框的标题',
						type: 'String',
						defaultVal: '提示'
				},{
						value: 'title',
						des: '模态框的标题',
						type: 'String',
						defaultVal: '提示'
				},]
			}
		}
	}
</script>

<style></style>