import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import { api } from "../services/api";

const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    form {
        width: 100%;
        max-width: 300px;
        display: flex;
        flex-direction: column;

        input {
            margin-top: 20px;
            border: 1px solid #ddd;
            border-radius: 4px;
            height: 48px;
            padding: 0 20px;
            font-size: 16px;
            color: #666;

            &::placeholder {
                color: #999;
            }
        }

        button {
            margin-top: 10px;
            border: 0;
            border-radius: 4px;
            height: 48px;
            font-size: 16px;
            background: #df4723;
            color: #fff;
            cursor: pointer;
        }
    }
`;

export const Login = ({ history }) => {
    const [username, setUsername] = useState("");

    async function handleSubmit(evt) {
        evt.preventDefault();

        const response = await api.post("/devs", { username });

        console.log(response);

        history.push("/main");
    }

    return (
        <Container className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="Tindev" />
                <input
                    placeholder="Digite o seu usuario"
                    value={username}
                    onChange={evt => setUsername(evt.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
        </Container>
    );
};
