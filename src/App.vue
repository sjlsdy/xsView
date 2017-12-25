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
					</airx-modal><button @click="modal3 = true" style="padding: 20px;">弹窗</button>二级弹窗，二级弹窗，二级弹窗，二级弹窗，二级弹窗。
				</div>
			</airx-modal>
			<div><button @click="modal2 = true" style="padding: 20px;">弹窗</button>一级弹窗，一级弹窗，一级弹窗。
			</div>
		</airx-modal>
		<router-view/>
		<button @click="modal1 = true" style="padding: 20px;">弹窗<i class="fa fa-address-book" aria-hidden="true"></i></button>
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
				cityList: [
                    {
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
                model4: ''
			}
		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>