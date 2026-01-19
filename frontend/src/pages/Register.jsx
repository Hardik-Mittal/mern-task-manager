import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import { AuthContext } from "../context/AuthContext";
import { getErrorMessage } from "../utils/errorHandler";

function Register() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { login } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await api.post("/users/register", {
                name, email, password
            });

            login(response.data);
            navigate("/dashboard", { replace: true });
        }
        catch (error) {
            setError(getErrorMessage(error));
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <input type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required></input>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>

            <button type="submit">Register</button>
        </form>
    )
}

export default Register;