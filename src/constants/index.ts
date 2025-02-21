import { faGithub, faInstagram, faLinkedin, faWordpress, faYoutube } from "@fortawesome/free-brands-svg-icons";

type navLinkType = {
  id: number;
  name: string;
  href: string;
  newTab? :boolean;
};


type modelMetadata = {
  position: [x:number, y:number, z:number];
  rotation: [x:number, y:number, z:number];
  scale: number;
};


export const navLinks: navLinkType[] = [
  {
    id: 1,
    name: "Home",
    href: "/#home",
  },
  {
    id: 2,
    name: "About",
    href: "/#about",
  },
  {
    id: 3,
    name: "Experience",
    href: "/#experience",
  },
  {
    id: 3,
    name: "Project",
    href: "/#project",
  },
  {
    id: 4,
    name: "Blog",
    href: "https://blog.fnikolabs.com",
    newTab : true,
  },
  {
    id: 5,
    name: "Contact",
    href: "/#contact",
  },
];

export const extraWidthScreen: modelMetadata = {
  position: [8, -6.5, 1.9],
  rotation: [0, 0, 0],
  scale: 6.5,
};
export const mediumWidthScreen: modelMetadata = {
  position: [17.6,-14.8, -8.4],
  rotation: [0, 0, 0],
  scale: 5.4,
};
export const smallWidthScreen: modelMetadata = {
  position: [0, -8.6, 3.7],
  rotation: [0, 6.5, 0],
  scale: 4,
};

export type IPROJECT_TAGS = "Web Development" | "Machine Learning" | "DevOps" | "All"

// PORTFOLIO DATA
export const TAG_COLLECTION : IPROJECT_TAGS[] = [
  "Web Development",
  "Machine Learning",
  "DevOps"
]


export interface IProjectList {
  title: string,
  isHighlight: boolean,
  tags : IPROJECT_TAGS[],
  source ?: string |null,
  techstack: string[],
  desc: string,
  image?: string | null
}

export type IExperience = {
  title: string;
  duration: string;
  desc : string | null;
  logo: string  | undefined;
  type : "Work" | "Study";
  position : string;
  isYearOnly : boolean;
  isCurrent? : boolean
}

export interface ITechStack{
  name: string,
  isSourceFromInternet : boolean,
  proficiency ? : number | null,
  description? : string | null,
  source: string
}

export const LOCALES_TEXT = {
  hereIsMyCV : "Let’s Get Started – Here’s My CV! 📄",
  aboutText : "I'm a tech enthusiast who loves turning ideas into reality. I'm passionate about coding, networking, and building IT infrastructure.  I'm also fascinated by the potential of machine learning to solve real-world problems. Let's connect and talk about how I can help you bring your vision to life."
}

export const PERSONAL_INFO = {
  LOCATION : {
    "name": "Palu",
    "geo-code": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255324.1274291417!2d119.89927395000001!3d-0.78956205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d8be9e6aeafc433%3A0xb92c5a1c7cc6055e!2sPalu%20City%2C%20Central%20Sulawesi!5e0!3m2!1sen!2sid!4v1738934749062!5m2!1sen!2sid"
  },
  SOCIALS : [
    {name:"Github", icon:faGithub, href:"https://github.com/fnikolas-r"},
    {name:"Instagram", icon:faInstagram, href:"https://www.instagram.com/nikofn20201/"},
    {name:"Wordpress", icon:faWordpress, href:"https://blog.fnikolabs.com/"},
    // {name:"X (ex.Twitter)", icon:faXTwitter, href:"https://blog.fnikolabs.com/"}, #TODO:REPLACE THIS LATER
    // {name:"Facebook", icon:faFacebook, href:"https://blog.fnikolabs.com/"},
    {name:"LinkedIn", icon:faLinkedin, href:"https://www.linkedin.com/in/fnikolas-r/"},
    {name:"Youtube", icon:faYoutube, href:"https://www.youtube.com/@fnikolabs"},
  ]
}

