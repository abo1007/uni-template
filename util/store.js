import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		name:"Hello"
	},
	mutations: {

	},
	actions: {
		
	},
	getters: {
		getName:state => {
			return state.name
		}
	}
})
export default store