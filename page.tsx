"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  X,
} from "lucide-react";

type PopupCard = {
  id: string;
  title: string;
  summary: string;
  items: { heading: string; text: string }[];
};

type Project = {
  id: string;
  title: string;
  tag: string;
  short: string;
  problem: string;
  approach: string[];
  insights: string[];
  value: string[];
  tools: string[];
  repo: string;
};

const popupCards: PopupCard[] = [
  {
    id: "bring",
    title: "What I Bring to the Table",
    summary:
      "Business-first thinking, strong communication, adaptability, and a practical approach to analytics.",
    items: [
      {
        heading: "Business-first mindset",
        text: "I focus on using data to support real business decisions. My goal is not only to analyze information, but to explain what it means and how it can help a team move forward.",
      },
      {
        heading: "Clear communication",
        text: "I like presenting insights in a way that is simple, clear, and easy to act on. I believe analysis is most useful when stakeholders understand it quickly.",
      },
      {
        heading: "Adaptability and learning",
        text: "I am comfortable learning new tools, adjusting to new environments, and taking ownership of tasks. That adaptability helps me work well across different projects and teams.",
      },
      {
        heading: "Leadership and critical thinking",
        text: "I try to approach problems with structure, curiosity, and accountability. I enjoy thinking through challenges carefully and helping move work in a practical direction.",
      },
    ],
  },
  {
    id: "growth",
    title: "Growth and Continuous Improvement",
    summary:
      "I grew from focusing mainly on technical work to thinking more deeply about business questions and decision-making.",
    items: [
      {
        heading: "From technical work to business understanding",
        text: "When I first started working with data, I focused mostly on cleaning data, building models, and finding patterns. Over time, I realized that strong analysis begins with understanding the business question behind the data.",
      },
      {
        heading: "What changed in my approach",
        text: "I now start by asking what decision needs to be made, what insight would actually help, and how the analysis can support that outcome.",
      },
      {
        heading: "How it shapes my work today",
        text: "Today I try to make sure every analysis answers a clear question and leads to an insight people can actually use. This has made my work more practical and more aligned with business needs.",
      },
    ],
  },
  {
    id: "approach",
    title: "How I Approach Business Problems",
    summary:
      "A clear process: understand the context, analyze the data, and turn findings into practical recommendations.",
    items: [
      {
        heading: "Step 1 — Understand the context",
        text: "I begin by understanding the problem, the data available, and what decision stakeholders need to make.",
      },
      {
        heading: "Step 2 — Explore and prepare the data",
        text: "I clean the data, review patterns, and identify what matters most to the business problem.",
      },
      {
        heading: "Step 3 — Analyze and identify patterns",
        text: "I use analysis to uncover trends, relationships, and performance drivers that explain what is happening.",
      },
      {
        heading: "Step 4 — Recommend actions",
        text: "I focus on translating findings into recommendations that are clear, practical, and useful for decision-making.",
      },
    ],
  },
];

