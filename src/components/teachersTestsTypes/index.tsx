import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { getTestsByTeacherType } from '../../services/api';

interface Props {
    teacherId: number,
    lever: boolean
}

function TeacherTestsTypes({teacherId, lever}: Props) {

    const { auth } = useAuth();
    const [expandedType, setExpandedType] = useState<string | false>(false);
    const [testsData, setTestsData] = useState<any[]>([])

    const handleTypeChange =
        (categoryTypeId: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpandedType(isExpanded ? categoryTypeId : false);

            const promise = getTestsByTeacherType(auth, teacherId, parseInt(categoryTypeId));

            promise.then((response) => {
                setTestsData(response.data)
            })
        };

    return (
        <>
            <Accordion expanded={expandedType === '1'} onChange={handleTypeChange('1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        P1
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {testsData[0]?.tests.length !== 0 ? testsData?.map((test) =>
                        <Typography key={test.id} sx={{ width: '85%', display: "flex", gap: "5px", marginBottom: "10px", flexDirection: "column", justifyContent: "space-btween" }}>
                            {test.tests?.map((t: any) => 
                                <Typography sx={{ color: "black" }}>
                                    {t.name}
                                </Typography>
                            )}
                        </Typography>
                    ) :
                        <Typography sx={{ width: '85%', display: "flex", gap: "5px", marginBottom: "10px", fontStyle: "italic", color: "#9c9c9c" }}>
                            Nenhuma prova encontrada. Faça o upload de uma prova para ajudar a comunidade.
                        </Typography>
                    }
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expandedType === '2'} onChange={handleTypeChange('2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        P2
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {testsData[1]?.tests.length !== 0 ? testsData?.map((test) =>
                        <Typography key={test.id} sx={{ width: '85%', display: "flex", gap: "5px", marginBottom: "10px", flexDirection: "column", justifyContent: "space-btween" }}>
                            {test.tests?.map((t: any) =>
                                <Typography sx={{ color: "black" }}>
                                    {t.name}
                                </Typography>
                            )}
                        </Typography>
                    ) :
                        <Typography sx={{ width: '85%', display: "flex", gap: "5px", marginBottom: "10px", fontStyle: "italic", color: "#9c9c9c" }}>
                            Nenhuma prova encontrada. Faça o upload de uma prova para ajudar a comunidade.
                        </Typography>
                    }
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expandedType === '3'} onChange={handleTypeChange('3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        P3
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {testsData[2]?.tests.length !== 0 ? testsData?.map((test) =>
                        <Typography key={test.id} sx={{ width: '85%', display: "flex", gap: "5px", marginBottom: "10px", flexDirection: "column", justifyContent: "space-btween" }}>
                            {test.tests?.map((t: any) =>
                                <Typography sx={{ color: "black" }}>
                                    {t.name}
                                </Typography>
                            )}
                        </Typography>
                    ) :
                        <Typography sx={{ width: '85%', display: "flex", gap: "5px", marginBottom: "10px", fontStyle: "italic", color: "#9c9c9c" }}>
                            Nenhuma prova encontrada. Faça o upload de uma prova para ajudar a comunidade.
                        </Typography>
                    }
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expandedType === '4'} onChange={handleTypeChange('4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        P4
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {testsData[3]?.tests.length !== 0 ? testsData?.map((test) =>
                        <Typography key={test.id} sx={{ width: '85%', display: "flex", gap: "5px", marginBottom: "10px", flexDirection: "column", justifyContent: "space-btween" }}>
                            {test.tests?.map((t: any) =>
                                <Typography sx={{ color: "black" }}>
                                    {t.name}
                                </Typography>
                            )}
                        </Typography>
                    ) :
                        <Typography sx={{ width: '85%', display: "flex", gap: "5px", marginBottom: "10px", fontStyle: "italic", color: "#9c9c9c" }}>
                            Nenhuma prova encontrada. Faça o upload de uma prova para ajudar a comunidade.
                        </Typography>
                    }
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expandedType === '5'} onChange={handleTypeChange('5')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        RECUPERAÇÃO
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {testsData[4]?.tests.length !== 0 ? testsData?.map((test) =>
                        <Typography key={test.id} sx={{ width: '85%', display: "flex", gap: "5px", marginBottom: "10px", flexDirection: "column", justifyContent: "space-btween" }}>
                            {test.tests?.map((t: any) =>
                                <Typography sx={{ color: "black" }}>
                                    {t.name}
                                </Typography>
                            )}
                        </Typography>
                    ) :
                        <Typography sx={{ width: '85%', display: "flex", gap: "5px", marginBottom: "10px", fontStyle: "italic", color: "#9c9c9c" }}>
                            Nenhuma prova encontrada. Faça o upload de uma prova para ajudar a comunidade.
                        </Typography>
                    }
                </AccordionDetails>
            </Accordion>
        </>
    )
}

export {
    TeacherTestsTypes
}