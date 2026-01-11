import { IconType } from "react-icons";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";

import { FaCode } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import { SiBuiltbybit } from "react-icons/si";
import { CgGenderMale } from "react-icons/cg";
import { MdLanguage, MdOutlineMailOutline, MdPublic, MdStars, MdWorkOutline } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import { PiTerminalDuotone } from "react-icons/pi";

const img1 = '/reviews/wasif.png'
const img2 = '/reviews/faizan.jpg'
const img3 = '/reviews/manan.jpg'
const img4 = '/reviews/sahil.jpg'
const img5 = '/reviews/naveed.jpg'
const img6 = '/reviews/asif.png'
const img7 = '/reviews/abass.png'
const img8 = '/reviews/umer.jpg'
const img9 = '/reviews/linkedin.png'



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
    Icon: IconType,
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
        Icon: FaInstagram,
        social_name: 'Leetcode',
        social_link: 'https://x.com/Hilal3884871845'
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
export interface IntroduceItem {
  option: string;
  Icon: React.ElementType;
  languages?: string[];
  techRoles?: string[];
  resume?: string;
}
export const INTRODUCE:IntroduceItem[] = [
    {
        option: "Software Engineer and Senior Frontend Developer",
        Icon: FaCode
    },
    {
        option: "Founder and creator of @Lokalhost.io",
        Icon: PiTerminalDuotone

    },
   
    {
        option: "Available for Freelance & Remote Work",
        Icon: MdWorkOutline,
    },

    {
        option: "India Kashmir | kupwara @lolab_valley",
        Icon: IoLocation

    },
    {
        option: "GMT +5:30 (Remote-friendly worldwide)",
        Icon: MdPublic,
    },
    {

        option: '+91 849 197 1794',
        Icon: IoMdContact

    },
    {
        option: "hilalahmadcodedev123@gmail.com",
        Icon: MdOutlineMailOutline
    },
    {
        option: "he/him",
        Icon: CgGenderMale
    },
    {
        option: 'Download Resume',
        resume: "resume.pdf",
        Icon: FiDownload
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
            build: [{name: "@Lokalhost.io", link: "https://localhost.io"} , {name: "@dystopian" , link: "https://dystopian.com/"} , {name: "H_11 Codex" , link: "https://github.com/Hilal-11/H_11"}, {name: "@templates", link: "https://localhost.io"}],

        },
        {
            tech_name: "Design Engineer",
            about: "Design Engineer known for pixel-perfect execution and strong attention to detail. Skilled in bridging design and code using Next.js, React, TypeScript, and design systems to build polished, intuitive web and mobile interfaces.",
            build: [{name: "@Lokalhost.io Designs", link: "https://localhost.io.com/designs"}]

        },
        {
            tech_name: "Backend Engineer",
            about: "Backend Engineer with solid experience building secure, scalable, and maintainable server-side systems.Proficient in REST APIs, databases, authentication, and real-time systems, focused on performance, reliability, and clean architecture.",
            build: [{name: "@full-stack kits", link: "https://localhost.io"}, {name: "@templates", link: "https://localhost.io"}, {name: "@auth kits", link: ""}]
        },
        {
            tech_name: "Full Stack Developer",
            about: "Full Stack Developer with extensive experience delivering end-to-end web applications. Skilled in designing frontend interfaces, building robust backend services, and deploying scalable systems that work seamlessly together.",
            build: [{name: "@Lokalhost.io", link: "https://localhost.io"} , {name: "@dystopian" , link: "https://dystopian.com/"} , {name: "H_11 Codex" , link: "https://github.com/Hilal-11/H_11"}, {name: "@templates", link: "https://localhost.io"}, {name: "@auth kits", link: ""} , ],
        },
        {
            tech_name: "Mobile App Developer",
            about: "Mobile App Developer experienced in building cross-platform applications using React Native. Focused on creating smooth, responsive, and production-ready mobile experiences with shared logic and consistent UI across platforms.",
            build: [{name: "@lokalhost.io react-native apps", link: "https://localhost.io"} , {name: "@lokalhost.io apps templates" , link: "https://dystopian.com/"}, {name: "@react-native elements" , link: "https://github.com/Hilal-11/H_11"}]
        },
        {
            tech_name: "Data Analyist",
            about: "Data Analyst with experience transforming raw data into meaningful insights. Skilled in data analysis, visualization, and dashboard creation to support data-driven decisions and product improvements.",
            build: [{name: "@numpy @pandas @plotly", link: "https://localhost.io"}, {name: "@projects", link: "https://localhost.io"}]

        }

    ]
}


// Products and projects

// tech roles

// reviews
export const REVIEWS = [
    {
        id: 1,
        username: "Umer Maqbool",
        profession: "Product Researcher",
        body: "Lokalhost delivers clean, scalable components built for real production use.",
        img: img1
    },
    {
        id: 6,
        username: "Mir Manan",
        profession: "Product Designer",
        body: "A complete ecosystem for building modern, creative digital products.",
        img: img2

    },
    {
        id: 6,
        username: "Mir Manan",
        profession: "Product Designer",
        body: "A complete ecosystem for building modern, creative digital products.",
        img: img3

    },
    {
        id: 2,
        username: "Naveed Lone",
        profession: "Software Developer",
        body: "Beautiful templates with thoughtful design and developer-friendly structure.",
        img: img4
    },
    {
        id: 3,
        username: "Asif Khan",
        profession: "Frontend Developer",
        body: "Components feel polished, flexible, and easy to integrate instantly.",
        img: img5
    },
    {
        id: 4,
        username: "Faizan Elahi",
        profession: "Frontend Engineer",
        body: "Lokalhost combines strong design sense with solid engineering practices.",
        img: img6
    },
    {
        id: 5,
        username: "Sahil Saleem",
        profession: "UI Engineer",
        body: "Pixel-perfect designs that scale beautifully across modern applications.",
        img: img7
    },
    {
        id: 6,
        username: "Abass Khan",
        profession: "Product Designer",
        body: "A complete ecosystem for building modern, creative digital products.",
        img: img8

    },
        {
        id: 6,
        username: "Parvaz Sheikh",
        profession: "Product Designer",
        body: "A complete ecosystem for building modern, creative digital products.",
        img: img9

    }
]

