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
      <div className="flex flex-col space-y-3 sm:space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-3">
          {logoSrc && (
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-25 md:h-25 shrink-0 rounded-md overflow-hidden flex items-center justify-center">
              <img src={logoSrc} className="object-contain w-full h-full p-0.5"/>
            </div>
          )}

          <div className="flex flex-col text-left min-w-0 flex-1">
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-accent-primary break-words">{company}</p>
            <p className="font-semibold text-sm sm:text-base md:text-lg text-accent-primary break-words">{role}</p>
            <p className="font-semibold text-sm sm:text-base md:text-lg text-accent-primary break-words">{location}</p>
          </div>
        </div>

        <p className="text-sm sm:text-base text-accent-primary pt-1 leading-relaxed break-words">{description}</p>
      </div>
    </Card>
  )
}

export default ExperienceCard
