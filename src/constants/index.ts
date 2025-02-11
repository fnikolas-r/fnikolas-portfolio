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
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Experience",
    href: "#experience",
  },
  {
    id: 3,
    name: "Project",
    href: "#project",
  },
  {
    id: 4,
    name: "Blog",
    href: "https://blog.fnikolabs.com",
  },
  {
    id: 5,
    name: "Contact",
    href: "#contact",
  },
];

export const extraWidthScreen: modelMetadata = {
  position: [8, -6.5, 1.9],
  rotation: [0, 0.7, 0],
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

// PORTFOLIO DATA

export interface IProjectList {
  title: string,
  isHighlight: boolean,
  tags : string[],
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
  {
      "title": "ABSA Web Development",
      "isHighlight": true,
      "desc":"",
      "tags": [
          "Web Development",
          "Machine Learning",
          "Dev/Ops"
      ],
      "source": "https://developers.google.com/recaptcha/docs/verify?hl=id",
      "techstack": [
          "Python",
          "TypeScript",
          "GoogleCloud",
          "Docker",
          "Tensorflow"
      ],
      "image": "/image/projects/project2-absa.png"
  },
  {
      "title": "Expense Manager",
      "desc":"",
      "isHighlight": true,
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
  {
      "title": "Simpro",
      "desc":"",
      "isHighlight": true,
      "tags": [
          "Web Development"
      ],
      "source": null,
      "techstack": [
          "PHP",
          "JQuery"
      ],
      "image": "/image/projects/project3-simpro.png"
  }
]

export const EXPERIENCE_LIST : IExperience[] = [
  {
      "title": "CV Menara Etam Mandiri",
      "duration":"2023 - 2025 Jan",
      "desc": null,
      "logo": undefined,
      "type": "Work",
      "isCurrent": false,
      "position": "Archivist",
      "isYearOnly": false
  },
  {
      "title": "Koperasi Pegawai Telkom Samarinda",
      "duration":"2023 Feb - 2023 Mar",
      "desc": null,
      "logo": undefined,
      "type": "Work",
      "isCurrent": false,
      "position": "IT Support Intern",
      "isYearOnly": false
  },
  {
      "title": "Bangkit Academy",
      "duration": "2024 Feb - 2024 Oct",
      "desc": null,
      "logo": undefined,
      "type": "Study",
      "isCurrent": false,
      "position": "Cloud Computing Cohort",
      "isYearOnly": false
  },
  {
      "title": "Information System Assitant",
      "duration": "2021 - 2022",
      "desc": null,
      "logo": undefined,
      "type": "Work",
      "isCurrent": false,
      "position": "Administrator, Treasurer, & Instructor",
      "isYearOnly": true
  },
  {
      "title": "Mulawarman University",
      "duration":"2020 -2024",
      "desc": null,
      "logo": undefined,
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
