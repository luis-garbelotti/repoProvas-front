import { Box } from "@mui/system";

const styles = {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
}

interface Props {
    children: React.ReactNode
}

export default function Footer({children}: Props) {
    return (
        <Box component="div" sx={styles}>
            {children}
        </Box>
    )    
}