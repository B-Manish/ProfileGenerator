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
                "name": "Ecommerce website",
                "desc": "Developed a e-commerce website using React, with state management handled via Context API and Redux. Integrated the FakeStore API for product data, implementing features like product listings and shopping cart functionality. This project enhanced my skills in building scalable React applications and managing dynamic state effectively.",
                "technologies": [
                    "React",
                    "Fakestore API",
                    "Context API",
                    "MUI"
                ]
            },
            {
                "name": "Clone of cricbuzz",
                "desc": "Made a clone of cricbuzz where an admin creates a matches and the user can monitor scores on the application.",
                "technologies": [
                    "Angular",
                    ".NET",
                    "Swagger"
                ]
            }
        ]
    });
    return (
        <DataContext.Provider
            value={{
                data,setData
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;