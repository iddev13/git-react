import * as axios from 'axios';

const instance = axios.create({
	withCredential: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const getUsers = (currentPage, pageSize) => {
	return instance.get(`users?page=${currentPage}&count=${pageSize}`)
		.then(response => response.data)
}
export const getUsers2 = (pageNumber, pageSize) => {
	return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
		.then(response => response.data)
}

export const getMessageUsers = (currentPage, pageSize) => {
	return instance.get(`users?page=${currentPage}&count=${pageSize}`)
		.then(response => response.data)
}

export const getBlogUsers = (currentPage, pageSize) => {
	return instance.get(`users?page=${currentPage}&count=${pageSize}`)
		.then(response => response.data)
}

export const profileApi = (photoFile) => {
	let formData = new FormData();
	formData.append('image', photoFile);
	return instance.put(`profile/photo`, formData, {
		headers: {
			'Content-Type': 'multipart/form-data'
		}
	});

}


export const saveProfile = (profile) => {
	return instance.put(`profile`, profile);
}

export const securityAPI = {
	getCaptchaUrl() {
		return instance.get('security/get-captcha-url')
	}
}