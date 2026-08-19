import ApiHelper from "../../shared/api/ApiHelper";

export const ReadUser = async () => {
    try {
        const response = await ApiHelper.get("/user")
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const ReadMe = async () => {
    try {
        const response = await ApiHelper.get('/user/me');
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const UpdateUser = async (data, id) => {
    try {
        const response = await ApiHelper.put(`/user/${id}`, data, {  
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
