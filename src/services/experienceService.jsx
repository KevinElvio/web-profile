import ApiHelper from "../helper/ApiHelper"

const ReadExperience = async () => {
    try {
        const data = await ApiHelper.get('/experiences')
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export {
    ReadExperience
}