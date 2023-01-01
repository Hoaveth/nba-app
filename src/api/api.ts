import { Response } from "../components/model/ResponseModel";
import { api } from "./axiosConfig"

export const API = {
    getGameResults: async function (today:string, yesterday:string): Promise<Response | unknown> {

        let response : Response;
        try{
            response = await api.request({
                    url: `https://www.balldontlie.io/api/v1/games?seasons[]=2022&start_date=${yesterday}&end_date=${today}`,
                    method: 'GET'
            })
            console.log(response.data)
         return response.data;
        }catch(error){
            console.log(error)
            return error;
        }
    }
}