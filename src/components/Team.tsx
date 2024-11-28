// import { InfiniteMovingCards } from "./ui/infinite-moving-cards";


const team = [
  {
    avatar: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    name: "Kin",
    title: "Physiotherapist, Professional Boxer, Gym Trainer",

  },
  {
    avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
    name: "Mahesh",
    title: "Physiotherapist, Chiropractor",

  },
  {
    avatar: "https://randomuser.me/api/portraits/women/79.jpg",
    name: "Abhishek",
    title: "Professional Gym Trainer, Administrative Personnel",

  },

]
const Team = () => {


  return (
    <section className="py-28 font-manrope">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl">
          <h3 className="text-text text-5xl font-semibold sm:text-4xl">
            Meet our team
          </h3>

        </div>
        <div className="mt-12">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {
              team.map((item, idx) => (
                <li key={idx} className="flex gap-4  items-center">
                  {/* <div className="flex-none h-28 w-28 md:h-40 md:w-1/3">
                    <img
                      src={item.avatar}
                      className="w-full h-full rounded-full"
                      alt=""
                    />
                  </div> */}
                  <div>
                    <h4 className="text-text font-semibold sm:text-lg">{item.name}</h4>
                    <p className="text-gray-500">{item.title}</p>
                    <div className="mt-3 flex gap-4 text-gray-400">
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




// function Team() {
//   return (
//     <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white  dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
//       <h1 className="text-text text-[55px] font-heading font-semibold my-10 md:self-start md:pl-40  ">
//         Our Team
//       </h1>
//       <InfiniteMovingCards
//         items={team}
//         direction="left"
//         speed="slow"
//       />
//     </div>
//   );
// }


export default Team
