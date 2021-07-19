import axios from 'axios';

const axiosInstance = axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API-KEY":"630690a3-78a1-4983-9b61-e297759afe60"
    }
});
export const userAPI = {
    getUsers(currentPage=1,pageSize=10){
        return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response=>{
            return response.data;
        });
    }
}
