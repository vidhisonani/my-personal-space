import { SiHtml5, SiJavascript, SiReact, SiTypescript } from "react-icons/si"

export const projectData = [
    {
        title: "SplitEase - MERN Expense Sharing Platform",
        description: "SplitEase is a full-stack MERN bill-splitting app that eliminates awkward math. Split expenses with friends, track balances, and settle debts — all in one clean interface.",
        video: "/projects/splitease.mp4",
        image: "/projects/splitease.png",
        tags: ["React", "Node.js", "Express", "MongoDB"],
        liveLink: "https://split-ease-by-vidhi.vercel.app",
        githubLink: "https://github.com/vidhisonani/bill-splitter",
    },
    {
        title: "Chef Claude - AI Recipe Generator",
        description: "Full-stack AI recipe generator built with React and Node.js + Express. Generates recipes from ingredients using Groq AI — with secure backend API handling.",
        video: "/projects/chef-claude.mp4",
        image: "/projects/chef-claude.png",
        tags: ["React", "Node.js", "Express", "Groq AI"],
        liveLink: "https://chef-claude-react-five.vercel.app",
        githubLink: "https://github.com/vidhisonani/chef-claude-react"
    },
    {
        title: "Mini Projects",
        description: "A collection of small practice projects across React, HTML, CSS, and JavaScript.",
        tags: ["React", "JavaScript", "TypeScript", "HTML", "CSS3", "TailwindCSS"],
        liveLink: null,
        githubLink: null,
        subProjects: [
            {
                name: "💱 Currency Converter", githubLink: "https://github.com/vidhisonani/mini-react-projects/tree/main/04-currency-converter", liveLink: "https://currency-converter-vidhi.netlify.app/",
                tech: [
                    { icon: SiReact, color: "#61DAFB" },
                    { icon: SiJavascript, color: "#F7DF1E" },
                ],
            },
            {
                name: "🧩 Assembly: Endgame", githubLink: "https://github.com/vidhisonani/mini-react-projects/tree/main/03-assembly-endgame", liveLink: "https://assembly-endgame-vidhi.netlify.app/",
                tech: [
                    { icon: SiReact, color: "#61DAFB" },
                    { icon: SiTypescript, color: "#3178C6" },
                ],
            },
            {
                name: "🎲 Tenzies Game", githubLink: "https://github.com/vidhisonani/mini-react-projects/tree/main/02-tenzies", liveLink: "https://tenzies-game-vidhi.netlify.app/",
                tech: [
                    { icon: SiReact, color: "#61DAFB" },
                    { icon: SiJavascript, color: "#F7DF1E" },
                ],
            },
            {
                name: "😂 Meme Generator", githubLink: "https://github.com/vidhisonani/mini-react-projects/tree/main/01-meme-generator", liveLink: "https://meme-generator-vidhi.netlify.app/",
                tech: [
                    { icon: SiReact, color: "#61DAFB" },
                    { icon: SiJavascript, color: "#F7DF1E" },
                ],
            },
            {
                name: "☕ Coffee Cafe", githubLink: "https://github.com/vidhisonani/mini-react-projects/tree/main/05-coffee-cafe", liveLink: "https://coffee-cafe-by-vidhi.netlify.app/",
                tech: [
                    { icon: SiReact, color: "#61DAFB" },
                    { icon: SiJavascript, color: "#F7DF1E" },
                ],
            },
            {
                name: "🌐 Personal Portfolio", githubLink: "https://github.com/vidhisonani/web-mini-projects/tree/main/07_portfolio", liveLink: "https://portfolio-project-by-vidhi-patel.netlify.app/",
                tech: [
                    { icon: SiHtml5, color: "#E34F26" },
                    { icon: SiJavascript, color: "#F7DF1E" },
                ],
            },
            // {
            //     name: "💖 Heart Trail Animation", githubLink: "https://github.com/vidhisonani/web-mini-projects/tree/main/03-Heart-Trail-Animation", liveLink: "https://hearttrailbyvidhi.netlify.app/",
            //     tech: [
            //         { icon: SiHtml5, color: "#E34F26" },
            //         { icon: SiJavascript, color: "#F7DF1E" },
            //     ],
            // },
            // {
            //     name: "⏰ Digital Clock", githubLink: "https://github.com/vidhisonani/web-mini-projects/tree/main/04-Digital-Clock", liveLink: "https://digitalclockbyvidhi.netlify.app/",
            //     tech: [
            //     { icon: SiHtml5, color: "#E34F26" },
            //     { icon: SiJavascript, color: "#F7DF1E" },
            // ],
            // },
        ],
    },

]