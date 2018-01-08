<template>
	<div>
	<airx-button type="success" @click="modal1 = true">打开弹窗</airx-button>
	<airx-modal :zindex='101' title="First" v-model="modal1">
		<airx-button type="primary" @click="modal2 = true">Primary</airx-button>
		<br /><br />
		First Modal.
		<airx-modal :zindex='102' orient="vertical" title="Second" v-model="modal2">
				<airx-button type="primary" @click="modal3 = true">Primary</airx-button>
				<br /><br />
				Second Modal.
				<airx-modal :zindex='103' orient="vertical" title="Third" v-model="modal3">
					Third Modal.
				</airx-modal>
		</airx-modal>
	</airx-modal>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				modal1: false,
				modal2: false,
				modal3: false,
			}
		}
	}
</script>

<style></style>