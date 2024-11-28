import { FocusCards } from "./ui/focus-cards";
import { Link } from "react-router-dom";

const ServicePreview = () => {
  const cards = [

    {
      title: "Stretching",
      src: "/stretching.jpg",
      dest: '/services/#stretching'
    },
    {
      title: "Chiropractic Therapy",
      src: "/chriopractor.png",
      dest: "services/#chriopractor"
    },
    {
      title: "Needle Therapy",
      src: "/needle.jpg",
      dest: "services/#needle"
    },
    {
      title: "Cupping Therapy",
      src: "/cupping.png",
      dest: "services/#cupping"
    },
    {
      title: "Full Body Relaxation",
      src: "/relax.jpg",
      dest: "services/#relax"
    },
    {
      title: "Kinesiology Tape",
      src: "/tape.webp",
      dest: "services/#kinesiology"
    },
    {
      title: "Cryotherapy",
      src: "/cryo.webp",
      dest: "services/#cryo"
    },
    {
      title: "Boxing and Fitness Boxing",
      src: "/boxing.jpg",
      dest: "services/#boxing"
    },
    {
      title: "High-Intensity Interval Training (HIIT)",
      src: "/hiit.webp",
      dest: "services/#hiit"
    },
    {
      title: "Personal Circuit Training",
      src: "/circuit.webp",
      dest: "services/#circuit"
    }

  ];

  return (
    <div>

      <div className="xl:hidden flex flex-col gap-10 items-center   ">
        <div className="col-span-2 row-span-2 md:h-24 md:p-5 md:pl-10 pt-[120px] ">
          <h1 className="font-manrope  text-text my-8 text-5xl md:font-semibold font-semibold">Our Services</h1>
        </div>


        <Link to="/services/#cupping" className="relative grid  w-full h-80 max-w-[24rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
          <div
            className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cupping bg-cover bg-clip-border bg-center text-gray-700 shadow-none"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/60 via-black/50 to-transparent"></div>
          </div>
          <div className="relative p-6 px-6 py-14 md:px-12">
            <h5 className="block  font-manrope text-xl antialiased font-semibold leading-snug tracking-normal text-white">
              Cupping Therapy
            </h5>
          </div>

        </Link>



        <Link to="/services/#chriopractor" className="relative grid  w-full h-80 max-w-[24rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
          <div
            className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-chriopractor bg-cover bg-clip-border bg-center text-gray-700 shadow-none"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/60 via-black/50 to-transparent"></div>
          </div>
          <div className="relative p-6 px-6 py-14 md:px-12">
            <h5 className="block  font-manrope text-xl antialiased font-semibold leading-snug tracking-normal text-white">
              Chiropractic Therapy
            </h5>
          </div>
        </Link>



        <Link to="/services/#needle" className="relative grid  w-full h-80 max-w-[24rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
          <div
            className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-needle bg-cover bg-clip-border bg-center text-gray-700 shadow-none"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/60 via-black/50 to-transparent"></div>
          </div>
          <div className="relative p-6 px-6 py-14 md:px-12">
            <h5 className="block  font-manrope text-xl antialiased font-semibold leading-snug tracking-normal text-white">
              Needle Therapy
            </h5>
          </div>
        </Link>



        <Link to="/services/#relax" className="relative grid  w-full h-80 max-w-[24rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
          <div
            className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-relax bg-cover bg-clip-border bg-center text-gray-700 shadow-none"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/60 via-black/50 to-transparent"></div>
          </div>
          <div className="relative p-6 px-6 py-14 md:px-12">
            <h5 className="block  font-manrope text-xl antialiased font-semibold leading-snug tracking-normal text-white">
              Full Body Relaxation
            </h5>
          </div></Link>



        <Link to="services/#stretching" className="relative grid  w-full h-80 max-w-[24rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
          <div
            className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-stretching bg-cover bg-clip-border bg-center text-gray-700 shadow-none"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/60 via-black/50 to-transparent"></div>
          </div>
          <div className="relative p-6 px-6 py-14 md:px-12">
            <h5 className="block  font-manrope text-xl antialiased font-semibold leading-snug tracking-normal text-white">
              Stretching
            </h5>
          </div>
        </Link>



        <Link to="/services#kinesiology" className="relative grid  w-full h-80 max-w-[24rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
          <div
            className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-tape bg-cover bg-clip-border bg-center text-gray-700 shadow-none"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/60 via-black/50 to-transparent"></div>
          </div>
          <div className="relative p-6 px-6 py-14 md:px-12">
            <h5 className="block  font-manrope text-xl antialiased font-semibold leading-snug tracking-normal text-white">
              Kinesiology Tape
            </h5>
          </div>
        </Link>



        <Link to="/services#cryo" className="relative grid  w-full h-80 max-w-[24rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
          <div
            className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cryo bg-cover bg-clip-border bg-center text-gray-700 shadow-none"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/60 via-black/50 to-transparent"></div>
          </div>
          <div className="relative p-6 px-6 py-14 md:px-12">
            <h5 className="block  font-manrope text-xl antialiased font-semibold leading-snug tracking-normal text-white">
              Cryotherapy
            </h5>
          </div>
        </Link>




        <Link to="/services/#boxing" className="relative grid  w-full h-80 max-w-[24rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
          <div
            className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-boxing bg-cover bg-clip-border bg-center text-gray-700 shadow-none"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/60 via-black/50 to-transparent"></div>
          </div>
          <div className="relative p-6 px-6 py-14 md:px-12">
            <h5 className="block  font-manrope text-xl antialiased font-semibold leading-snug tracking-normal text-white">
              Boxing and Fitness Boxing
            </h5>
          </div>
        </Link>




        <Link to="/services/#hiit" className="relative grid  w-full h-80 max-w-[24rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
          <div
            className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-hiit bg-cover bg-clip-border bg-center text-gray-700 shadow-none"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/60 via-black/50 to-transparent"></div>
          </div>
          <div className="relative p-6 px-6 py-14 md:px-12">
            <h5 className="block  font-manrope text-xl antialiased font-semibold leading-snug tracking-normal text-white">
              High-Intensity Interval Training (HIIT)
            </h5>
          </div>
        </Link>

        <Link to="/services#circuit" className="relative grid  w-full h-80 max-w-[24rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
          <div
            className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-circuit bg-cover bg-clip-border bg-center text-gray-700 shadow-none"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/60 via-black/50 to-transparent"></div>
          </div>
          <div className="relative p-6 px-6 py-14 md:px-12">
            <h5 className="block  font-manrope text-xl antialiased font-semibold leading-snug tracking-normal text-white">
              Personal Circuit Training
            </h5>
          </div>
        </Link>




      </div>

      <div className="hidden xl:flex flex-col items-start">
        <h1 className=" font-heading text-text text-[64px] xl:mb-16 xl:ml-36 md:font-semibold font-semibold">Our Services</h1>
        <FocusCards cards={cards} />
      </div>


    </div>
  )
}

export default ServicePreview
