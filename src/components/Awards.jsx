import { useState, forwardRef, useImperativeHandle } from "react";
import "../styles/Awards.css";

const Awards = forwardRef((props, ref) => {
    const [awards, setAwards] = useState([]); // start with empty array
    const [newTitle, setNewTitle] = useState("");
    const [newIssuer, setNewIssuer] = useState("");
    const [newYear, setNewYear] = useState("");

    useImperativeHandle(ref, () => ({
        getAwards: () => awards,
    }));

    const addAward = () => {
        if (newTitle.trim() && newIssuer.trim() && newYear.trim()) {
            setAwards([
                ...awards, 
                { title: newTitle.trim(), issuer: newIssuer.trim(), year: newYear.trim() }
            ]);
            setNewTitle(""); 
            setNewIssuer(""); 
            setNewYear("");
        }
    };

    const removeAward = (index) => {
        setAwards(awards.filter((_, i) => i !== index));
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") addAward();
    };

    return (
        <div className="awards">
            <h2>Awards</h2>
            <ul>
                {awards.map((award, index) => (
                    <li key={index}>
                        <div>
                            <strong>{award.title}</strong> - {award.issuer} ({award.year})
                        </div>
                        <button className="remove-btn" onClick={() => removeAward(index)}>✕</button>
                    </li>
                ))}
            </ul>

            <div className="add-award">
                <input
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Award Title"
                />
                <input
                    type="text"
                    value={newIssuer}
                    onChange={(e) => setNewIssuer(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Issuer"
                />
                <input
                    type="text"
                    value={newYear}
                    onChange={(e) => setNewYear(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Year"
                />
                <button className="add-btn" onClick={addAward}>Add Award</button>
            </div>
        </div>
    );
});

export default Awards;
