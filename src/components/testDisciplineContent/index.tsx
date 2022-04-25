import { Box } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";
import { getDisciplinesByPeriod } from "../../services/api";
import useAuth from "../../hooks/useAuth";

interface Discipline {
    id: number,
    name: string,
    termId: number
}

function TestsDisciplinesContent(props: any) {

    const { auth } = useAuth()
    const [expanded, setExpanded] = useState<string | false>(false);
    const [periodDisciplines, setPeriodDisciplines] = useState<Discipline[]>()
    const [expandedDiscipline, setExpandedDiscipline] = useState<string | false>(false);

    const handlePeriodChange =
        (periodNumber: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? periodNumber : false);
            const promise = getDisciplinesByPeriod(auth, parseInt(periodNumber));

            promise.then((response) => {
                setPeriodDisciplines(response.data)
            })
        };

    const handleDisciplineChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpandedDiscipline(isExpanded ? panel : false);
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
                    <AccordionDetails>
                        {!periodDisciplines ? '' : periodDisciplines?.map((discipline) => 
                        
                            <Accordion key={discipline.id} expanded={expandedDiscipline === discipline.name} onChange={handleDisciplineChange(discipline.name)}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                        {discipline.name}
                                    </Typography>

                                </AccordionSummary>
                                
                            </Accordion>
                        )}
                    </AccordionDetails>
                </Accordion>
            
            )}
            
        </Box>
    )
}

export {
    TestsDisciplinesContent
}