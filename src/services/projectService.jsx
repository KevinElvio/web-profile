import ApiHelper from "../helper/ApiHelper"

const readProject = async () => {
    try {
        const data = await ApiHelper.get('/projects')
        return data
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export {
    readProject
}