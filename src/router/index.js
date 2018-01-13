import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import modal from '@/page/modal'
import select from '@/page/select'
import button from '../page/button'
import toogle from '../page/button'
import grid from '../page/button'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'HelloWorld',
		component: HelloWorld
	}, {
		path: '/modal',
		name: 'modal',
		component: modal,
	}, {
		path: '/select',
		name: 'select',
		component: select,
	}, {
		path: '/button',
		name: 'button',
		component: button,
	}, {
		path: '/toogle',
		name: 'toogle',
		component: toogle,
	}, {
		path: '/grid',
		name: 'grid',
		component: grid,
	}]
})