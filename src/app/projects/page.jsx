'use client';
import React, { useState } from 'react';
import PropTypes from "prop-types";
import Navbar from '/workspaces/cs220-portfolio-team-3-kaiden-gustavo-thomas/src/components/Navbar component/Navbar.jsx';
import Footer from '/workspaces/Kaiden-Nielsen-Final/src/components/Footer component/Footer.jsx';//fixed
import '/workspaces/Kaiden-Nielsen-Final/src/components/Footer component/Footer.css';//fixed
import ProjectCard from "src/components/Project Card component/ProjectCard.jsx";//fixed
import "src/components/Project Card component/ProjectCard.css";//fixed
import ThemeSwitcher from '/workspaces/Kaiden-Nielsen-Final/src/components/Theme Switcher/ThemeSwitcher.jsx'; //fixed
import '/workspaces/Kaiden-Nielsen-Final/src/components/Theme Switcher/ThemeSwitcher.css'; //fixed

export const ProjectsPage = {
  title: "Portfolio - Projects",
  description: "The projects page of my portfolio.",
};

export default function Projects() {
  const ProjectCard = ({ logo, name, content, link }) => {
    return (
      <div data-testid="projectCard" className="project-card">
        <div>
          <img data-testid="projectCardLogo" src={logo} alt={`${name} Logo`} className="project-card-logo" />
          <h2 data-testid="projectCardName">{name}</h2>
        </div>
        <div>
          <p data-testid="projectCardContent">{content}</p>
          <a data-testid="projectCardLink" href={link} target="_blank" rel="noreferrer">
            <img src="/link.svg" alt="" /> View Project
          </a>
        </div>
      </div>
    );
  };
  const options = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/uses", label: "Uses" },
  ];

  return (
    <div>
      <header>
        <Navbar options={options} />
        <ThemeSwitcher darkClassName="dark" />
      </header>
      <main>
        <section>
          <ProjectCard
            logo="/ensign.png"
            name="Company"
            content="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.."
            link="/project-url"
          />
          {/* Add more ProjectCard components as needed */}
        </section>
        <ProjectCard
            logo="/ensign.png"
            name="Company"
            content="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.."
            link="/project-url"
          />
          <ProjectCard
            logo="/ensign.png"
            name="Company"
            content="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.."
            link="/project-url"
          />
          <ProjectCard
            logo="/ensign.png"
            name="Company"
            content="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.."
            link="/project-url"
          />
      </main>
      <aside>
        <section>{/* Other content goes here */}</section>
      </aside>
      <footer className="footer">
        <ul className="nav-links" style={{ listStyleType: "none", padding: 0 }}>
          <li style={{ display: "inline", marginRight: "10px" }}>
            <a href="/">Home</a>
          </li>
          <li style={{ display: "inline", marginRight: "10px" }}>
            <a href="/about">About</a>
          </li>
          <li style={{ display: "inline", marginRight: "10px" }}>
            <a href="/projects">Projects</a>
          </li>
          <li style={{ display: "inline", marginRight: "10px" }}>
            <a href="/uses">Uses</a>
          </li>
        </ul>
        <div className="copyright">© 2024 John Doe, All rights reserved.</div>
      </footer>
    </div>
  );
}
