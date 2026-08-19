import ApiHelper from "../../shared/api/ApiHelper";

export const login = (email, password) => ApiHelper.post('/loginAdmin', {
    email,
    password
})