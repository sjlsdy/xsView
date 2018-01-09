<template>
	<div id="app" class="layout-box">
		<div class="layout-left">
			<div class="nav">
				<ul>
					<li v-for="(item,index) in navData" :class="{ active: item.selected}" @click="setNav(index)">{{item.name}}</li>
				</ul>
			</div>
		</div>
		<div class="layout-main">
			<div class="layout-main-content">
				<!--
				<airx-select v-model="model4" style="width:200px">
					<airx-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</airx-option>
				</airx-select>
				<router-view/>
				<airx-button type="error" @click="modal1 = true">error</airx-button>
				<airx-table :columns="columns1" :data="data1"></airx-table>
				-->
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'app',
		data() {
			return {
				navData: [{
					label: '/',
					name: '首页'
				},{
					label: 'modal',
					name: 'Modal 弹窗'
				}],
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
				columns1: [{
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
				data1: [{
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
			setNav(index) {
				this.$router.push(this.navData[index]['label']);
			}
		},
	}
</script>

<style>
	#app {
		font-size: 12px;
	}
</style>