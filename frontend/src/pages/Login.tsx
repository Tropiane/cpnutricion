import { useState } from "react"
import { showLoginAlert } from "../utils/alerts";
import { login } from "../utils/backendUserConnection";

export const Login = ()=>{
    const [formData, setFormData] = useState({
        email:"",
        password: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        
    }

        const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault()
        
        if(formData.email.length === 0){
            showLoginAlert("El email no puede estar vacio");
            return
        };
        if(formData.password.length === 0){
            showLoginAlert("La contrasena no puede estar vacia");
            return
        };

        const res = await login(formData);
        if (!res) {
            showLoginAlert("Error al iniciar sesión", "error");
            return;
        }
        const { status } = res;
        
        if(status === 500) return showLoginAlert("error al iniciar sesion", "error");
        
        console.log(res);
        
        if(status === 200) {
              showLoginAlert("Inicio de sesion exitoso", "success");
              setTimeout(()=>{
                window.location.href = "/ticket-manager";
              }, 2000)
        }
    }
    return(
        <div className="login">
            <h1 className="titleFont">Iniciar sesion</h1>
            <form action="">
                <label htmlFor="email" className="fourthTitleFont">Email</label>
                <input type="text" name="email" onChange={handleChange}/>
                <label htmlFor="password" className="fourthTitleFont">Constrasena</label>
                <input type="text" name="password" onChange={handleChange}/>
                <button onClick={handleSubmit}>iniciar sesion</button>
            </form>
        </div>
    )
}