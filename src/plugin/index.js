import * as flexbox from './flexbox'

const components = {
	...flexbox
}

console.log(1,2,3,4,5)

const install = function(Vue,option) {
	Object.keys(components).forEach((key)=>{
		Vue.component(components[key].name,components[key])
	})
}

export default {
	install
}
