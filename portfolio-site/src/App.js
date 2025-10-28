// Example: src/App.js
import React from 'react';
// Import Tailwind CSS via your project's setup
import { FaGithub, FaLinkedin, FaMailBulk, FaJava, FaPython } from 'react-icons/fa';
import { SiJavascript, SiReact, SiSpringboot, SiHtml5, SiCss3, SiMongodb, SiMysql } from 'react-icons/si';

const skills = [
  { icon: <FaPython />, name: "Python" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <FaJava />, name: "Java" },
  { icon: <SiHtml5 />, name: "HTML5" },
  { icon: <SiCss3 />, name: "CSS3" },
  { icon: <SiReact />, name: "React.js" },
  { icon: <SiSpringboot />, name: "Spring Boot" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiMysql />, name: "SQL" }
];

const projects = [
  {
    title: "Smart Fitness Tracker Web App",
    desc: "AI-driven web app for health metrics. Includes workout streak, recommendations, and interactive charts.",
    img: "https://images.unsplash.com/photo-1518609571773-39b7d565f7b9?auto=format&fit=crop&w=600&q=80",
    tech: ["React", "AI", "Chart.js"]
  },
  // ...add more projects as needed
];

export default function App() {
  return (
    <div className="bg-gradient-to-br from-purple-50 via-indigo-200 to-white min-h-screen">
      <nav className="flex justify-between px-12 py-8 shadow-lg bg-white fixed w-full z-20">
        <span className="text-xl font-bold">Aadhikesav A</span>
        <div>
          <a href="#about" className="mx-5 text-indigo-700 hover:underline">About</a>
          <a href="#skills" className="mx-5 text-indigo-700 hover:underline">Skills</a>
          <a href="#projects" className="mx-5 text-indigo-700 hover:underline">Projects</a>
          <a href="#contact" className="mx-5 text-indigo-700 hover:underline">Contact</a>
        </div>
      </nav>

      <section className="pt-36 pb-14 text-center">
        <h1 className="text-4xl font-extrabold text-indigo-800">Aadhikesav A</h1>
        <p className="mt-5 text-xl text-indigo-600">Computer Science Engineer • Zoho CRM Developer • Patent Holder</p>
        <div className="flex justify-center gap-6 mt-5 text-3xl text-indigo-700">
          <a href="mailto:aadhikesav07@gmail.com"><FaMailBulk /></a>
          <a href="https://linkedin.com/in/aadhi-kesav" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/Aadhikesav07" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </div>
      </section>

      <section id="about" className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-10 mb-10">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4">About Me</h2>
        <p>
          Computer Science Engineering undergraduate (2023–2027) at KRCE, Trichy.<br/>
          Developer with Zoho Corp, CRM extensions, automations, AI-powered apps (Deluge, JavaScript, Java). Patent holder. Hackathon winner. Open-source contributor.<br/>
          Languages: Tamil, Telugu, English.<br/>
          CGPA: 8.01
        </p>
      </section>

      <section id="skills" className="max-w-4xl mx-auto px-10 py-5 mb-12">
        <h2 className="text-2xl font-bold text-indigo-700 mb-7 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((s, idx) => (
            <div key={idx} className="flex flex-col gap-1 items-center p-4 rounded-lg bg-indigo-50 shadow-sm hover:bg-indigo-100">
              <span className="text-3xl text-indigo-700">{s.icon}</span>
              <span className="font-semibold text-indigo-900">{s.name}</span>
            </div>
          ))}
        </div>
        <p className="mt-7 text-center text-indigo-800">Currently learning: Azure, DevOps</p>
      </section>

      <section id="projects" className="max-w-5xl mx-auto py-10">
        <h2 className="text-2xl font-bold text-indigo-700 mb-7 text-center">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center hover:scale-105 transition">
              <img src={p.img} alt={p.title} className="rounded-lg w-full h-32 object-cover mb-3"/>
              <h4 className="font-bold text-indigo-700 mb-2">{p.title}</h4>
              <p className="text-center">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {p.tech.map((t,i) => <span key={i} className="px-2 py-1 bg-indigo-200 rounded-full">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-10 my-16">
        <h2 className="text-2xl font-bold text-indigo-700 mb-5">Contact</h2>
        <div className="mb-2"><strong>Phone:</strong> 97900 64592</div>
        <div><strong>Email:</strong> <a href="mailto:aadhikesav07@gmail.com" className="text-indigo-700">aadhikesav07@gmail.com</a></div>
        <div><strong>GitHub:</strong> <a href="https://github.com/Aadhikesav07" className="text-indigo-700">Aadhikesav07</a></div>
        <div><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/aadhi-kesav" className="text-indigo-700">aadhi-kesav</a></div>
      </section>
    </div>
  );
}    