export const PROJECT_LIST : IProjectList[]= [
  {"title": "NLP Aspect Based Customer Review",
      "isHighlight": true,
      "desc":"For this Bangkit Academy capstone project, I built the backend and frontend of a sentiment analysis app that categorized restaurant reviews by aspects (e.g., service, food). I designed cloud infrastructure (Google Cloud Run), optimized deployment costs, and led project planning.",
      "tags": [
          "Web Development",
          "DevOps"
      ],
      "source": "https://github.com/orgs/Bangkit-2024/repositories",
      "techstack": [
          "Python",
          "TypeScript",
          "GoogleCloud",
          "Docker",
          "Tensorflow",
          "MySQL"
      ],
      "image": "/image/projects/project2-absa.png"
  },
  {"title": "Warehouse Procurement Recommendation System",
    "isHighlight": true,
    "desc":"This project is my undergraduate thesis at Mulawarman University. It aims to recommend item procurement based on past purchase history. The system uses Django for the backend and Laravel for the frontend, with K-Means and Random Forest as recommendation algorithms.",
    "tags": [
        "Web Development",
        "Machine Learning",
    ],
    "source": "https://doi.org/10.32736/sisfokom.v13i3.2288",
    "techstack": [
      "Python",
      "Django",
      "Laravel",
      "SciKit-Learn"
    ],
    "image": "/image/projects/project-undergrad-thesis.png"
  },
  {"title": "Kopegtel Project Management System",
    "desc":"This project is initiated by the Kopegtel Samarinda to enable monitoring and recording of ongoing project activities within Kopegtel, Indocitra, and PT Putra Bistel Solusindo.",
    "isHighlight": true,
    "tags": [
        "Web Development"
    ],
    "source": null,
    "techstack": [
        "PHP",
        "JQuery",
        "MySql"
    ],
    "image": "/image/projects/project3-simpro.png"
  },
  {"title": "Home Credit: Credit Score Analysis",
    "desc":"This data analysis project by Zenius For Professionals (ZenPro) aims to analyze credit data and determine credit scores. The results are presented in a Google Looker dashboard, displaying classification predictions and credit data gauges.",
    "isHighlight": true,
    "tags": [
        "Machine Learning"
    ],
    "source": null,
    "techstack": [
      "Sckit-Learn",
      "Pandas",
      "Google Looker",
    ],
    "image": "/image/projects/project4-creditscore.png"
  },
  {"title": "Expense Manager App",
      "desc":"This project is designed to track personal income and expenses. It includes expense statistics and analytical insights into personal spending.",
      "isHighlight": false,
      "tags": [
          "Web Development"
      ],
      "source": null,
      "techstack": [
          "React JS",
          "Django",
          "Redux"
      ],
      "image": "/image/projects/project1-money-manager.png"
  },
  {"title": "Desa Sangkima's Site",
      "desc":"This website was created to highlight Sangkima Village and boost its online presence. Built with OpenSID CMS, it provides an accessible platform for sharing village information.",
      "isHighlight": true,
      "tags": [
          "Web Development"
      ],
      "source": null,
      "techstack": [
          "OpenSID",
          "PHP",
          "MySql"
      ],
      "image": "/image/projects/project-desa-sangkima.png"
  },
  {"title": "This Portfolio",
      "desc":"I Build this to promote myself and as a motivation for me to learn something new",
      "isHighlight": false,
      "tags": [
          "Web Development"
      ],
      "source": "/",
      "techstack": [
        "React",
        "ThreeJS",
        "Framer-Motion",
      ],
      "image": "/image/projects/project-portfolio.png"
  },

  // THIS SHOULD STAY AS THE LAST ITEM ON THE LIST
  {"title": "Want To See MORE???",
      "desc":"This isn’t my whole portfolio — tap below to unlock the full story!",
      "isHighlight": true,
      "tags": [
          "Web Development"
      ],
      "source": "/welcome-to-my-garage",
      "techstack": [
          "Creativity",
          "Curiosity",
          "Critical Thinking"
      ],
      "image": "/image/projects/cook.jpg"
  },

]

