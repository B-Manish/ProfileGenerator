import React, { useContext } from "react";
import { DataContext } from '../contexts/DataContext';
import { TextField, Button, Box, Typography } from '@mui/material';

function Dataform() {
    const { data, setData } = useContext(DataContext);


    const handleChange = (event, index = null, field = null, subIndex = null) => {
        const { name, value } = event.target;
    
        setData((prev) => {
            let updatedData = { ...prev };
    
            if (field && subIndex !== null) {
                // If we are updating an array field like 'aboutmedesc' or 'recenttechnologies'
                updatedData[field][subIndex] = value;
            } else if (field && index !== null) {
                // If we are updating a field inside 'built' or 'projects' array
                updatedData[field][index] = {
                    ...updatedData[field][index],
                    [name]: value
                };
            } else if (index !== null) {
                // Handle updating nested fields like 'aboutme.aboutmedesc'
                updatedData.aboutme.aboutmedesc[index] = value;
            } else {
                // Handle top-level fields
                updatedData = {
                    ...prev,
                    [name]: value
                };
            }
    
            return updatedData;
        });
    };
    

    return (
        <Box
            component="form"
            sx={{
                color: 'white',
                padding: '20px'
            }}
        >
            <Typography variant="h6">Input Form</Typography>

            {/* Top-Level Fields */}
            <TextField
                label="Name"
                variant="outlined"
                name="name"
                value={data?.name || ''}
                onChange={handleChange}
                fullWidth
            />

            <TextField
                label="Description"
                variant="outlined"
                name="desc"
                value={data?.desc || ''}
                onChange={handleChange}
                fullWidth
            />

            <TextField
                label="Brief Description"
                variant="outlined"
                name="briefdesc"
                value={data?.briefdesc || ''}
                onChange={handleChange}
                fullWidth
            />

            <TextField
                label="Mail"
                variant="outlined"
                name="mail"
                value={data?.mail || ''}
                onChange={handleChange}
                fullWidth
            />

            {/* About Me Section */}
            <Typography variant="h6">About Me</Typography>

            {data?.aboutme?.aboutmedesc?.map((desc, index) => (
                <TextField
                    key={index}
                    label={`About Me Description ${index + 1}`}
                    variant="outlined"
                    value={desc}
                    onChange={(event) => handleChange(event, index)}
                    fullWidth
                />
            ))}

            {data?.aboutme?.recenttechnologies?.map((tech, index) => (
                <TextField
                    key={index}
                    label={`Recent Technology ${index + 1}`}
                    variant="outlined"
                    value={tech}
                    onChange={(event) => handleChange(event, index, 'aboutme.recenttechnologies')}
                    fullWidth
                />
            ))}

            {/* Built Projects */}
            <Typography variant="h6">Built Projects</Typography>

            {data?.built?.map((item, index) => (
                <Box key={index}>
                    <TextField
                        label="Project Name"
                        variant="outlined"
                        name="name"
                        value={item?.name || ''}
                        onChange={(event) => handleChange(event, index, 'built')}
                        fullWidth
                    />

                    <TextField
                        label="Project Description"
                        variant="outlined"
                        name="desc"
                        value={item?.desc || ''}
                        onChange={(event) => handleChange(event, index, 'built')}
                        fullWidth
                    />

                    {item?.technologies?.map((tech, techIndex) => (
                        <TextField
                            key={techIndex}
                            label={`Technology ${techIndex + 1}`}
                            variant="outlined"
                            value={tech}
                            onChange={(event) => handleChange(event, techIndex, `built[${index}].technologies`)}
                            fullWidth
                        />
                    ))}

                    {item?.references?.map((ref, refIndex) => (
                        <TextField
                            key={refIndex}
                            label={`Reference ${refIndex + 1}`}
                            variant="outlined"
                            name="ref"
                            value={ref?.ref || ''}
                            onChange={(event) => handleChange(event, index, 'built')}
                            fullWidth
                        />
                    ))}
                </Box>
            ))}

            {/* Additional Projects */}
            <Typography variant="h6">Additional Projects</Typography>

            {data?.projects?.map((project, index) => (
                <Box key={index}>
                    <TextField
                        label="Project Name"
                        variant="outlined"
                        name="name"
                        value={project?.name || ''}
                        onChange={(event) => handleChange(event, index, 'projects')}
                        fullWidth
                    />

                    <TextField
                        label="Project Description"
                        variant="outlined"
                        name="desc"
                        value={project?.desc || ''}
                        onChange={(event) => handleChange(event, index, 'projects')}
                        fullWidth
                    />

                    {project?.technologies?.map((tech, techIndex) => (
                        <TextField
                            key={techIndex}
                            label={`Technology ${techIndex + 1}`}
                            variant="outlined"
                            value={tech}
                            onChange={(event) => handleChange(event, techIndex, `projects[${index}].technologies`)}
                            fullWidth
                        />
                    ))}
                </Box>
            ))}

            <Button type="submit" variant="contained" color="primary" fullWidth>
                Submit
            </Button>
        </Box>
    );
}

export default Dataform;
