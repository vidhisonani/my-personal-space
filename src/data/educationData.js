import { FaGraduationCap, FaBookOpen, FaSchool } from "react-icons/fa";

export const educationData = [
    {   
        period: "2023-2027",
        icon: FaGraduationCap,
        degree: "Bachelor of Engineering in Computer Engineering",
        institution: "L.D. College of Engineering, Ahmedabad",
        description: "Building a strong foundation in data structures, algorithms, and software engineering, while working on real-world full-stack projects alongside coursework.",
        result: "8.82 (Till Sem 6)",
        side: "left"
    },
    {
        period: "2022-2023",
        icon: FaBookOpen,
        degree: "Class 12",
        institution: "SPSV HighSchool, Maninagar",
        description: "Completed higher secondary education in the PCM stream, developing strong analytical and problem-solving skills in physics, chemistry, and mathematics.",
        result: "97.48 Pr",
        extra: {label: "Gujcet", score: "105.5 / 120", percentile:"98.95 Pr"},
        side: "right"
    },
    {
        period: "2020-2021",
        icon: FaSchool,
        degree: "Class 10",
        institution: "Jay Somnath HighSchool, Maninagar",
        description: "Built a solid academic foundation across core subjects, with a particular strength in mathematics and science.",
        result: "99.62 Pr",
        side: "left"
    },
]