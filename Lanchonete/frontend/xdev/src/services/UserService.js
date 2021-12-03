import http from "../:http-common";

class UserService {
    signup(data){
        return http.post("/sigUp", data);
    }
}

export default new UserService();