export const CONTRIBUTIONS_GITHUB = {
  total: {
    "2023": 30,
    "2024": 85,
    "2025": 2620,
    "2026": 76
  },
  contributions: [
    {
      "date": "2026-01-01",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-01-02",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-01-03",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-01-04",
      "count": 1,
      "level": 1
    },
    {
      "date": "2026-01-05",
      "count": 1,
      "level": 1
    },
    {
      "date": "2026-01-06",
      "count": 34,
      "level": 4
    },
    {
      "date": "2026-01-07",
      "count": 1,
      "level": 1
    },
    {
      "date": "2026-01-08",
      "count": 24,
      "level": 4
    },
    {
      "date": "2026-01-09",
      "count": 7,
      "level": 4
    },
    {
      "date": "2026-01-10",
      "count": 8,
      "level": 4
    },
    {
      "date": "2026-01-11",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-01-12",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-01-13",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-01-14",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-01-15",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-01-16",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-01-17",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-01-18",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-01-19",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-01-20",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-01-21",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-01-22",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-01-23",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-01-24",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-01-25",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-01-26",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-01-27",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-01-28",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-01-29",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-01-30",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-01-31",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-02-01",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-02-02",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-02-03",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-02-04",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-02-05",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-02-06",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-02-07",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-02-08",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-02-09",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-02-10",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-02-11",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-02-12",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-02-13",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-02-14",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-02-15",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-02-16",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-02-17",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-02-18",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-02-19",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-02-20",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-02-21",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-02-22",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-02-23",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-02-24",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-02-25",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-02-26",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-02-27",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-02-28",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-03-01",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-03-02",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-03-03",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-03-04",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-03-05",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-03-06",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-03-07",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-03-08",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-03-09",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-03-10",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-03-11",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-03-12",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-03-13",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-03-14",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-03-15",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-03-16",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-03-17",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-03-18",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-03-19",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-03-20",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-03-21",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-03-22",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-03-23",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-03-24",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-03-25",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-03-26",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-03-27",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-03-28",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-03-29",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-03-30",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-03-31",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-04-01",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-04-02",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-04-03",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-04-04",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-04-05",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-04-06",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-04-07",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-04-08",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-04-09",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-04-10",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-04-11",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-04-12",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-04-13",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-04-14",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-04-15",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-04-16",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-04-17",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-04-18",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-04-19",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-04-20",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-04-21",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-04-22",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-04-23",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-04-24",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-04-25",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-04-26",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-04-27",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-04-28",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-04-29",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-04-30",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-05-01",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-05-02",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-05-03",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-05-04",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-05-05",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-05-06",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-05-07",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-05-08",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-05-09",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-05-10",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-05-11",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-05-12",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-05-13",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-05-14",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-05-15",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-05-16",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-05-17",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-05-18",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-05-19",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-05-20",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-05-21",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-05-22",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-05-23",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-05-24",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-05-25",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-05-26",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-05-27",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-05-28",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-05-29",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-05-30",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-05-31",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-06-01",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-06-02",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-06-03",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-06-04",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-06-05",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-06-06",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-06-07",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-06-08",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-06-09",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-06-10",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-06-11",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-06-12",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-06-13",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-06-14",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-06-15",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-06-16",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-06-17",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-06-18",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-06-19",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-06-20",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-06-21",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-06-22",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-06-23",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-06-24",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-06-25",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-06-26",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-06-27",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-06-28",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-06-29",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-06-30",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-07-01",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-07-02",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-07-03",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-07-04",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-07-05",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-07-06",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-07-07",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-07-08",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-07-09",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-07-10",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-07-11",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-07-12",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-07-13",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-07-14",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-07-15",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-07-16",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-07-17",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-07-18",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-07-19",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-07-20",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-07-21",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-07-22",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-07-23",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-07-24",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-07-25",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-07-26",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-07-27",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-07-28",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-07-29",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-07-30",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-07-31",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-08-01",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-08-02",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-08-03",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-08-04",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-08-05",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-08-06",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-08-07",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-08-08",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-08-09",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-08-10",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-08-11",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-08-12",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-08-13",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-08-14",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-08-15",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-08-16",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-08-17",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-08-18",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-08-19",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-08-20",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-08-21",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-08-22",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-08-23",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-08-24",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-08-25",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-08-26",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-08-27",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-08-28",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-08-29",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-08-30",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-08-31",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-09-01",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-09-02",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-09-03",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-09-04",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-09-05",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-09-06",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-09-07",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-09-08",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-09-09",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-09-10",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-09-11",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-09-12",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-09-13",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-09-14",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-09-15",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-09-16",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-09-17",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-09-18",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-09-19",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-09-20",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-09-21",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-09-22",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-09-23",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-09-24",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-09-25",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-09-26",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-09-27",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-09-28",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-09-29",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-09-30",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-10-01",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-10-02",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-10-03",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-10-04",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-10-05",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-10-06",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-10-07",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-10-08",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-10-09",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-10-10",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-10-11",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-10-12",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-10-13",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-10-14",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-10-15",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-10-16",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-10-17",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-10-18",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-10-19",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-10-20",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-10-21",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-10-22",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-10-23",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-10-24",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-10-25",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-10-26",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-10-27",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-10-28",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-10-29",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-10-30",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-10-31",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-11-01",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-11-02",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-11-03",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-11-04",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-11-05",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-11-06",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-11-07",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-11-08",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-11-09",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-11-10",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-11-11",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-11-12",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-11-13",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-11-14",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-11-15",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-11-16",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-11-17",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-11-18",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-11-19",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-11-20",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-11-21",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-11-22",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-11-23",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-11-24",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-11-25",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-11-26",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-11-27",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-11-28",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-11-29",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-11-30",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-12-01",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-12-02",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-12-03",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-12-04",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-12-05",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-12-06",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-12-07",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-12-08",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-12-09",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-12-10",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-12-11",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-12-12",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-12-13",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-12-14",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-12-15",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-12-16",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-12-17",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-12-18",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-12-19",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-12-20",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-12-21",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-12-22",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-12-23",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-12-24",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-12-25",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-12-26",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-12-27",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-12-28",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-12-29",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-12-30",
      "count": 0,
      "level": 0
    },
    {
      "date": "2026-12-31",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-01-01",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-01-02",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-01-03",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-01-04",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-01-05",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-01-06",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-01-07",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-01-08",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-01-09",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-01-10",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-01-11",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-01-12",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-01-13",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-01-14",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-01-15",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-01-16",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-01-17",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-01-18",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-01-19",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-01-20",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-01-21",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-01-22",
      "count": 1,
      "level": 1
    },
    {
      "date": "2025-01-23",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-01-24",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-01-25",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-01-26",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-01-27",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-01-28",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-01-29",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-01-30",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-01-31",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-02-01",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-02-02",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-02-03",
      "count": 1,
      "level": 1
    },
    {
      "date": "2025-02-04",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-02-05",
      "count": 1,
      "level": 1
    },
    {
      "date": "2025-02-06",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-02-07",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-02-08",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-02-09",
      "count": 6,
      "level": 1
    },
    {
      "date": "2025-02-10",
      "count": 1,
      "level": 1
    },
    {
      "date": "2025-02-11",
      "count": 4,
      "level": 1
    },
    {
      "date": "2025-02-12",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-02-13",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-02-14",
      "count": 1,
      "level": 1
    },
    {
      "date": "2025-02-15",
      "count": 2,
      "level": 1
    },
    {
      "date": "2025-02-16",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-02-17",
      "count": 2,
      "level": 1
    },
    {
      "date": "2025-02-18",
      "count": 4,
      "level": 1
    },
    {
      "date": "2025-02-19",
      "count": 1,
      "level": 1
    },
    {
      "date": "2025-02-20",
      "count": 2,
      "level": 1
    },
    {
      "date": "2025-02-21",
      "count": 2,
      "level": 1
    },
    {
      "date": "2025-02-22",
      "count": 2,
      "level": 1
    },
    {
      "date": "2025-02-23",
      "count": 1,
      "level": 1
    },
    {
      "date": "2025-02-24",
      "count": 14,
      "level": 1
    },
    {
      "date": "2025-02-25",
      "count": 5,
      "level": 1
    },
    {
      "date": "2025-02-26",
      "count": 10,
      "level": 1
    },
    {
      "date": "2025-02-27",
      "count": 5,
      "level": 1
    },
    {
      "date": "2025-02-28",
      "count": 10,
      "level": 1
    },
    {
      "date": "2025-03-01",
      "count": 2,
      "level": 1
    },
    {
      "date": "2025-03-02",
      "count": 4,
      "level": 1
    },
    {
      "date": "2025-03-03",
      "count": 9,
      "level": 1
    },
    {
      "date": "2025-03-04",
      "count": 21,
      "level": 2
    },
    {
      "date": "2025-03-05",
      "count": 6,
      "level": 1
    },
    {
      "date": "2025-03-06",
      "count": 6,
      "level": 1
    },
    {
      "date": "2025-03-07",
      "count": 15,
      "level": 1
    },
    {
      "date": "2025-03-08",
      "count": 4,
      "level": 1
    },
    {
      "date": "2025-03-09",
      "count": 8,
      "level": 1
    },
    {
      "date": "2025-03-10",
      "count": 10,
      "level": 1
    },
    {
      "date": "2025-03-11",
      "count": 14,
      "level": 1
    },
    {
      "date": "2025-03-12",
      "count": 23,
      "level": 2
    },
    {
      "date": "2025-03-13",
      "count": 9,
      "level": 1
    },
    {
      "date": "2025-03-14",
      "count": 18,
      "level": 1
    },
    {
      "date": "2025-03-15",
      "count": 16,
      "level": 1
    },
    {
      "date": "2025-03-16",
      "count": 15,
      "level": 1
    },
    {
      "date": "2025-03-17",
      "count": 15,
      "level": 1
    },
    {
      "date": "2025-03-18",
      "count": 15,
      "level": 1
    },
    {
      "date": "2025-03-19",
      "count": 24,
      "level": 2
    },
    {
      "date": "2025-03-20",
      "count": 29,
      "level": 2
    },
    {
      "date": "2025-03-21",
      "count": 7,
      "level": 1
    },
    {
      "date": "2025-03-22",
      "count": 35,
      "level": 2
    },
    {
      "date": "2025-03-23",
      "count": 25,
      "level": 2
    },
    {
      "date": "2025-03-24",
      "count": 27,
      "level": 2
    },
    {
      "date": "2025-03-25",
      "count": 15,
      "level": 1
    },
    {
      "date": "2025-03-26",
      "count": 15,
      "level": 1
    },
    {
      "date": "2025-03-27",
      "count": 3,
      "level": 1
    },
    {
      "date": "2025-03-28",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-03-29",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-03-30",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-03-31",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-04-01",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-04-02",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-04-03",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-04-04",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-04-05",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-04-06",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-04-07",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-04-08",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-04-09",
      "count": 10,
      "level": 1
    },
    {
      "date": "2025-04-10",
      "count": 10,
      "level": 1
    },
    {
      "date": "2025-04-11",
      "count": 24,
      "level": 2
    },
    {
      "date": "2025-04-12",
      "count": 23,
      "level": 2
    },
    {
      "date": "2025-04-13",
      "count": 3,
      "level": 1
    },
    {
      "date": "2025-04-14",
      "count": 9,
      "level": 1
    },
    {
      "date": "2025-04-15",
      "count": 6,
      "level": 1
    },
    {
      "date": "2025-04-16",
      "count": 17,
      "level": 1
    },
    {
      "date": "2025-04-17",
      "count": 11,
      "level": 1
    },
    {
      "date": "2025-04-18",
      "count": 5,
      "level": 1
    },
    {
      "date": "2025-04-19",
      "count": 13,
      "level": 1
    },
    {
      "date": "2025-04-20",
      "count": 6,
      "level": 1
    },
    {
      "date": "2025-04-21",
      "count": 4,
      "level": 1
    },
    {
      "date": "2025-04-22",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-04-23",
      "count": 6,
      "level": 1
    },
    {
      "date": "2025-04-24",
      "count": 11,
      "level": 1
    },
    {
      "date": "2025-04-25",
      "count": 21,
      "level": 2
    },
    {
      "date": "2025-04-26",
      "count": 16,
      "level": 1
    },
    {
      "date": "2025-04-27",
      "count": 14,
      "level": 1
    },
    {
      "date": "2025-04-28",
      "count": 24,
      "level": 2
    },
    {
      "date": "2025-04-29",
      "count": 16,
      "level": 1
    },
    {
      "date": "2025-04-30",
      "count": 9,
      "level": 1
    },
    {
      "date": "2025-05-01",
      "count": 8,
      "level": 1
    },
    {
      "date": "2025-05-02",
      "count": 2,
      "level": 1
    },
    {
      "date": "2025-05-03",
      "count": 13,
      "level": 1
    },
    {
      "date": "2025-05-04",
      "count": 4,
      "level": 1
    },
    {
      "date": "2025-05-05",
      "count": 12,
      "level": 1
    },
    {
      "date": "2025-05-06",
      "count": 14,
      "level": 1
    },
    {
      "date": "2025-05-07",
      "count": 13,
      "level": 1
    },
    {
      "date": "2025-05-08",
      "count": 8,
      "level": 1
    },
    {
      "date": "2025-05-09",
      "count": 17,
      "level": 1
    },
    {
      "date": "2025-05-10",
      "count": 10,
      "level": 1
    },
    {
      "date": "2025-05-11",
      "count": 13,
      "level": 1
    },
    {
      "date": "2025-05-12",
      "count": 12,
      "level": 1
    },
    {
      "date": "2025-05-13",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-05-14",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-05-15",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-05-16",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-05-17",
      "count": 6,
      "level": 1
    },
    {
      "date": "2025-05-18",
      "count": 1,
      "level": 1
    },
    {
      "date": "2025-05-19",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-05-20",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-05-21",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-05-22",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-05-23",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-05-24",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-05-25",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-05-26",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-05-27",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-05-28",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-05-29",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-05-30",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-05-31",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-06-01",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-06-02",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-06-03",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-06-04",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-06-05",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-06-06",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-06-07",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-06-08",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-06-09",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-06-10",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-06-11",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-06-12",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-06-13",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-06-14",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-06-15",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-06-16",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-06-17",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-06-18",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-06-19",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-06-20",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-06-21",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-06-22",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-06-23",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-06-24",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-06-25",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-06-26",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-06-27",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-06-28",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-06-29",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-06-30",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-07-01",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-07-02",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-07-03",
      "count": 4,
      "level": 1
    },
    {
      "date": "2025-07-04",
      "count": 10,
      "level": 1
    },
    {
      "date": "2025-07-05",
      "count": 6,
      "level": 1
    },
    {
      "date": "2025-07-06",
      "count": 9,
      "level": 1
    },
    {
      "date": "2025-07-07",
      "count": 9,
      "level": 1
    },
    {
      "date": "2025-07-08",
      "count": 5,
      "level": 1
    },
    {
      "date": "2025-07-09",
      "count": 12,
      "level": 1
    },
    {
      "date": "2025-07-10",
      "count": 2,
      "level": 1
    },
    {
      "date": "2025-07-11",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-07-12",
      "count": 5,
      "level": 1
    },
    {
      "date": "2025-07-13",
      "count": 4,
      "level": 1
    },
    {
      "date": "2025-07-14",
      "count": 1,
      "level": 1
    },
    {
      "date": "2025-07-15",
      "count": 15,
      "level": 1
    },
    {
      "date": "2025-07-16",
      "count": 6,
      "level": 1
    },
    {
      "date": "2025-07-17",
      "count": 8,
      "level": 1
    },
    {
      "date": "2025-07-18",
      "count": 2,
      "level": 1
    },
    {
      "date": "2025-07-19",
      "count": 7,
      "level": 1
    },
    {
      "date": "2025-07-20",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-07-21",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-07-22",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-07-23",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-07-24",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-07-25",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-07-26",
      "count": 3,
      "level": 1
    },
    {
      "date": "2025-07-27",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-07-28",
      "count": 11,
      "level": 1
    },
    {
      "date": "2025-07-29",
      "count": 9,
      "level": 1
    },
    {
      "date": "2025-07-30",
      "count": 10,
      "level": 1
    },
    {
      "date": "2025-07-31",
      "count": 19,
      "level": 2
    },
    {
      "date": "2025-08-01",
      "count": 19,
      "level": 2
    },
    {
      "date": "2025-08-02",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-08-03",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-08-04",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-08-05",
      "count": 10,
      "level": 1
    },
    {
      "date": "2025-08-06",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-08-07",
      "count": 30,
      "level": 2
    },
    {
      "date": "2025-08-08",
      "count": 45,
      "level": 3
    },
    {
      "date": "2025-08-09",
      "count": 28,
      "level": 2
    },
    {
      "date": "2025-08-10",
      "count": 4,
      "level": 1
    },
    {
      "date": "2025-08-11",
      "count": 1,
      "level": 1
    },
    {
      "date": "2025-08-12",
      "count": 18,
      "level": 1
    },
    {
      "date": "2025-08-13",
      "count": 24,
      "level": 2
    },
    {
      "date": "2025-08-14",
      "count": 67,
      "level": 4
    },
    {
      "date": "2025-08-15",
      "count": 57,
      "level": 4
    },
    {
      "date": "2025-08-16",
      "count": 70,
      "level": 4
    },
    {
      "date": "2025-08-17",
      "count": 60,
      "level": 4
    },
    {
      "date": "2025-08-18",
      "count": 8,
      "level": 1
    },
    {
      "date": "2025-08-19",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-08-20",
      "count": 10,
      "level": 1
    },
    {
      "date": "2025-08-21",
      "count": 16,
      "level": 1
    },
    {
      "date": "2025-08-22",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-08-23",
      "count": 13,
      "level": 1
    },
    {
      "date": "2025-08-24",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-08-25",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-08-26",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-08-27",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-08-28",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-08-29",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-08-30",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-08-31",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-09-01",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-09-02",
      "count": 13,
      "level": 1
    },
    {
      "date": "2025-09-03",
      "count": 7,
      "level": 1
    },
    {
      "date": "2025-09-04",
      "count": 10,
      "level": 1
    },
    {
      "date": "2025-09-05",
      "count": 72,
      "level": 4
    },
    {
      "date": "2025-09-06",
      "count": 18,
      "level": 1
    },
    {
      "date": "2025-09-07",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-09-08",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-09-09",
      "count": 2,
      "level": 1
    },
    {
      "date": "2025-09-10",
      "count": 11,
      "level": 1
    },
    {
      "date": "2025-09-11",
      "count": 20,
      "level": 2
    },
    {
      "date": "2025-09-12",
      "count": 12,
      "level": 1
    },
    {
      "date": "2025-09-13",
      "count": 24,
      "level": 2
    },
    {
      "date": "2025-09-14",
      "count": 18,
      "level": 1
    },
    {
      "date": "2025-09-15",
      "count": 21,
      "level": 2
    },
    {
      "date": "2025-09-16",
      "count": 18,
      "level": 1
    },
    {
      "date": "2025-09-17",
      "count": 9,
      "level": 1
    },
    {
      "date": "2025-09-18",
      "count": 2,
      "level": 1
    },
    {
      "date": "2025-09-19",
      "count": 32,
      "level": 2
    },
    {
      "date": "2025-09-20",
      "count": 16,
      "level": 1
    },
    {
      "date": "2025-09-21",
      "count": 9,
      "level": 1
    },
    {
      "date": "2025-09-22",
      "count": 14,
      "level": 1
    },
    {
      "date": "2025-09-23",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-09-24",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-09-25",
      "count": 27,
      "level": 2
    },
    {
      "date": "2025-09-26",
      "count": 2,
      "level": 1
    },
    {
      "date": "2025-09-27",
      "count": 1,
      "level": 1
    },
    {
      "date": "2025-09-28",
      "count": 22,
      "level": 2
    },
    {
      "date": "2025-09-29",
      "count": 5,
      "level": 1
    },
    {
      "date": "2025-09-30",
      "count": 4,
      "level": 1
    },
    {
      "date": "2025-10-01",
      "count": 11,
      "level": 1
    },
    {
      "date": "2025-10-02",
      "count": 8,
      "level": 1
    },
    {
      "date": "2025-10-03",
      "count": 8,
      "level": 1
    },
    {
      "date": "2025-10-04",
      "count": 17,
      "level": 1
    },
    {
      "date": "2025-10-05",
      "count": 21,
      "level": 2
    },
    {
      "date": "2025-10-06",
      "count": 14,
      "level": 1
    },
    {
      "date": "2025-10-07",
      "count": 7,
      "level": 1
    },
    {
      "date": "2025-10-08",
      "count": 4,
      "level": 1
    },
    {
      "date": "2025-10-09",
      "count": 10,
      "level": 1
    },
    {
      "date": "2025-10-10",
      "count": 11,
      "level": 1
    },
    {
      "date": "2025-10-11",
      "count": 8,
      "level": 1
    },
    {
      "date": "2025-10-12",
      "count": 11,
      "level": 1
    },
    {
      "date": "2025-10-13",
      "count": 9,
      "level": 1
    },
    {
      "date": "2025-10-14",
      "count": 2,
      "level": 1
    },
    {
      "date": "2025-10-15",
      "count": 2,
      "level": 1
    },
    {
      "date": "2025-10-16",
      "count": 1,
      "level": 1
    },
    {
      "date": "2025-10-17",
      "count": 3,
      "level": 1
    },
    {
      "date": "2025-10-18",
      "count": 3,
      "level": 1
    },
    {
      "date": "2025-10-19",
      "count": 74,
      "level": 4
    },
    {
      "date": "2025-10-20",
      "count": 1,
      "level": 1
    },
    {
      "date": "2025-10-21",
      "count": 2,
      "level": 1
    },
    {
      "date": "2025-10-22",
      "count": 13,
      "level": 1
    },
    {
      "date": "2025-10-23",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-10-24",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-10-25",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-10-26",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-10-27",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-10-28",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-10-29",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-10-30",
      "count": 8,
      "level": 1
    },
    {
      "date": "2025-10-31",
      "count": 10,
      "level": 1
    },
    {
      "date": "2025-11-01",
      "count": 14,
      "level": 1
    },
    {
      "date": "2025-11-02",
      "count": 23,
      "level": 2
    },
    {
      "date": "2025-11-03",
      "count": 4,
      "level": 1
    },
    {
      "date": "2025-11-04",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-11-05",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-11-06",
      "count": 4,
      "level": 1
    },
    {
      "date": "2025-11-07",
      "count": 30,
      "level": 2
    },
    {
      "date": "2025-11-08",
      "count": 27,
      "level": 2
    },
    {
      "date": "2025-11-09",
      "count": 6,
      "level": 1
    },
    {
      "date": "2025-11-10",
      "count": 7,
      "level": 1
    },
    {
      "date": "2025-11-11",
      "count": 36,
      "level": 2
    },
    {
      "date": "2025-11-12",
      "count": 18,
      "level": 1
    },
    {
      "date": "2025-11-13",
      "count": 6,
      "level": 1
    },
    {
      "date": "2025-11-14",
      "count": 9,
      "level": 1
    },
    {
      "date": "2025-11-15",
      "count": 1,
      "level": 1
    },
    {
      "date": "2025-11-16",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-11-17",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-11-18",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-11-19",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-11-20",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-11-21",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-11-22",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-11-23",
      "count": 2,
      "level": 1
    },
    {
      "date": "2025-11-24",
      "count": 3,
      "level": 1
    },
    {
      "date": "2025-11-25",
      "count": 3,
      "level": 1
    },
    {
      "date": "2025-11-26",
      "count": 3,
      "level": 1
    },
    {
      "date": "2025-11-27",
      "count": 2,
      "level": 1
    },
    {
      "date": "2025-11-28",
      "count": 24,
      "level": 2
    },
    {
      "date": "2025-11-29",
      "count": 38,
      "level": 3
    },
    {
      "date": "2025-11-30",
      "count": 5,
      "level": 1
    },
    {
      "date": "2025-12-01",
      "count": 7,
      "level": 1
    },
    {
      "date": "2025-12-02",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-12-03",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-12-04",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-12-05",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-12-06",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-12-07",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-12-08",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-12-09",
      "count": 16,
      "level": 1
    },
    {
      "date": "2025-12-10",
      "count": 19,
      "level": 2
    },
    {
      "date": "2025-12-11",
      "count": 5,
      "level": 1
    },
    {
      "date": "2025-12-12",
      "count": 4,
      "level": 1
    },
    {
      "date": "2025-12-13",
      "count": 4,
      "level": 1
    },
    {
      "date": "2025-12-14",
      "count": 10,
      "level": 1
    },
    {
      "date": "2025-12-15",
      "count": 23,
      "level": 2
    },
    {
      "date": "2025-12-16",
      "count": 9,
      "level": 1
    },
    {
      "date": "2025-12-17",
      "count": 12,
      "level": 1
    },
    {
      "date": "2025-12-18",
      "count": 18,
      "level": 1
    },
    {
      "date": "2025-12-19",
      "count": 4,
      "level": 1
    },
    {
      "date": "2025-12-20",
      "count": 4,
      "level": 1
    },
    {
      "date": "2025-12-21",
      "count": 14,
      "level": 1
    },
    {
      "date": "2025-12-22",
      "count": 16,
      "level": 1
    },
    {
      "date": "2025-12-23",
      "count": 15,
      "level": 1
    },
    {
      "date": "2025-12-24",
      "count": 32,
      "level": 2
    },
    {
      "date": "2025-12-25",
      "count": 3,
      "level": 1
    },
    {
      "date": "2025-12-26",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-12-27",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-12-28",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-12-29",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-12-30",
      "count": 0,
      "level": 0
    },
    {
      "date": "2025-12-31",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-01-01",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-01-02",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-01-03",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-01-04",
      "count": 1,
      "level": 1
    },
    {
      "date": "2024-01-05",
      "count": 1,
      "level": 1
    },
    {
      "date": "2024-01-06",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-01-07",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-01-08",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-01-09",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-01-10",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-01-11",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-01-12",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-01-13",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-01-14",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-01-15",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-01-16",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-01-17",
      "count": 1,
      "level": 1
    },
    {
      "date": "2024-01-18",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-01-19",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-01-20",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-01-21",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-01-22",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-01-23",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-01-24",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-01-25",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-01-26",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-01-27",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-01-28",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-01-29",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-01-30",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-01-31",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-02-01",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-02-02",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-02-03",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-02-04",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-02-05",
      "count": 2,
      "level": 2
    },
    {
      "date": "2024-02-06",
      "count": 48,
      "level": 4
    },
    {
      "date": "2024-02-07",
      "count": 6,
      "level": 4
    },
    {
      "date": "2024-02-08",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-02-09",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-02-10",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-02-11",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-02-12",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-02-13",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-02-14",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-02-15",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-02-16",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-02-17",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-02-18",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-02-19",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-02-20",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-02-21",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-02-22",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-02-23",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-02-24",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-02-25",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-02-26",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-02-27",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-02-28",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-02-29",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-03-01",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-03-02",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-03-03",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-03-04",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-03-05",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-03-06",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-03-07",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-03-08",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-03-09",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-03-10",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-03-11",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-03-12",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-03-13",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-03-14",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-03-15",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-03-16",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-03-17",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-03-18",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-03-19",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-03-20",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-03-21",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-03-22",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-03-23",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-03-24",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-03-25",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-03-26",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-03-27",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-03-28",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-03-29",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-03-30",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-03-31",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-04-01",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-04-02",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-04-03",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-04-04",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-04-05",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-04-06",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-04-07",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-04-08",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-04-09",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-04-10",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-04-11",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-04-12",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-04-13",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-04-14",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-04-15",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-04-16",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-04-17",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-04-18",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-04-19",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-04-20",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-04-21",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-04-22",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-04-23",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-04-24",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-04-25",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-04-26",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-04-27",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-04-28",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-04-29",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-04-30",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-05-01",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-05-02",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-05-03",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-05-04",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-05-05",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-05-06",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-05-07",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-05-08",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-05-09",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-05-10",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-05-11",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-05-12",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-05-13",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-05-14",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-05-15",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-05-16",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-05-17",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-05-18",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-05-19",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-05-20",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-05-21",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-05-22",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-05-23",
      "count": 2,
      "level": 2
    },
    {
      "date": "2024-05-24",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-05-25",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-05-26",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-05-27",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-05-28",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-05-29",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-05-30",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-05-31",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-06-01",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-06-02",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-06-03",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-06-04",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-06-05",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-06-06",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-06-07",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-06-08",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-06-09",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-06-10",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-06-11",
      "count": 1,
      "level": 1
    },
    {
      "date": "2024-06-12",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-06-13",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-06-14",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-06-15",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-06-16",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-06-17",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-06-18",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-06-19",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-06-20",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-06-21",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-06-22",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-06-23",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-06-24",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-06-25",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-06-26",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-06-27",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-06-28",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-06-29",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-06-30",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-07-01",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-07-02",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-07-03",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-07-04",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-07-05",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-07-06",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-07-07",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-07-08",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-07-09",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-07-10",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-07-11",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-07-12",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-07-13",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-07-14",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-07-15",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-07-16",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-07-17",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-07-18",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-07-19",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-07-20",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-07-21",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-07-22",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-07-23",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-07-24",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-07-25",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-07-26",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-07-27",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-07-28",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-07-29",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-07-30",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-07-31",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-08-01",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-08-02",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-08-03",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-08-04",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-08-05",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-08-06",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-08-07",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-08-08",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-08-09",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-08-10",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-08-11",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-08-12",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-08-13",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-08-14",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-08-15",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-08-16",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-08-17",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-08-18",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-08-19",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-08-20",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-08-21",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-08-22",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-08-23",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-08-24",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-08-25",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-08-26",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-08-27",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-08-28",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-08-29",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-08-30",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-08-31",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-09-01",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-09-02",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-09-03",
      "count": 1,
      "level": 1
    },
    {
      "date": "2024-09-04",
      "count": 2,
      "level": 2
    },
    {
      "date": "2024-09-05",
      "count": 4,
      "level": 3
    },
    {
      "date": "2024-09-06",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-09-07",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-09-08",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-09-09",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-09-10",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-09-11",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-09-12",
      "count": 1,
      "level": 1
    },
    {
      "date": "2024-09-13",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-09-14",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-09-15",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-09-16",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-09-17",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-09-18",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-09-19",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-09-20",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-09-21",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-09-22",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-09-23",
      "count": 1,
      "level": 1
    },
    {
      "date": "2024-09-24",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-09-25",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-09-26",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-09-27",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-09-28",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-09-29",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-09-30",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-10-01",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-10-02",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-10-03",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-10-04",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-10-05",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-10-06",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-10-07",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-10-08",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-10-09",
      "count": 3,
      "level": 2
    },
    {
      "date": "2024-10-10",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-10-11",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-10-12",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-10-13",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-10-14",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-10-15",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-10-16",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-10-17",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-10-18",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-10-19",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-10-20",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-10-21",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-10-22",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-10-23",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-10-24",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-10-25",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-10-26",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-10-27",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-10-28",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-10-29",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-10-30",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-10-31",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-11-01",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-11-02",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-11-03",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-11-04",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-11-05",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-11-06",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-11-07",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-11-08",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-11-09",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-11-10",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-11-11",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-11-12",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-11-13",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-11-14",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-11-15",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-11-16",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-11-17",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-11-18",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-11-19",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-11-20",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-11-21",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-11-22",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-11-23",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-11-24",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-11-25",
      "count": 7,
      "level": 4
    },
    {
      "date": "2024-11-26",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-11-27",
      "count": 2,
      "level": 2
    },
    {
      "date": "2024-11-28",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-11-29",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-11-30",
      "count": 1,
      "level": 1
    },
    {
      "date": "2024-12-01",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-12-02",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-12-03",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-12-04",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-12-05",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-12-06",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-12-07",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-12-08",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-12-09",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-12-10",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-12-11",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-12-12",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-12-13",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-12-14",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-12-15",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-12-16",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-12-17",
      "count": 1,
      "level": 1
    },
    {
      "date": "2024-12-18",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-12-19",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-12-20",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-12-21",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-12-22",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-12-23",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-12-24",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-12-25",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-12-26",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-12-27",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-12-28",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-12-29",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-12-30",
      "count": 0,
      "level": 0
    },
    {
      "date": "2024-12-31",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-01-01",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-01-02",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-01-03",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-01-04",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-01-05",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-01-06",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-01-07",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-01-08",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-01-09",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-01-10",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-01-11",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-01-12",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-01-13",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-01-14",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-01-15",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-01-16",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-01-17",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-01-18",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-01-19",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-01-20",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-01-21",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-01-22",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-01-23",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-01-24",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-01-25",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-01-26",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-01-27",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-01-28",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-01-29",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-01-30",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-01-31",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-02-01",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-02-02",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-02-03",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-02-04",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-02-05",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-02-06",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-02-07",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-02-08",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-02-09",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-02-10",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-02-11",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-02-12",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-02-13",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-02-14",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-02-15",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-02-16",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-02-17",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-02-18",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-02-19",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-02-20",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-02-21",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-02-22",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-02-23",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-02-24",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-02-25",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-02-26",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-02-27",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-02-28",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-03-01",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-03-02",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-03-03",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-03-04",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-03-05",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-03-06",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-03-07",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-03-08",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-03-09",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-03-10",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-03-11",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-03-12",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-03-13",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-03-14",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-03-15",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-03-16",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-03-17",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-03-18",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-03-19",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-03-20",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-03-21",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-03-22",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-03-23",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-03-24",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-03-25",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-03-26",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-03-27",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-03-28",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-03-29",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-03-30",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-03-31",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-04-01",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-04-02",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-04-03",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-04-04",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-04-05",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-04-06",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-04-07",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-04-08",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-04-09",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-04-10",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-04-11",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-04-12",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-04-13",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-04-14",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-04-15",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-04-16",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-04-17",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-04-18",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-04-19",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-04-20",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-04-21",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-04-22",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-04-23",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-04-24",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-04-25",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-04-26",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-04-27",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-04-28",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-04-29",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-04-30",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-05-01",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-05-02",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-05-03",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-05-04",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-05-05",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-05-06",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-05-07",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-05-08",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-05-09",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-05-10",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-05-11",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-05-12",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-05-13",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-05-14",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-05-15",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-05-16",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-05-17",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-05-18",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-05-19",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-05-20",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-05-21",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-05-22",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-05-23",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-05-24",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-05-25",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-05-26",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-05-27",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-05-28",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-05-29",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-05-30",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-05-31",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-06-01",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-06-02",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-06-03",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-06-04",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-06-05",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-06-06",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-06-07",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-06-08",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-06-09",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-06-10",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-06-11",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-06-12",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-06-13",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-06-14",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-06-15",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-06-16",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-06-17",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-06-18",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-06-19",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-06-20",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-06-21",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-06-22",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-06-23",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-06-24",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-06-25",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-06-26",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-06-27",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-06-28",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-06-29",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-06-30",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-07-01",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-07-02",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-07-03",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-07-04",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-07-05",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-07-06",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-07-07",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-07-08",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-07-09",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-07-10",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-07-11",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-07-12",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-07-13",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-07-14",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-07-15",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-07-16",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-07-17",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-07-18",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-07-19",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-07-20",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-07-21",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-07-22",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-07-23",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-07-24",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-07-25",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-07-26",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-07-27",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-07-28",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-07-29",
      "count": 2,
      "level": 1
    },
    {
      "date": "2023-07-30",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-07-31",
      "count": 4,
      "level": 2
    },
    {
      "date": "2023-08-01",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-08-02",
      "count": 1,
      "level": 1
    },
    {
      "date": "2023-08-03",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-08-04",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-08-05",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-08-06",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-08-07",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-08-08",
      "count": 6,
      "level": 3
    },
    {
      "date": "2023-08-09",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-08-10",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-08-11",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-08-12",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-08-13",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-08-14",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-08-15",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-08-16",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-08-17",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-08-18",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-08-19",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-08-20",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-08-21",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-08-22",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-08-23",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-08-24",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-08-25",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-08-26",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-08-27",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-08-28",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-08-29",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-08-30",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-08-31",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-09-01",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-09-02",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-09-03",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-09-04",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-09-05",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-09-06",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-09-07",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-09-08",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-09-09",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-09-10",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-09-11",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-09-12",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-09-13",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-09-14",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-09-15",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-09-16",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-09-17",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-09-18",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-09-19",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-09-20",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-09-21",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-09-22",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-09-23",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-09-24",
      "count": 8,
      "level": 4
    },
    {
      "date": "2023-09-25",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-09-26",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-09-27",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-09-28",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-09-29",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-09-30",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-10-01",
      "count": 2,
      "level": 1
    },
    {
      "date": "2023-10-02",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-10-03",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-10-04",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-10-05",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-10-06",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-10-07",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-10-08",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-10-09",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-10-10",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-10-11",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-10-12",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-10-13",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-10-14",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-10-15",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-10-16",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-10-17",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-10-18",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-10-19",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-10-20",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-10-21",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-10-22",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-10-23",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-10-24",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-10-25",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-10-26",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-10-27",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-10-28",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-10-29",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-10-30",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-10-31",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-11-01",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-11-02",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-11-03",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-11-04",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-11-05",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-11-06",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-11-07",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-11-08",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-11-09",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-11-10",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-11-11",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-11-12",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-11-13",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-11-14",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-11-15",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-11-16",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-11-17",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-11-18",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-11-19",
      "count": 1,
      "level": 1
    },
    {
      "date": "2023-11-20",
      "count": 1,
      "level": 1
    },
    {
      "date": "2023-11-21",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-11-22",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-11-23",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-11-24",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-11-25",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-11-26",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-11-27",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-11-28",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-11-29",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-11-30",
      "count": 1,
      "level": 1
    },
    {
      "date": "2023-12-01",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-12-02",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-12-03",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-12-04",
      "count": 1,
      "level": 1
    },
    {
      "date": "2023-12-05",
      "count": 1,
      "level": 1
    },
    {
      "date": "2023-12-06",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-12-07",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-12-08",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-12-09",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-12-10",
      "count": 1,
      "level": 1
    },
    {
      "date": "2023-12-11",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-12-12",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-12-13",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-12-14",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-12-15",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-12-16",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-12-17",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-12-18",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-12-19",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-12-20",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-12-21",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-12-22",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-12-23",
      "count": 1,
      "level": 1
    },
    {
      "date": "2023-12-24",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-12-25",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-12-26",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-12-27",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-12-28",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-12-29",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-12-30",
      "count": 0,
      "level": 0
    },
    {
      "date": "2023-12-31",
      "count": 0,
      "level": 0
    }
  ]
}

