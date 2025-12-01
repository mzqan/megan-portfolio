"use client"

const Card = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="w-4/5 rounded-[3rem] p-6 bg-white/40 backdrop-filter backdrop-blur-sm border-white shadow-lg">
      {children}
    </div>
  )
}

export default Card
