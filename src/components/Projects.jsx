import React from "react";
import { useSelector } from "react-redux";
import "../css/projects.css";
import ProjectItem from "./ProjectItem";

const projectsData = [
  {
    image:
      "https://www.shutterstock.com/image-vector/do-list-planning-icon-concept-600nw-739093225.jpg",
    title: "To Do List",
    description:
      "I built a To-Do List application with HTML, CSS, and JavaScript, focusing on simplicity and usability. The application allows users to add, delete, and mark tasks as completed, ensuring effective task tracking. With a responsive design, the project delivers a seamless experience across different devices while highlighting my skills in DOM manipulation, event handling, and front-end development fundamentals.",
    descriptionTr:
      "Basitlik ve kullanılabilirliğe odaklanarak HTML, CSS ve JavaScript ile bir To-Do List uygulaması geliştirdim. Uygulama, kullanıcıların görev ekleme, silme ve tamamlanan görevleri işaretleme işlemlerini yapabilmesine imkân tanır. Duyarlı tasarımı sayesinde farklı cihazlarda sorunsuz çalışır. Bu proje, DOM manipülasyonu, event handling (olay yönetimi) ve temel frontend geliştirme becerilerimi ortaya koymaktadır.",
    githubLink: "https://github.com/murathanabanoz/To-Do-List--JavaScript-",
    viewLink: "https://to-do-list-java-script-ten.vercel.app/",
    buttons: ["Html", "Css", "JavaScript"],
  },
  {
    image:
      "https://media.istockphoto.com/id/1471521270/tr/foto%C4%9Fraf/a-female-hand-and-a-shopping-cart-icon-concept-of-starting-a-sale-online-shopping.jpg?s=612x612&w=0&k=20&c=BWAeFsqceMozUyXcjhj_nf_7SWggnSLTIn25w1nkvog=",
    title: "E-Ticaret",
    description:
      "I developed an e-commerce project using React.js. The application includes core features such as product listing, filtering, adding items to the cart, and removing them. By leveraging a component-based architecture, I improved code readability and ensured reusability. I used React Hooks for state management, and with a responsive design, the application runs smoothly on both desktop and mobile devices.",
    descriptionTr:
      "React.js ile bir e-ticaret projesi geliştirdim. Projede ürünlerin listelenmesi, filtrelenmesi, sepete eklenmesi ve silinmesi gibi temel işlevler yer alıyor. Component tabanlı yapı sayesinde kodun okunabilirliğini artırdım ve yeniden kullanılabilirliği sağladım. State yönetimi için React Hooks kullandım. Ayrıca responsive tasarım sayesinde uygulama hem masaüstü hem de mobil cihazlarda sorunsuz bir şekilde çalışabiliyor.",
    githubLink: "https://github.com/murathanabanoz/e-ticaret-project",
    viewLink: "https://e-ticaret-project.vercel.app/",
    buttons: ["React", "Redux", "Tailwind"],
  },
  {
    image:
      "https://d17wu0fn6x6rgz.cloudfront.net/img/w/tarif/mgt/pizza_14_11zon.webp",
    title: "Pizza Sipariş Uygulaması",
    description:
      "A dynamic pizza ordering application that allows users to customize their pizzas by selecting from various toppings, sizes, and crust types. The project features an intuitive user interface, real-time order updates, and a secure payment system. Built using React.js for the front-end and Node.js with Express for the back-end, the application ensures a seamless and efficient ordering experience.",
    descriptionTr:
      "Kullanıcıların çeşitli malzemeler, boyutlar ve hamur türleri arasından seçim yaparak pizzalarını özelleştirmelerine olanak tanıyan dinamik bir pizza sipariş uygulaması. Proje, kullanıcı dostu bir arayüz, gerçek zamanlı sipariş güncellemeleri ve güvenli bir ödeme sistemi sunar. Front-end için React.js ve back-end için Node.js ile Express kullanılarak oluşturulan uygulama, sorunsuz ve verimli bir sipariş deneyimi sağlar.",
    githubLink: "https://github.com/murathanabanoz/Pizza-Siparis",
    viewLink: "https://pizza-siparis-cyan.vercel.app/",
    buttons: ["React", "Redux", "Axios"],
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
              buttons={project.buttons}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
