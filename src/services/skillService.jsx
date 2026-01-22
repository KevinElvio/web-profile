import ApiHelper from "../helper/ApiHelper"

const readSkill = () => {
    try {
        const data = ApiHelper.get('/skills')
        return data
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export {
    readSkill
}