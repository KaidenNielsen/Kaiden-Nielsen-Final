'use client';
import React, { useState } from 'react';
import PropTypes from "prop-types";
import Navbar from '/workspaces/cs220-portfolio-team-3-kaiden-gustavo-thomas/src/components/Navbar component/Navbar.jsx';
import Footer from '/workspaces/Kaiden-Nielsen-Final/src/components/Footer component/Footer.jsx';//fixed
import '/workspaces/Kaiden-Nielsen-Final/src/components/Footer component/Footer.css';//fixed
import ArticleCard from ".src/components/Article Card component/ArticleCard.jsx";
import "src/components/Article Card component/ArticleCard.css";
import ThemeSwitcher from '/workspaces/Kaiden-Nielsen-Final/src/components/Theme Switcher/ThemeSwitcher.jsx'; //fixed
import '/workspaces/Kaiden-Nielsen-Final/src/components/Theme Switcher/ThemeSwitcher.css'; //fixed

export const AboutPage = {
  title: "Portfolio - About",
  description: "The about page of my portfolio.",
};

export default function About() {
  const ArticleCard = ({ date, title, content, link }) => {
    return (
      <article data-testid={"articleCard"} className="article-card">
        <div className="article-card-header">
          <time data-testid={"articleCardDate"}>{date}</time>
          <h2 data-testid={"articleCardTitle"}>{title}</h2>
        </div>
        <p data-testid={"articleCardContent"}>{content}</p>
        <a href={link} data-testid={"articleCardLink"}>
          Read article
        </a>
      </article>
    );
  };

  ArticleCard.propTypes = {
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    link: PropTypes.string,
  };

  ArticleCard.defaultProps = {
    link: "#",
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
          {/* <ArticleCard
            title="I'm Jane. I live in New York City, where I develop the future. "
            content="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi..."
            link="/sample-article"
          /> */}
          <h1 className="atitle"> I'm Jane. I live in New York City, where I develop the future</h1>
          <p className="h1_subpara">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi...</p>
        </section>
        <section></section>
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
            <a href="/users">Users</a>
          </li>
        </ul>
        <div className="copyright">© 2024 John Doe, All rights reserved.</div>
      </footer>
    </div>
  );
}
