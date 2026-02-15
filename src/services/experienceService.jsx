import ApiHelper from "../helper/ApiHelper"

export const ReadExperience = async () => {
    try {
        const res = await ApiHelper.get('/experiences')
        return res;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export const AddExperience = async (data) => {
    try {
        const res = await ApiHelper.post('/experiences/add', data)
        return res;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export const UpdateExperience = async (id, data) => {
    try {
        const res = await ApiHelper.put(`/experiences/${id}`, data)
        return res;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export const DeleteExperience = async (id) => {
    try {
        const res = await ApiHelper.delete(`/experiences/${id}`)
        return res;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