export const GITHHUB_REPOSITORIES = [
    {
        id: 1131548972,
        name: "H_11",
        full_name: "Hilal-11/H_11",
        username: "Hilal-11",
        html_url: "https://github.com/Hilal-11/H_11",
        description: "H_11 a moder minimal, pixel-perfect dev portfolio.",
        languages:["TypeScript", "JavaScript", "CSS"],
        created_at: "2026-01-10T08:22:51Z",
        updated_at: "2026-01-10T18:09:43Z",
        pushed_at: "2026-01-10T18:09:40Z",
        visibility: "public",
    },
    {
        id: 1076769926,
        node_id: "R_kgDOQC40hg",
        name: "Shadify.ui.com",
        full_name: "Hilal-11/Shadify.ui.com",
        languages:["TypeScript", "JavaScript", "MDX", "CSS"],
        html_url: "https://github.com/Hilal-11/Shadify.ui.com",
        description: "Shadify is a modern component librarry, not only but it's a Templete selling platform, for startups, businesses, individuals.",
        created_at: "2025-10-15T10:15:31Z",
        updated_at: "2026-01-08T23:38:46Z",
        pushed_at: "2026-01-08T23:38:43Z",
    },
    {
        "id": 1064886146,
        "name": "CodingLab",
        "full_name": "Hilal-11/CodingLab",
        languages:["TypeScript", "JavaScript", "C/C++"],
        html_url: "https://github.com/Hilal-11/CodingLab",
        description: "Shadify is a modern component librarry, not only but it's a Templete selling platform, for startups, businesses, individuals.",
        "created_at": "2025-09-26T17:52:25Z",
        "updated_at": "2025-12-17T17:05:23Z",
        "pushed_at": "2025-12-17T17:05:19Z",
    },
    {
        "id": 968594005,
        "name": "Google-Keep",
        "full_name": "Hilal-11/Google-Keep",
        languages:["TypeScript", "JavaScript", "MDX", "Tailwind"],
        "html_url": "https://github.com/Hilal-11/Google-Keep",
        "description": "Clone Google Keep, using MERN tech stack",
        "created_at": "2025-04-18T11:15:06Z",
        "updated_at": "2025-12-10T16:08:48Z",
        "pushed_at": "2025-12-10T16:08:44Z",
    },
    {
        "id": 1095210437,
        "name": "Cross-Platfrom-Mobile-Application-",
        "full_name": "Hilal-11/Cross-Platfrom-Mobile-Application-",
        languages:["TypeScript", "JavaScript"],
        "html_url": "https://github.com/Hilal-11/Cross-Platfrom-Mobile-Application-",
        "description": "mobile application development using react native and flutter",
        "created_at": "2025-11-12T18:34:03Z",
        "updated_at": "2025-11-15T08:55:29Z",
        "pushed_at": "2025-11-15T08:55:26Z",
    },
    {
        "id": 1061376085,
        "name": "AuthJS-Clerk-OAuth2-OpenID-SAML-B2B-Role-Based-Auth",
        "full_name": "Hilal-11/AuthJS-Clerk-OAuth2-OpenID-SAML-B2B-Role-Based-Auth",
        languages:["TypeScript", "JavaScript"],
        "html_url": "https://github.com/Hilal-11/AuthJS-Clerk-OAuth2-OpenID-SAML-B2B-Role-Based-Auth",
        "description": "Authentication and Autherization 🎯💀",
        "created_at": "2025-09-21T19:30:35Z",
        "updated_at": "2025-09-21T21:16:05Z",
        "pushed_at": "2025-09-21T21:16:02Z",
    }
]

