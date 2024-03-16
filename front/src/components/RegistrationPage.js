import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Container, Paper, Button, RadioGroup, FormControlLabel, Radio} from "@mui/material";
import {useState} from "react";

export default function RegistrationPage() {

    const formStyle = {padding: "0px 0px 10px 0px"}
    const [name, setName] = useState('')
    const [anotherName, setAnotherName] = useState('')
    const [guestStatus, setGuestStatus] = useState('')


    const handleClick = (e) => {
        e.preventDefault()
        const person = {
            name,
            anotherName,
            guestStatus
        }
        console.log(person)
        fetch("http://localhost:8080/person/add", {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(person)
        }).then(() => {
            console.log("new Person added")
        })
    }

    return (<Container className="containerStyle">
        <Paper elevation={3} className="paperStyleForm">
            <Box>
                <TextField id="outlined-basic" label="Имя и Фамилия" variant="outlined" style={formStyle} fullWidth
                           value={name}
                           onChange={(e) => setName(e.target.value)}/>
                <TextField id="outlined-basic" label="С кем вы будете? (имя, фамилия)" variant="outlined" style={formStyle} fullWidth
                           value={anotherName}
                           onChange={(e) => setAnotherName(e.target.value)}/>


                <div className="container" style={{marginTop:"10px"}}>
                    <Button variant="contained" onClick={handleClick}>отправить</Button>
                </div>
            </Box>

        </Paper>
    </Container>);
}