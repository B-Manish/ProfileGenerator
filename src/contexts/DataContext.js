import React, { createContext, useState, useEffect } from "react";
export const DataContext = createContext();

const DataProvider = ({ children }) => {

    const [data, setData] = useState({
        "name": "name",
        "desc": "I build things for the web",
        "briefdesc": "I’m an engineer specializing in....",
        "mail": "mail",
        "aboutme": {
            "aboutmedesc": [
                "description1",
                "description2"
            ],
            "recenttechnologies": [
                "React js",
                "Cypress",
                "AWS",
                "Node.js",
                "Python(LLMs)",
                "Three.js"
            ]
        },
        "built": [
            {
                "name": "Project Name",
                "desc": "Project Description",
                "technologies": [
                    "Techstack 1",
                    "Techstack2"
                ],
                "references": [
                    {
                        "ref": "Github",
                        "to": "/"
                    },
                    {
                        "ref": "Github",
                        "to": "/"
                    }
                ]
            }
        ],
        "projects": [
            {
                "name": "Project",
                "desc": "Description",
                "technologies": [
                    "Tech1",
                    "Tech2"
                ]
            }
        ]
    });
    return (
        <DataContext.Provider
            value={{
                data, setData
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;