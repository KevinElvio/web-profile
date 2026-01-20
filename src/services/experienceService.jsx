import ApiHelper from "../helper/ApiHelper"

const ReadExperience = () => {
    try {
        const data = ApiHelper.get('/experiences')
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export {
    ReadExperience
}