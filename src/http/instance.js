import axios from 'axios';

// 配置请求基础配置
const ins = axios.create({
	baseURL: 'http://localhost:3000',
	timeout: 5000,
	headers: {
		'Content-Type': 'application/json;charset=utf-8'
	}
});

// 配置请求拦截器
ins.interceptors.request.use(config => {
	return config;
}, err => {
	return Promise.reject(err);
});

// 配置响应拦截器
ins.interceptors.response.use(res => {
	return res.data;
}, err => {
	return Promise.reject(err);
});

// 导出axios实例
export default ins;