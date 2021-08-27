import axios from "axios"

export const url="http://143.244.209.138:8000"
export const idMaktab="46"
export const user="137"
export const httpRequest=(config)=>{
    return(axios({
        ...config
    }))
}