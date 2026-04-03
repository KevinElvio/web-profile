import ApiHelper from "../helper/ApiHelper"

export const readProject = async () => {
    try {
        const res = await ApiHelper.get('/projects')
        return res;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const createProject = async (data) => {
    try {
        const res = await ApiHelper.post('/projects/add', data)
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
export const deleteProject = async (id) => {
    try {
        const res = await ApiHelper.delete(`/projects/${id}`)
        return res;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
