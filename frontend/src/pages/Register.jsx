import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

function Register() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post("/users/register", {
                name, email, password
            });

            console.log("Registered user:", response.data);
            navigate("/login");
        }
        catch (error) {
            console.log(error.response?.data?.message || error.message);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <input type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required></input>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>

            <button type="submit">Register</button>
        </form>
    )
}

export default Register;