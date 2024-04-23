import fetch from "auth/FetchInterceptor";
import { CLIENT_BASE_URL } from "constants/ApiConstant";


const clientService = {

    findAll: (page: number, size: number) => {
        return fetch.get<any, any[]>(CLIENT_BASE_URL, { params: { page, size } })
    }
};


export default clientService;