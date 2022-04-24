import PageContainer from "../components/container";
import React, { useEffect, useState } from "react";
import Form from "../components/form";
import Input from "../components/formInput";
import Logo from "../components/logo";
import Title from "../components/title";
import "../styles/reset.css";
import Footer from "../components/footer";
import { Button, Box } from "@mui/material";
import { LoadingButton } from '@mui/lab';
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { signIn } from "../services/api";
import Swal from "sweetalert2";

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { auth, login } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (auth) {
            navigate('/disciplines');
        }
    }, []);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!password || !email) {
            Swal.fire('Preencha todos os campos')
            return;
        }
        setIsLoading(true);
        const promise = signIn({ email, password });
        promise.then((response) => {
            login(response.data)
            navigate('/disciplines');
            setIsLoading(false);
        }).catch(() => {
            Swal.fire('Email ou senha incorreto(a). Tente novamente');
            setIsLoading(false);
            setPassword('');
            setEmail('');
        })
    }

    return (
        <>
            <PageContainer >
                <Logo/>
            <Form >
                <Title text="Login"></Title>
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

                <Footer>
                        <Box component="div" onClick={() => navigate('/sign-up')}
                                sx={{
                                fontFamily: "Poppins",
                                fontSize: "12px",
                                color: "#4673CACC",
                                    '&:hover': {
                                        cursor: "pointer"
                                    }
                                }}
                        >
                            Cadastre-se!
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
                            Entrar
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
    SignIn
}