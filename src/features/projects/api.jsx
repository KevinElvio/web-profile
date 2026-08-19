import ApiHelper from "../../shared/api/ApiHelper"

export const readProject = () => ApiHelper.get('/projects')

export const createProject = async (data) => {
    try {
        const res = await ApiHelper.post('/projects/add', data)
        return res;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export const uploadImageProject = async (data) => {
    try {
        const res = await ApiHelper.post('/prepare-upload', data)
        return res;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export const updateProject = async (id,data) => {
    try {
        const res = await ApiHelper.put(`/projects/${id}`, data, {  
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        return res;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export const deleteProject = async (id, key) => {
    try {
        const res = await ApiHelper.delete(`/projects/${id}/${key}`)
        return res;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
