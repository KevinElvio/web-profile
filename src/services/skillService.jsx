import ApiHelper from "../helper/ApiHelper"

export const readSkill = async () => {
    try {
        const res = await ApiHelper.get('/skills')
        return res
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export const createSkill = async (data) => {
    try {
        const res = await ApiHelper.post('/skills/add', data)
        return res
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export const updateSkill = async (id, data) => {
    try {
        const res = await ApiHelper.put(`/skills/${id}`, data)
        return res
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export const deleteSkill = async (id) => {
    try {
        const res = await ApiHelper.delete(`/skills/${id}`)
        return res
    } catch (error) {
        console.log(error);
        throw error;
    }
}