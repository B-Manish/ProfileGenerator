import React, { useState, useContext } from 'react';
import { Button, TextField, Box, Typography, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { DataContext } from "../contexts/DataContext";
import CustomTextField from './CustomTextField';

const Dataform = () => {
    const { data, setData } = useContext(DataContext);



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
            <Typography variant="h4" gutterBottom>
                Edit Profile
            </Typography>

            {/* Profile Info Section */}
            <Box sx={{ marginBottom: 4 }}>
                <Typography variant="h6">Profile Info</Typography>
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
                <Typography variant="h6">About Me</Typography>
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
                        <IconButton onClick={handleAddAboutMe}>
                            <AddIcon />
                        </IconButton>
                        <IconButton onClick={() => handleRemoveAboutMe(index)}>
                            <RemoveIcon />
                        </IconButton>
                    </Box>
                ))}
            </Box>

            {/* Recent Technologies Section */}
            <Box sx={{ marginBottom: 4 }}>
                <Typography variant="h6">Recent Technologies</Typography>
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
                        <IconButton onClick={handleAddTech}>
                            <AddIcon />
                        </IconButton>
                        <IconButton onClick={() => handleRemoveTech(index)}>
                            <RemoveIcon />
                        </IconButton>
                    </Box>
                ))}
            </Box>

            {/* Projects Section */}
            {/* <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h6">Projects</Typography>
        {data.projects.map((project, index) => (
          <Box key={index} sx={{ marginBottom: 2 }}>
            <CustomTextField
              fullWidth
              label="Project Name"
              value={project.name}
              onChange={(e) => handleProjectNameChange(index, e.target.value)}
              sx={{ marginBottom: 2 }}
            />
            <CustomTextField
              fullWidth
              label="Project Description"
              value={project.desc}
              onChange={(e) =>
                setData((prevData) => {
                  const updatedProjects = [...prevData.projects];
                  updatedProjects[index] = {
                    ...updatedProjects[index],
                    desc: e.target.value,
                  };
                  return { ...prevData, projects: updatedProjects };
                })
              }
              sx={{ marginBottom: 2 }}
            />
            <IconButton onClick={() => handleRemoveProject(index)}>
              <RemoveIcon />
            </IconButton>
          </Box>
        ))}
        <Button variant="contained" onClick={handleAddProject}>
          Add New Project
        </Button>
      </Box> */}











            {/* Some things i have built Section */}
            <Box sx={{ marginBottom: 4 }}>
                <Typography variant="h6">Built</Typography>
                {data?.built?.map((project, projectIndex) => (
                    <Box key={projectIndex} sx={{ marginBottom: 2 }}>
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
                        <Typography variant="subtitle1">Technologies</Typography>
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
                                    <RemoveIcon />
                                </IconButton>
                            </Box>
                        ))}
                        <Button
                            variant="outlined"
                            startIcon={<AddIcon />}
                            onClick={() => handleAddTechToBuiltProject(projectIndex)}
                        >
                            Add Technology
                        </Button>

                        <Button variant="contained" onClick={() => handleRemoveBuiltProject(projectIndex)}>
                            Remove New Built Project
                        </Button>
                    </Box>
                ))}
                <Button variant="contained" onClick={handleAddBuiltProject}>
                    Add New Built Project
                </Button>
            </Box>
















            {/* Projects Section */}
            <Box sx={{ marginBottom: 4 }}>
                <Typography variant="h6">Projects</Typography>
                {data.projects.map((project, projectIndex) => (
                    <Box key={projectIndex} sx={{ marginBottom: 2 }}>
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
                        <Typography variant="subtitle1">Technologies</Typography>
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
                                    <RemoveIcon />
                                </IconButton>
                            </Box>
                        ))}
                        <Button
                            variant="outlined"
                            startIcon={<AddIcon />}
                            onClick={() => handleAddTechToProject(projectIndex)}
                        >
                            Add Technology
                        </Button>
                    </Box>
                ))}
                <Button variant="contained" onClick={handleAddProject}>
                    Add New Project
                </Button>
            </Box>
        </Box>
    );
};

export default Dataform;
