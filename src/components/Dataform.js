import React, { useState, useContext } from 'react';
import { Button, TextField, Box, Typography, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Delete';
import { DataContext } from "../contexts/DataContext";
import CustomTextField from './CustomTextField';
import axios from 'axios';
import MyButton from './MyButton';
import "../App.css";

const Dataform = () => {
    const { data, setData } = useContext(DataContext);

    const updateJsonFile = async () => {
        try {
            const response = await axios.post('http://localhost:5000/update-json', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log('JSON file updated successfully:', response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // Handlers for "Profile Info" section
    const handleChange = (field, value) => {
        setData((prevData) => ({ ...prevData, [field]: value }));
    };

    // Handlers for "About Me" section
    const handleAboutMeChange = (index, newValue) => {
        setData((prevData) => {
            const updatedAboutMeDesc = [...prevData.aboutme.aboutmedesc];
            updatedAboutMeDesc[index] = newValue;
            return {
                ...prevData,
                aboutme: {
                    ...prevData.aboutme,
                    aboutmedesc: updatedAboutMeDesc,
                },
            };
        });
    };

    const handleAddAboutMe = () => {
        setData((prevData) => ({
            ...prevData,
            aboutme: {
                ...prevData.aboutme,
                aboutmedesc: [...prevData.aboutme.aboutmedesc, 'New description'],
            },
        }));
    };

    const handleRemoveAboutMe = (index) => {
        setData((prevData) => {
            const updatedAboutMeDesc = prevData.aboutme.aboutmedesc.filter(
                (_, i) => i !== index
            );
            return {
                ...prevData,
                aboutme: {
                    ...prevData.aboutme,
                    aboutmedesc: updatedAboutMeDesc,
                },
            };
        });
    };

    // Handlers for "Recent Technologies"
    const handleTechChange = (index, newValue) => {
        setData((prevData) => {
            const updatedTechnologies = [...prevData.aboutme.recenttechnologies];
            updatedTechnologies[index] = newValue;
            return {
                ...prevData,
                aboutme: {
                    ...prevData.aboutme,
                    recenttechnologies: updatedTechnologies,
                },
            };
        });
    };

    const handleAddTech = () => {
        setData((prevData) => ({
            ...prevData,
            aboutme: {
                ...prevData.aboutme,
                recenttechnologies: [
                    ...prevData.aboutme.recenttechnologies,
                    'New Tech',
                ],
            },
        }));
    };

    const handleRemoveTech = (index) => {
        setData((prevData) => {
            const updatedTechnologies = prevData.aboutme.recenttechnologies.filter(
                (_, i) => i !== index
            );
            return {
                ...prevData,
                aboutme: {
                    ...prevData.aboutme,
                    recenttechnologies: updatedTechnologies,
                },
            };
        });
    };

    const handleRemoveProject = (index) => {
        setData((prevData) => {
            const updatedProjects = prevData.projects.filter((_, i) => i !== index);
            return { ...prevData, projects: updatedProjects };
        });
    };



    // Handlers for "Some things i have build" section

    const handleBuiltProjectNameChange = (index, newName) => {
        setData((prevData) => {
            const updatedProjects = [...prevData.built];
            updatedProjects[index] = {
                ...updatedProjects[index],
                name: newName,
            };
            return { ...prevData, built: updatedProjects };
        });
    };

    const handleBuiltProjectDescriptionChange = (index, newDesc) => {
        setData((prevData) => {
            const updatedProjects = [...prevData.built];
            updatedProjects[index] = {
                ...updatedProjects[index],
                desc: newDesc,
            };
            return { ...prevData, built: updatedProjects };
        });
    };


    const handleAddTechToBuiltProject = (projectIndex) => {
        setData((prevData) => {
            const updatedProjects = [...prevData.built];
            updatedProjects[projectIndex].technologies.push('New Tech');
            return { ...prevData, built: updatedProjects };
        });
    };

    const handleRemoveTechFromBuiltProject = (projectIndex, techIndex) => {
        setData((prevData) => {
            const updatedProjects = [...prevData.built];
            updatedProjects[projectIndex].technologies.splice(techIndex, 1);
            return { ...prevData, built: updatedProjects };
        });
    };

    const handleTechChangeInBuiltProject = (projectIndex, techIndex, newValue) => {
        setData((prevData) => {
            const updatedProjects = [...prevData.built];
            updatedProjects[projectIndex].technologies[techIndex] = newValue;
            return { ...prevData, built: updatedProjects };
        });
    };

    const handleAddBuiltProject = () => {
        setData((prevData) => {
            const newProject = {
                name: 'New Project',
                desc: 'New Project Description',
                technologies: ['Techstack 1'],
                references: [
                    {
                        "ref": "Github",
                        "to": "/"
                    },
                    {
                        "ref": "Github",
                        "to": "/"
                    }
                ]
            };
            return {
                ...prevData,
                built: [...prevData.built, newProject],
            };
        });
    };

    const handleRemoveBuiltProject = (projectIndex) => {
        setData((prevData) => {
            const updatedProjects = [...prevData.built];
            updatedProjects.splice(projectIndex, 1);
            return { ...prevData, built: updatedProjects };
        });
    };




    // Handlers for "Worked" section
    const handleWorkedNameChange = (index, newCompanyName) => {
        setData((prevData) => {
            const updatedWorked = [...prevData.worked];
            updatedWorked[index] = {
                ...updatedWorked[index],
                company: newCompanyName,
            };
            return { ...prevData, worked: updatedWorked };
        });
    };

    const handleWorkedRoleChange = (index, newRole) => {
        setData((prevData) => {
            const updatedWorked = [...prevData.worked];
            updatedWorked[index] = {
                ...updatedWorked[index],
                role: newRole,
            };
            return { ...prevData, worked: updatedWorked };
        });
    };

    const handleWorkedTimeChange = (index, newTime) => {
        setData((prevData) => {
            const updatedWorked = [...prevData.worked];
            updatedWorked[index] = {
                ...updatedWorked[index],
                time: newTime,
            };
            return { ...prevData, worked: updatedWorked };
        });
    };


    const handleAddWorkedtoWorked = (projectIndex) => {
        setData((prevData) => {
            const updatedWork = [...prevData.worked];
            updatedWork[projectIndex].worked.push('Worked on a feature....');
            return { ...prevData, worked: updatedWork };
        });
    };

    const handleWorkedFromWork = (projectIndex, workedIndex) => {
        setData((prevData) => {
            const updatedWorked = [...prevData.worked];
            updatedWorked[projectIndex].worked.splice(workedIndex, 1);
            return { ...prevData, worked: updatedWorked };
        });
    };

    const handleWorkedChangeinWorked = (workedIndex, techIndex, newWorked) => {
        setData((prevData) => {
            const updatedWorked = [...prevData.worked];
            updatedWorked[workedIndex].worked[techIndex] = newWorked;
            return { ...prevData, worked: updatedWorked };
        });
    };



    const handleAddWorked = () => {
        setData((prevData) => {
            const newWorked = {
                company: "GG company",
                role: "SE",
                time: "June 2023 - Present",
                worked: [
                    "Worked on docusaurus,react and played a major role in development of its heavy state based logic requirements.",
                ],
            };
            return {
                ...prevData,
                worked: [...prevData.worked, newWorked],
            };
        });
    };

    const handleRemoveWorked = (workedIndex) => {
        setData((prevData) => {
            const updatedWorked = [...prevData?.worked];
            updatedWorked.splice(workedIndex, 1);
            return { ...prevData, worked: updatedWorked };
        });
    };




    // Handlers for "Projects" section
    const handleProjectNameChange = (index, newName) => {
        setData((prevData) => {
            const updatedProjects = [...prevData.projects];
            updatedProjects[index] = {
                ...updatedProjects[index],
                name: newName,
            };
            return { ...prevData, projects: updatedProjects };
        });
    };

    const handleProjectDescriptionChange = (index, newDesc) => {
        setData((prevData) => {
            const updatedProjects = [...prevData.projects];
            updatedProjects[index] = {
                ...updatedProjects[index],
                desc: newDesc,
            };
            return { ...prevData, projects: updatedProjects };
        });
    };

    const handleAddProject = () => {
        setData((prevData) => {
            const newProject = {
                name: 'New Project',
                desc: 'New Project Description',
                technologies: ['Techstack 1'],
            };
            return {
                ...prevData,
                projects: [...prevData.projects, newProject],
            };
        });
    };

    // Handlers for adding and removing technologies in a project
    const handleAddTechToProject = (projectIndex) => {
        setData((prevData) => {
            const updatedProjects = [...prevData.projects];
            updatedProjects[projectIndex].technologies.push('New Tech');
            return { ...prevData, projects: updatedProjects };
        });
    };

    const handleRemoveTechFromProject = (projectIndex, techIndex) => {
        setData((prevData) => {
            const updatedProjects = [...prevData.projects];
            updatedProjects[projectIndex].technologies.splice(techIndex, 1);
            return { ...prevData, projects: updatedProjects };
        });
    };

    const handleTechChangeInProject = (projectIndex, techIndex, newValue) => {
        setData((prevData) => {
            const updatedProjects = [...prevData.projects];
            updatedProjects[projectIndex].technologies[techIndex] = newValue;
            return { ...prevData, projects: updatedProjects };
        });
    };

    return (
        <Box sx={{ padding: 2, color: 'white' }}>
            <Typography variant="h4" gutterBottom sx={{fontFamily: '"Roboto Mono", monospace' }}>
                Edit Profile
            </Typography>

            {/* Profile Info Section */}
            <Box sx={{ marginBottom: 4 }}>
                <Typography variant="h6" sx={{fontFamily: '"Roboto Mono", monospace' }}>Profile Info</Typography>
                <CustomTextField
                    fullWidth
                    label="Name"
                    value={data.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    sx={{ marginBottom: 2, color: 'white' }}
                />
                <CustomTextField
                    fullWidth
                    label="Description"
                    value={data.desc}
                    onChange={(e) => handleChange('desc', e.target.value)}
                    sx={{ marginBottom: 2 }}
                />
                <CustomTextField
                    fullWidth
                    label="Brief Description"
                    value={data.briefdesc}
                    onChange={(e) => handleChange('briefdesc', e.target.value)}
                    sx={{ marginBottom: 2 }}
                />
                <CustomTextField
                    fullWidth
                    label="Mail"
                    value={data.mail}
                    onChange={(e) => handleChange('mail', e.target.value)}
                />
            </Box>

            {/* About Me Section */}
            <Box sx={{ marginBottom: 4 }}>
                <Typography variant="h6" sx={{fontFamily: '"Roboto Mono", monospace' }}>About Me</Typography>
                {data.aboutme.aboutmedesc.map((desc, index) => (
                    <Box
                        key={index}
                        sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}
                    >
                        <CustomTextField
                            fullWidth
                            label={`Description ${index + 1}`}
                            value={desc}
                            onChange={(e) => handleAboutMeChange(index, e.target.value)}
                            sx={{ marginRight: 2 }}
                        />
                        
                        <IconButton onClick={() => handleRemoveAboutMe(index)}>
                            <RemoveIcon  style={{color:'red'}}/>
                        </IconButton>
                    </Box>
                ))}
                <IconButton onClick={handleAddAboutMe}>
                    <AddIcon/>
                </IconButton>
            </Box>

            {/* Recent Technologies Section */}
            <Box sx={{ marginBottom: 4 }}>
                <Typography variant="h6" sx={{fontFamily: '"Roboto Mono", monospace' }}>Recent Technologies</Typography>
                {data.aboutme.recenttechnologies.map((tech, index) => (
                    <Box
                        key={index}
                        sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}
                    >
                        <CustomTextField
                            fullWidth
                            label={`Technology ${index + 1}`}
                            value={tech}
                            onChange={(e) => handleTechChange(index, e.target.value)}
                            sx={{ marginRight: 2 }}
                        />
                        <IconButton onClick={() => handleRemoveTech(index)}>
                            <RemoveIcon style={{color:'red'}}/>
                        </IconButton>
                    </Box>
                ))}
                        <IconButton onClick={handleAddTech}>
                            <AddIcon style={{color:'grey'}}/>
                        </IconButton>
            </Box>








            {/* Worked Section */}
            <Box sx={{ marginBottom: 4 }}>
                <Typography variant="h6" sx={{fontFamily: '"Roboto Mono", monospace' }}>Worked</Typography>
                {data?.worked?.map((company, projectIndex) => (
                    <Box key={projectIndex} sx={{ marginBottom: 2,border:'1px solid grey',padding:'10px' }}>
                        <CustomTextField
                            fullWidth
                            label="Company Name"
                            value={company?.company}
                            onChange={(e) => handleWorkedNameChange(projectIndex, e.target.value)}
                            sx={{ marginBottom: 2 }}
                        />
                        <CustomTextField
                            fullWidth
                            label="Role"
                            value={company?.role}
                            onChange={(e) => handleWorkedRoleChange(projectIndex, e.target.value)}
                            sx={{ marginBottom: 2 }}
                        />
                        <CustomTextField
                            fullWidth
                            label="Time"
                            value={company?.time}
                            onChange={(e) => handleWorkedTimeChange(projectIndex, e.target.value)}
                            sx={{ marginBottom: 2 }}
                        />

                        {company.worked.map((tech, techIndex) => (
                            <Box key={techIndex} sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                                <CustomTextField
                                    fullWidth
                                    label={`Work ${techIndex + 1}`}
                                    value={tech}
                                    onChange={(e) => handleWorkedChangeinWorked(projectIndex, techIndex, e.target.value)}
                                    sx={{ marginRight: 2 }}
                                />
                                <IconButton onClick={() => handleWorkedFromWork(projectIndex, techIndex)}>
                                    <RemoveIcon style={{color:'red'}}/>
                                </IconButton>
                            </Box>
                        ))}

                        <MyButton  text="Add New Work" clickHandler={() => handleAddWorkedtoWorked(projectIndex)}/>

                        <MyButton text="Remove Work Experience" clickHandler={() => handleRemoveWorked(projectIndex)}/>

                    </Box>
                ))}

                <MyButton big text="Add New Work Experience" clickHandler={handleAddWorked}/>

            </Box>









            {/* Some things i have built Section */}
            <Box sx={{ marginBottom: 4 }}>
                <Typography variant="h6" sx={{fontFamily: '"Roboto Mono", monospace' }}>Built</Typography>
                {data?.built?.map((project, projectIndex) => (
                    <Box key={projectIndex} sx={{ marginBottom: 2 ,border:'1px solid grey'}}>
                        <CustomTextField
                            fullWidth
                            label="Project Name"
                            value={project.name}
                            onChange={(e) => handleBuiltProjectNameChange(projectIndex, e.target.value)}
                            sx={{ marginBottom: 2 }}
                        />
                        <CustomTextField
                            fullWidth
                            label="Project Description"
                            value={project.desc}
                            onChange={(e) => handleBuiltProjectDescriptionChange(projectIndex, e.target.value)}
                            sx={{ marginBottom: 2 }}
                        />

                        {/* Technologies in the project */}
                        <Typography variant="subtitle1" sx={{fontFamily: '"Roboto Mono", monospace' }}>Technologies</Typography>
                        {project.technologies.map((tech, techIndex) => (
                            <Box key={techIndex} sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                                <CustomTextField
                                    fullWidth
                                    label={`Technology ${techIndex + 1}`}
                                    value={tech}
                                    onChange={(e) => handleTechChangeInBuiltProject(projectIndex, techIndex, e.target.value)}
                                    sx={{ marginRight: 2 }}
                                />
                                <IconButton onClick={() => handleRemoveTechFromBuiltProject(projectIndex, techIndex)}>
                                    <RemoveIcon style={{color:'red'}}/>
                                </IconButton>
                            </Box>
                        ))}

                        <MyButton  text="Add New Technology" clickHandler={() => handleAddTechToBuiltProject(projectIndex)}/>
                        <MyButton  text="Remove New Built Project" clickHandler={() => handleRemoveBuiltProject(projectIndex)}/>

                    </Box>
                ))}
                <MyButton big text="Add New Built Project" clickHandler={handleAddBuiltProject}/>

            </Box>
















            {/* Projects Section */}
            <Box sx={{ marginBottom: 4 }}>
                <Typography variant="h6" sx={{fontFamily: '"Roboto Mono", monospace' }}>Other Projects</Typography>
                {data.projects.map((project, projectIndex) => (
                    <Box key={projectIndex} sx={{ marginBottom: 2 ,border:'1px solid grey'}}>
                        <CustomTextField
                            fullWidth
                            label="Project Name"
                            value={project.name}
                            onChange={(e) => handleProjectNameChange(projectIndex, e.target.value)}
                            sx={{ marginBottom: 2 }}
                        />
                        <CustomTextField
                            fullWidth
                            label="Project Description"
                            value={project.desc}
                            onChange={(e) => handleProjectDescriptionChange(projectIndex, e.target.value)}
                            sx={{ marginBottom: 2 }}
                        />

                        {/* Technologies in the project */}
                        <Typography variant="subtitle1" sx={{fontFamily: '"Roboto Mono", monospace' }}>Technologies</Typography>
                        {project.technologies.map((tech, techIndex) => (
                            <Box key={techIndex} sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                                <CustomTextField
                                    fullWidth
                                    label={`Technology ${techIndex + 1}`}
                                    value={tech}
                                    onChange={(e) => handleTechChangeInProject(projectIndex, techIndex, e.target.value)}
                                    sx={{ marginRight: 2 }}
                                />
                                <IconButton onClick={() => handleRemoveTechFromProject(projectIndex, techIndex)}>
                                    <RemoveIcon style={{color:'red'}}/>
                                </IconButton>
                            </Box>
                        ))}

                        <MyButton text="Add Technology" clickHandler={() => handleAddTechToProject(projectIndex)}/>

                        
                        
                    </Box>
                ))}

                <MyButton big text="Add New Project" clickHandler={handleAddProject}/>

            </Box>


            <MyButton big text="SAVE" clickHandler={updateJsonFile}/>


        </Box>
    );
};

export default Dataform;
