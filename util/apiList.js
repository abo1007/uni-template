import req from './request.js'

const request = req.request;

export default {

	// 注册
	DoRegister(data) {
		return request({
			url: '/register',
			method: 'post',
			data
		})
	}
}