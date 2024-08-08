import React from 'react';
import './Projects.css';
import project1 from './project1.PNG';
import project2 from './project2.PNG';
import project3 from './project3.PNG';

const Projects = () => {
  return (
    <section id='projects'>
      <p className='project-title'>My Projects</p>

      <div className="container">
      
        <div className="image">
          <img src={project3} alt="Project 3" />
        </div>
        
        <div className="text">
        <p className=''>Reliane Digital Website Clone :</p>
          <ul>
            <li>User Authentication: Secure user login to access personalized features.</li>
            <li> Provide an intuitive registration process for new users to create accounts</li>
            <li>Implement backend functionalities to fetch data seamlessly from the server</li>
            <li>FullStack Personal Project with fully functional frontend and backend</li>
          </ul>
          <div className="links">
            <button className="button-link" onClick={() => window.open("https://relianceclone-frontend.vercel.app/", "_blank")}>
              Visit Website
            </button>
            <button className="button-link" onClick={() => window.open("https://github.com/CAREFREE-VILLAGER/Airgarage-clone-by-Carefree/tree/main", "_blank")}>
              GitHub Repo
            </button>
          </div>
        </div>
      </div>





      <div className="container">
      
        <div className="image">
          <img src={project1} alt="Project 1" />
        </div>
        
        <div className="text">
        <p className=''>AirGarage Website Clone :</p>
          <ul>
            <li>User Authentication: Secure user login to access personalized features.</li>
            <li>Find Parking: Search for available parking spots based on location.</li>
            <li>Customer Support Center: Get assistance for parking violations, rental issues, and more.</li>
            <li>Responsive Navbar: Navigation bar that adapts to different pages.</li>
          </ul>
          <div className="links">
            <button className="button-link" onClick={() => window.open("https://airgarage-clone-by-carefree.vercel.app", "_blank")}>
              Visit Website
            </button>
            <button className="button-link" onClick={() => window.open("https://github.com/CAREFREE-VILLAGER/Airgarage-clone-by-Carefree/tree/main", "_blank")}>
              GitHub Repo
            </button>
          </div>
        </div>
      </div>

      <br />

      <div className="container">
        <div className="image">
          <img src={project2} alt="Project 2" />
        </div>
        <div className="text">
        <p className=''>Batman's Resume :</p>
          <ul>
            <li>Project Overview: Content: HTML file (index.html) structures Batman's resume with sections for personal details, skills, achievements, and superpowers.</li>
            <li>Styling: External CSS (Batman.css) provides a visually appealing, dark-themed design with flexbox layout, animations, and personalized background images.</li>
          </ul>
          <div className="links">
            <button className="button-link" onClick={() => window.open("https://heartfelt-salamander-6f5a0b.netlify.app", "_blank")}>
              Visit Website
            </button>
            <button className="button-link" onClick={() => window.open("https://github.com/CAREFREE-VILLAGER/bookish-resume", "_blank")}>
             GitHub Repo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
