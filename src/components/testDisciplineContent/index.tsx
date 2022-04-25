import { Box } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";


function TestsDisciplinesContent(props: any) {

    const [expanded, setExpanded] = useState<string | false>(false);


    const handlePeriodChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    

    return (
        <Box component="div">
            {props.periods.map((period: any) => 
                <Accordion key={period.id} expanded={expanded === period.number.toString()} onChange={handlePeriodChange(`${period.number.toString()}`)}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            {period.number} período
                        </Typography>
                        
                    </AccordionSummary>
                    
                </Accordion>
            
            )}
            
        </Box>
    )
}

export {
    TestsDisciplinesContent
}