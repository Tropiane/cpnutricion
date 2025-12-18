import { connection } from "./axiosConnection";

interface User{
    email: string,
    password: string
}

const login = async (data: User)=>{
    try {
        const res = await connection.post('user/login', data);

        if(!res) return;
        console.log(res);
        
        return res.data
    } catch (error) {
        console.log(error);
        
    }
}

export {
    login
}