export const EXPERIENCE_LIST : IExperience[] = [
  {
      "title": "CV Menara Etam Mandiri",
      "duration":"2023 - 2025 Jan",
      "desc": "I developed a Python-based automation system using Flask, slashing manual sorting and labeling time by 99.7%, from 48 hours to just 3 minutes.  Additionally, I built an asynchronous data monitoring system with Google Looker Studio, enabling cross-device input and real-time workflow tracking.",
      "logo": "/image/logos/mem.png",
      "type": "Work",
      "isCurrent": false,
      "position": "Outsourcing Staff",
      "isYearOnly": false
  },
  {
      "title": "Koperasi Pegawai Telkom Samarinda",
      "duration":"2023 Feb - 2023 Mar",
      "desc": "I built a project monitoring system for all Kopegtel Group projects, including PT Putra Bistel Solusindo, streamlining progress tracking and stakeholder decision-making.  I also designed and deployed an automated invoice application integrated with Simpro, reducing manual processing time and errors for improved financial workflow accuracy.",
      "logo": "/image/logos/kopeg.png",
      "type": "Work",
      "isCurrent": false,
      "position": "IT Support Intern",
      "isYearOnly": false
  },
  {
      "title": "Bangkit Academy",
      "duration": "2024 Feb - 2024 Oct",
      "desc": "I led the full-stack development of an AI-powered sentiment analysis tool for restaurant reviews, seamlessly integrating AI-driven insights using Python and React.  Additionally, I designed and implemented GCP deployment strategies, optimizing resource allocation and budget forecasting to achieve a 20% reduction in cloud costs while maintaining a scalable infrastructure for NLP applications.",
      "logo": "https://files.klob.id/public/mig01/l32ovhf5/channels4_profile.jpg",
      "type": "Study",
      "isCurrent": false,
      "position": "Cloud Computing Cohort",
      "isYearOnly": false
  },
  {
      "title": "Information System Assitant",
      "duration": "2021 - 2022",
      "desc": "I taught operating systems, web development, data mining, and web frameworks to students through interactive workshops and hands-on projects.  I also automated reporting and administrative workflows for over 80+ students using Google Suite (Looker Studio, App Script), increasing accuracy and saving significant time.",
      "logo": "/image/logos/aslab.png",
      "type": "Work",
      "isCurrent": false,
      "position": "Administrator, Treasurer, & Instructor",
      "isYearOnly": true
  },
  {
      "title": "Mulawarman University",
      "duration":"2020 -2024",
      "desc": "At Mulawarman University, I studied data management, system design (including ERP), IT infrastructure, web development, and machine learning, culminating in a thesis on a procurement recommendation system for Kopegtel Group Samarinda. I also served as a lab assistant (admin/treasurer) and student association creative industry staff member.",
      "logo": "https://upload.wikimedia.org/wikipedia/id/thumb/8/83/Unmul_logo_low.svg/1200px-Unmul_logo_low.svg.png",
      "type": "Study",
      "isCurrent": false,
      "position": "CGPA 3.94",
      "isYearOnly": false
  }
]

