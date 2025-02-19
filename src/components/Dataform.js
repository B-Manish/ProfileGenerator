import React, { useContext } from "react";
import { DataContext } from '../contexts/DataContext';
import { TextField, Button, Box, Typography } from '@mui/material';

function Dataform() {
    const { data, setData } = useContext(DataContext);

    const handleInputChange = (event, key, subKey, index) => {
        const value = event.target.value;
        setData((prevData) => {
          const updatedData = { ...prevData };
    
          if (subKey) {
            updatedData[key][subKey][index] = value;
          } else {
            updatedData[key] = value;
          }
    
          return updatedData;
        });
      };
    
      const handleArrayInputChange = (event, key, subKey, index) => {
        const value = event.target.value;
        setData((prevData) => {
          const updatedData = { ...prevData };
          updatedData[key][subKey][index] = value;
          return updatedData;
        });
      };

    return (
        <Box>
        {/* Basic Information */}
        <TextField
          fullWidth
          label="Name"
          value={data.name}
          onChange={(e) => handleInputChange(e, 'name')}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Description"
          value={data.desc}
          onChange={(e) => handleInputChange(e, 'desc')}
          margin="normal"
          multiline
        />
        <TextField
          fullWidth
          label="Brief Description"
          value={data.briefdesc}
          onChange={(e) => handleInputChange(e, 'briefdesc')}
          margin="normal"
          multiline
        />
        <TextField
          fullWidth
          label="Email"
          value={data.mail}
          onChange={(e) => handleInputChange(e, 'mail')}
          margin="normal"
          type="email"
        />
  
        {/* About Me Section */}
        <Typography variant="h6" gutterBottom>About Me</Typography>
        {data.aboutme.aboutmedesc.map((desc, index) => (
          <TextField
            key={index}
            fullWidth
            label={`About Me Description ${index + 1}`}
            value={desc}
            onChange={(e) => handleArrayInputChange(e, 'aboutme', 'aboutmedesc', index)}
            margin="normal"
            multiline
          />
        ))}
  
        <Typography variant="h6" gutterBottom>Recent Technologies</Typography>
        {data.aboutme.recenttechnologies.map((tech, index) => (
          <TextField
            key={index}
            fullWidth
            label={`Technology ${index + 1}`}
            value={tech}
            onChange={(e) => handleArrayInputChange(e, 'aboutme', 'recenttechnologies', index)}
            margin="normal"
          />
        ))}
  
        {/* Built Projects */}
        <Typography variant="h6" gutterBottom>Built Projects</Typography>
        {data.built.map((project, index) => (
          <Box key={index} mb={3}>
            <TextField
              fullWidth
              label="Project Name"
              value={project.name}
              onChange={(e) => handleArrayInputChange(e, 'built', 'name', index)}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Project Description"
              value={project.desc}
              onChange={(e) => handleArrayInputChange(e, 'built', 'desc', index)}
              margin="normal"
              multiline
            />
            {project.technologies.map((tech, techIndex) => (
              <TextField
                key={techIndex}
                fullWidth
                label={`Technology ${techIndex + 1}`}
                value={tech}
                onChange={(e) => handleArrayInputChange(e, 'built', 'technologies', techIndex)}
                margin="normal"
              />
            ))}
          </Box>
        ))}
  
        {/* Other Projects */}
        <Typography variant="h6" gutterBottom>Other Projects</Typography>
        {data.projects.map((project, index) => (
          <Box key={index} mb={3}>
            <TextField
              fullWidth
              label="Project Name"
              value={project.name}
              onChange={(e) => handleArrayInputChange(e, 'projects', 'name', index)}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Project Description"
              value={project.desc}
              onChange={(e) => handleArrayInputChange(e, 'projects', 'desc', index)}
              margin="normal"
              multiline
            />
            {project.technologies.map((tech, techIndex) => (
              <TextField
                key={techIndex}
                fullWidth
                label={`Technology ${techIndex + 1}`}
                value={tech}
                onChange={(e) => handleArrayInputChange(e, 'projects', 'technologies', techIndex)}
                margin="normal"
              />
            ))}
          </Box>
        ))}
      </Box>
    );
}

export default Dataform;