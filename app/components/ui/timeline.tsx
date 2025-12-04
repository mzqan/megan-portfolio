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
      const rect = contentRef.current.getBoundingClientRect()
      setContentHeight(rect.height)
    }
  }, [data])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  })

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, contentHeight])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  return (
    <div className="flex w-full px-4 sm:px-6 md:px-10 z-10" ref={containerRef}>
      <div ref={contentRef} className="relative max-w-7xl mx-auto pb-40 sm:pb-60 md:pb-80 mt-2 w-full">
                <div
          style={{
            height: contentHeight + "px",
          }}
          className="absolute left-[11px] sm:left-[15px] md:left-[19px] top-0 w-[2px] bg-gradient-to-b from-transparent from-[0%] via-accent-primary/30 to-transparent to-[79%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute left-0 top-0 w-[2px] bg-gradient-to-t from-accent-primary/5 via-accent-secondary to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
  
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-20 sm:top-32 md:top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 rounded-full bg-primary/40 flex items-center justify-center absolute left-0 sm:left-0 md:left-0 z-40">
                <div className="h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-accent-primary border border-neutral-300" />
              </div>
              <div className="flex flex-col font-bold text-accent-secondary">
                <h2 className="text-2xl text-left pl-20 md:text-4xl md:pl-20 md:block hidden">{item.title}</h2>
                <h2 className="text-sm mb-4 text-left pl-20 md:text-xl md:pl-20 md:block hidden">{item.subtitle}</h2>
              </div>
            </div>

            <div className="relative pl-12 sm:pl-16 md:pl-20 pr-2 sm:pr-4 md:pl-4 w-full">
              <div className="flex flex-col font-bold text-accent-secondary mb-2 sm:mb-3">
                <h2 className="md:hidden block text-xl sm:text-2xl text-left">{item.title}</h2>
                <h2 className="md:hidden block text-xs sm:text-sm mb-2 sm:mb-4 text-left">{item.subtitle}</h2>
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
