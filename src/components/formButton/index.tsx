import { Button } from "@mui/material";

const styles = {
    display: "flex",
    flexDirection: "row",
    fontFamily: "Roboto",
    fontSize: "14px",
    backgroundColor: "#1976D2"
}

interface Props {
    children: React.ReactNode
}

export default function FormButton({ children}: Props) {
    return (
        <Button variant="contained" sx={styles} >
            {children}
        </Button>
    )
}