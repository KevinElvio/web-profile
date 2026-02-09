import ApiHelper from "../helper/ApiHelper";
import { FailedNotif } from "../components/notification/Notification";
import { data } from "autoprefixer";

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

export const UpdateUser = async (data) => {
    try {
        const response = await ApiHelper.put(`/user/1`, data, {  
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