// tech stack

export const TECH_STACK = [
    { id: "1", tech_image: "/tech/js.jpeg" , tech_name: "Typescript"},
    { id: "2", tech_image: "/tech/ts.jpeg" , tech_name: "Javascript"},
    { id: "3", tech_image: "/tech/cpp.jpeg" , tech_name: "C++"},
    { id: "4", tech_image: "/tech/python.jpeg" , tech_name: "Python"},
    { id: "5", tech_image: "/tech/node.jpeg" , tech_name: "Node.Js"},
    { id: "6", tech_image: "/tech/react.jpeg" , tech_name: "React.Js"},
    { id: "7", tech_image: "/tech/next.jpeg" , tech_name: "Next.Js"},
    { id: "8", tech_image: "/tech/tailwind.jpeg" , tech_name: "Tailwind.css"},
    { id: "9", tech_image: "/tech/motion.jpeg" , tech_name: "Motion"},
    { id: "10", tech_image: "/tech/shad.jpeg", tech_name: "Shadcn-ui"},
    { id: "11", tech_image: "/tech/redux.jpeg" , tech_name: "Redux toolkit"},
    { id: "12", tech_image: "/tech/docker.jpeg" , tech_name: "Docker"},
    { id: "13", tech_image: "/tech/k8s.jpeg" , tech_name: "Kubernets"},
    { id: "14", tech_image: "/tech/linux.jpeg" , tech_name: "Linux"},
    { id: "15", tech_image: "/tech/webrtc.jpeg" , tech_name: "WebRTC"},
    { id: "16", tech_image: "/tech/socketio.jpeg" , tech_name: "Socket.io"},
    { id: "17", tech_image: "/tech/redis.jpeg" , tech_name: "Radis"},
    { id: "18", tech_image: "/tech/aws.jpeg" , tech_name: "AWS"},
    { id: "19", tech_image: "/tech/github.jpeg" , tech_name: "Github/Git"},
    { id: "20", tech_image: "/tech/expressjs.jpeg" , tech_name: "Express.js"},
    { id: "21", tech_image: "/tech/auth0.jpeg" , tech_name: "Auth0 and Oauth2"},
    { id: "22", tech_image: "/tech/threejs.jpeg" , tech_name: "Three.js"},
    { id: "23", tech_image: "/tech/firebase.jpeg" , tech_name: "Firebase"},
    { id: "24", tech_image: "/tech/reactnative.jpeg" , tech_name: "React Native"},
    { id: "25", tech_image: "/tech/expo.jpeg" , tech_name: "Expo"},
    { id: "26", tech_image: "/tech/convexdb.jpeg" , tech_name: "Convex DB"},
    { id: "27", tech_image: "/tech/postgress.jpeg" , tech_name: "Postgress"},
    { id: "28", tech_image: "/tech/mongodb.jpeg" , tech_name: "MongoDB"},
    { id: "29", tech_image: "/tech/kafka.jpeg" , tech_name: "Kafka"},
    { id: "30", tech_image: "/tech/dsa.jpeg" , tech_name: "Data Structures Algorithms"},
    { id: "31", tech_image: "/tech/dataanalyst.jpeg" , tech_name: "Data Analyist"},
    { id: "32", tech_image: "/tech/numpy.jpeg" , tech_name: "Numpy | Pandas | Plotly | Chart.js"},
    { id: "33", tech_image: "/tech/systemdesign.jpeg" , tech_name: "System Design"},
    { id: "34", tech_image: "/tech/devops.jpeg" , tech_name: "Devops"},
    { id: "35", tech_image: "/tech/figma.jpeg" , tech_name: "Figma"}
];

// Experiance data config

// Certifications

// components

// templates

// designs

// FAQ's

// CTA