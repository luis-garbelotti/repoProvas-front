import { Box } from "@mui/material";
import Logo from "../logo";
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Swal from "sweetalert2";

const boxStyles = {
    paddingLeft: "45px",
    paddingRight: "25px",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "55px"
}

const iconStyles = {
    color: "#000",   
}

function Header() {

    const {auth, setAuth} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if(!auth) {
            Swal.fire("Você precisa estar logado para continuar.");
            navigate('/');
        }
    }, [])

    function logout() {
        localStorage.clear();
        setAuth(null)
        navigate('/');
    }

    return (
        <Box component="div" sx={boxStyles}>
            <Logo/>
            <IconButton sx={{
                "&.MuiButtonBase-root:hover": {
                    backgroundColor: "transparent"
                }}}>
                <LogoutIcon onClick={logout} fontSize="large" sx={iconStyles}/>
            </IconButton>
        </Box>
    )
}

export {
    Header
}