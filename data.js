/* =========================================================================
   EDIT YOUR DATA HERE
   This is the ONLY file you should need to touch to update your name,
   bio, links, projects, and achievements. Both index.html and
   projects.html read from this file, so you only edit things once.
========================================================================= */

const PROFILE = {
  name: "Jaden Job",
  role: "Cybersecurity Scholar / WBL Extern",
  tagline: "I build fast, reliable products end to end — from backend systems to the interfaces people actually touch. Currently focused on distributed systems and developer tooling.",
  bio: [
    "I'm a software engineer with 4+ years of experience shipping production systems, from greenfield APIs to large-scale refactors. I care most about code that's easy to delete, and products that feel instant.",
    "Outside of work I write about backend architecture, contribute to a couple of open-source tools, and am slowly making my way through every roguelike ever released."
  ],
  skills: ["Cybersecurity", "Python", "Software Development", "3D-Modeling", "3D-Printing", "Infomation Systems", "Technical Support", "Technical Documentation", "Problem Solving", "Ethical Hacking"],
  email: "jadenkjob875@gmail.com",
  linkedin: "https://www.linkedin.com/in/jaden-job-561491329/",
  github: "https://github.com/V0ID-ISO",
  website: "https://v0id-iso.github.io/Portfolio/",
  // Put a file named resume.pdf next to these HTML files and this link
  // will work automatically. Until then it just 404s harmlessly.
  resumeUrl: "resume.pdf",
  location: "New York, open to remote"
};

const PROJECTS = [
  {
    name: "Realtime Order Pipeline",
    impact: "-40% latency",
    stack: "Go · Kafka · Postgres",
    description: "Rebuilt the order-processing pipeline to stream events instead of polling, cutting p95 latency and handling 3x peak traffic.",
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    name: "Internal CLI Toolkit",
    impact: "200+ weekly users",
    stack: "TypeScript · Node",
    description: "A CLI that wraps deploy, log-tailing, and env-diffing into one tool, replacing five separate scripts across the team.",
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    name: "Design System Component Library",
    impact: "12 teams adopted",
    stack: "React · Storybook",
    description: "Led the build-out of a shared component library, with docs and visual regression tests, adopted across the org.",
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    name: "Habit Tracker",
    impact: "Side project",
    stack: "React Native · Supabase",
    description: "A small mobile app for tracking daily habits with streaks and reminders — built to learn React Native end to end.",
    demoUrl: "#",
    codeUrl: "#"
  }
  // Add more projects by copying one of the objects above and editing it.
];

const ACHIEVEMENTS = [
  {
    date: "2026",
    title: "Promoted to Senior Software Engineer",
    description: "Recognized for leading the order-pipeline rebuild and mentoring two new engineers."
  },
  {
    date: "2025",
    title: "Speaker, LocalDev Meetup",
    description: "Gave a talk on event-driven architecture to an audience of ~150 engineers."
  },
  {
    date: "2024",
    title: "AWS Certified Solutions Architect",
    description: "Associate-level certification, focused on scalable and fault-tolerant system design."
  },
  {
    date: "2023",
    title: "Shipped v1 of the internal CLI toolkit",
    description: "Went from idea to adopted-by-default tool within one quarter."
  }
  // Add more achievements the same way — copy an object above and edit it.
];
