import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";
import { getTestsByType } from "../../services/api";
import useAuth from "../../hooks/useAuth";

interface Props {
    disciplineId: number
}

function DisciplineTypes(props: Props) {

    const {auth} = useAuth();
    const [categoriesTests, setCategoriesTests] = useState<any[]>()
    const [expandedTypeDiscipline, setExpandedTypeDiscipline] = useState< string | false >(false);

    const handleTypeChange =
        (categoryTypeId: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpandedTypeDiscipline(isExpanded ? categoryTypeId : false);

            const promise = getTestsByType(auth, props.disciplineId, parseInt(categoryTypeId) );

            promise.then((response) => {
                setCategoriesTests(response.data[0].tests);
            })
        };

    return (
        <>
            <Accordion expanded={expandedTypeDiscipline === '1'} onChange={handleTypeChange('1')}>
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
                    {categoriesTests?.length !== 0 ? categoriesTests?.map((test) =>
                        <Typography key={test.id} sx={{ width: '85%', display: "flex", gap: "5px", marginBottom: "10px" }}>
                            <strong>{test.name}</strong> - 
                            <Typography sx={{ color: "#9c9c9c" }}>
                                ({test.teachersDisciplines.teachers.name})
                            </Typography>
                        </Typography>
                    ) : 
                        <Typography sx={{ width: '85%', display: "flex", gap: "5px", marginBottom: "10px", fontStyle: "italic", color: "#9c9c9c" }}>
                            Nenhuma prova encontrada. Faça o upload de uma prova para ajudar a comunidade.
                        </Typography>
                    } 
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expandedTypeDiscipline === '2'} onChange={handleTypeChange('2')}>
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
                    {categoriesTests?.length !== 0 ? categoriesTests?.map((test) =>
                        <Typography key={test.id} sx={{ width: '85%', display: "flex", gap: "5px", marginBottom: "10px" }}>
                            <strong>{test.name}</strong> -
                            <Typography sx={{ color: "#9c9c9c" }}>
                                ({test.teachersDisciplines.teachers.name})
                            </Typography>
                        </Typography>
                    ) :
                        <Typography sx={{ width: '85%', display: "flex", gap: "5px", marginBottom: "10px", fontStyle: "italic", color: "#9c9c9c" }}>
                            Nenhuma prova encontrada. Faça o upload de uma prova para ajudar a comunidade.
                        </Typography>
                    } 
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expandedTypeDiscipline === '3'} onChange={handleTypeChange('3')}>
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
                    {categoriesTests?.length !== 0 ? categoriesTests?.map((test) =>
                        <Typography key={test.id} sx={{ width: '85%', display: "flex", gap: "5px", marginBottom: "10px" }}>
                            <strong>{test.name}</strong> -
                            <Typography sx={{ color: "#9c9c9c" }}>
                                ({test.teachersDisciplines.teachers.name})
                            </Typography>
                        </Typography>
                    ) :
                        <Typography sx={{ width: '85%', display: "flex", gap: "5px", marginBottom: "10px", fontStyle: "italic", color: "#9c9c9c" }}>
                            Nenhuma prova encontrada. Faça o upload de uma prova para ajudar a comunidade.
                        </Typography>
                    } 
                </AccordionDetails>
            </Accordion>
            
            <Accordion expanded={expandedTypeDiscipline === '4'} onChange={handleTypeChange('4')}>
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
                    {categoriesTests?.length !== 0 ? categoriesTests?.map((test) =>
                        <Typography key={test.id} sx={{ width: '85%', display: "flex", gap: "5px", marginBottom: "10px" }}>
                            <strong>{test.name}</strong> -
                            <Typography sx={{ color: "#9c9c9c" }}>
                                ({test.teachersDisciplines.teachers.name})
                            </Typography>
                        </Typography>
                    ) :
                        <Typography sx={{ width: '85%', display: "flex", gap: "5px", marginBottom: "10px", fontStyle: "italic", color: "#9c9c9c" }}>
                            Nenhuma prova encontrada. Faça o upload de uma prova para ajudar a comunidade.
                        </Typography>
                    } 
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expandedTypeDiscipline === '5'} onChange={handleTypeChange('5')}>
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
                    {categoriesTests?.length !== 0 ? categoriesTests?.map((test) =>
                        <Typography sx={{ width: '85%', display: "flex", gap: "5px", marginBottom: "10px" }}>
                            <strong>{test.name}</strong> -
                            <Typography sx={{ color: "#9c9c9c" }}>
                                ({test.teachersDisciplines.teachers.name})
                            </Typography>
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
    DisciplineTypes
}