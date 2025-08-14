import { useState, forwardRef, useImperativeHandle } from "react";
import "../styles/Education.css";

const Education = forwardRef((props, ref) => {
    const [educationList, setEducationList] = useState([
        { degree: "", institution: "", year: "" },
    ]);

    useImperativeHandle(ref, () => ({
        getEducation: () => educationList,
    }));

    const handleChange = (index, field, value) => {
        const newList = [...educationList];
        newList[index][field] = value;
        setEducationList(newList);
    };

    const addEducation = () => {
        setEducationList([...educationList, { degree: "", institution: "", year: "" }]);
    };

    const removeEducation = (index) => {
        setEducationList(educationList.filter((_, i) => i !== index));
    };

    const handleKeyPress = (e, index, field) => {
        if (e.key === "Enter") {
            if (field === "year" && index === educationList.length - 1) {
                addEducation();
            }
        }
    };

    return (
        <div className="education">
            <h2>Education</h2>
            <ul>
                {educationList.map((edu, index) => (
                    <li key={index} className="education-entry">
                        <div className="education-fields">
                            <input
                                type="text"
                                value={edu.degree}
                                onChange={(e) => handleChange(index, "degree", e.target.value)}
                                placeholder="Degree"
                                onKeyPress={(e) => handleKeyPress(e, index, "degree")}
                            />
                            <input
                                type="text"
                                value={edu.institution}
                                onChange={(e) => handleChange(index, "institution", e.target.value)}
                                placeholder="Institution"
                                onKeyPress={(e) => handleKeyPress(e, index, "institution")}
                            />
                            <input
                                type="text"
                                value={edu.year}
                                onChange={(e) => handleChange(index, "year", e.target.value)}
                                placeholder="Year"
                                onKeyPress={(e) => handleKeyPress(e, index, "year")}
                            />
                        </div>
                        <button className="remove-btn" onClick={() => removeEducation(index)}>✕</button>
                    </li>
                ))}
            </ul>
            <button className="add-btn" onClick={addEducation}>Add Education</button>
        </div>
    );
});

export default Education;
