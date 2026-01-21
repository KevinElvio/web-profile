import ApiHelper from "../helper/ApiHelper"

const readProject = () => {
    try {
        const data = ApiHelper.get('/projects')
        return data
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export {
    readProject
}