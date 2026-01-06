import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import { AuthContext } from "../context/AuthContext";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post("/users/login", {
                email, password
            });

            login(response.data);
            navigate("/dashboard", { replace: true });
        }
        catch (error) {
            console.log(error.response?.data?.message || error.message);
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Login;