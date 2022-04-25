import { Header } from "../components/header"
import { Search } from "../components/search"
import React, { useEffect, useState } from "react";

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import { Container, Collapse, ListItemButton, ListItemText, ListItemIcon } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import GroupIcon from '@mui/icons-material/Group';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { TestsContainer } from "../components/testsContainer";
import { TestsDisciplinesContent } from "../components/testDisciplineContent";
import { getPeriods } from "../services/api";
import useAuth from "../hooks/useAuth";
import { getTeachers } from "../services/api";
import { TeacherTestsTypes } from "../components/teachersTestsTypes";

function Home() {

    const { auth } = useAuth();
    const [openDiscipline, setOpenDiscipline] = useState(false);
    const [openInstructor, setOpenInstructor] = useState(false);
    const [periods, setPeriods] = useState({});
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [teacherId, setTeacherId] = useState<number >(0);
    const [render, setRender] = useState("")
    const [lever, setLever] = useState(false)
    const [teachers, setTeachers] = useState<any[]>([])

    function handleClickDiscipline() {
        setOpenDiscipline(!openDiscipline);
    };

    function handleClickTeachers() {
        setOpenInstructor(!openInstructor);

        const promise = getTeachers(auth);

        promise.then((response) => {
            setTeachers(response.data);
        })
    };

    function handleDisciplinePeriod(e: React.FormEvent, index: number) {
        e.preventDefault();

        setSelectedIndex(index);
        const promise = getPeriods(auth);
        promise.then((response) => {
            setPeriods(response.data)
            setRender("disciplines")
        }).catch(() => {
            console.log('deu ruim')
        })
    }
    
    function handleInstructorTestType(e: React.FormEvent, index: number) {
        e.preventDefault();
        
        setSelectedIndex(index);
        setTeacherId(index);
        setLever(!lever)
        setRender("teacher")
    }


    return (
        <>
            <Header/>
            <Search value="Pesquise por disciplina"/>
            <Container sx={{ width: "100vw", height: "100%", display: "flex", padding: "0px !important"}}>
                <List
                    sx={{ width: '100%', maxWidth: 250, bgcolor: 'background-paper', marginLeft: "10px" }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader sx={{ color: "#3F61D7" }} component="div" id="nested-list-subheader">
                            Menu
                        </ListSubheader>
                    }
                >  
                    <ListItemButton onClick={handleClickDiscipline} >
                        <ListItemIcon>
                            <MenuBookIcon sx={{ color: "#3F61D7"}} />
                        </ListItemIcon>
                        <ListItemText primary="Disciplinas"  />
                        {openDiscipline ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openDiscipline} timeout="auto" unmountOnExit onClick={(e) => handleDisciplinePeriod(e, 0)}>
                        <List component="div" disablePadding sx={{ backgroundColor: `${selectedIndex === 0 ? '#3F61D7' : ''}` }}>
                            <ListItemButton sx={{ pl: 4}} selected={selectedIndex === 0} >
                                <ListItemIcon>
                                    <CalendarMonthIcon sx={{ color: `${selectedIndex === 0 ? '#FFF' : '#3F61D7'}` }}/>
                                </ListItemIcon>
                                <ListItemText sx={{ color: `${selectedIndex === 0 ? '#FFF' : '#000'}` }} primary="Período" />
                            </ListItemButton>
                        </List>
                    </Collapse>

                    <ListItemButton onClick={handleClickTeachers} >
                        <ListItemIcon>
                            <GroupIcon sx={{ color: "#3F61D7" }} />
                        </ListItemIcon>
                        <ListItemText primary="Professores" />
                        {openInstructor ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openInstructor} timeout="auto" unmountOnExit >
                        {teachers?.map((teacher) => 
                            <List key={teacher.id} component="div"  disablePadding sx={{ backgroundColor: `${selectedIndex === teacher.id ? '#3F61D7' : ''}` }}>
                                <ListItemButton sx={{ pl: 4 }} selected={selectedIndex === teacher.id} onClick={(e) => handleInstructorTestType(e, teacher.id)}>
                                    <ListItemIcon>
                                        <AccountBoxIcon sx={{ color: `${selectedIndex === teacher.id ? '#FFF' : '#3F61D7'}` }} />
                                    </ListItemIcon>
                                    <ListItemText sx={{ color: `${selectedIndex === teacher.id ? '#FFF' : '#000'}` }} primary={teacher.name} />
                                </ListItemButton>
                            </List>
                        )}
                        
                    </Collapse>
                </List>
                    {render === "disciplines" ? 
                        <TestsContainer >
                            <TestsDisciplinesContent periods={periods}/>
                        </TestsContainer>
                        : render === "teacher" ?
                        <TestsContainer >
                            <TeacherTestsTypes teacherId={teacherId} lever={lever}/>
                        </TestsContainer> 
                        : ''
                    }

            </Container>

        </>
    )
}

export {
    Home 
}