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
        Building a performance-reporting portal with React, Next.JS, TypeScript, MYSQL and Python allowing test engineers
        to evaluate and track 300+ KPIs, efficiently triage regressions, and schedule tests on lab units.
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
        Developing Python and VBA scripts to automate critical security and operational audits, such as flagging of
        network switches for port decomissioning and reviwing MS Active Directory security groups for a 500+ employee
        organization.
      </>
    ),
    images: [{ src: "/Renison.jpg" }],
  },
  {
    title: "2024",
    subtitle: "Jul - Aug",
    company: "University Health Network",
    role: "Research Volunteer",
    location: "Toronto, ON",
    description: (
      <>
        Supporting data migration process for 15,000+ clinical and laboratory records by performing the extraction,
        cleaning and cosolidation of fragmented data across existing sources.
      </>
    ),
    images: [{ src: "/UHN.jpg" }],
  },
]

const Experience = () => {
  return (
    <section
      id="experience"
      className="
      flex w-full justify-center
      bg-[url(/background_ext.png)] bg-top bg-cover bg-repeat-y
      relative
    "
    >
      <Timeline data={ExperienceData} />
    </section>
  )
}

export default Experience
