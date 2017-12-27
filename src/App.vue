<template>
	<div id="app">
		<airx-select v-model="model4" style="width:200px">
			<airx-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</airx-option>
		</airx-select>
		<airx-modal orient="vertical" v-model="modal1">
			<airx-modal orient="vertical" v-model="modal2">
				<div>
					<airx-modal orient="vertical" v-model="modal3">
						<div>3333333333</div>
					</airx-modal>
					<airx-button type="primary" @click="modal3 = true">Primary</airx-button>
					二级弹窗，二级弹窗，二级弹窗，二级弹窗，二级弹窗。
				</div>
			</airx-modal>
			<div>
				<airx-button type="primary" @click="modal2 = true">Primary</airx-button>一级弹窗，一级弹窗，一级弹窗。
			</div>
		</airx-modal>
		<router-view/>
		<airx-button type="success" @click="modal1 = true">success</airx-button>
		<airx-button type="error" @click="modal1 = true">error</airx-button>
		<airx-table :columns="columns1" :data="data1"></airx-table>
	</div>
</template>

<script>
	export default {
		name: 'app',
		data() {
			return {
				modal1: false,
				modal2: false,
				modal3: false,
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
				model4: '',
				columns1: [
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '年龄',
                        key: 'age'
                    },
                    {
                        title: '地址',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    },
                ]
			}
		},
		methods: {
			hello() {
				alert("hello")
			},
		},
	}
</script>

<style>
	#app {
		font-size: 12px;
	}
</style>