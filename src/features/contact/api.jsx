import ApiHelper from "../../shared/api/ApiHelper";

export const ReadContact = async () => {
    try {
        const res = await ApiHelper.get('/contacts');
        return res;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const UpdateContact = async (id, data) => {
    try {
        const res = await ApiHelper.put(`/contacts/${id}`, data );
        return res;
    } catch (error) {
        console.log(error);
        throw error;
    }
}