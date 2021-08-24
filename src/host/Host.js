import axios from "axios"

export const url="http://maktab2.herokuapp.com"
export const idMaktab="46"
export const user="137"
export const httpRequest=(config)=>{
    return(axios({
        ...config
    }))
}