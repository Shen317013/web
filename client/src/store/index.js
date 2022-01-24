import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const types = {
	SET_AUTHENTICATED:"SET_AUTHENTICATED",
	SET_USER:"SET_USER",
	ORDER_INFO:"ORDER_INFO",
	ADDRESS_INFO:'ADDRESS_INFO'
};

const state = {
	isAuthenticated: false,
	user:{},
	orderInfo:null,
	addressInfo:null
};

const getters = {
	isAuthenticated: state => state.isAuthenticated,
	user:state => state.user,
	addressInfo: state =>state.addressInfo,
	orderInfo:state => state.orderInfo,
	totalPrice:state =>{
		let price = 0;
		if(state.orderInfo){
			const selectFoods = state.orderInfo.selectFoods;
			if(selectFoods != null){
			selectFoods.forEach(food =>{
				price += food.price * food.count;
			})
			}else{
				price = 0
			}
		}
		return price;
	}
};

const mutations = {
	[types.SET_AUTHENTICATED](state,isAuthenticated){
		if(isAuthenticated) state.isAuthenticated = isAuthenticated;
		else state.isAuthenticated = false;
	},
	
	[types.SET_USER](state, user){
		if(user) state.user = user;
		else state.user = {};
	},
	
	[types.ORDER_INFO](state, orderInfo){
		if(orderInfo){
			state.orderInfo = orderInfo;
		}else{
			state.orderInfo = null;
		}
	},
	
	[types.ADDRESS_INFO](state, addressInfo){
		if(addressInfo){
			state.addressInfo = addressInfo;
		}else{
			state.addressInfo = null;
		}
	}
};

const actions = {
	setAuthenticated: ({ commit }, isAuthenticated) =>{
		commit(types.SET_AUTHENTICATED,isAuthenticated);
	},
	setUser:({commit}, user) =>{
		commit(types.SET_USER, user);
	},
	setOrderInfo:({commit}, orderInfo)=>{
		commit(types.ORDER_INFO, orderInfo);
	},
	setAddressInfo:({ commit }, addressInfo)=>{
		commit(types.ADDRESS_INFO, addressInfo);
	}
};

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})
