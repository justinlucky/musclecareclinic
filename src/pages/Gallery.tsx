import React, { useState } from "react";
import FooterDark from "../components/FooterDark";
import Navbar from "../components/Navbar";

// Define types for media items
type MediaType = "image" | "video";

interface MediaItem {
  id: string;
  title: string;
  src: string;
  type: MediaType;
  size?: string; // Optional, only applicable for images
}

interface LightboxContent {
  isOpen: boolean;
  type: MediaType | null;
  content: React.ReactNode | null;
}

const Gallery: React.FC = () => {
  const [lightbox, setLightbox] = useState<LightboxContent>({
    isOpen: false,
    type: null,
    content: null,
  });

  const photos: MediaItem[] = [
    {
      id: "dry-needle-treatment",
      title: "Dry Needle Treatment",
      src: "/treatment1.jpg",
      type: "image",
      size: "h-[350px] w-[250px]",
    },
    {
      id: "massage-treatment",
      title: "Massage Treatment",
      src: "/treatment2.jpg",
      type: "image",
      size: "h-[250px] w-[250px]",
    },
  ];

  const videos: MediaItem[] = [
    {
      id: "video1",
      title: "Physiotherapy",
      src: "/treatment-video1.mp4",
      type: "video",
    },
    {
      id: "video2",
      title: "Rehabilitation",
      src: "/treatment-video2.mp4",
      type: "video",
    },
  ];

  const openLightbox = (type: MediaType, content: React.ReactNode) => {
    setLightbox({ isOpen: true, type, content });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, type: null, content: null });
  };

  return (
    <div className="bg-primary flex flex-col gap-10 px-5 min-h-screen">
      <Navbar />
      <div className="bg-secondary py-10  rounded-xl text-white">
        <h1 className="text-3xl font-bold mb-6 text-center">Gallery</h1>
        <div className=" flex flex-wrap gap-10 justify-center">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className={`rounded overflow-hidden cursor-pointer ${photo.size}`}
              onClick={() =>
                openLightbox(
                  photo.type,
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover"
                  />
                )
              }
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover"
              />
              <p className="text-center mt-2">{photo.title}</p>
            </div>
          ))}

          {videos.map((video) => (
            <div
              key={video.id}
              className="rounded overflow-hidden bg-black p-2 cursor-pointer"
              onClick={() =>
                openLightbox(
                  video.type,
                  <video controls className="w-full h-full">
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )
              }
            >
              <video className="w-full h-70 object-cover" muted>
                <source src={video.src} type="video/mp4" />
              </video>
              <p className="text-center mt-2">{video.title}</p>
            </div>
          ))}
        </div>
      </div>
      <FooterDark />

      {lightbox.isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          <div
            className="bg-white p-5 rounded shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            {lightbox.content}
            <button
              className="absolute top-2 right-2 text-black bg-white rounded-full p-2"
              onClick={closeLightbox}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
