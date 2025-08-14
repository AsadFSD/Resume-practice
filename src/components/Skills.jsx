import { useState, forwardRef, useImperativeHandle } from "react";
import "../styles/Skills.css";

const Skills = forwardRef((props, ref) => {
    const [skills, setSkills] = useState(["JavaScript", "React", "Node.js"]);
    const [newSkill, setNewSkill] = useState("");

    useImperativeHandle(ref, () => ({
        getSkills: () => skills,
    }));

    const addSkill = () => {
        if (newSkill.trim() !== "") {
            setSkills([...skills, newSkill.trim()]);
            setNewSkill("");
        }
    };

    const removeSkill = (index) => {
        setSkills(skills.filter((_, i) => i !== index));
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            addSkill();
        }
    };

    return (
        <div className="skills">
            <h2>Skills</h2>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>
                        <span>{skill}</span>
                        <button
                            className="remove-btn"
                            onClick={() => removeSkill(index)}
                            aria-label={`Remove ${skill}`}
                        >
                            ✕
                        </button>
                    </li>
                ))}
            </ul>

            <div className="add-skill">
                <input
                    type="text"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Add a skill..."
                />
                <button className="add-btn" onClick={addSkill}>
                    Add
                </button>
            </div>
        </div>
    );
});

export default Skills;
