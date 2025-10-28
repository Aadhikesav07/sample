import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMoon,
  FaSun,
  FaAward,
  FaTrophy,
  FaCertificate,
  FaCalendarAlt,
  FaHandsHelping,
  FaPython,
  FaJava,
  FaCodeBranch,
} from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiSpringboot,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiMysql,
  SiDelicious,
  SiZoho,
} from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

const theme = {
  dark: {
    background: "#0f1424",
    card: "#161b22",
    accent: "#00dfd8",
    accentLight: "#9f70fc",
    text: "#f7f9fc",
    subText: "#7a8196",
    shadow: "rgba(0,223,216,0.3)",
  },
  light: {
    background: "#f5f5f7",
    card: "#e1e5f2",
    accent: "#00b7b7",
    accentLight: "#5dc4c4",
    text: "#181818",
    subText: "#676f8c",
    shadow: "rgba(0,183,183,0.1)",
  },
};

const skills = [
  { icon: <FaPython />, label: "Python" },
  { icon: <SiJavascript />, label: "JavaScript" },
  { icon: <FaJava />, label: "Java" },
  { icon: <SiDelicious />, label: "Deluge" },
  { icon: <SiHtml5 />, label: "HTML" },
  { icon: <SiCss3 />, label: "CSS" },
  { icon: <SiReact />, label: "React.js" },
  { icon: <SiSpringboot />, label: "Spring Boot" },
  { icon: <SiMongodb />, label: "MongoDB" },
  { icon: <SiMysql />, label: "SQL" },
  { icon: <FaCodeBranch />, label: "Git & GitHub" },
  { icon: <SiZoho />, label: "Zoho CRM SDK" },
];

const achievements = [
  {
    icon: <FaAward />,
    title: "Zoho Summer Intern",
    description: "Extension Development in Zoho Marketplace",
  },
  {
    icon: <FaTrophy />,
    title: "3rd Place",
    description: "National Level Hackathon at BIT Erode",
  },
  {
    icon: <FaCertificate />,
    title: "Patent Holder",
    description: "Smart Water Can System (Patent No: 202441088986 A)",
  },
  {
    icon: <FaHandsHelping />,
    title: "Volunteer & Coordinator",
    description: "FunFest’25, QubeIT’24, HexTech’25",
  },
  {
    icon: <FaCertificate />,
    title: "Certifications & Internships",
    description: "Microsoft AI, AI & ML, Data Analytics, NPTEL IoT (77%)",
  },
];

const internships = [
  {
    icon: <FaHandsHelping />,
    title: "Zoho Summer Intern",
    description: "CRM Extension Development in Zoho Marketplace",
  }
  // Add more internships if needed
];

const projects = [
  {
    title: "Smart Fitness Tracker Web App",
    image:
      "https://images.unsplash.com/photo-1518609571773-39b7d565f7b9?auto=format&fit=crop&w=800&q=80",
    tech: "React, AI, Chart.js",
    description:
      "Personalized AI-driven workout and health monitoring web app with interactive charts and recommendations.",
  },
  {
    title: "Water Quality Prediction",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    tech: "Python, Scikit-learn, Streamlit",
    description:
      "Predicts water purity and visualizes contamination metrics with a Streamlit dashboard.",
  },
  {
    title: "Zoho CRM Validator Extension",
    image:
      "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=800&q=80",
    tech: "Zoho CRM SDK, Deluge, JavaScript",
    description:
      "Validates email and phone numbers via APIs integrated into Zoho CRM widget to improve data accuracy.",
  },
  {
    title: "ATM Simulation System",
    image:
      "https://images.unsplash.com/photo-1588776814546-ec7e4e196370?auto=format&fit=crop&w=800&q=80",
    tech: "Java, OOP",
    description:
      "Simulates ATM banking functions: withdrawals, balance check, PIN auth with OOP modular design.",
  },
  // Add more projects here if you want
];

const education = [
  { year: "2023 - 2027", program: "B.E. Computer Science Engineering", school: "K. Ramakrishnan College of Engineering, Trichy" },
];

const certifications = [
  { title: "Microsoft AI, Data Analytics", issuer: "Microsoft" },
  { title: "NPTEL IoT", issuer: "NPTEL", score: "77%" },
];

