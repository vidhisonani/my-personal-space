import {
    SiC,
    SiJavascript,
    SiPython,
    SiHtml5,
    SiReact,
    SiTailwindcss,
    SiGit,
    SiGithub,
    SiNodedotjs,
    SiExpress,
    SiVercel,
    SiPostman,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc"
import { FaJava, FaCode, FaGlobe, FaTools, FaCss3Alt } from "react-icons/fa";

export const skillsData = [
    {
        title: "Languages",
        cardIcon: FaCode,
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
        skills: [
            { name: "HTML", icon: SiHtml5, color: "#E44D26" },
            { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
            { name: "JavaScript", icon: SiJavascript, color: "#F0DB4F" },
            { name: "React", icon: SiReact, color: "#61DAFB" },
            { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
            { name: "Node.js", icon: SiNodedotjs, color: "#68A063" },
            { name: "Express", icon: SiExpress, color: null },
        ],
    },
    {
        title: "Development Tools",
        cardIcon: FaTools,
        skills: [
            { name: "VS Code", icon: VscVscode, color: "#007ACC" },
            { name: "Git", icon: SiGit, color: "#F34F29" },
            { name: "GitHub", icon: SiGithub, color: null },
            { name: "Vercel", icon: SiVercel, color: null },
            { name: "Postman", icon: SiPostman, color: "#FF6C37" },
        ],
    },
];