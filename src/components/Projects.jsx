import { useState, forwardRef, useImperativeHandle } from "react";
import "../styles/Projects.css";

const Projects = forwardRef((props, ref) => {
    const [projects, setProjects] = useState([
        { name: "", description: "" },
    ]);
    const [newProjectName, setNewProjectName] = useState("");
    const [newProjectDesc, setNewProjectDesc] = useState("");

    useImperativeHandle(ref, () => ({
        getProjects: () => projects,
    }));

    const addProject = () => {
        if (newProjectName.trim() !== "" && newProjectDesc.trim() !== "") {
            setProjects([...projects, { name: newProjectName.trim(), description: newProjectDesc.trim() }]);
            setNewProjectName("");
            setNewProjectDesc("");
        }
    };

    const removeProject = (index) => {
        setProjects(projects.filter((_, i) => i !== index));
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") addProject();
    };

    return (
        <div className="projects">
            <h2>Projects</h2>
            <ul>
                {projects.map((proj, index) => (
                    <li key={index}>
                        <div>
                            <strong>{proj.name}</strong>: {proj.description}
                        </div>
                        <button className="remove-btn" onClick={() => removeProject(index)}>✕</button>
                    </li>
                ))}
            </ul>

            <div className="add-project">
                <input
                    type="text"
                    value={newProjectName}
                    onChange={(e) => setNewProjectName(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Project Name"
                />
                <input
                    type="text"
                    value={newProjectDesc}
                    onChange={(e) => setNewProjectDesc(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Project Description"
                />
                <button className="add-btn" onClick={addProject}>Add Project</button>
            </div>
        </div>
    );
});

export default Projects;
