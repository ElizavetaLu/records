import axios from "axios";

const baseURL = 'http://localhost:3003/';
axios.defaults.baseURL = baseURL;


export const getBands = () => {
    return axios.get('bands')
};

export const getBandInformation = (id) => {
    return axios.get(`band?id=${id}`)
};

export const getAlbums = (payload) => {
    return axios.get(`albums?band_id=${payload}`)
};

export const getSongs = (payload) => {
    return axios.get(`songs?album_id=${payload}`)
};

export const getMembers = (payload) => {
    return axios.get(`band-members?band_id=${payload}`)
};
