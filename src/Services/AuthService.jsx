import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000';


export default class AuthService {
   constructor() {
      console.log();
   }

   userRegister() {
      const url = `${API_URL}/api/auth/register/`;
      return axios.post(url).then((response));
   }

   userLogin() {
      const url = `${API_URL}/api/auth/login/`;
      return axios.post(url).then((response) => {
         if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
         }
         return response.data
      });
   }
}


// const REGISTER_URL = `${API_URL}/api/auth/register/`;
// const LOGIN_URL = `${API_URL}/api/auth/login/`;

// const register = async (userData) => {
//    const config = {
//       headers: {
//          "Content-Type": "application/json"
//       },
//    };

//    const response = await axios.post(REGISTER_URL, userData, config);
//    return response.data

// }

// const login = async (userData) => {
//    const config = {
//       headers: {
//          "Content-Type": "application/json"
//       },
//    };

//    const response = await axios.post(LOGIN_URL, userData, config);
//    if (response.data) {
//       localStorage.setItem("user", JSON.stringify(response.data))
//    }
//    return response.data;
// };

// const AuthService = { register, login };

// export default AuthService;
