import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";

import { FaCode } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import { SiBuiltbybit } from "react-icons/si";
import { CgGenderMale } from "react-icons/cg";
import { MdLanguage, MdOutlineMailOutline, MdPublic, MdStars, MdWorkOutline } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import { PiTerminalDuotone } from "react-icons/pi";

// Header config
interface IHeader {
    id: string | number,
    navItem: string,
    navLink: string,
}
export const HEADER:IHeader[] = [
    {
        id: 2,
        navItem: "Lokalhost.io",
        navLink: "https://localhost.io",
    },
    {
        id: 3,
        navItem: "Components",
        navLink: "#components",
    },
    {
        id: 4,
        navItem: "Templates",
        navLink: "#templates",
    },
    {
        id: 5,
        navItem: "Designs",
        navLink: "#designs",
    },
]
// social links
interface ISocialLinks {
    id: string | number,
    Icon: React.ElementType,
    social_name: string,
    social_link: string,

}
export const SOCIAL_LINKS:ISocialLinks[] = [
    {
        id: 1, 
        Icon: FaGithub,
        social_name: 'Github',
        social_link: 'https://github.com/Hilal-11'

    },
    {
        id: 1, 
        Icon: FaLinkedin,
        social_name: 'Linkedin',
        social_link: 'https://www.linkedin.com/in/hilal-ab5466347/'
    },
    {
        id: 1, 
        Icon: RiTwitterXLine,
        social_name: 'X',
        social_link: 'X.com'
    },
    {
        id: 1, 
        Icon: FaInstagram,
        social_name: 'Instagram',
        social_link: 'https://x.com/Hilal3884871845'
    },

]

// introduce | about and personal info
export const INTRODUCE = [
    {
        role: "Software Engineer and Senior Frontend Developer",
        Icon: FaCode
    },
    {
        founder: "Founder and creator of @Lokalhost.io",
        Icon: PiTerminalDuotone

    },
        {
        languages: ["English", "Urdu", "Hindi"],
        Icon: MdLanguage,
    },
    {
        availability: "Available for Freelance & Remote Work",
        Icon: MdWorkOutline,
    },

    {
        location: "India Kashmir | kupwara @lolab_valley",
        Icon: SiBuiltbybit

    },
    {
        timezone: "GMT +5:30 (Remote-friendly worldwide)",
        Icon: MdPublic,
    },
    {

        contect: '+91 849 197 1794',
        Icon: IoMdContact

    },
    {
        email: "hilalahmadcodedev123@gmail.com",
        Icon: CgGenderMale
    },
    {
        gender: "he/him",
        Icon: MdOutlineMailOutline
    },
    {
        placeholder: 'Download Resume',
        resume: "resume.pdf",
        Icon: FiDownload
    },
    {
        placeholder: 'Tech Roles',
        techRoles: ["Frontend Developer", "Design Engineer" ,"Backend Engineer", "Full Stack Developer", "Mobile App Developer", "Data Analyist"]
    },

]

// about yourself

export const ABOUT_MYSELF = {
    heading_1: "I’m a Software Engineer and Senior Frontend Developer with a strong focus on building scalable, production-ready web and mobile applications. I specialize in modern frontend technologies, design systems, and performance-driven UI engineering.",
    heading_2: "I believe great software is built at the intersection of design, performance, and engineering discipline. I value clear communication, thoughtful architecture, and continuous learning.",
    heading_3: "Currently, I’m open to freelance and remote opportunities where I can collaborate with teams to build meaningful, high-impact products.",

    tech_experties: [
        {
            tech_name: "Frontend Developer",
            about: "Frontend Developer with 5+ years of experience crafting scalable, high-performance user interfaces. Expert in React, Next.js, TypeScript, and modern frontend architecture, focused on delivering clean, accessible, and user-centric web experiences.",
            build: [{name: "@Lokalhost.io", link: "https://localhost.io"} , {name: "@dystopian" , link: "https://dystopian.com/"} , {name: "H_11 Codex" , link: "https://github.com/Hilal-11/H_11"}],

        },
        {
            tech_name: "Design Engineer",
            about: "Design Engineer known for pixel-perfect execution and strong attention to detail. Skilled in bridging design and code using Next.js, React, TypeScript, and design systems to build polished, intuitive web and mobile interfaces.",

        },
        {
            tech_name: "Backend Engineer",
            about: "Backend Engineer with solid experience building secure, scalable, and maintainable server-side systems.Proficient in REST APIs, databases, authentication, and real-time systems, focused on performance, reliability, and clean architecture.",

        },
        {
            tech_name: "Full Stack Developer",
            about: "Full Stack Developer with extensive experience delivering end-to-end web applications. Skilled in designing frontend interfaces, building robust backend services, and deploying scalable systems that work seamlessly together.",

        },
        {
            tech_name: "Mobile App Developer",
            about: "Mobile App Developer experienced in building cross-platform applications using React Native. Focused on creating smooth, responsive, and production-ready mobile experiences with shared logic and consistent UI across platforms.",

        },
        {
            tech_name: "Data Analyist",
            about: "Data Analyst with experience transforming raw data into meaningful insights. Skilled in data analysis, visualization, and dashboard creation to support data-driven decisions and product improvements.",

        }

    ]
}


























// Products and projects

// tech roles

// reviews

// github data
    // ✅ https://api.github.com/users/Hilal-11  Get user profile
    // ✅ https://api.github.com/users/Hilal-11/repos  Get all repos
    // ✅ https://api.github.com/repos/Hilal-11/H_11   Get specific repo
    // ✅ https://github-contributions-api.jogruber.de/v4/Hilal-11   // get all contributions
    // ✅ https://github-contributions-api.jogruber.de/v4/Hilal-11?y=2025


// tech stack

// Experiance data config

// Certifications

// components

// templates

// designs

// FAQ's

// CTA