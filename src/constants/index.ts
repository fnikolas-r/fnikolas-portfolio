type navLinkType = {
  id: number;
  name: string;
  href: string;
};

type clientReviewType = {
  id: number;
  name: string;
  position: string;
  img: string;
  review: string;
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
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews: clientReviewType[] = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Marketing Director at GreenLeaf",
    img: "assets/review1.png",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  },
  {
    id: 2,
    name: "Mark Rogers",
    position: "Founder of TechGear Shop",
    img: "assets/review2.png",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: "John Dohsas",
    position: "Project Manager at UrbanTech ",
    img: "assets/review3.png",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  {
    id: 4,
    name: "Ether Smith",
    position: "CEO of BrightStar Enterprises",
    img: "assets/review4.png",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
  },
];

export const extraWidthScreen: modelMetadata = {
  position: [8, -6.5, 1.9],
  rotation: [0, 0.7, 0],
  scale: 6.5,
};
export const mediumWidthScreen: modelMetadata = {
  position: [-1, -11.6, -6.3],
  rotation: [0, 0.7, 0],
  scale: 6.5,
};
export const smallWidthScreen: modelMetadata = {
  position: [0, -8.6, 3.7],
  rotation: [0, 6.5, 0],
  scale: 3.9,
};
