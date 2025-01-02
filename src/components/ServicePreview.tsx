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
    <div className="p-5">
      <h1 className="font-manrope text-text my-8 text-5xl md:font-semibold font-semibold text-center">
        Our Services
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {cards.map((item) => (
          <Link key={item.id} to={`/service/${item.id}`} className="flex flex-col items-center">
            <div className="w-[200px] h-[200px] flex-shrink-0">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
            <p className="mt-3 text-center font-medium text-text">{item.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServicePreview;
