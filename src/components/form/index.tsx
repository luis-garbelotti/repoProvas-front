import { Box } from "@mui/material";

const styles = {
    width: "464px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    height: "100vh",
}

interface Props {
    children: React.ReactNode;
}

function Form({ children }: Props) {
    return (
        <Box component="form" sx={styles}>
            {children}
        </Box>
    )
}

export default Form