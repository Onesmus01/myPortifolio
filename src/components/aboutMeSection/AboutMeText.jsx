import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>

      <p className="mb-4">
        My name is Onesmus Wambua, a passionate and highly motivated software developer with a deep commitment to excellence, innovation, and modern problem-solving through technology. I specialize in full-stack web development, working with tools like React, Node.js, MySQL, and Express to build responsive, scalable, and secure applications.
      </p>

      <p className="mb-4">
        My approach to development is driven by precision, clean code, and user-focused design that ensures functionality meets elegance. Over the years, I’ve invested time in mastering both frontend and backend technologies, allowing me to bridge the gap between visual design and technical performance.
      </p>

      <p className="mb-4">
        I believe that good code is not just about solving problems, but about writing maintainable and efficient solutions that can evolve with changing requirements. My strong foundation in database systems, RESTful APIs, and token-based authentication supports the creation of secure and dynamic applications.
      </p>

      <p className="mb-4">
        Beyond the code, I value continuous learning and discipline. I actively keep up with industry trends, always eager to explore emerging technologies like blockchain and cloud computing. I am particularly interested in building systems that create real impact, whether it’s in real estate, e-commerce, or decentralized platforms.
      </p>

      <p className="mb-4">
        I also understand the importance of user experience and strive to make interfaces intuitive and accessible. As a developer, I take pride in my ability to collaborate with teams, communicate clearly, and contribute meaningfully to every stage of the software development lifecycle.
      </p>

      <p className="mb-4">
        Whether I’m building solo or working in agile teams, I bring a focused mindset and problem-solving attitude to the table. I value feedback, adaptability, and consistent growth. In every project I undertake, I bring a strong sense of responsibility, attention to detail, and a deep respect for quality.
      </p>

      <p className="mb-4">
        I see software not just as a career, but as a craft — a powerful medium to shape ideas into reality and change the world one solution at a time.
      </p>

      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
