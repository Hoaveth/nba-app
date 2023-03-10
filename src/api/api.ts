import { Response } from "../components/model/ResponseModel";
import { api } from "./axiosConfig";

export const API = {
  getGameResults: async function (
    today: string,
    yesterday: string
  ): Promise<Response | unknown> {
    let response: Response;
    try {
      response = await api.request({
        url: `https://www.balldontlie.io/api/v1/games?seasons[]=2022&start_date=${yesterday}&end_date=${today}`,
        method: "GET",
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  getPlayers: async function (): Promise<Response | unknown> {
    let response: Response;
    try {
      response = await api.request({
        url: `https://www.balldontlie.io/api/v1/players`,
        method: "GET",
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  getGameStats: async function (): Promise<Response | unknown> {
    let response: Response;
    try {
      response = await api.request({
        url: `https://www.balldontlie.io/api/v1/stats`,
        method: "GET",
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  getAllPlayers: async function (): Promise<Response | unknown> {
    let response: Response;
    try {
      response = await api.request({
        url: `https://www.balldontlie.io/api/v1/players?per_page=100`,
        method: "GET",
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
};
