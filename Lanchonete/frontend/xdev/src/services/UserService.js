import http from "../http-common";

class UserService {
    signup(data){
        return http.post("/sigup", data);
    }
}

export default new UserService();