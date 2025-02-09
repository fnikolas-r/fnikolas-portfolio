import { faFacebook, faGithub, faInstagram, faLinkedin, faWordpress, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

type navLinkType = {
  id: number;
  name: string;
  href: string;
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


const TB_SHOWCASE_URI = import.meta.env.VITE_NOCODB_TB_SHOWCASE_URI
const TB_TECHSTACK_URI = import.meta.env.VITE_NOCODB_TECHSTACK_URI
const TB_EXPERIENCE_URI = import.meta.env.VITE_NOCODB_EXPERIENCE_URI
export const API_URL = {TB_SHOWCASE_URI, TB_TECHSTACK_URI, TB_EXPERIENCE_URI}
