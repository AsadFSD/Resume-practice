import { useState } from "react";
import '../styles/Experience.css';

export default function Experience(){
    const [exp, setExp] = useState({
        company: '',
        position: '',
        responsibilities : '',
        from: '',
        until: ''
    });

    const  [isEditing, setIsEditing] = useState(true);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setExp({...exp, [name]: value});
    };

    const handleSubmit= () => setIsEditing(false);
    const handleEdit= () => setIsEditing(true);

    return(
        <div className="experience">
            <h2>Experience</h2>
            {isEditing ? (
                <>
                <input name="company" value={exp.company} onChange={handleChange} placeholder="Company"/>
                <input name="position" value={exp.position} onChange={handleChange} placeholder="Position"/>
                <input name="responsibilities" value={exp.responsibilities} onChange={handleChange} placeholder="Main Responsibilities"/>
                <input name="from" value={exp.from} onChange={handleChange} placeholder="From (Date)"/>
                <input name="until" value={exp.until} onChange={handleChange} placeholder="Until (Date)"/>
                <button onClick={handleSubmit}>Submit</button>
                </>
            ):(
                <>
                <p>Company: {exp.company}</p>
                <p>Position: {exp.position}</p>
                <p>Responsibilities: {exp.responsibilities}</p>
                <p>From: {exp.from}</p>
                <p>Until: {exp.until}</p>
                <button onClick={handleEdit}>Edit</button>
                </>
            )}
        </div>
    );
}