import axios from 'axios';

axios.defaults.baseURL = "https://recruit-api.yonple.com/recruit/582921/";

export function ApostsAxios(page,state)
{
    return axios.get(`/a-posts?page=${page}&search=${state}`);
}

export function BpostsAxios(page,state)
{
    return axios.get(`/b-posts?page=${page}&search=${state}`);
}

export function DetailAxios(tab,id)
{
    return axios.get(`/${tab}-posts/${id}`);
}