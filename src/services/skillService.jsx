import ApiHelper from "../helper/ApiHelper"

export const readSkill = async () => {
    try {
        const data = await ApiHelper.get('/skills')
        return data
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export const createSkill = async () => {
    try {
        const data = await ApiHelper.get('/skills')
        return data
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export const updateSkill = async () => {
    try {
        const data = await ApiHelper.get('/skills')
        return data
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export const deleteSkill = async () => {
    try {
        const data = await ApiHelper.get('/skills')
        return data
    } catch (error) {
        console.log(error);
        throw error;
    }
}