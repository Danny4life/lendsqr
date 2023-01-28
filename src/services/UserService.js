import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/api/v1/users";
const USERDETAILS_API_BASE_URL = "http://localhost:8080/api/v1/userDetails";



class UserService {

    saveUser(user){
         return axios.post(USER_API_BASE_URL, user);
    }

    saveUserDetails(userDetails){
        return axios.post(USERDETAILS_API_BASE_URL, userDetails);
    }

}

export default new UserService();