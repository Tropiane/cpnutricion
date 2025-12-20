import { userConnect } from "./axiosConnection"

interface User{
    email: string,
    password: string
}

const login = async (data: User)=>{
    try {
        const res = await userConnect.post<{ status: number; message: string; data: object }>('/', data);

        if(!res) return;
        
        const {status, data: {message}} = res;
        
        return {status, message};
    } catch (error) {
        console.log(error);
        
    }
}

export {
    login
}