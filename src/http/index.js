import ins from './instance';

// 封装get函数
export function get(url, params) {
	return new Promise((resolve, reject) => {
		ins.get(url, {
			params: params
		}).then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		});
	});
}

// 封装post函数
export function post(url, params) {
	return new Promise((resolve, reject) => {
		ins.post(url, params).then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		});
	});
}

// 封装put函数
export function put(url, params) {
	return new Promise((resolve, reject) => {
		ins.put(url, params).then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		});
	});
}

// 封装delete函数
export function del(url, params) {
	return new Promise((resolve, reject) => {
		ins.delete(url, {
			params: params
		}).then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		});
	});
}