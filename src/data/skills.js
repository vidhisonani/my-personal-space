import {
    SiC,
    SiJavascript,
    SiPython,
    SiMysql,
    SiHtml5,
    SiReact,
    SiTailwindcss,
    SiWordpress,
    SiGit,
    SiGithub,

} from "react-icons/si";
import { VscVscode } from "react-icons/vsc"
import { FaJava, FaCode, FaGlobe, FaTools, FaBrain, FaBook, FaStar, FaCss3Alt } from "react-icons/fa";
export const skillsData = [
    {
        title: "Languages",
        cardIcon: FaCode,
        type: "icons", // use tech logo icons
        skills: [
            { name: "C", icon: SiC, color: "#A8B9CC" },
            { name: "Java", icon: FaJava, color: "#EA2D2E" },
            { name: "Python", icon: SiPython, color: "#3776AB" },
            { name: "JavaScript", icon: SiJavascript, color: "#F0DB4F" },
        ],
    },
    {
        title: "Web Development",
        cardIcon: FaGlobe,
        type: "icons",
        skills: [
            { name: "HTML", icon: SiHtml5, color: "#E44D26" },
            { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
            { name: "JavaScript", icon: SiJavascript, color: "#F0DB4F" },
            { name: "React", icon: SiReact, color: "#61DAFB" },
            { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
            { name: "WordPress", icon: SiWordpress, color: "#21759B" },
        ],
    },
    {
        title: "Development Tools",
        cardIcon: FaTools,
        type: "icons",
        skills: [
            { name: "VS Code", icon: VscVscode, color: "#007ACC" },
            { name: "Git", icon: SiGit, color: "#F34F29" },
            { name: "GitHub", icon: SiGithub, color: null },
        ],
    },
    {
        title: "Other Skills",
        cardIcon: FaBrain,
        type: "pills",
        colors: ["bg-pink-500/15 text-pink-400 border-pink-400/30", "bg-blue-500/15 text-blue-400 border-blue-400/30", "bg-green-500/15 text-green-400 border-green-400/30", "bg-yellow-500/15 text-yellow-400 border-yellow-400/30"],
        skills: ["Problem Solving", "Logical Thinking", "Team Collaboration", "Communication"],
    },
    {
        title: "Core Subjects",
        cardIcon: FaBook,
        type: "pills",
        colors: ["bg-violet/15 text-violet-light border-violet/30", "bg-cyan-500/15 text-cyan-400 border-cyan-400/30", "bg-orange-500/15 text-orange-400 border-orange-400/30", "bg-rose-500/15 text-rose-400 border-rose-400/30"],
        skills: ["Data Structures", "Algorithms", "OOP", "DBMS", "Operating Systems", "Software Engineering", "Computer Networks"],
    },
    {
        title: "Interest",
        cardIcon: FaStar,
        type: "pills",
        colors: ["bg-teal-500/15 text-teal-400 border-teal-400/30", "bg-purple-500/15 text-purple-400 border-purple-400/30", "bg-amber-500/15 text-amber-400 border-amber-400/30", "bg-indigo-500/15 text-indigo-400 border-indigo-400/30"],
        skills: ["Web Development", "UI Design", "Open Source", "Tech Blogs"],
    },
];