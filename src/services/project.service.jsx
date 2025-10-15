import ApiHelper from "../helper/ApiHelper"

export const getAllProjects = () => {
    return ApiHelper.get("/projects")
        .then((res) => res.data)
        .catch((err) => {
            console.log(err)
        })
}
