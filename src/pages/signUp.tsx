import PageContainer from "../components/container";
import React, { useState } from "react";
import Form from "../components/form";
import Input from "../components/input";
import Logo from "../components/logo";
import Title from "../components/title";
import "../styles/reset.css";
import Footer from "../components/footer";
import { Button, Box } from "@mui/material";
import { LoadingButton } from '@mui/lab';
import { useNavigate } from "react-router-dom";

function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState(""); 
    const navigate = useNavigate();

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        setIsLoading(true);
    }

    return (
        <>
            <PageContainer >
                <Logo />
                <Form >
                    <Title text="Cadastro"></Title>
                    <Input
                        label="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        label="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Input 
                    label="Password"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    /> 
                    <Footer>
                        <Box component="div" onClick={() => navigate('/')}
                            sx={{
                                fontFamily: "Poppins",
                                fontSize: "12px",
                                color: "#4673CACC",
                                '&:hover': {
                                    cursor: "pointer"
                                }
                            }}
                        >
                            Já possuo cadastro!
                        </Box>
                        {!isLoading ?
                            <Button sx={{
                                display: "flex",
                                flexDirection: "row",
                                fontFamily: "Roboto",
                                fontSize: "14px",
                            }}
                                variant="contained"
                                onClick={handleSubmit}
                            >
                                Cadastrar
                            </Button> :
                            <LoadingButton loading variant="outlined" sx={{ backgroundColor: "rgba(0, 92, 184, 0.5)" }}>
                                Submit
                            </LoadingButton>
                        }
                    </Footer>
                </Form>
            </PageContainer>
        </>
    )
}

export {
    SignUp
}