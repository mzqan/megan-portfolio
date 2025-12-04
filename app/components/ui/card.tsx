const Card = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div
      className="
      w-11/12 sm:w-4/5 
      rounded-2xl sm:rounded-[3rem]
      p-4 sm:p-6 
      
      bg-white/40 
      backdrop-filter 
      backdrop-blur-sm 
      border-white 
      shadow-lg 

      transition-all
      duration-300
      ease-in-out
      hover:scale-[1.02]
      hover:shadow-xl"
    >
      {children}
    </div>
  )
}

export default Card
