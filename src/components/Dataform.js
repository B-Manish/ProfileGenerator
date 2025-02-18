import React, { useContext } from "react";
import { DataContext } from '../contexts/DataContext';
import { TextField, Button, Box, Typography } from '@mui/material';

function Dataform() {
    const { data, setData } = useContext(DataContext);

    // Reusable handleChange function
    const handleChange = (event, index,item) => {
        const { name, value } = event.target;
        // setData((prev) => ({
        //     ...prev,
        //     [name]: value,
        // }));

        setData((prev) => {
            if(item==="built"){
                const updatedBuilt = [...prev.built];  
                updatedBuilt[index] = {                
                    ...updatedBuilt[index],            
                    [name]: value,                    
                };
    
                return {
                    ...prev,
                    built: updatedBuilt,               
                };

            }
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                color: 'white',
                padding: '20px',
                maxWidth: '400px',
                margin: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
            }}
        >
            <Typography variant="h6">Input Form</Typography>

            <TextField
                label="Name"
                variant="outlined"
                name="name"
                value={data?.name || ''}
                onChange={handleChange}
                fullWidth
            />

            {/* Description Field */}
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

            Built


            {data?.built?.map((item, index) => {
                return (
                    <> <TextField
                        label="Project Name"
                        variant="outlined"
                        name="name"
                        value={item?.name || ''}
                        onChange={(event) => handleChange(event, index,"built")}
                        fullWidth

                    /><TextField
                            label="Project Desciption"
                            variant="outlined"
                            name="desc"
                            value={item?.desc || ''}
                            onChange={(event) => handleChange(event, index,"built")}
                            fullWidth

                        /></>
                );
            })}

            {/* Submit Button */}
            <Button type="submit" variant="contained" color="primary" fullWidth>
                Submit
            </Button>
        </Box>
    );
}

export default Dataform;