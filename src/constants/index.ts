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
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
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
