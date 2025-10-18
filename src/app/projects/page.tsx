import React from "react";
import styles from "./page.module.css";

function Projects() {
  const projects = [
    {
      title: "FinLux Website",
      description:
        "A sleek and responsive financial management platform for tracking expenses, managing budgets, and visualizing financial trends. Designed with performance, security, and modern UI principles.",
      tech: ["Next.js", "React", "TypeScript", "CSS Modules"],
      link: "https://github.com/Akokodev/FinLux-website",
    },
    {
      title: "Pulse360",
      description:
        "An interactive analytics dashboard providing real-time insights through dynamic charts, API-driven data visualization, and seamless navigation for business intelligence solutions.",
      tech: ["React", "Next.js", "Chart.js", "REST APIs"],
      link: "https://github.com/Akokodev/Pulse360",
    },
    {
      title: "My Backend",
      description:
        "A robust backend service built with FastAPI, offering APIs for authentication, data management, and user interactions. Optimized for scalability, maintainability, and integration with frontend apps.",
      tech: ["FastAPI", "Python", "PostgreSQL", "Docker"],
      link: "https://github.com/Akokodev/my-backend",
    },
    {
      title: "SciLearn App",
      description:
        "A futuristic STEM learning mobile app that integrates animations, tab navigation, and personalized onboarding for an engaging, interactive education experience.",
      tech: ["React Native", "TypeScript", "Expo"],
      link: "https://github.com/Akokodev/SciLearn",
    },
    {
      title: "Laminarea",
      description:
        "An educational app that organizes and displays categorized learning content from WikiBooks with a smooth, polished UI, gradient animations, and intuitive layout design.",
      tech: ["React Native", "Next.js", "API Integration"],
      link: "https://github.com/Akokodev/Laminarea",
    },
    {
      title: "Portfolio Website (v1)",
      description:
        "My first portfolio website built to showcase projects, skills, and achievements. Features animated transitions, responsive design, and elegant component styling.",
      tech: ["Next.js", "React", "CSS Modules", "TypeScript"],
      link: "https://github.com/Akokodev/portfolio-1",
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>My Projects</h1>
      <p className={styles.subtext}>
        A collection of full-stack, web, and mobile applications Ive designed
        and developed — blending creativity, performance, and scalability.  
        Explore more of my work on{" "}
        <a
          href="https://github.com/Akokodev"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.githubLink}
        >
          GitHub @Akokodev
        </a>
        .
      </p>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.desc}>{project.description}</p>
            <div className={styles.tech}>
              {project.tech.map((t, i) => (
                <span key={i} className={styles.techBadge}>
                  {t}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkButton}
            >
              🔗 View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
