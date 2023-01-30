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

    getUserInformationById(id){
        return axios.get(USERDETAILS_API_BASE_URL + "/" + id);
    }

    updateUser(userDetails, id){
        return axios.put(USERDETAILS_API_BASE_URL + "/" + id, userDetails);
    }

}

export default new UserService();