const patent = {
  title: "Smart Water Can System Patent",
  number: "202441088986 A",
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Portfolio() {
  const [modalProject, setModalProject] = useState(null);
  const [darkMode, setDarkMode] = useState(true);

  const themeColors = darkMode ? theme.dark : theme.light;

  return (
    <div style={{ backgroundColor: themeColors.background, color: themeColors.text, minHeight: "100vh", fontFamily: "'Poppins', sans-serif" }}>
      {/* Navbar */}
      <nav style={{ display: "flex", justifyContent: "space-between", padding: "24px 50px", position: "sticky", top: 0, zIndex: 100, backgroundColor: themeColors.card, boxShadow: "0 5px 20px #0009", alignItems: "center" }}>
        <h1 style={{ color: themeColors.accent, fontWeight: "900" }}>Aadhikesav A</h1>
        <div style={{ display: "flex", gap: 32 }}>
          {["about", "skills", "achievements", "internships", "projects", "education", "certifications", "patents"].map(section => (
            <a key={section} href={`#${section}`} style={{ color: themeColors.text, fontWeight: 600, textDecoration: "none", cursor: "pointer" }}
              onMouseEnter={e => (e.target.style.color = themeColors.accent)}
              onMouseLeave={e => (e.target.style.color = themeColors.text)}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
          <button onClick={() => setDarkMode(!darkMode)} aria-label="Toggle theme" style={{ background: "none", border: "none", cursor: "pointer", fontSize: 24, color: themeColors.accent }}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </nav>

      {/* Introduction */}
      <motion.section variants={fadeUp} initial="hidden" animate="visible" style={{ padding: "80px 20px", textAlign: "center", backgroundColor: themeColors.section, color: themeColors.accent }}>
        <h2 style={{ fontSize: 48, fontWeight: 900 }}>Aadhikesav A</h2>
        <p style={{ fontSize: 20, maxWidth: 600, margin: "15px auto 0" }}>{intro}</p>
        <div style={{ marginTop: 28, fontSize: 34, display: "flex", justifyContent: "center", gap: 36 }}>
          <a href="mailto:aadhikesav07@gmail.com" title="Email"><FaEnvelope color={themeColors.accent} /></a>
          <a href="https://github.com/Aadhikesav07" target="_blank" rel="noreferrer" title="GitHub"><FaGithub color={themeColors.accent} /></a>
          <a href="https://linkedin.com/in/aadhi-kesav" target="_blank" rel="noreferrer" title="LinkedIn"><FaLinkedin color={themeColors.accent} /></a>
          <a href="tel:+919790064592" title="Phone"><FaPhone color={themeColors.accent} /></a>
        </div>
      </motion.section>

      {/* About Section */}
      <section id="about" style={{ maxWidth: 980, margin: "60px auto", padding: "28px 16px", backgroundColor: themeColors.card, borderRadius: 18, boxShadow: `0 0 25px ${themeColors.shadow}`, color: themeColors.text }}>
        <h3 style={{ fontSize: 28, color: themeColors.accent, marginBottom: 22 }}>About Me</h3>
        <p>
          Dedicated and passionate Computer Science Engineering undergraduate with hands-on experience in Zoho ecosystem development, AI-powered automation, and patent creation. Skilled in Java, Python, JavaScript, and CRM platforms.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{ maxWidth: 960, margin: "60px auto", padding: "0 20px", textAlign: "center", color: themeColors.text }}>
        <h3 style={{ fontSize: 28, marginBottom: 36, color: themeColors.accent }}>Skills & Technologies</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))", gap: 26 }}>
          {skills.map(({ icon, label }) => (
            <div key={label} title={label} style={{ backgroundColor: themeColors.background, borderRadius: 14, padding: 16, color: themeColors.accent, fontWeight: 700, fontSize: 16, cursor: "default", userSelect: "none" }}>
              <div style={{ fontSize: 36, marginBottom: 10 }}>{icon}</div>
              {label}
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" style={{ maxWidth: 960, margin: "60px auto", padding: "20px 18px", color: themeColors.text, display: "flex", flexWrap: "wrap", gap: 26, justifyContent: "center" }}>
        {achievements.map(({ icon, title, description }, i) => (
          <div key={i} style={{ backgroundColor: themeColors.card, borderRadius: 24, padding: 26, width: 280, boxShadow: `0 0 25px ${themeColors.shadow}`, textAlign: "center", userSelect: "none", cursor: "default" }}>
            <div style={{ fontSize: 36, color: themeColors.accent, marginBottom: 14 }}>{icon}</div>
            <h4>{title}</h4>
            <p style={{ color: themeColors.subText }}>{description}</p>
          </div>
        ))}
      </section>

      {/* Internships Section */}
      <section id="internships" style={{ maxWidth: 960, margin: "60px auto", padding: "0 22px" }}>
        <h3 style={{ fontSize: 28, textAlign: "center", color: themeColors.accent, marginBottom: 36 }}>Internships</h3>
        <div style={{ display: "flex", gap: 26, flexWrap: "wrap", justifyContent: "center", color: themeColors.text }}>
          {internships.map(({ icon, title, description }, i) => (
            <div key={i} style={{ backgroundColor: themeColors.card, borderRadius: 24, padding: 26, width: 300, boxShadow: `0 0 18px ${themeColors.shadow}`, textAlign: "center" }}>
              <div style={{ fontSize: 36, color: themeColors.accent, marginBottom: 14 }}>{icon}</div>
              <h4>{title}</h4>
              <p style={{ color: themeColors.subText }}>{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ maxWidth: 960, margin: "60px auto", padding: "0 20px 80px", color: themeColors.text }}>
        <h3 style={{ fontSize: 28, marginBottom: 36, textAlign: "center", color: themeColors.accent }}>Projects</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24 }}>
          {projects.map((p, i) => (
            <div key={i} style={{ backgroundColor: themeColors.card, borderRadius: 20, boxShadow: `0 0 22px ${themeColors.shadow}`, padding: 16, cursor: "pointer", display: "flex", flexDirection: "column", color: themeColors.text }}
              onClick={() => setModalProject(p)} onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}>
              <img src={p.image} alt={p.title} style={{ borderRadius: 20, objectFit: "cover", height: 160, marginBottom: 14 }} />
              <h4 style={{ margin: 0, color: themeColors.accent }}>{p.title}</h4>
              <p style={{ fontWeight: 600, fontSize: 15, margin: "8px 0", color: "#78aaff" }}>{p.tech}</p>
              <p style={{ fontSize: 14 }}>{p.short}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modal for Project Details */}
      <AnimatePresence>
        {modalProject && (
          <motion.div key="modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setModalProject(null)} style={{ position: "fixed", inset: 0, backgroundColor: "#000d", zIndex: 99999, display: "flex", justifyContent: "center", alignItems: "center", padding: 20 }}>
            <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }} onClick={e => e.stopPropagation()} style={{ width: "90%", maxWidth: 600, maxHeight: "80vh", overflowY: "auto", backgroundColor: themeColors.card, borderRadius: 24, padding: 28, color: themeColors.text, boxShadow: `0 0 25px ${themeColors.accentLight}`, position: "relative" }}>
              <button onClick={() => setModalProject(null)} aria-label="Close modal" style={{ position: "absolute", top: 20, right: 20, background: "none", border: "none", fontSize: 30, color: themeColors.accentLight, cursor: "pointer" }}>&times;</button>
              <h3>{modalProject.title}</h3>
              <p style={{ fontWeight: 700, color: themeColors.accentLight, marginTop: 18 }}>{modalProject.tech}</p>
              <img src={modalProject.image} alt={modalProject.title} style={{ width: "100%", borderRadius: 24, margin: "30px 0" }} />
              <p style={{ fontSize: 16 }}>{modalProject.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Education Section */}
      <section id="education" style={{ maxWidth: 960, margin: "60px auto" }}>
        <h3 style={{ fontSize: 28, textAlign: "center", color: themeColors.accent, marginBottom: 30 }}>Education</h3>
        {education.map(({ year, program, school }, i) => (
          <div key={i} style={{ marginBottom: 20, textAlign: "center", color: themeColors.text }}>
            <h4 style={{ fontWeight: 700 }}>{year}</h4>
            <p>{program}</p>
            <p style={{ color: themeColors.subText }}>{school}</p>
          </div>
        ))}
      </section>

      {/* Certifications Section */}
      <section id="certifications" style={{ maxWidth: 960, margin: "60px auto", padding: "0 20px 80px" }}>
        <h3 style={{ fontSize: 28, textAlign: "center", color: themeColors.accent, marginBottom: 30 }}>Certifications</h3>
        <ul style={{ listStyleType: "none", paddingLeft: 0, color: themeColors.text, fontSize: 16, maxWidth: 400, margin: "auto" }}>
          {certifications.map(({ title, issuer, score }, i) => (
            <li key={i} style={{ marginBottom: 12 }}>
              <b>{title}</b> {issuer ? `- ${issuer}` : ""} {score ? `(${score})` : ""}
            </li>
          ))}
        </ul>
      </section>

      {/* Patent Section */}
      <section id="patents" style={{ maxWidth: 960, margin: "0 auto 60px", padding: "0 20px" }}>
        <h3 style={{ fontSize: 28, textAlign: "center", color: themeColors.accent, marginBottom: 30 }}>Patent</h3>
        <p style={{ textAlign: "center", color: themeColors.text, fontSize: 18 }}>{patent.title}</p>
        <p style={{ textAlign: "center", color: themeColors.text, fontSize: 16 }}>{patent.number}</p>
      </section>

      <footer style={{ textAlign: "center", padding: 30, borderTop: `1px solid ${themeColors.border}`, color: themeColors.subText }}>
        &copy; 2025 Aadhikesav A. All rights reserved.
      </footer>
    </div>
  );
}
