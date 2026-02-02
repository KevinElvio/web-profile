import ApiHelper from "../helper/ApiHelper";

export const login = async (email, password) => {
    try {
        const data = await ApiHelper.post('/loginAdmin', {
            email: email,
            password: password
        })
        return data
    } catch (error) {
        console.log(error);
        
    }
}