const projects: Project[] = [
  {
    id: "retail",
    title: "Retail Sales Analysis and Demand Forecasting",
    tag: "Sales Analytics",
    short:
      "Used sales data to identify customer segments, demand patterns, and inventory planning opportunities.",
    problem:
      "Retail companies often need better visibility into which customers drive revenue and how demand changes over time.",
    approach: [
      "Prepared and cleaned sales data",
      "Reviewed customer and sales patterns",
      "Segmented customers using clustering",
      "Built forecasting models to estimate demand trends",
      "Presented findings through visual analysis",
    ],
    insights: [
      "A small customer group drove a large share of total revenue",
      "Some product categories showed seasonal demand spikes",
      "Sales performance varied across regions",
    ],
    value: [
      "Support inventory planning",
      "Improve customer targeting",
      "Help teams prepare for demand shifts",
    ],
    tools: ["Python", "Pandas", "Scikit-learn", "XGBoost", "Excel"],
    repo: "https://github.com/ananyas0210-code/Business-Analytics-Project",
  },
  {
    id: "logistics",
    title: "Logistics Revenue and Route Performance Analysis",
    tag: "Operations Analytics",
    short:
      "Analyzed route and shipment data to highlight revenue opportunities and planning improvements.",
    problem:
      "Logistics teams need visibility into route performance, pricing differences, and regional demand patterns.",
    approach: [
      "Prepared and cleaned shipment data",
      "Compared route-level revenue performance",
      "Reviewed geographic demand patterns",
      "Analyzed pricing and revenue relationships",
    ],
    insights: [
      "Some routes consistently performed better than others",
      "Pricing differed across regions without equal returns",
      "A few strong-demand areas appeared underused",
    ],
    value: [
      "Support route planning",
      "Improve pricing decisions",
      "Help allocate resources more effectively",
    ],
    tools: ["Python", "Excel"],
    repo: "https://github.com/ananyas0210-code/Transportation-Project",
  },
  {
    id: "marketing",
    title: "Social Media Engagement Analytics Dashboard",
    tag: "Marketing Analytics",
    short:
      "Built a dashboard to compare engagement across platforms, posting windows, and audience patterns.",
    problem:
      "Marketing teams need to understand which channels and timing choices create stronger engagement.",
    approach: [
      "Built an interactive dashboard",
      "Compared engagement across platforms",
      "Reviewed response by time and region",
      "Summarized findings into clear recommendations",
    ],
    insights: [
      "Some platforms consistently performed better",
      "Timing affected engagement levels",
      "Audience response varied by geography",
    ],
    value: [
      "Improve campaign planning",
      "Focus on stronger-performing platforms",
      "Support more targeted content strategy",
    ],
    tools: ["Tableau", "Data Visualization"],
    repo: "https://github.com/ananyas0210-code/Data-visualization-project-",
  },
  {
    id: "automotive",
    title: "Digital Transformation in the Automotive Industry",
    tag: "Industry Analysis",
    short:
      "Analyzed how reviews, e-commerce, EV trends, and digital tools are reshaping automotive sales.",
    problem:
      "Automotive companies are adapting to changing customer behavior influenced by digital channels and technology trends.",
    approach: [
      "Reviewed trends in online reviews and customer behavior",
      "Examined e-commerce and digital sales shifts",
      "Analyzed EV adoption and digital marketing themes",
      "Converted findings into business-focused recommendations",
    ],
    insights: [
      "Online reviews influence purchase decisions strongly",
      "Digital marketing improves customer targeting",
      "EV adoption differs across regions",
    ],
    value: [
      "Support digital strategy",
      "Strengthen sentiment tracking",
      "Guide planning for changing market demand",
    ],
    tools: ["Business Research", "Business Intelligence", "Industry Analysis"],
    repo: "https://github.com/ananyas0210-code/Uber-Project",
  },
];

const skills = {
  "Business Analysis": [
    "Requirement Gathering",
    "Stakeholder Communication",
    "Process Mapping",
    "KPI Definition",
    "Business Process Improvement",
  ],
  "Data Analytics": [
    "Python",
    "SQL",
    "Exploratory Data Analysis",
    "Statistical Analysis",
    "Machine Learning",
  ],
  "Business Intelligence": [
    "Tableau",
    "Power BI",
    "Dashboard Development",
    "Data Visualization",
  ],
  "Tools & Platforms": [
    "Excel",
    "GitHub",
    "Linux / Unix",
    "Docker",
    "Cloud Fundamentals",
  ],
};

const experience = [
  {
    role: "Operations Analyst",
    company: "Deutsche Bank",
    date: "Aug 2023 – Aug 2024",
    points: [
      "Supported international banking operations and transaction workflows",
      "Verified and managed international customer cash accounts",
      "Analyzed transaction data to improve reporting accuracy",
      "Supported compliance and audit-related processes",
      "Contributed to process improvement through operational review",
    ],
  },
  {
    role: "Business Analyst Intern",
    company: "Verezo with IBM",
    date: "Jan 2022 – Jan 2023",
    points: [
      "Cleaned and prepared datasets using Python",
      "Optimized SQL queries for extraction and transformation",
      "Conducted exploratory data analysis to identify business trends",
      "Built dashboards and reports for stakeholders",
      "Documented workflows and system processes",
    ],
  },
];

