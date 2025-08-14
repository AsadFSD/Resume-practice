import jsPDF from "jspdf";

import ProfileSummary from "./ProfileSummary";
import GeneralInfo from "./GeneralInfo";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Certifications from "./Certifications";
import Awards from "./Awards";

export default function CVForm({
  profileData = {},
  generalInfoData = {},
  educationData = [],
  experienceData = [],
  skillsData = [],
  projectsData = [],
  certificationsData = [],
  awardsData = [],
}) {
  const handleSavePDF = () => {
    const pdf = new jsPDF("p", "mm", "a4");
    let y = 20;

    pdf.setFontSize(22);
    pdf.text("My CV", 105, y, { align: "center" });
    y += 15;

    // Profile Summary
    pdf.setFontSize(16);
    pdf.text("Profile Summary", 20, y);
    y += 8;
    pdf.setFontSize(12);
    pdf.text(profileData.summary || "No summary provided", 20, y, { maxWidth: 170 });
    y += 25;

    // General Info
    pdf.setFontSize(16);
    pdf.text("General Information", 20, y);
    y += 8;
    pdf.setFontSize(12);
    Object.entries(generalInfoData).forEach(([key, value]) => {
      pdf.text(`${key}: ${value || "-"}`, 20, y);
      y += 8;
    });
    y += 10;

    // Education
    pdf.setFontSize(16);
    pdf.text("Education", 20, y);
    y += 8;
    pdf.setFontSize(12);
    educationData.forEach((edu) => {
      pdf.text(`${edu.degree || "-"} at ${edu.institution || "-"} (${edu.year || "-"})`, 20, y);
      y += 8;
    });
    y += 10;

    // Experience
    pdf.setFontSize(16);
    pdf.text("Experience", 20, y);
    y += 8;
    pdf.setFontSize(12);
    experienceData.forEach((exp) => {
      pdf.text(`${exp.role || "-"} at ${exp.company || "-"} (${exp.year || "-"})`, 20, y);
      y += 8;
    });
    y += 10;

    // Skills
    pdf.setFontSize(16);
    pdf.text("Skills", 20, y);
    y += 8;
    pdf.setFontSize(12);
    pdf.text((skillsData.length ? skillsData.join(", ") : "No skills added"), 20, y);
    y += 15;

    // Projects
    pdf.setFontSize(16);
    pdf.text("Projects", 20, y);
    y += 8;
    pdf.setFontSize(12);
    projectsData.forEach((proj) => {
      pdf.text(`${proj.name || "-"}: ${proj.description || "-"}`, 20, y, { maxWidth: 170 });
      y += 8;
    });
    y += 10;

    // Certifications
    pdf.setFontSize(16);
    pdf.text("Certifications", 20, y);
    y += 8;
    pdf.setFontSize(12);
    certificationsData.forEach((cert) => {
      pdf.text(`${cert.name || "-"} (${cert.year || "-"})`, 20, y);
      y += 8;
    });
    y += 10;

    // Awards
    pdf.setFontSize(16);
    pdf.text("Awards", 20, y);
    y += 8;
    pdf.setFontSize(12);
    awardsData.forEach((award) => {
      pdf.text(`${award.title || "-"} (${award.year || "-"})`, 20, y);
      y += 8;
    });

    pdf.save("My_CV.pdf");
  };

  return (
    <div>
      <button
        className="pdf-button"
        onClick={handleSavePDF}
      >
        Save as PDF
      </button>

      <div className="cv-container">
        <h1>My CV Preview</h1>
        <ProfileSummary />
        <GeneralInfo />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Awards />
      </div>
    </div>
  );
}
