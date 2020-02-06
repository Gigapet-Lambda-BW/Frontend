import axios from 'axios'

export function getToken() {
  return localStorage.getItem("token");
}

export default function() {
  return axios.create({
    baseURL: "https://gigapet-bw-7.herokuapp.com/api/",
    headers: {
      Authorization: getToken()
    }
  });
}