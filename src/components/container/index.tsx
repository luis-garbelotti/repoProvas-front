import { Container } from "@mui/material";

const styles = {    
    display: "flex",
    flexDirection: "column", 
    alignItems: "center",
    justifyContent: "center", 
    width: "100vw",
    height: "100vh",
}

interface Props {
    children: React.ReactNode
}

function PageContainer({ children }: Props) {
    return (
        <Container sx={ styles }>
            {children}
        </Container>
    )
}

export default PageContainer;