<template>
	<div class="airx-table-box">
		<div class="airx-table-head">
		<table cellspacing="0" cellpadding="0" border="0" class="airx-table" :class="classObj" :value="value">
			<colgroup>
				<col width="100" v-for="(val,index) in columns" :key="val.key">
			</colgroup>
			<thead>
				<tr>
					<th v-for="(val,index) in columns" :key="val.key">
						{{val.title}}
					</th>
				</tr>
			</thead>
		</table>
		</div>
		<div class="airx-table-body">
			<table cellspacing="0" cellpadding="0" border="0" class="airx-table">
				<colgroup>
					<col width="100" v-for="(val,index) in columns" :key="val.key">
				</colgroup>
				<tbody>
					<tr v-for="(val,index) in data">
						<td v-for="(tdval,index) in columns">
							{{val[tdval.key]}}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'airx-table',
		props: {
			columns: {
				type: Array,
				default: []
			},
			data: {
				type: Array,
				default: []
			},
			value: {
				type: Boolean,
				default: false
			},
			type: {
				type: String,
				default: 'default'
			},
			zindex: {
				type: Number,
				default: 1
			},
			title: {
				type: String,
				default: '提示'
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
				if(this.type == 'primary') classObj['airx-table-primary'] = true;
				if(this.type == 'success') classObj['airx-table-success'] = true;
				if(this.type == 'error') classObj['airx-table-error'] = true;
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
			},
			closetable() {
				this.visible = false;
				document.body.scrollTop = document.documentElement.scrollTop = this.scrollTopSize;
				this.$emit("on-close");
			},
			clickBtn() {
				this.$emit("click");
			},
		}
	}
</script>

<style>

</style>