const certifications = [
  "Customer Segmentation — LinkedIn Learning",
  "Critical Thinking — LinkedIn Learning",
  "Global Securities Market Virtual Summit",
  "Commodity Derivatives Market — NCDEX",
];

const extras = [
  "Pet Fed Volunteer – Assisted in organizing and managing pet welfare events",
  "Competitive swimmer and throwball (school-level competitions)",
  "Creative",
  "Adaptability",
  "Critical thinker",
  "Leadership",
];

function SectionTitle({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-8">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#7B5E45]">
        {kicker}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-[#2E241D] md:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 max-w-3xl text-base leading-8 text-[#5C4E45]">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-3xl border border-[#E8DED2] bg-white/80 shadow-[0_10px_40px_-20px_rgba(80,52,28,0.18)] ${className}`}
    >
      {children}
    </div>
  );
}

export default function Page() {
  const [openCard, setOpenCard] = useState<PopupCard | null>(null);
  const [activeProject, setActiveProject] = useState<Project>(projects[0]);

  return (
    <main className="min-h-screen bg-[#F3EADF] text-[#2E241D]">
      <header className="sticky top-0 z-40 border-b border-[#E8DED2] bg-[#F3EADF]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="font-semibold tracking-wide text-[#6F4E37]">AS</div>
          <nav className="hidden gap-6 text-sm text-[#5C4E45] md:flex">
            <a href="#about" className="hover:text-[#6F4E37]">About</a>
            <a href="#skills" className="hover:text-[#6F4E37]">Skills</a>
            <a href="#experience" className="hover:text-[#6F4E37]">Experience</a>
            <a href="#projects" className="hover:text-[#6F4E37]">Projects</a>
            <a href="#certifications" className="hover:text-[#6F4E37]">Certifications</a>
            <a href="#extras" className="hover:text-[#6F4E37]">Extras</a>
            <a href="#contact" className="hover:text-[#6F4E37]">Contact</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#7B5E45]">
            Hello, I’m
          </p>
          <h1 className="mt-3 text-5xl font-bold tracking-tight md:text-6xl">
            Ananya Sureshbabu.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5C4E45]">
            Business Analyst with experience in financial operations, analytics,
            and business intelligence. I enjoy turning data into clear insights
            that help teams make better decisions.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center rounded-2xl bg-[#6F4E37] px-5 py-3 font-medium text-white hover:bg-[#5F4230]"
            >
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center rounded-2xl border border-[#D7C7B7] bg-white px-5 py-3 font-medium text-[#2E241D] hover:border-[#B89B83]"
            >
              Resume <Download className="ml-2 h-4 w-4" />
            </a>
            <a
              href="https://github.com/ananyas0210-code"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-2xl border border-[#D7C7B7] bg-white px-5 py-3 font-medium text-[#2E241D] hover:border-[#B89B83]"
            >
              GitHub <Github className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 space-y-2 text-[#5C4E45]">
            <p>Based in Denton, TX</p>
            <p>Open to Roles: Business Analyst, Data Analyst</p>
          </div>
        </div>

        <Card className="overflow-hidden">
          <div className="p-8">
            <div className="mx-auto h-52 w-52 overflow-hidden rounded-3xl">
              <img
                src="/profile.jpg"
                alt="Ananya Sureshbabu"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mt-6 text-center">
              <h3 className="text-2xl font-semibold">Ananya Sureshbabu</h3>
              <p className="mt-2 text-[#6F4E37]">
                Business Analyst | Data Analytics | Financial Operations
              </p>
            </div>

            <div className="mt-6 space-y-3 text-sm text-[#5C4E45]">
              <a href="mailto:ananya.s0210@gmail.com" className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#6F4E37]" />
                ananya.s0210@gmail.com
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-[#6F4E37]" />
                Denton, Texas
              </div>
              <a
                href="https://www.linkedin.com/in/ananya-sureshbabu-09a057206/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3"
              >
                <Linkedin className="h-4 w-4 text-[#6F4E37]" />
                LinkedIn
              </a>
              <a
                href="https://github.com/ananyas0210-code"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3"
              >
                <Github className="h-4 w-4 text-[#6F4E37]" />
                GitHub
              </a>
            </div>
          </div>
        </Card>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-10">
        <SectionTitle
          kicker="Profile"
          title="Know about me"
        />

        <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
          <Card>
            <div className="p-8">
              <h3 className="text-xl font-semibold">About me</h3>
              <p className="mt-4 leading-8 text-[#5C4E45]">
                I enjoy working with data to understand how businesses perform,
                where improvements can be made, and how insights can support
                better decisions. My background in financial operations and
                analytics has helped me build a practical, business-focused
                approach to analysis.
              </p>
              <div className="mt-6 space-y-2 text-[#5C4E45]">
                <p><span className="font-medium text-[#2E241D]">Approach:</span> keep analysis clear and practical</p>
                <p><span className="font-medium text-[#2E241D]">Strength:</span> turn data into usable insights</p>
                <p><span className="font-medium text-[#2E241D]">Focus:</span> business analysis, reporting, and data-driven decisions</p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="p-8">
              <h3 className="text-xl font-semibold">Education</h3>
              <div className="mt-4 space-y-4 text-[#5C4E45]">
                <div>
                  <p className="font-medium text-[#2E241D]">
                    M.S. Information Systems and Technologies
                  </p>
                  <p>University of North Texas</p>
                </div>
                <div>
                  <p className="font-medium text-[#2E241D]">
                    Bachelor of Commerce (Honours)
                  </p>
                  <p>Finance and Business Analytics</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Creative", "Adaptability", "Critical thinker", "Leadership"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#EFE4D7] px-3 py-2 text-sm text-[#5C4E45]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {popupCards.map((card) => (
            <button
              key={card.id}
              onClick={() => setOpenCard(card)}
              className="rounded-3xl border border-[#E8DED2] bg-white p-6 text-left shadow-[0_10px_40px_-20px_rgba(80,52,28,0.12)] transition hover:-translate-y-1"
            >
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#5C4E45]">
                {card.summary}
              </p>
            </button>
          ))}
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-10">
        <SectionTitle kicker="Skills" title="What I know" />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {Object.entries(skills).map(([group, items]) => (
            <Card key={group}>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{group}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-[#EFE4D7] px-3 py-2 text-sm text-[#5C4E45]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-6 py-10">
        <SectionTitle kicker="Experience" title="My experience" />

        <div className="space-y-6">
          {experience.map((item) => (
            <Card key={item.role}>
              <div className="p-8">
                <div className="flex flex-col justify-between gap-2 md:flex-row md:items-start">
                  <div>
                    <h3 className="text-xl font-semibold">{item.role}</h3>
                    <p className="text-[#6F4E37]">{item.company}</p>
                  </div>
                  <p className="text-sm text-[#5C4E45]">{item.date}</p>
                </div>
                <ul className="mt-5 space-y-3 text-[#5C4E45]">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#8B6B4A]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-10">
        <SectionTitle
          kicker="Projects"
          title="Selected work"
          subtitle="Less academic, more business-focused."
        />

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-4">
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => setActiveProject(project)}
                className={`w-full rounded-3xl border p-6 text-left transition ${
                  activeProject.id === project.id
                    ? "border-[#B89B83] bg-white"
                    : "border-[#E8DED2] bg-white/80"
                }`}
              >
                <div className="mb-3 inline-flex rounded-full bg-[#EFE4D7] px-3 py-1 text-xs font-semibold text-[#6F4E37]">
                  {project.tag}
                </div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5C4E45]">
                  {project.short}
                </p>
              </button>
            ))}
          </div>

          <Card>
            <div className="p-8">
              <div className="inline-flex rounded-full bg-[#EFE4D7] px-3 py-1 text-xs font-semibold text-[#6F4E37]">
                {activeProject.tag}
              </div>
              <h3 className="mt-4 text-3xl font-bold">{activeProject.title}</h3>

              <div className="mt-6 rounded-3xl bg-[#FAF6F1] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7B5E45]">
                  Business Problem
                </p>
                <p className="mt-3 leading-8 text-[#5C4E45]">
                  {activeProject.problem}
                </p>
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7B5E45]">
                    Approach
                  </p>
                  <ul className="mt-3 space-y-3 text-[#5C4E45]">
                    {activeProject.approach.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[#8B6B4A]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7B5E45]">
                    Key Insights
                  </p>
                  <ul className="mt-3 space-y-3 text-[#5C4E45]">
                    {activeProject.insights.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[#A67C52]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7B5E45]">
                  Business Value
                </p>
                <div className="mt-3 grid gap-3 md:grid-cols-3">
                  {activeProject.value.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-[#EFE4D7] p-4 text-sm text-[#5C4E45]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7B5E45]">
                  Tools
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {activeProject.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full bg-[#F7F1EA] px-3 py-2 text-sm text-[#5C4E45]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={activeProject.repo}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center rounded-2xl bg-[#6F4E37] px-5 py-3 font-medium text-white hover:bg-[#5F4230]"
              >
                Open GitHub Project <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </Card>
        </div>
      </section>

      <section id="certifications" className="mx-auto max-w-6xl px-6 py-10">
        <SectionTitle kicker="Certifications" title="Learning" />
        <div className="grid gap-4 md:grid-cols-2">
          {certifications.map((item) => (
            <Card key={item}>
              <div className="p-6 text-[#5C4E45]">{item}</div>
            </Card>
          ))}
        </div>
      </section>

      <section id="extras" className="mx-auto max-w-6xl px-6 py-10">
        <SectionTitle kicker="Extras" title="More about me" />
        <Card>
          <div className="p-8">
            <div className="grid gap-4 md:grid-cols-2">
              {extras.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-[#F7F1EA] p-4 text-[#5C4E45]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Card>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-10">
        <SectionTitle kicker="Contact" title="Connect with me" />
        <Card>
          <div className="grid gap-4 p-8 md:grid-cols-3">
            <a href="mailto:ananya.s0210@gmail.com" className="text-[#5C4E45]">
              <span className="font-medium text-[#2E241D]">Email</span>
              <br />
              ananya.s0210@gmail.com
            </a>
            <a
              href="https://github.com/ananyas0210-code"
              target="_blank"
              rel="noreferrer"
              className="text-[#5C4E45]"
            >
              <span className="font-medium text-[#2E241D]">GitHub</span>
              <br />
              ananyas0210-code
            </a>
            <a
              href="https://www.linkedin.com/in/ananya-sureshbabu-09a057206/"
              target="_blank"
              rel="noreferrer"
              className="text-[#5C4E45]"
            >
              <span className="font-medium text-[#2E241D]">LinkedIn</span>
              <br />
              ananya-sureshbabu-09a057206
            </a>
          </div>
        </Card>
      </section>

      <AnimatePresence>
        {openCard ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenCard(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-[32px] bg-[#F3EADF] shadow-2xl"
            >
              <div className="sticky top-0 flex items-center justify-between border-b border-[#E8DED2] bg-[#F3EADF] px-6 py-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#7B5E45]">
                    Expanded view
                  </p>
                  <h3 className="mt-2 text-2xl font-bold">{openCard.title}</h3>
                </div>
                <button
                  onClick={() => setOpenCard(null)}
                  className="rounded-2xl border border-[#D7C7B7] bg-white p-2 text-[#5C4E45]"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="space-y-5 p-6 md:p-8">
                {openCard.items.map((item) => (
                  <div key={item.heading} className="rounded-3xl bg-white p-6">
                    <h4 className="text-lg font-semibold">{item.heading}</h4>
                    <p className="mt-3 leading-8 text-[#5C4E45]">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </main>
  );
}