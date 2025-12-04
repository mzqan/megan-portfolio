"use client"

import { Timeline, TimelineProps } from "@/components/ui/timeline"
import Footer from "@/components/ui/footer"
import Image from "next/image"

const ExperienceData: TimelineProps["data"] = [
  {
    title: "2025",
    subtitle: "Sep - Dec",
    company: "Ford Motor Company",
    role: "Software Engineering Intern",
    location: "Oakville, ON",
    description: (
      <>
        Building a performance-reporting portal with React, Next.JS, TypeScript, MYSQL and Python allowing test
        engineers to evaluate and track 300+ KPIs, efficiently triage regressions, and schedule tests on lab units.
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
    images: [{ src: "/renison.png" }],
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
      flex flex-col w-full justify-center
      relative
    "
    >
      <div className="absolute inset-0 z-0 bg-fixed">
        <Image
          src="/background_ext.png"
          alt="Background"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-background via-background/50 to-transparent pointer-events-none" />
      </div>
      <Timeline data={ExperienceData} />
      <Footer />
    </section>
  )
}

export default Experience
