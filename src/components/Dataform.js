import React, { useState,useContext } from 'react';
import { Button, TextField, Box, Typography, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { DataContext } from "../contexts/DataContext";

const Dataform = () => {
const {data,setData}=useContext(DataContext);
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
        recenttechnologies: [...prevData.aboutme.recenttechnologies, 'New Tech'],
      },
    }));
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

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Edit Profile
      </Typography>

      {/* Profile Info Section */}
      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h6">Profile Info</Typography>
        <TextField
          fullWidth
          label="Name"
          value={data.name}
          onChange={(e) => handleChange('name', e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          fullWidth
          label="Description"
          value={data.desc}
          onChange={(e) => handleChange('desc', e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          fullWidth
          label="Brief Description"
          value={data.briefdesc}
          onChange={(e) => handleChange('briefdesc', e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <TextField
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
          <Box key={index} sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
            <TextField
              fullWidth
              label={`Description ${index + 1}`}
              value={desc}
              onChange={(e) => handleAboutMeChange(index, e.target.value)}
              sx={{ marginRight: 2 }}
            />
            <IconButton onClick={handleAddAboutMe}>
              <AddIcon />
            </IconButton>
          </Box>
        ))}
      </Box>

      {/* Recent Technologies Section */}
      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h6">Recent Technologies</Typography>
        {data.aboutme.recenttechnologies.map((tech, index) => (
          <Box key={index} sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
            <TextField
              fullWidth
              label={`Technology ${index + 1}`}
              value={tech}
              onChange={(e) => handleTechChange(index, e.target.value)}
              sx={{ marginRight: 2 }}
            />
            <IconButton onClick={handleAddTech}>
              <AddIcon />
            </IconButton>
          </Box>
        ))}
      </Box>

      {/* Projects Section */}
      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h6">Projects</Typography>
        {data.projects.map((project, index) => (
          <Box key={index} sx={{ marginBottom: 2 }}>
            <TextField
              fullWidth
              label="Project Name"
              value={project.name}
              onChange={(e) => handleProjectNameChange(index, e.target.value)}
              sx={{ marginBottom: 2 }}
            />
            <TextField
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
