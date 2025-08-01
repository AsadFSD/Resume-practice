import { useState } from "react";
import '../styles/GeneralInfo.css';

export default function GeneralInfo(){
    const [info, setInfo] = useState({name: '', email: '', phone: ''});
    const [isEditing, setIsEditing] = useState(true);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInfo({...info, [name]: value});
    };

    const handleSubmit = ()  => setIsEditing(false);
    const handleEdit = () => setIsEditing(true);

    return(
        <div className="general-info">
            <h2>General Information</h2>
            {isEditing ?(
                <>
                <input name="name" value={info.name} onChange={handleChange} placeholder="Name"/>
                <input name="email" value={info.email} onChange={handleChange} placeholder="Email"/>
                <input name="phone" value={info.phone} onChange={handleChange} placeholder="Phone"/>
                <button onClick={handleSubmit}>Submit</button>
                </>
            ):( 
                <>
                <p>Name: {info.name}</p>
                <p>Email: {info.email}</p>
                <p>Phone: {info.phone}</p>
                <button onClick={handleEdit}>Edit</button>
                </>
            )}
        </div>
    )
}
