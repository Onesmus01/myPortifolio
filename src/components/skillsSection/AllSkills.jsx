import SingleSkill from "./SingleSkill";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

// Icons
import { FaHtml5, FaCss3Alt, FaReact, FaAws, FaMicrosoft, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiRedux, SiNextdotjs, SiSolidity, SiDocker, SiKubernetes, SiRust, SiVercel, SiSolana, SiEthereum } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbServer } from "react-icons/tb";
import { MdEngineering } from "react-icons/md";

const skills = [
  { skill: "HTML", icon: FaHtml5 },
  { skill: "CSS", icon: FaCss3Alt },
  { skill: "JavaScript", icon: IoLogoJavascript },
  { skill: "TypeScript", icon: SiTypescript },
  { skill: "ReactJS", icon: FaReact },
  { skill: "Redux", icon: SiRedux },
  { skill: "NextJS", icon: SiNextdotjs },
  { skill: "TailwindCSS", icon: RiTailwindCssFill },
  { skill: "Solidity", icon: SiSolidity },
  { skill: "Docker", icon: SiDocker },
  { skill: "Kubernetes", icon: SiKubernetes },
  { skill: "AWS", icon: FaAws },
  { skill: "Azure", icon: FaMicrosoft },
  { skill: "VPS", icon: TbServer }, 
  { skill: "Ether.js", icon: SiEthereum },
  { skill: "Solana", icon: SiSolana },
  { skill: "Rust", icon: SiRust },
  { skill: "Python", icon: FaPython },
  { skill: "Software Engineer", icon: MdEngineering },
];

const AllSkills = () => {
  return (
    <div className="py-16 px-4 md:px-20 bg-gray-950 text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-500 mb-12">
        🧠 Tech Stack
      </h2>
      <div className="flex flex-wrap gap-8 justify-center max-w-[1200px] mx-auto">
        {skills.map((item, index) => (
          <motion.div
            variants={fadeIn("up", index * 0.1)}   // ✅ fixed delay as number
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.1 }} // ✅ safer viewport
            key={index}
          >
            <SingleSkill text={item.skill} imgSvg={<item.icon size={40} />} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AllSkills;
