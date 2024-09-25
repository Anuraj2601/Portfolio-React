import project1 from "../assets/projects/landingCover.png";
import project2 from "../assets/projects/book.avif";
import project3 from "../assets/projects/teach.jpg";
import project4 from "../assets/projects/scm.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications.Currently I'm Studying 3rd year undergraduate student in UCSC, I have honed my skills in front-end technologies like React and Tailwind CSS, as well as back-end technologies like Node Js,Express Js,Spring Boot, MySQL, Postman, and Docker. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Tailwind CSS, Spring Boot, MySQL, Postman, and Docker. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
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
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
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
