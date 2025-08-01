import { useState } from "react";
import '../styles/Education.css';

export default function Education(){
    const [edu, setEdu] = useState ({school: '', title: '', date: ''});
    const [isEditing, setIsEditing] = useState(true);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setEdu({...edu, [name]: value});
    };

    const handleSubmit = () => setIsEditing(false);
    const handleEdit = () => setIsEditing(true);

    return (
        <div className="education">
            <h2>Education</h2>
            {isEditing ? (
                <>
                <input name="school" value={edu.school} onChange={handleChange} placeholder="School"/>
                <input name="title"  value={edu.title} onChange={handleChange} placeholder="Title"/>
                <input name="date" value={edu.date} onChange={handleChange} placeholder="Date" />
                <button onClick={handleSubmit}>Submit</button>
                </>
            ): (
                <>
                <p>School: {edu.school}</p>
                <p>Title: {edu.title}</p>
                <p>Date: {edu.date}</p>
                <button onClick={handleEdit}>Edit</button>
                </>
            )}
        </div>
    )
}