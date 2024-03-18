import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Container, Paper } from "@mui/material";
import { useParams } from 'react-router-dom';

export default function ProfilePage() {
    const { login } = useParams();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`http://localhost:80/info/profile/{login}`);
                if (!response.ok) {
                    throw new Error('User not found');
                }
                const userData = await response.json();
                setUserData(userData);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, [login]);

    return (
        <Container className="containerStyle">
            <Paper elevation={3} className="paperStyleForm">
                <Box>
                    <div>
                        {userData && (
                            <div>
                                <h2>User Details</h2>
                                <p>Login: {userData.login}</p>
                                <p>Name: {userData.userName}</p>
                                <p>Second name: {userData.userSecondName}</p>
                            </div>
                        )}
                    </div>
                </Box>
            </Paper>
        </Container>
    );
}
