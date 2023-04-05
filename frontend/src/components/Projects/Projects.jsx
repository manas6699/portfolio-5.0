import React from "react";

import { Button, Typography } from "@mui/material";
import "./Project.css";
// import { AiOutlineProject } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
// import { FaRegSmileWink } from "react-icons/fa";
import "./Project.css";
import { useDispatch } from "react-redux";
import { deleteProject, getUser } from "../../actions/user";

export const ProjectCard = ({
  url,
  projectImage,
  projectTitle,
  description,
  technologies,
  isAdmin = false,
  id,
}) => {
  const dispatch = useDispatch();

  const deleteHandler = async (id) => {
    await dispatch(deleteProject(id));
    dispatch(getUser());
  };
  return (
    <>
      <a href={url} className="projectCard" target="black">
        <div>
          <img src={projectImage} alt="Project" />
          <Typography variant="h5">{projectTitle}</Typography>
        </div>
        <div>
          <Typography variant="h4"> About Project</Typography>
          <Typography>{description}</Typography>
          <Typography variant="h6">Tech Stack: {technologies}</Typography>
        </div>
      </a>

      {isAdmin && (
        <Button
          style={{
            color: "rgba(255,0,0)",
            fontSize: "large",
            margin: "auto",
            display: "block",
          }}
          onClick={() => deleteHandler(id)}
        >
          <AiOutlineDelete />
        </Button>
      )}
    </>
  );
};
const Projects = ({ projects }) => {
  return (
    <div className="projects">
      <Typography variant="h3">MY PROJECTS</Typography>

      <div className="projectsWrapper">
        {projects.map((item) => (
          <ProjectCard
            id={item._id}
            key={item._id}
            url={item.url}
            projectImage={item.image.url}
            projectTitle={item.title}
            description={item.description}
            technologies={item.techStack}
          />
        ))}
      </div>

      <div className="buttonholder">
        <a href="/">
        <Button variant="contained">Return To Home 🏠</Button>
        </a>
      </div>
    </div>
  );
};

export default Projects;
