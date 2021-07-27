import { httpRequest, idMaktab, url } from "./Host"

export const getNews=()=>{
    var config={
        url:`${url}/new/${idMaktab}`,
        method:'get',    }
    return(httpRequest(config))
}