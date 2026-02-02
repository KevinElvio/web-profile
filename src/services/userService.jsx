import ApiHelper from "../helper/ApiHelper";
import { FailedNotif } from "../components/notification/Notification";

export const ReadUser = () => {
    try {
        const response = ApiHelper.get("/user")
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const ReadMe = () => {
    try {
        const response = ApiHelper.get('/user/me');
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
