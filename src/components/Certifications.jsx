import { useState, forwardRef, useImperativeHandle } from "react";
import "../styles/Certifications.css";

const Certifications = forwardRef((props, ref) => {
    const [certs, setCerts] = useState([{ name: "", issuer: "", year: "" }]);

    useImperativeHandle(ref, () => ({
        getCertifications: () => certs,
    }));

    const handleChange = (index, field, value) => {
        const newList = [...certs];
        newList[index][field] = value;
        setCerts(newList);
    };

    const addCert = () => {
        setCerts([...certs, { name: "", issuer: "", year: "" }]);
    };

    const removeCert = (index) => {
        setCerts(certs.filter((_, i) => i !== index));
    };

    const handleKeyPress = (e, index, field) => {
        if (e.key === "Enter") {
            if (field === "year" && index === certs.length - 1) {
                addCert();
            }
        }
    };

    return (
        <div className="certifications">
            <h2>Certifications</h2>
            <ul>
                {certs.map((cert, index) => (
                    <li key={index} className="cert-entry">
                        <div className="cert-fields">
                            <input
                                type="text"
                                value={cert.name}
                                placeholder="Certification Name"
                                onChange={(e) => handleChange(index, "name", e.target.value)}
                                onKeyPress={(e) => handleKeyPress(e, index, "name")}
                            />
                            <input
                                type="text"
                                value={cert.issuer}
                                placeholder="Issuer"
                                onChange={(e) => handleChange(index, "issuer", e.target.value)}
                                onKeyPress={(e) => handleKeyPress(e, index, "issuer")}
                            />
                            <input
                                type="text"
                                value={cert.year}
                                placeholder="Year"
                                onChange={(e) => handleChange(index, "year", e.target.value)}
                                onKeyPress={(e) => handleKeyPress(e, index, "year")}
                            />
                        </div>
                        <button className="remove-btn" onClick={() => removeCert(index)}>✕</button>
                    </li>
                ))}
            </ul>
            <button className="add-btn" onClick={addCert}>Add Certification</button>
        </div>
    );
});

export default Certifications;
