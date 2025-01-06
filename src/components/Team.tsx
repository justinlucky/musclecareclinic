// import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

import { Link } from "react-router-dom"


const team = [
  {
    avatar: "/kin.jpg",
    name: "Poukinlung Kamei",
    title: "Physiotherapist, Dietician, Professional Boxer",

  },
  {
    avatar: "/abhi.jpg",
    name: "Abhishek",
    title: "Professional Gym Trainer, Administrative",

  },
  {
    avatar: "/mahesh.jpg",
    name: "Mahesh",
    title: "Manager and Administrator",
  },

]
const Team = () => {


  return (
    <section className="py-20 font-manrope">
      <div className="flex flex-col items-center max-w-screen-xl mx-auto px-4 md:px-8 gap-10">
        <div className="max-w-xl">
          <h3 className="text-text text-5xl font-semibold sm:text-4xl text-center">
            Meet our team
          </h3>

        </div>
        <div className="mt-12">
          <ul className="flex flex-wrap items-center justify-center gap-20">
            {
              team.map((item, idx) => (
                <li key={idx} className="flex flex-col justify-center gap-3 items-center text-center">
                  <div className="flex-none h-28 w-28 md:h-40 md:w-40 bg-gold rounded-full p-1">
                    <img
                      src={item.avatar}
                      className="w-full h-full rounded-full object-cover"
                      alt={item.name}
                    />
                  </div>
                  <div>
                    <h4 className="text-text font-semibold sm:text-lg">{item.name}</h4>
                    <p className="text-gray-500">{item.title}</p>
                    <div className="mt-5">
                      <Link to="" className="bg-text text-gold px-4 py-2 rounded-2xl">Reach Out</Link>
                    </div>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </section>
  )
}



export default Team
