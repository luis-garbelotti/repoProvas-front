import { Box } from "@mui/material";

interface Props {
    children: React.ReactNode
}

const styles = {
    width: "100%",
    height: "100%",
    padding: "15px",
    backgroundColor: "blue"
}

function TestsContainer({children}: Props) {
    return (
        <Box component="div" sx={styles}>
            {children}
        </Box>
    )
}

export {
    TestsContainer
}