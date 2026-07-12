import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import styles from '../Login/Login.module.css';
import { Link } from "react-router-dom";
import Registro from '../Registro/Registro';
    
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleLogin = (e) => { 
        e.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const user = userCredential.user;
            console.log("Usuario logueado:", user);
            alert("¡Inicio de sesión exitoso!");
            navigate('/'); 
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error en el login:", errorCode, errorMessage);
            alert("Error: " + errorMessage);
        });
    };

    return (
        <div className={styles.loginContainer}>
            <h2>Iniciar Sesion</h2>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Ingresar</button>
                 <p>Si no tenes cuenta - <Link className='link' to='/registro'>Registrate</Link> </p>
            </form>
        </div>
    );
};

export default Login;