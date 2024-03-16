import * as React from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from "@mui/material";
import { useState } from "react";

export default function RegistrationPage() {
    const navigate = useNavigate(); // Используем useNavigate для навигации
    const formStyle = { padding: "0px 0px 10px 0px" };
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [userSecondName, setUserSecondName] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        const account = {
            login,
            password,
            userName,
            userSecondName
        };
        fetch("http://localhost:80/signUp/register", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(account)
        }).then(() => {
            console.log("new Person added");
            navigate('/login');
            // Используем navigate для навигации
        }).catch(error => {
            console.error('Error registering:', error);
            // Обработка ошибок, например, отображение сообщения пользователю
        });
    };

    const handleClick1 = (e) => {
        navigate('/login');
    };

    return (
        <Container className="containerStyle">
            <Paper elevation={3} className="paperStyleForm">
                <Box>
                    <TextField id="outlined-basic" label="login" variant="outlined" style={formStyle} fullWidth
                               value={login}
                               onChange={(e) => setLogin(e.target.value)}/>
                    <TextField id="outlined-password-input" type="password" label="password" variant="outlined"
                               style={formStyle} fullWidth
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}/>
                    <TextField id="outlined-basic" label="Имя" variant="outlined" style={formStyle} fullWidth
                               value={userName}
                               onChange={(e) => setUserName(e.target.value)}/>
                    <TextField id="outlined-basic" label="фамилия" variant="outlined" style={formStyle} fullWidth
                               value={userSecondName}
                               onChange={(e) => setUserSecondName(e.target.value)}/>

                    <div className="container" style={{marginTop: "10px"}}>
                        <Button variant="contained" onClick={handleClick}>Зарегистрироваться</Button>
                    </div>
                    <div className="container" style={{marginTop: "10px"}}>
                        <Button variant="contained" onClick={handleClick1}>Войти (если уже есть аккаунт)</Button>
                    </div>
                </Box>
            </Paper>
        </Container>
    );
}
