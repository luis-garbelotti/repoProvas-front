import { Box } from "@mui/material";

interface Props {
    children: React.ReactNode
}

const styles = {
    width: "100%",
    height: "100%",
    padding: "15px",
    borderRadius: "5px",
    backgroundColor: "#3F61D7",
    marginRight: "20px"
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