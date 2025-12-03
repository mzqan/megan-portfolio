import { useScroll, useTransform, motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import ExperienceCard, { ExperienceCardProps } from "@/components/ui/experienceCard"

export type TimelineProps = {
  data: Array<
    ExperienceCardProps & {
      title: string
      subtitle: string
    }
  >
}

export const Timeline = (props: TimelineProps) => {
  const { data } = props
  const contentRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [contentHeight, setContentHeight] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.offsetHeight)
    }
  }, [data])

  const { scrollYProgress } = useScroll({
    target: containerRef, // Keep this if the container is the scrolling element, or remove if the whole window scrolls.
    offset: ["start start", "end end"],
  })

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, contentHeight])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  return (
    <div className="flex w-full sm:px-10 px-6 z-10" ref={containerRef}>
      <div ref={contentRef} className="relative max-w-7xl mx-auto pb-80 mt-2">
        <div
          style={{
            height: contentHeight + "px",
          }}
          className="absolute md:left-8 left-8 top-0 w-0.5 bg-red/50"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-0.5 bg-linear-to-b from-accent-primary via-accent-primary to-transparent rounded-full"
          />
        </div>

        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 w-10 rounded-full bg-primary/40 flex items-center justify-center absolute left-3 md:left-3 z-40">
                <div className="h-4 w-4 rounded-full bg-accent-primary border border-neutral-300 p-2" />
              </div>
              <div className="flex flex-col font-bold text-accent-secondary">
                <h2 className="text-2xl text-left pl-20 md:text-4xl md:pl-20 md:block hidden">{item.title}</h2>
                <h2 className="text-sm mb-4 text-left pl-20 md:text-xl md:pl-20 md:block hidden">{item.subtitle}</h2>
              </div>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <div className="flex flex-col font-bold text-accent-secondary">
                <h2 className="md:hidden block text-2xl text-left">{item.title}</h2>
                <h2 className="md:hidden block text-sm mb-4 text-left">{item.subtitle}</h2>
              </div>
              
              <ExperienceCard
                company={item.company}
                role={item.role}
                location={item.location}
                description={item.description}
                images={item.images}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
