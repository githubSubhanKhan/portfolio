import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { FaReact, FaNodeJs, FaJs, FaPython, FaBootstrap, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiMui } from "react-icons/si";
import { TbCircleLetterC } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";


type Project = {
    id: number;
    title: string;
    description: string;
    languages: string[];
    icon: React.ReactNode[];
    url: string;
};

const getLanguageIcon = (language: string) => {
    switch (language) {
        case "TypeScript":
            return <SiTypescript className="h-5 w-5 text-[#3178c6]" />;
        case "React":
            return <FaReact className="h-5 w-5 text-[#61dafb]" />;
        case "C":
            return <TbCircleLetterC className="h-5 w-5 text-[#00599C]" />;
        case "Node.js":
            return <FaNodeJs className="h-5 w-5 text-[#339933]" />;
        case "Tailwind CSS":
            return <SiTailwindcss className="h-5 w-5 text-[#06B6D4]" />;
        case "Python":
            return <FaPython className="h-5 w-5 text-[#3776AB]" />;
        case "Material UI":
            return <SiMui className="h-5 w-5 text-[#007FFF]" />;
        default:
            return <Github className="h-5 w-5" />;
    }
};

const projects: Project[] = [
    {
        id: 1,
        title: "NextBook",
        description: "A next-gen AI recommendation system uses LLMs, NLP, and RAG for smart, context-aware, and personalized suggestions.",
        languages: ["TypeScript", "React", "Python", "Tailwind CSS"],
        icon: [
            getLanguageIcon("TypeScript"),
            getLanguageIcon("React"),
            getLanguageIcon("Python"),
            getLanguageIcon("Tailwind CSS"),
        ],
        url: "https://next-book-eakl.vercel.app/",
    },
    {
        id: 2,
        title: "SolveSenseAI",
        description: "An AI-powered full-stack chatbot that solves advanced queries in seconds via APIs, with secure authentication and chat history saving.",
        languages: ["Node.js", "React", "Material UI"],
        icon: [
            getLanguageIcon("Node.js"),
            getLanguageIcon("React"),
            getLanguageIcon("Material UI"),
        ],
        url: "https://solve-sense-ai.vercel.app/",
    },
    {
        id: 3,
        title: "Portfolio Website",
        description: "A fully responsive website built with advanced UI frameworks to showcase my journey, projects, and certifications from start to present.",
        languages: ["React", "Tailwind CSS"],
        icon: [
            getLanguageIcon("React"),
            getLanguageIcon("Tailwind CSS"),
        ],
        url: "/projects/ecommerce",
    },
    {
        id: 4,
        title: "Word Searching Game",
        description: "A fun mind game with multiple genres and a score-ranking system to create a competitive and engaging experience.",
        languages: ["C"],
        icon: [
            getLanguageIcon("C"),
        ],
        url: "https://github.com/githubSubhanKhan/Word-Searching-Game",
    },
];

const Projects = () => {
    const handleViewMore = () => {
        window.open("https://github.com/githubSubhanKhan?tab=repositories", "_blank");
    };

    return (
        <section className="w-full py-8 md:py-8" id="projects">
            <div className="container px-4 md:px-8 mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative text-primary">
                    <span className="inline-block relative z-10">
                        Projects
                    </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            whileHover={{ y: -8, transition: { duration: 0.2 } }}
                            className="h-full"
                        >
                            <Card className="h-full bg-bluecustom border-[2px] border-black text-primary rounded-[8px] overflow-hidden relative group shadow-md">

                                <CardHeader className="pb-2 text-black">
                                    <h3 className="text-xl font-bold">{project.title}</h3>
                                </CardHeader>

                                <CardContent className="pb-2">
                                    <p className="text-black">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mt-4 mb-4">
                                        {project.languages.map((lang, index) => (
                                            <Badge
                                                key={index}
                                                className="bg-transparent text-black border border-black flex items-center gap-2 px-2 py-1 hover:scale-105 transition-all duration-300 cursor-pointer"
                                            >
                                                {getLanguageIcon(lang)}
                                                <span>{lang}</span>
                                            </Badge>
                                        ))}
                                    </div>

                                </CardContent>

                                <CardFooter>
                                    <Button
                                        asChild
                                        className="w-full hover:bg-transparent hover:text-black hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 py-5"
                                    >
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            View Project <ExternalLink className="h-4 w-4" />
                                        </a>
                                    </Button>
                                </CardFooter>

                            </Card>

                        </motion.div>
                    ))}
                </div>
                <div className="mt-12 flex justify-center">
                    <Button
                        className="text-white hover:bg-transparent hover:text-black hover:scale-105 transition-all duration-300 px-6 py-3 gap-2"
                        onClick={handleViewMore}
                    >
                        View More Projects <ExternalLink className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Projects;
