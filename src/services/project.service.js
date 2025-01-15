import axios from "axios";

export const getProject = (callback) => {
    axios.get("http://localhost:4000/projects").then((res)=>{
        callback(res.data)
    }).catch((err) => {
        console.log(err)
    })
}