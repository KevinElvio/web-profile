import axios from "axios";

export const getExperience = (callback) => {
    axios.get("http://localhost:4000/experiences").then((res)=>{
        callback(res.data)
    }).catch((err) => {
        console.log(err)
    })
}