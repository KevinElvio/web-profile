import ApiHelper from "../helper/ApiHelper";
import { FailedNotif } from "../components/notification/Notification";

export const login = (data) => {
    return ApiHelper.post('/loginAdmin', data)
        .then((res) => res.data)
        .catch(err => {
            FailedNotif(
                "Gagal",
                err
            )
        })
}
