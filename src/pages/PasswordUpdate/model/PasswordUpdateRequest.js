import {axiosInstantsUToken} from "../../../services/authApi";

export const PasswordUpdateRequest = async (data, navigate) => {
    try {
        await axiosInstantsUToken.post('/password-update', data)
        navigate('/login')
    } catch (e) {
        console.log(e)
    }
}