import { Header } from "../components/header"
import { Search } from "../components/search"
import { useState } from "react";

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import { Container, Collapse, ListItemButton, ListItemText, ListItemIcon, Box } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { TestsContainer } from "../components/testsContainer";
import { TestsDisciplinesContent } from "../components/testDisciplineContent";
import { getPeriods } from "../services/api";
import useAuth from "../hooks/useAuth";

function Home() {

    const { auth } = useAuth();
    const [openDiscipline, setOpenDiscipline] = useState(false);
    const [openInstructor, setOpenInstructor] = useState(false);
    const [periods, setPeriods] = useState({});
    const [selectedIndex, setSelectedIndex] = useState(2);
    const [render, setRender] = useState("")

    function handleClickDiscipline() {
        setOpenDiscipline(!openDiscipline);
    };

    function handleClickInstructor() {
        setOpenInstructor(!openInstructor);
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
        console.log('pesquisei por instrutor')
        setRender("instructor")
    }


    return (
        <>
            <Header/>
            <Search value="Pesquise por disciplina"/>
            <Container sx={{ width: "100vw", height: "100%", display: "flex", padding: "0px !important"}}>
                <List
                    sx={{
                        width: '100%', maxWidth: 250, bgcolor: 'background-paper', marginLeft: "10px" }}
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

                    <ListItemButton onClick={handleClickInstructor} >
                        <ListItemIcon>
                            <MenuBookIcon sx={{ color: "#3F61D7" }} />
                        </ListItemIcon>
                        <ListItemText primary="Instrutor" />
                        {openInstructor ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openInstructor} timeout="auto" unmountOnExit onClick={(e) => handleInstructorTestType(e, 1)}>
                        <List component="div" disablePadding sx={{ backgroundColor: `${selectedIndex === 1 ? '#3F61D7' : ''}` }}>
                            <ListItemButton sx={{ pl: 4 }} selected={selectedIndex === 1}>
                                <ListItemIcon>
                                    <CalendarMonthIcon sx={{ color: `${selectedIndex === 1 ? '#FFF' : '#3F61D7'}` }} />
                                </ListItemIcon>
                                <ListItemText sx={{ color: `${selectedIndex === 1 ? '#FFF' : '#000'}` }} primary="Instrutor 1" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                </List>
                    {render === "disciplines" ? 
                <TestsContainer>
                        <TestsDisciplinesContent periods={periods}/>
                </TestsContainer>
                        :
                        ''
                    }

            </Container>

        </>
    )
}

export {
    Home 
}