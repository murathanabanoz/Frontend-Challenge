import React from "react";
import { useSelector } from "react-redux";
import "../css/projects.css";
import ProjectItem from "./ProjectItem";

const projectsData = [
  {
    image:
      "https://img.ekonomim.com/storage/files/images/2024/07/09/netflix-uyelik-ucreti-2024-bir-zam-daha-geldi-netflix-aylik-ucret-ne-kadar-ic29_cover.jpg",
    title: "Netflix",
    description:
      "I developed a streaming platform prototype inspired by Netflix, offering a seamless user experience with a vast library of movies and TV shows. Utilizing React.js for front-end development and Node.js for backend, the platform features responsive design, user authentication, and dynamic content delivery.",
    descriptionTr:
      "Netflix'ten ilham alarak geliştirdiğim bir yayın platformu prototipi. Geniş bir film ve TV şovu kütüphanesi sunarak sorunsuz bir kullanıcı deneyimi sağlar. Front-end geliştirmesi için React.js ve backend için Node.js kullandım. Platform, duyarlı tasarım, kullanıcı kimlik doğrulama ve dinamik içerik sunumu özelliklerine sahiptir.",
    githubLink: "https://github.com/Murathan722/NetFlix-Projesi",
    viewLink: "https://net-flix-projesi.vercel.app/",
  },
  {
    image:
      "https://www.medyakoridoru.com/wp-content/uploads/2021/09/02/02092021092345_4324763_9_23.jpg",
    title: "Twitter",
    description:
      "A Twitter-inspired social media platform prototype. It allows users to create and share tweets, follow other users, and engage with content through likes and comments. Built using React.js for the front-end and Node.js for the back-end, the platform features real-time updates, user authentication, and a responsive design.",
    descriptionTr:
      "Twitter'dan ilham alarak geliştirdiğim bir sosyal medya platformu prototipi. Kullanıcıların tweet oluşturup paylaşmalarına, diğer kullanıcıları takip etmelerine ve beğeni ve yorumlar aracılığıyla içeriklerle etkileşimde bulunmalarına olanak tanır. Front-end için React.js ve back-end için Node.js kullanılarak oluşturulan platform, gerçek zamanlı güncellemeler, kullanıcı kimlik doğrulama ve duyarlı tasarım özelliklerine sahiptir.",
    githubLink: "https://github.com/Murathan722/Twitter-Projesi",
    viewLink: "https://twitter-projesi.vercel.app/",
  },
  {
    image:
      "https://d17wu0fn6x6rgz.cloudfront.net/img/w/tarif/mgt/pizza_14_11zon.webp",
    title: "Pizza",
    description:
      "A dynamic pizza ordering application that allows users to customize their pizzas by selecting from various toppings, sizes, and crust types. The project features an intuitive user interface, real-time order updates, and a secure payment system. Built using React.js for the front-end and Node.js with Express for the back-end, the application ensures a seamless and efficient ordering experience.",
    descriptionTr:
      "Kullanıcıların çeşitli malzemeler, boyutlar ve hamur türleri arasından seçim yaparak pizzalarını özelleştirmelerine olanak tanıyan dinamik bir pizza sipariş uygulaması. Proje, kullanıcı dostu bir arayüz, gerçek zamanlı sipariş güncellemeleri ve güvenli bir ödeme sistemi sunar. Front-end için React.js ve back-end için Node.js ile Express kullanılarak oluşturulan uygulama, sorunsuz ve verimli bir sipariş deneyimi sağlar.",
    githubLink: "https://github.com/Murathan722/fsweb-s7-challenge-pizza",
    viewLink: "https://fsweb-s7-challenge-pizza-seven-rho.vercel.app/",
  },
];

function Projects() {
  const language = useSelector((state) => state.language.language);

  return (
    <>
      <div className="projects-horizontal"></div>
      <div className="projects-container" id="projects">
        <div className="projects-top">
          <h1>Projects</h1>
        </div>
        <div className="projects-bottom">
          {projectsData.map((project, index) => (
            <ProjectItem
              key={index}
              image={project.image}
              title={project.title}
              description={
                language === "Eng" ? project.description : project.descriptionTr
              }
              githubLink={project.githubLink}
              viewLink={project.viewLink}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
