import {
    SiCplusplus,
    SiFramer,
    SiGithub, SiNeovim,
    SiNextdotjs,
    SiPrisma,
    SiReact,
    SiRust,
    SiTailwindcss,
    SiTypescript,
    SiWebgl,
    SiZig
} from "react-icons/si";
import {IconType} from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "privacify",
        description:
            "open-source TOS analyzer so you don't get scammed",
        technologies: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiFramer],
        techNames: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
        techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/", "https://nextjs.org/", "https://tailwindcss.com/", "https://www.framer.com/motion/"],
        github: "https://github.com/zaluty/privacify-v.0",
        demo: "https://privacify-blue.vercel.app/",
        image: "/projects/privacify.png",
        available: true,
    },
    {
        id: 1,
        name: "Mugnum.studio",
        description:
            "The youtubers buddy",
        technologies: [  SiPrisma ,SiTypescript, SiReact, SiNextdotjs, SiTailwindcss],
        techNames: [ "prisma", "Typescript", "React", "Next.js", "Tailwind CSS"],
        techLinks: ["https://get.webgl.org/", "https://www.typescriptlang.org/", "https://reactjs.org/", "https://nextjs.org/", "https://tailwindcss.com/"],
        github: "https://github.com/zaluty/mugnum-studio",
        demo: "https://mugnum-studio.vercel.app/",
        image: "/projects/mugnum.png",
        available: true,
    },
];
