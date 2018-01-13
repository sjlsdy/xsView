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
				}, {
					label: 'modal',
					name: 'Modal 弹窗'
				}, {
					label: 'select',
					name: 'Select 下拉框'
				}, {
					label: 'button',
					name: 'Button 按钮'
				}, {
					label: 'toogle',
					name: 'Toogle 切换'
				}, {
					label: 'grid',
					name: 'Grid 栅格'
				}, {
					label: 'input',
					name: 'Input 输入框'
				}, {
					label: 'radio',
					name: 'Radio 单选框'
				}, {
					label: 'checkbox',
					name: 'Checkbox 多选框'
				}, {
					label: 'dataselector',
					name: 'DataSelector 日期选择器'
				}, {
					label: 'transfer',
					name: 'Transfer 穿梭框'
				}, {
					label: 'form',
					name: 'Form 表单'
				},{
					label: 'alert',
					name: 'Alert 提示'
				}, {
					label: 'notice',
					name: 'Notice 通知'
				}, {
					label: 'badge',
					name: 'Badge 徽标'
				}, {
					label: 'bubble',
					name: 'Bubble 气泡'
				}, {
					label: 'carousel',
					name: 'Carousel 走马灯'
				}, {
					label: 'tree',
					name: 'Tree 树'
				}, {
					label: 'nav',
					name: 'Nav 导航'
				}, {
					label: 'tabs',
					name: 'Tabs 选项卡'
				}, {
					label: 'page',
					name: 'Page 页码'
				}, {
					label: 'step',
					name: 'Step 步骤条'
				}, {
					label: 'crumb',
					name: 'Crumb 面包屑'
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
				let _self = this;
				_self.$router.push(this.navData[index]['label']);
				for(let i = 0; i < _self.navData.length; i++) {
					this.navData[i]['selected'] = false;
				}
				this.navData[index]['selected'] = true;
				_self.$set(_self.navData);
			}
		},
	}
</script>

<style>

</style>