const baseUrl = '';

function request(obj) {
	let url = baseUrl + obj.url;
	let method = obj.method || 'GET';
	let data = obj.data || {}
	let success = obj.success || {}; //成功后的回调
	// let header = obj.header || {}
	let token = uni.getStorageSync('token') || ''
	
	return new Promise((reslove, rej) => {
		uni.request({
			url: url,
			data: data,
			method: method,
			header: {
				'token': token
			},
			success: (res) => {
				if (res.statusCode === 200) {
					reslove(res.data)

				} else {
					uni.showToast({
						position: top,
						icon: 'none',
						title: res.statusCode,
						duration: 2000
					})

				}
			},
			fail: (err) => {
				console.log(err);
				rej(err)
			}
		})
	})

}

export default {
	baseUrl,
	request
}