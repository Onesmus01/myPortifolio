import { FaHtml5, FaCss3Alt, FaReact, FaAws, FaMicrosoft, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { 
  SiTypescript, 
  SiRedux, 
  SiNextdotjs, 
  SiSolidity, 
  SiDocker, 
  SiKubernetes, 
  SiRust, 
  SiSolana, 
  SiEthereum 
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbServer } from "react-icons/tb";
import { MdEngineering } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

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

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center"
          >
            <item.icon className="text-7xl text-purple-500" /> {/* fixed color */}
            <p className="text-center mt-4">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
