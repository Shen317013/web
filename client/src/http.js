import axios from "axios";
import { Loading, Message } from "element-ui";
import router from "./router/index.js"

let loading;
function startLoading(){
	loading = Loading.service({
		lock: true,
		text:'加載中...',
		background:'rgba(0,0,0,0,7)'
	});
}

function endLoading(){
	loading.close();
}

//請求攔截
axios.interceptors.request.use(config =>{
	startLoading();
	
	if(localStorage.eleToken){
		//設置統一的請求
		config.headers.Authorization = localStorage.eleToken
	}
	
	return config;
},error => {
	return Promise.reject(error)
});

//響應攔截
axios.interceptors.response.use(response =>{
	endLoading();
	return response;
},error => {
	//錯誤提醒
	endLoading();
	Message.error(error.response.data);
	
	//獲取錯誤狀態碼
	const { status } = error.response;
	if(status == 401){
		Message.error("登入已超時,請重新登入");
		//清除token
		localStorage.removeItem("eleToken");
		//跳轉回登入頁面
		router.push("/login");
	}
	
	return Promise.reject(error)
});

export default axios;
