"use client"

import { Timeline, TimelineProps } from "@/components/ui/timeline"

const ExperienceData: TimelineProps["data"] = [
  {
    title: "2025",
    subtitle: "Sep - Dec",
    company: "Ford Motor Company",
    role: "Software Engineering Intern",
    location: "Oakville, ON",
    description: (
      <>
        Building a performance-reporting and tooling portal with
        React, Next.JS, TypeScript, MYSQL and Python allowing test engineers to
        track and triage 300+ KPIs for regressions.
      </>
    ),
    images: [{ src: "/ford.png" }],
  },
  {
    title: "2025",
    subtitle: "Jan - Apr",
    company: "Renison University College",
    role: "IT Systems Intern",
    location: "Waterloo, ON",
    description: (
      <>
        Building a <span className="font-bold">performance-reporting and tooling</span> portal with{" "}
        <span className="font-bold">React, Next.JS, TypeScript, MYSQL and Python</span>, allowing test engineers to
        track and triage <span className="font-bold">300+ </span>
        KPIs for regressions.
      </>
    ),
    images: [{ src: "/Renison.png" }],
  },
  {
    title: "2024",
    subtitle: "Jul - Aug",
    company: "University Health Network",
    role: "Research Volunteer",
    location: "Toronto, ON",
    description: (
      <>
        Building a <span className="font-bold">performance-reporting and tooling</span> portal with{" "}
        <span className="font-bold">React, Next.JS, TypeScript, MYSQL and Python</span>, allowing test engineers to
        track and triage <span className="font-bold">300+ </span>
        KPIs for regressions.
      </>
    ),
    images: [{ src: "/UHN.jpg" }],
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="flex w-full h-screen bg-[url(/background_ext.png)] bg-top bg-cover
      relative
        after:absolute after:inset-0
        after:bg-linear-to-b
        
        after:from-foreground
        after:via-foreground/25 after:via-7.5%
        after:to-transparent after:to-16%
        
        after:z-0
    "
    >
      <Timeline data={ExperienceData} />
    </section>
  )
}
