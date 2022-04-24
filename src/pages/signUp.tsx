import PageContainer from "../components/container";
import React, { useState } from "react";
import Form from "../components/form";
import Input from "../components/formInput";
import Logo from "../components/logo";
import Title from "../components/title";
import "../styles/reset.css";
import Footer from "../components/footer";
import { Button, Box } from "@mui/material";
import { LoadingButton } from '@mui/lab';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { signUp } from "../services/api";

function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState(""); 
    const navigate = useNavigate();
    

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        if(password !== confirmPassword) {
            setIsLoading(false);
            Swal.fire('Confirme a sua senha')
            setConfirmPassword('');
            return
        }
        if(!password || !email) {
            Swal.fire('Preencha todos os campos')
            return
        }
        
        setIsLoading(true);
        const promise = signUp({password, email})
        promise.then(() => {
            Swal.fire('Cadastrado com sucesso')
            navigate('/')
        }).catch((error) => {
            if(error.response.status === 409) {
                Swal.fire('Email já cadastrado')
            }
            if (error.response.status === 422) {
                Swal.fire('Confira todos os dados')
            }
            setIsLoading(false);
            setConfirmPassword('');
            setPassword('');
            setEmail('');
        })
        
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