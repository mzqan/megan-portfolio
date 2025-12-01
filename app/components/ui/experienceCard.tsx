"use client"

import Card from "@/components/ui/card"
import { ReactNode } from "react"

export type ExperienceCardProps = {
  company: string
  role: string
  location: string
  description: ReactNode
  images: Array<{ src: string }>
}

const ExperienceCard = (props: ExperienceCardProps) => {
  const { company, role, location, description, images } = props
  const logoSrc = images[0].src

  return (
    <Card>
      <div className="flex flex-col space-y-4">
        
        <div className="flex items-center space-x-3">
          {logoSrc && (
            <div className="w-25 h-25 shrink-0 bg-white border border-gray-200 rounded-md overflow-hidden flex items-center justify-center">
              <img src={logoSrc} className="object-contain w-full h-full p-0.5" alt={`${company} Logo`} />
            </div>
          )}

          <div className="flex flex-col text-left">
            <p className="text-2xl font-bold text-accent-primary">{company}</p>
            <p className="font-semibold text-lg text-accent-primary">{role}</p>
            <p className="font-semibold text-lg text-accent-primary">{location}</p>

          </div>
        </div>

        <p className=" text-accent-primary pt-1 leading-relaxed">{description}</p>
        
      </div>
    </Card>
  )
}

export default ExperienceCard
