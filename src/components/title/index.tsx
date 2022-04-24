import { Box } from "@mui/material";

interface Props {
    text: string
}

function Title({ text }: Props) {
    return(
        <Box
            component="span"
            sx={{
                marginTop: "130px",
                marginBottom: "30px",
                fontFamily: "Poppins",
                fontWeight: "500",
                fontSize: "24px"
            }}
        >
            {text}
        </Box>
    )
}

export default Title;