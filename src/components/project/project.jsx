import "./project.css";
import projectList from "./projectList";

const Project = () => {
  return (
    <div className="project">
      {projectList.map((project, index) => (
        <div className="project-details" key={index}>
          <h1>{project.title}</h1>
          <h4>{project.duration}</h4>
          <ul>
            {project.description.map((point, pointIndex) => (
              <li key={pointIndex}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Project;
