import React, { createContext, useState, useEffect } from "react";
import placeholder from "../static/placeholder.png";
export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    name: "name",
    desc: "I build things for the web",
    briefdesc: "I’m an engineer specializing in....",
    mail: "mail",
    aboutme: {
      aboutmedesc: ["description1", "description2"],
      recenttechnologies: [
        "React js",
        "Cypress",
        "AWS",
        "Node.js",
        "Python(LLMs)",
        "Three.js",
      ],
      profileimg: placeholder,
    },
    worked: {
      company: "GG company",
      role: "SE",
      time: "June 2023 - Present",
      worked: [
        "Worked on docusaurus,react and played a major role in development of its heavy state based logic requirements.",
      ],
    },
    built: [
      {
        name: "Project Name",
        desc: "Project Description",
        technologies: ["Techstack 1", "Techstack2"],
        references: [
          {
            ref: "Github",
            to: "/",
          },
          {
            ref: "Github",
            to: "/",
          },
        ],
      },
    ],
    projects: [
      {
        name: "Project",
        desc: "Description",
        technologies: ["Tech1", "Tech2"],
      },
    ],
  });
  return (
    <DataContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
