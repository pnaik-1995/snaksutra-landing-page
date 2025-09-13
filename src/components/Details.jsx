import React, { useState } from 'react'
import {
    Box,
    Button,
    Stack,
    TextField,
    Snackbar
} from '@mui/material'
import Alert from '@mui/material/Alert';
import Title from './Title'
import Paragraph from './Paragraph'

const Details = () => {

    const [alert, setAlert] = useState({ open: false, type: "success", message: "" })

    const handleClose = () => {
        setAlert({...alert, open:false})
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const payload = {
            name: data.get('name'),
            email: data.get('email'),
            phone: data.get('phone'),
        };

        try {
            const res = await fetch("http://localhost:5000/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            await res.json();
            if (res.ok) {
                setAlert({
                    open: true,
                    type: "success",
                    message: "Sent, Will contact you shortly."
                })
            } else {
                setAlert({
                    open: true,
                    type: "error",
                    message: "Unable to send mail please check you email and phone number."
                })
            }
        } catch (err) {
            console.error("Error:", err);
            setAlert({
                open: true,
                type: "error",
                message: "Backend Server is down, please be patient we are working on it."
            })
        }
    };



    return (
        <Stack
            component='section'
            direction="column"
            justifyContent='center'
            alignItems='center'
            sx={{
                py: 10,
                px: 2,
            }}
        >
            <Title
                text={
                    'Looking for a smarter way to munch?'
                }
                textAlign={'center'}
            />
            <Paragraph
                text={
                    'If you’d like to try our snacks, contact us today — \
                we’ll call you shortly to take your order and satisfy your taste buds.'
                }
                maxWidth={'sm'}
                mx={0}
                textAlign={'center'}
            />

            <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{
                    mt: 1,
                    py: 2
                }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    autoComplete="name"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="phone"
                    label="Phone Number"
                    type="phone"
                    id="phone"
                    autoComplete="current-phone"
                />
                <Button
                    variant="contained"
                    fullWidth
                    type="submit"
                    size="medium"
                    sx={{
                        fontSize: '0.9rem',
                        textTransform: 'capitalize',
                        py: 2,
                        mt: 3,
                        mb: 2,
                        borderRadius: 0,
                        backgroundColor: '#14192d',
                        "&:hover": {
                            backgroundColor: '#1e2a5a',
                        }
                    }}
                >
                    send
                </Button>
            </Box>
            <Snackbar
                    open={alert.open}
                    onClose={handleClose}
                    autoHideDuration={1000}
                    anchorOrigin={{ vertical: "top", horizontal: "center" }}
                >
                    <Alert onClose={handleClose} severity={alert.type} sx={{ width: '100%' }}>
                        {alert.message}
                    </Alert>
                </Snackbar>
        </Stack>
    )
}

export default Details;