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
    "Outside of work, I write about backend architecture, contribute to a couple of open-source tools, and am slowly making my way through every roguelike ever released."
  ],
  skills: ["TypeScript", "Python", "Go", "React", "PostgreSQL", "Docker", "AWS", "GraphQL"],
  email: "jadenkjob875@gmail.com",
  linkedin: "https://www.linkedin.com/in/jaden-job-561491329/",
  github: "https://github.com/V0ID-ISO",
  website: "https://v0id-iso.github.io/Portfolio/",
  // Put a file named resume.pdf next to these HTML files and this link
  // will work automatically. Until then it just 404s harmlessly.
  resumeUrl: "pdfs/Resume.pdf",
  location: "New York, open to remote"
};

const PROJECTS = [
  {
    name: "Realtime Order Pipeline",
    category: "Backend",
    impact: "-40% latency",
    stack: "Go · Kafka · Postgres",
    description: "Rebuilt the order-processing pipeline to stream events instead of polling, cutting p95 latency and handling 3x peak traffic.",
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    name: "Internal CLI Toolkit",
    category: "Tools",
    impact: "200+ weekly users",
    stack: "TypeScript · Node",
    description: "A CLI that wraps deploy, log-tailing, and env-diffing into one tool, replacing five separate scripts across the team.",
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    name: "Design System Component Library",
    category: "Frontend",
    impact: "12 teams adopted",
    stack: "React · Storybook",
    description: "Led the build-out of a shared component library, with docs and visual regression tests, adopted across the org.",
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    name: "Habit Tracker",
    category: "Mobile",
    impact: "Side project",
    stack: "React Native · Supabase",
    description: "A small mobile app for tracking daily habits with streaks and reminders — built to learn React Native end to end.",
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    name: "Network Vulnerability Scanner",
    category: "Security",
    impact: "Side project",
    stack: "Python · Nmap · Flask",
    description: "A wrapper around Nmap that scans a subnet, flags known-vulnerable service versions, and generates a readable HTML report.",
    demoUrl: "#",
    codeUrl: "#"
  }
  // Add more projects by copying one of the objects above and editing it.
  // "category" is used to group projects on enterprise.html — reuse an
  // existing category name to add to that group, or invent a new one.
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

/* -------------------------------------------------------------------------
   Cybersecurity Blog — each post is a write-up with a cover image and a
   list of numbered steps. Each step can have its own screenshot.

   Image tip: the placeholder URLs below (placehold.co) just render a
   labeled gray box so the page looks right before you have real images.
   To use your own: put image files in an "images" folder next to these
   HTML files, then change the URL to something like "images/scan-1.png".
------------------------------------------------------------------------- */
const BLOG_POSTS = [
  {
    title: "Building a Home Lab for Penetration Testing Practice",
    date: "July 2026",
    tags: ["Home Lab", "VirtualBox", "Kali Linux"],
    coverImage: "https://placehold.co/900x420/11151d/6fb7ff?text=Home+Lab+Overview",
    summary: "How I set up an isolated virtual network with a Kali attack box and a couple of deliberately vulnerable targets, so I can practice safely without touching anything real.",
    steps: [
      {
        title: "1. Plan the network topology",
        image: "https://placehold.co/900x420/11151d/7ee6a6?text=Network+Diagram",
        description: "Sketched an isolated host-only network so traffic never reaches the internet or my main LAN — attacker VM on one leg, vulnerable targets on the other."
      },
      {
        title: "2. Install and harden the attack box",
        image: "https://placehold.co/900x420/11151d/f0a3d0?text=Kali+Setup",
        description: "Installed Kali Linux, updated all tooling, and set static IPs so the lab is reproducible every time I rebuild it."
      },
      {
        title: "3. Spin up a vulnerable target",
        image: "https://placehold.co/900x420/11151d/ffcb6b?text=Target+VM",
        description: "Deployed a deliberately vulnerable VM and confirmed it was only reachable from the isolated network, not the host machine."
      }
    ]
  },
  {
    title: "Walking Through a SQL Injection Lab",
    date: "June 2026",
    tags: ["Web App Security", "SQLi", "Burp Suite"],
    coverImage: "https://placehold.co/900x420/11151d/6fb7ff?text=SQL+Injection+Lab",
    summary: "A step-by-step walkthrough of identifying and exploiting a classic SQL injection vulnerability in a training environment, using Burp Suite to inspect requests.",
    steps: [
      {
        title: "1. Recon the login form",
        image: "https://placehold.co/900x420/11151d/7ee6a6?text=Login+Form",
        description: "Mapped out the app's inputs and identified the login form as the first thing worth testing for injection."
      },
      {
        title: "2. Intercept and modify the request",
        image: "https://placehold.co/900x420/11151d/f0a3d0?text=Burp+Suite+Intercept",
        description: "Used Burp Suite's proxy to capture the login request and test how the backend handled a single quote in the username field."
      },
      {
        title: "3. Confirm and document the finding",
        image: "https://placehold.co/900x420/11151d/ffcb6b?text=Findings+Report",
        description: "Confirmed the injection bypassed authentication, then wrote it up the way I would in a real report: steps to reproduce, impact, and a suggested fix."
      }
    ]
  }
  // Add more posts by copying one of the objects above. Add or remove
  // as many "steps" as the walkthrough needs.
];

/* -------------------------------------------------------------------------
   Capstones — bigger projects, usually from school or a bootcamp, shown
   as a case study: cover image, summary, tech stack, and a small gallery.
------------------------------------------------------------------------- */
const CAPSTONES = [
  {
    title: "Implementation of an RFID-Based Access Control System — Senior Capstone",
    date: "March 2026 - June 2026",
    skills: "React · Node.js · AES-256 · PostgreSQL",
    coverImage: "images/STEAM/Title.png",
    summary: "Schools continue to explore new ways to improve security and attendance tracking systems. Traditional attendance methods are vulnerable to human error and inaccurate attendance records. The project focuses on developing an RFID-based attendance management system using a Raspberry Pi, an RFID scanner, and a web-based platform. The objective of the project is to improve the organization of attendance, accuracy, and security within the Brooklyn STEAM Center.",
    highlights: [
      "Threat-modeled the system before writing any code, covering auth, storage, and transit",
      "Implemented client-side AES-256 encryption so the server never sees plaintext files",
      "Presented the finished project and a live demo to a faculty panel"
    ],
    gallery: [
      "https://placehold.co/400x260/11151d/7ee6a6?text=Screenshot+1",
      "https://placehold.co/400x260/11151d/f0a3d0?text=Screenshot+2",
      "https://placehold.co/400x260/11151d/ffcb6b?text=Screenshot+3"
    ],
    links: { writeup: "Docs/20028 - Implementation of a Secure RFID-Based Access Control System.pdf", code: "https://drive.google.com/drive/folders/1Qj3bXn3wzY1tRg9DCzHMKxVNszKKQWCj?usp=sharing" }
  }
  // Add more capstones by copying the object above and editing it.
];

/* -------------------------------------------------------------------------
   Work experience and certifications — shown on enterprise.html
------------------------------------------------------------------------- */
const EXPERIENCE = [
  {
    role: "Tech Squad",
    company: "Brooklyn STEAM Center",
    dates: "Febuary 2026 - June 2026",
    points: [
      "Fixed Broken devices around the Brooklyn STEAM Center and PS.46",
      "Use of software skills to navigate through BIOS and terminal",
      "Documented Completed Tickets for future reference"
    ]
  },
  {
    role: "WorkED Extern",
    company: "WorkED",
    dates: "July 2026 – August 2026",
    points: [
      "Resolved 30+ tickets a week covering hardware, network, and account issues",
      "Wrote internal documentation that cut average resolution time noticeably"
    ]
  }
  // Add more roles the same way — most recent first is conventional.
];

const CERTIFICATIONS = [
  {
    name: "Cybersecurity",
    issuer: "Informational Technology Specialist ",
    date: "Dec 2025",
    credentialUrl: "#"
  },
  {
    name: "Network Security",
    issuer: "Informational Technology Specialist",
    date: "2025",
    credentialUrl: "#"
  }
  {
    name: "Network",
    issuer: "Informational Technology Specialist",
    date: "2025",
    credentialUrl: "#"
  }
  // Add more the same way. Set credentialUrl to "#" if you don't have a
  // public verification link yet.
];
