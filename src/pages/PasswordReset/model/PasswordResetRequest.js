import {axiosInstantsUToken} from "../../../services/authApi";

export const PasswordResetRequest = async (data, navigate) => {
    try {
        await axiosInstantsUToken.post('/pass-reset', data)
        navigate('/login')
    } catch (e) {
        console.log(e)
    }
}