export const TECH_STACK_LIST : ITechStack[] =  [
  {
      "name": "React JS",
      "isSourceFromInternet": false,
      "proficiency": null,
      "description": null,
      "source": "reactjs"
  },
  {
      "name": "Django",
      "isSourceFromInternet": false,
      "proficiency": null,
      "description": null,
      "source": "django"
  },
  {
      "name": "Python",
      "isSourceFromInternet": false,
      "proficiency": null,
      "description": null,
      "source": "python"
  },
  {
      "name": "TypeScript",
      "isSourceFromInternet": false,
      "proficiency": null,
      "description": null,
      "source": "typescript"
  },
  {
      "name": "GoogleCloud",
      "isSourceFromInternet": false,
      "proficiency": null,
      "description": null,
      "source": "gcloud"
  },
  {
      "name": "Docker",
      "isSourceFromInternet": false,
      "proficiency": null,
      "description": null,
      "source": "docker"
  },
  {
      "name": "Flask",
      "isSourceFromInternet": true,
      "proficiency": null,
      "description": null,
      "source": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmD38KsMgEwahtWc_Nfs5ZVktP9dBc36MUZA&s"
  },
  {
      "name": "Git",
      "isSourceFromInternet": false,
      "proficiency": null,
      "description": null,
      "source": "git"
  },
  {
      "name": "PostgreSQL",
      "isSourceFromInternet": false,
      "proficiency": null,
      "description": null,
      "source": "postgresql"
  },
  {
      "name": "Linux",
      "isSourceFromInternet": false,
      "proficiency": null,
      "description": null,
      "source": "linux"
  },
  {
      "name": "Firebase",
      "isSourceFromInternet": false,
      "proficiency": null,
      "description": null,
      "source": "firebase"
  },
  {
      "name": "Github",
      "isSourceFromInternet": false,
      "proficiency": null,
      "description": null,
      "source": "github"
  },
  {
      "name": "Shell",
      "isSourceFromInternet": false,
      "proficiency": null,
      "description": null,
      "source": "bash"
  },
  {
      "name": "Redis",
      "isSourceFromInternet": false,
      "proficiency": null,
      "description": null,
      "source": "redis"
  },
  {
      "name": "Cisco",
      "isSourceFromInternet": true,
      "proficiency": null,
      "description": null,
      "source": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVnpHAOVSq0c1S7fBBWDWzegdKPfqTg9OSRw&s"
  },
  {
      "name": "Wordpress",
      "isSourceFromInternet": false,
      "proficiency": null,
      "description": null,
      "source": "wordpress"
  },
  {
      "name": "Java",
      "isSourceFromInternet": false,
      "proficiency": null,
      "description": null,
      "source": "java"
  },
  {
      "name": "Laravel",
      "isSourceFromInternet": false,
      "proficiency": null,
      "description": null,
      "source": "laravel"
  },
  {
      "name": "Sci-Kit learn",
      "isSourceFromInternet": true,
      "proficiency": null,
      "description": null,
      "source": "https://avatars.githubusercontent.com/u/17349883?s=280&v=4"
  },
  {
      "name": "Tensorflow",
      "isSourceFromInternet": true,
      "proficiency": null,
      "description": null,
      "source": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGOYXGizfi4kGTV5dpLRgJwHh-YcY18pEYlw&s"
  },
  {
      "name": "Solidity",
      "isSourceFromInternet": true,
      "proficiency": null,
      "description": null,
      "source": "https://www.svgrepo.com/show/374088/solidity.svg"
  },
  {
      "name": "Redux",
      "isSourceFromInternet": false,
      "proficiency": null,
      "description": null,
      "source": "redux"
  },
  {
      "name": "PHP",
      "isSourceFromInternet": false,
      "proficiency": null,
      "description": null,
      "source": "php"
  },
  {
      "name": "JQuery",
      "isSourceFromInternet": false,
      "proficiency": null,
      "description": null,
      "source": "jquery"
  }
]

export const SERVICES_LIST : string[] = [
  "Build You A Simple Landing Page App",
  "Build You A Web Application",
  "Help You To Host Your Wesbite",
  "Install Network Interface for Your Home",
  "Install Network Interface for Your Office",
  "Create A Server For You",
  "Create a Simple Thematic Map For You Using QGis",
  "Create Simple UI/UX For You",
  "Service Your Laptop",
  "Change Your Laptop SSD",
  "Change Your Laptop RAM",
  "Change Your Laptop NVMe",
  "Install Windows For Your Laptop/PC",
  "Install Linux For Your Laptop/PC",
  "Service Your Android Phone",
  "Change LCD and Battery of Your Android Phone",
  "Create A Machine Learning Model",
  "Help You With Analyze Your Data",
  "Organize and Entry Your Archive",
  "Automate Your Workflow With Appscript",
  "Help You With Your Web3 Project",
]
