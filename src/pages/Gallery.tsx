import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
  thumbnail?: string; // Optional, for video thumbnails
}

interface LightboxContent {
  isOpen: boolean;
  type: MediaType | null;
  content: React.ReactNode | null;
  videoId?: string; // Add videoId to the lightbox state
}

const Gallery: React.FC = () => {
  const { videoId } = useParams(); // Get the videoId from the URL
  const [lightbox, setLightbox] = useState<LightboxContent>({
    isOpen: false,
    type: null,
    content: null,
    videoId: undefined,
  });

  const photos: MediaItem[] = [
    // ... (same as before)
    {
      id: "dry-needle-treatment",
      title: "Dry Needle Treatment",
      src: "/treatment1.jpg",
      type: "image",
      size: "h-[350px] w-[270px]",
    },
    {
      id: "massage-treatment",
      title: "Massage Treatment",
      src: "/massage.jpg",
      type: "image",
      size: "h-[250px] w-[270px]",
    },
    {
      id: "dumbell-workout",
      title: "Dumbell Workout",
      src: "/dumbbell.jpg",
      type: "image",
      size: "h-[350px] w-[270px]",
    },
    {
      id: "treatment-2",
      title: "",
      src: "/treatment2.jpg",
      type: "image",
      size: "h-[250px] w-[270px]",
    },
    {
      id: "treatment-3",
      title: "",
      src: "/treatment3.jpg",
      type: "image",
      size: "h-[300px] w-[270px]",
    },
    {
      id: "treatment-4",
      title: "",
      src: "/treatment4.jpg",
      type: "image",
      size: "h-[250px] w-[270px]",
    },
  ];

  const videos: MediaItem[] = [
    // ... (same as before)
    {
      id: "PhysiotherapyVideo1",
      title: "Physiotherapy",
      src: "/treatment-video1.mp4",
      type: "video",
      thumbnail: "/PhysiotherapyVideoThumbnail.jpg",
    },
    {
      id: "RehabilitationVideo1",
      title: "Rehabilitation",
      src: "/treatment-video2.mp4",
      type: "video",
      thumbnail: "/RehabilitationVideoThumbnail.jpg",
    },
    {
      id: "BoxingVideo1",
      title: "Boxing",
      src: "/boxing.mp4",
      type: "video",
      thumbnail: "/BoxingVideoThumbnail.jpg",
    },
    {
      id: "FitnessVideo1",
      title: "Fitness",
      src: "/Fitness.mp4",
      type: "video",
      thumbnail: "/FitnessVideoThumbnail.jpg",
    },
    {
      id: "FitnessVideo1",
      title: "Cardio",
      src: "/Fitness2.mp4",
      type: "video",
      thumbnail: "/FitnessVideo2Thumbnail.jpg",
    },
    {
      id: "FitnessVideo2",
      title: "Strength Workout",
      src: "/Fitness3.mp4",
      type: "video",
      thumbnail: "/FitnessVideo3Thumbnail.jpg",
    },
    {
      id: "FitnessVideo3",
      title: "Intensive Workout",
      src: "/Fitness4.mp4",
      type: "video",
      thumbnail: "/FitnessVideo4Thumbnail.jpg",
    },
    {
      id:"StrokeRehabilitationVideo1",
      title: "Stroke Rehabilitation",
      src: "/treatment-video3.mp4",
      type: "video",
      thumbnail: "/StrokeRehabilitationVideoThumbnail.jpg",
    },
    {
      id:"VacuumCupping",
      title: "Vacuum Cupping",
      src: "/treatment-video4.mp4",
      type: "video",
      thumbnail: "/VacuumCuppingVideoThumbnail.jpg",
    },
    {
      id:"HajimaCupping",
      title: "Hajima Cupping",
      src: "/treatment-video5.mp4",
      type: "video",
      thumbnail: "/HajimaCuppingVideoThumbnail.jpg",
    }
  ];

  // Automatically open the lightbox if a videoId is present in the URL
  useEffect(() => {
    if (videoId) {
      const video = videos.find((v) => v.id === videoId);
      if (video) {
        openLightbox(
          video.type,
          <video
            controls
            className="w-full max-h-[400px] rounded-xl object-contain"
          >
            <source src={video.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>,
          video.id
        );
      }
    }
  }, [videoId]);

  const openLightbox = (type: MediaType, content: React.ReactNode, videoId?: string) => {
    setLightbox({ isOpen: true, type, content, videoId });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, type: null, content: null, videoId: undefined });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Link copied to clipboard!");
    });
  };

  return (
    <div className="bg-primary flex flex-col gap-12 px-4 lg:px-10 min-h-screen">
      <Navbar />
      <div className="bg-secondary py-12 rounded-2xl text-white shadow-lg">
        <h1 className="text-4xl font-extrabold mb-8 text-center tracking-tight">
          Our Gallery
        </h1>

        {/* Photos Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center px-20">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className={`group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ${photo.size}`}
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
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              {photo.title && (
                <p className="text-center mt-3 text-lg font-medium">
                  {photo.title}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Videos Section */}
        <h2 className="text-2xl font-bold mt-12 mb-6 text-center">Videos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center px-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 w-[300px] h-[200px]"
              onClick={() =>
                openLightbox(
                  video.type,
                  <video
                    controls
                    className="w-full max-h-[400px] rounded-xl object-contain"
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>,
                  video.id // Pass the video ID to the lightbox
                )
              }
            >
              <img
                src={video.thumbnail || "/default-thumbnail.jpg"}
                alt={video.title}
                className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white bg-opacity-80 p-3 rounded-full">
                  <svg
                    className="w-12 h-12 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
                  </svg>
                </div>
              </div>
              <p className="absolute bottom-2 left-2 text-white font-semibold bg-gray-800 bg-opacity-60 px-2 py-1 rounded">
                {video.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <FooterDark />

      {/* Lightbox */}
      {lightbox.isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 transition-opacity duration-300"
          onClick={closeLightbox}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-2xl relative max-w-lg w-full mx-4 transform transition-transform duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            {lightbox.content}
            {lightbox.type === "video" && lightbox.videoId && (
              <div className="mt-4">
                <p className="text-sm text-gray-600">Share this video:</p>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={`https://www.musclescareclinic.com/about/gallery/video/${lightbox.videoId}`}
                    readOnly
                    className="flex-1 p-2 border border-gray-300 rounded-lg text-sm"
                  />
                  <button
                    onClick={() =>
                      copyToClipboard(`https://www.musclescareclinic.com/about/gallery/video/${lightbox.videoId}`)
                    }
                    className="p-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-200"
                  >
                    Copy
                  </button>
                </div>
              </div>
            )}
            <button
              className="absolute top-4 right-4 text-black bg-gray-400 hover:bg-gray-300 rounded-full p-3 transition-colors duration-200"
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