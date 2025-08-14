import { useState, forwardRef, useImperativeHandle } from "react";
import "../styles/ProfileSummary.css";

const ProfileSummary = forwardRef((props, ref) => {
    const [summary, setSummary] = useState(
        "Write a short summary about yourself..."
    );

    useImperativeHandle(ref, () => ({
        getSummary: () => summary
    }));

    const handleSave = () => {
        alert("Profile summary saved!");
    };

    return (
        <div className="profile-summary">
            <h2>Profile Summary</h2>
            <textarea
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                placeholder="Write a short summary about yourself..."
            />
            <button className="save-btn" onClick={handleSave}>
                Save
            </button>
        </div>
    );
});

export default ProfileSummary;
