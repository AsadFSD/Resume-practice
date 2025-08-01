import GeneralInfo from "./GeneralInfo";
import Education from "./Education";
import Experience from "./Experience";

export default function CVForm(){
    return (
        <div className="cv-container">
            <h1>My CV</h1>
            <GeneralInfo />
            <Education />
            <Experience />
        </div>
    );
}