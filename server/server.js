const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors'); // Import the cors package
const app = express();
const port = 5000;

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

// Path to your local JSON file
const jsonFilePath = path.join(__dirname, '../src/data.json');

// Endpoint to update the JSON file
app.post('/update-json', (req, res) => {
    const newData = req.body; // The new JSON data sent from the client

    // Write the new data directly to the JSON file (replacing the existing content)
    fs.writeFile(jsonFilePath, JSON.stringify(newData, null, 2), 'utf8', (err) => {
        if (err) {
            console.error('Error writing to the file:', err);
            return res.status(500).json({ message: 'Failed to write to the file' });
        }

        res.json({ message: 'JSON file replaced successfully', updatedData: newData });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
