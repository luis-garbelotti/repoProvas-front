import { Box } from "@mui/material";

interface Props {
    children: React.ReactNode,
}

const styles = {
    width: "100%",
    height: "auto",
    padding: "15px",
    borderRadius: "5px",
    backgroundColor: "#3F61D7",
    marginBottom: "20px",
    overflowX: "hidden",
    overflow: "hidden"
}

function TestsContainer({ children }: Props) {
    return (
        <Box component="div" sx={styles}>
            {children}
        </Box>
    )
}

export {
    TestsContainer
}