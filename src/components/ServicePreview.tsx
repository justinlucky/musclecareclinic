import { Link } from "react-router-dom";

const ServicePreview = () => {
  const cards = [
    { id: "stretching-card", title: "Stretching", src: "/stretching.jpg" },
    { id: "chiropractic-therapy", title: "Chiropractic Therapy", src: "/chriopractor.png" },
    { id: "needle-therapy", title: "Needle Therapy", src: "/needle.jpg" },
    { id: "cupping-therapy", title: "Cupping Therapy", src: "/cupping.png" },
    { id: "full-body-relaxation", title: "Full Body Relaxation", src: "/relax.jpg" },
    { id: "kinesiology-taper", title: "Kinesiology Tape", src: "/tape.webp" },
    { id: "cryotherapy", title: "Cryotherapy", src: "/cryo.webp" },
    { id: "boxing-and-fitness", title: "Boxing and Fitness Boxing", src: "/boxing.jpg" },
    { id: "high-intensity-interval-training", title: "HIIT", src: "/hiit.webp" },
    { id: "circuit-training", title: "Circuit Training", src: "/circuit.webp" },
  ];

  return (
    <div className="p-6">
      <div className="xl:hidden flex flex-col gap-10 items-center">
        {/* Mobile/Table Mode */}
        <div className="col-span-2 row-span-2 md:h-24 md:p-5 md:pl-10 pt-[120px]">
          <h1 className="font-manrope text-text my-8 text-5xl md:font-semibold font-semibold">Our Services</h1>
        </div>
        {cards.map((item) => (
          <Link
            key={item.id}
            to={`/service/${item.id}`}
            className="relative grid w-full h-80 max-w-[24rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700"
          >
            <div
              className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-none"
              style={{ backgroundImage: `url(${item.src})` }}
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/60 via-black/50 to-transparent"></div>
            </div>
            <div className="relative p-6 px-6 py-14 md:px-12">
              <h5 className="block font-manrope text-xl antialiased font-semibold leading-snug tracking-normal text-white">
                {item.title}
              </h5>
            </div>
          </Link>
        ))}
      </div>

      {/* Desktop Mode */}
      <div className="hidden xl:grid xl:grid-cols-3 xl:gap-10">
        <h1 className="col-span-3 font-manrope text-text text-6xl font-semibold mb-8">Our Services</h1>
        {cards.map((item) => (
          <Link
            key={item.id}
            to={`/service/${item.id}`}
            className="relative grid w-full h-80 flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700"
          >
            <div
              className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-none"
              style={{ backgroundImage: `url(${item.src})` }}
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/60 via-black/50 to-transparent"></div>
            </div>
            <div className="relative p-6 px-6 py-14 md:px-12">
              <h5 className="block font-manrope text-xl antialiased font-semibold leading-snug tracking-normal text-white">
                {item.title}
              </h5>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServicePreview;
