import ApiHelper from "../helper/ApiHelper"

const getExperience = () => {
    return ApiHelper.get("/experience")
        .then((res) => res.data)
        .catch((err) => {
            console.log(err)
        })
}


export default {
    getExperience,
}