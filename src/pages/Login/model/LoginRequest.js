import { axiosInstantsUToken } from '../../../services/authApi'

export const LoginRequest = async (data, navigate) => {
    try {
        const response = await axiosInstantsUToken.post('/login/', data)
        const {access_token, refresh_token} = response.data
        sessionStorage.setItem("access_token", access_token);
        sessionStorage.setItem("refresh_token", refresh_token);
        navigate('/adminProfile')
    } catch (e) {
        console.log(e)
    }
}