// This code is what ExperienceCard now looks like
import Card from "@/components/ui/card"
import { ReactNode } from "react"

export type ExperienceCardProps = {
  company: string
  role: string
  location: string
  description: ReactNode
  images?: Array<{ src: string }>
}

const ExperienceCard = (props: ExperienceCardProps) => {
  const { company, role, location, description, images } = props
  const logoSrc = images && images.length > 0 ? images[0].src : ""

  return (
    <Card>
      <div className="flex flex-col space-y-4">
        
        {/* Company Name and Role Block (Top Row) */}
        <div className="flex items-center space-x-3">
          {/* Logo */}
          {logoSrc && (
            <div className="w-25 h-25 shrink-0 bg-white border border-gray-200 rounded-md overflow-hidden flex items-center justify-center">
              <img src={logoSrc} className="object-contain w-full h-full p-0.5" alt={`${company} Logo`} />
            </div>
          )}

          {/* Company and Role Text */}
          <div className="flex flex-col text-left">
            {/* Company Name: Large and bold */}
            <p className="text-2xl font-bold text-accent-primary">{company}</p>
            {/* Role: Smaller and slightly lighter */}
            <p className="font-semibold text-lg text-accent-secondary">{role}</p>
            <p className="font-semibold text-lg text-accent-secondary">{location}</p>

          </div>
        </div>

        <p className=" text-accent-secondary pt-1 leading-relaxed">{description}</p>
        
      </div>
    </Card>
  )
}

export default ExperienceCard
