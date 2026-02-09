import ApiHelper from "../helper/ApiHelper"

const readSkill = async () => {
    try {
        const data = await ApiHelper.get('/skills')
        return data
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export {
    readSkill
}