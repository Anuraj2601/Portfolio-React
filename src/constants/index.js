import project1 from "../assets/projects/landingCover.png";
import project2 from "../assets/projects/book.avif";
import project3 from "../assets/projects/teach.jpg";
import project4 from "../assets/projects/scm.jpg";
import codebasys from "../assets/projects/CodeBasys.jpg";
import Mediwave from "../assets/projects/mediwave.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications.Graduate student in UCSC, I have honed my skills in front-end technologies like React, Vue and Tailwind CSS, as well as back-end technologies like Laravel, Yii,Spring Boot, MySQL, Postman, and Docker. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Tailwind CSS, Spring Boot, MySQL, Postman, and Docker. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    image: codebasys,
    year: "2025 - 2025",
    role: "Trainee Associate Software Engineer",
    company: "Code Basys",
    description: `Developed and maintained web applications using JavaScript, Vue.js, and Yii. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Vue", "Yii", "Axios", "MySQL"],
  },
  {
    image: Mediwave,
    year: "2024 - 2025",
    role: "Trainee Software Engineer",
    company: "Mediwave",
    description: `Maintained web application using Laravel. Managed databases and implemented data storage solutions using MySQL. Worked closely with Bug fixing & feature implementations.`,
    technologies: ["Bootstrap", "Laravel", "Postman", "Swagger"],
  },
];

export const PROJECTS = [
  {
    title: "Eventix -  Event Management System",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["React", "TailwindCSS", "Springboot", "Postman", "MySQL"],
  },
  {
    title: "Book Store -  Online Book Store System",
    image: project2,
    description:
      "A Mern Stack using with Node , Express Js with Postman a REST API with React as the frontend",
    technologies: ["React", "TailwindCSS", "Node Js", "Express Js", "MongoDB"],
  },
  {
    title: "Teachease - Online Learning Platform",
    image: project3,
    description:
      "An application implemented Online learning platform target teacher, student and parents.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP","MySQL"],
  },
  {
    title: "SCM - Supply Chain Management System",
    image: project4,
    description:
      "An application implemented Supply Chain Management System target customer, supplier.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
  }
];

export const CONTACT = {
  address: "Colombo , Western Province Sri Lanka",
  phoneNo: "+94 75 288 7056 ",
  email: "anurajselvasothy@gmail.com",
};
