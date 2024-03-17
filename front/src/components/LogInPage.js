import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from "@mui/material";
import { useState } from "react";

export default function LogInPage() {
    const navigate = useNavigate();
    const formStyle = { padding: "0px 0px 10px 0px" };
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        const account = {
            login,
            password
        };
        const requestOptions = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(account)
        };

        fetch("http://localhost:80/signIn/check", requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Неверный логин или пароль');
                }else {
                    navigate('/main');
                }
            })
            .catch(error => {
                alert('Ошибка при отправке запроса:' + error);
            });
    };

    return (<Container className="containerStyle">
        <Paper elevation={3} className="paperStyleForm">
            <Box>
                <TextField id="outlined-basic" label="login" variant="outlined" style={formStyle} fullWidth
                           value={login}
                           onChange={(e) => setLogin(e.target.value)} />
                <TextField id="outlined-password-input" type="password" label="password" variant="outlined" style={formStyle} fullWidth
                           value={password}
                           onChange={(e) => setPassword(e.target.value)} />
                <div className="container" style={{ marginTop: "10px" }}>
                    <Button variant="contained" onClick={handleClick}>Войти</Button>
                </div>
            </Box>
        </Paper>
    </Container>);
}
