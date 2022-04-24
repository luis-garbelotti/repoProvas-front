import { Box, TextField } from "@mui/material";

const boxStyles = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    height: "100px",
    borderBottom: "1px solid #C4C4C4"
}

const textFieldtyles = {
    width: "45%",
    fontFamily: "Poppins"
}

interface Props {
    value: any;
}

function Search( {value}: Props ) {
    return (
        <Box component="div" sx={boxStyles}>
            <TextField
                sx={textFieldtyles}
                label={value}
                variant="outlined"
            />
        </Box>
    )
}

export {
    Search
}