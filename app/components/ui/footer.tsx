const Footer = () => {
  const data = [
    { name: "Email", link: "mailto:m89lee@uwaterloo.ca" },
    { name: "Linkedin", link: "https://www.linkedin.com/in/meganfhlee/" },
    { name: "Github", link: "https://github.com/mzqan" },
  ]

  return (
    <footer
      className="
        relative
        flex
        flex-col sm:flex-row
        w-full
        items-start sm:items-center
        overflow-hidden
        p-5 sm:p-6
        bg-white/40
        backdrop-filter 
        backdrop-blur-sm 
        border-white 
        shadow-lg
        sm:justify-between
        gap-3 sm:gap-0
      "
    >
      <p className="text-xl sm:text-2xl font-semibold text-accent-primary">
        Let's get in touch!
      </p>

      <div className="flex items-start sm:items-center gap-2 sm:gap-4">
        {data.map((link) => (
          <a
            key={link.name}
            href={link.link}
            target="_blank"
            rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
            aria-label={link.name}
            className="
              p-2 sm:px-4 sm:py-2
              rounded-full
              text-base
              md:text-lg
              font-medium
              text-accent-primary
              border
              border-accent-primary/50
              bg-transparent
              hover:bg-accent-primary/10
              transition-colors
              duration-200
              whitespace-nowrap
            "
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer
