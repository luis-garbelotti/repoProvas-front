import { Box } from '@mui/material';
import logo from '../../assets/img/logo.png';

function Logo() {
    return (
        <Box
            component="img"
            sx={{
                height: 63.5,
                width: 292,
                marginTop: "35px"
            }}
            alt="The house from the offer."
            src={logo}
        />
    )
}

export default Logo;