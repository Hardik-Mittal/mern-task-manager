import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post("/users/login", {
                email, password
            });

            localStorage.setItem("userInfo", JSON.stringify(response.data));
            navigate("/dashboard");
            console.log(response?.data);
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