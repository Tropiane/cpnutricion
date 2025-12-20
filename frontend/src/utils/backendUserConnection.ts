import { connection } from "./axiosConnection";

interface User{
    email: string,
    password: string
}

const login = async (data: User)=>{
    try {
        const res = await connection.post<{ status: number; message: string; data: object }>('/api/user/login', data);

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