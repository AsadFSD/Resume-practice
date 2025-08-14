import { useState, forwardRef, useImperativeHandle } from "react";
import "../styles/Experience.css";

const Experience = forwardRef((props, ref) => {
    const [experienceList, setExperienceList] = useState([
        { role: "", company: "", year: "" },
    ]);

    useImperativeHandle(ref, () => ({
        getExperience: () => experienceList,
    }));

    const handleChange = (index, field, value) => {
        const newList = [...experienceList];
        newList[index][field] = value;
        setExperienceList(newList);
    };

    const addExperience = () => {
        setExperienceList([...experienceList, { role: "", company: "", year: "" }]);
    };

    const removeExperience = (index) => {
        setExperienceList(experienceList.filter((_, i) => i !== index));
    };

    const handleKeyPress = (e, index, field) => {
        if (e.key === "Enter") {
            if (field === "year" && index === experienceList.length - 1) {
                addExperience();
            }
        }
    };

    return (
        <div className="experience">
            <h2>Experience</h2>
            <ul>
                {experienceList.map((exp, index) => (
                    <li key={index} className="experience-entry">
                        <div className="experience-fields">
                            <input
                                type="text"
                                value={exp.role}
                                onChange={(e) => handleChange(index, "role", e.target.value)}
                                placeholder="Role"
                                onKeyPress={(e) => handleKeyPress(e, index, "role")}
                            />
                            <input
                                type="text"
                                value={exp.company}
                                onChange={(e) => handleChange(index, "company", e.target.value)}
                                placeholder="Company"
                                onKeyPress={(e) => handleKeyPress(e, index, "company")}
                            />
                            <input
                                type="text"
                                value={exp.year}
                                onChange={(e) => handleChange(index, "year", e.target.value)}
                                placeholder="Year"
                                onKeyPress={(e) => handleKeyPress(e, index, "year")}
                            />
                        </div>
                        <button className="remove-btn" onClick={() => removeExperience(index)}>✕</button>
                    </li>
                ))}
            </ul>
            <button className="add-btn" onClick={addExperience}>Add Experience</button>
        </div>
    );
});

export default Experience;
