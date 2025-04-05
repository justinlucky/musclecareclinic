import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import FooterDark from "../components/FooterDark";
import Navbar from "../components/Navbar";

// Define types for media items
type MediaType = "image" | "video";

interface MediaItem {
  id: string;
  title: string;
  src: string;
  type: MediaType;
  size?: string;
  thumbnail?: string;
}

interface LightboxContent {
  isOpen: boolean;
  type: MediaType | null;
  content: React.ReactNode | null;
  videoId?: string;
}

const Gallery: React.FC = () => {
  const { videoId } = useParams();
  const [lightbox, setLightbox] = useState<LightboxContent>({
    isOpen: false,
    type: null,
    content: null,
    videoId: undefined,
  });

  const photos: MediaItem[] = [
    { id: "dry-needle-treatment", title: "Dry Needle Treatment", src: "/treatment1.jpg", type: "image" },
    { id: "dumbell-workout", title: "Dumbell Workout", src: "/dumbbell.jpg", type: "image" },
    { id: "treatment-2", title: "Cupping Therapy", src: "/treatment2.jpg", type: "image" },
    { id: "treatment-3", title: "Full Body Relaxation", src: "/treatment3.jpg", type: "image" },
    { id: "treatment-4", title: "Cupping Therapy", src: "/treatment4.jpg", type: "image" },
  ];

  const videos: MediaItem[] = [
    { id: "PhysiotherapyVideo1", title: "Physiotherapy", src: "/treatment-video1.mp4", type: "video", thumbnail: "/PhysiotherapyVideoThumbnail.jpg" },
    { id: "RehabilitationVideo1", title: "Rehabilitation", src: "/treatment-video2.mp4", type: "video", thumbnail: "/RehabilitationVideoThumbnail.jpg" },
    { id: "BoxingVideo1", title: "Boxing", src: "/boxing.mp4", type: "video", thumbnail: "/BoxingVideoThumbnail.jpg" },
    { id: "FitnessVideo1", title: "Fitness", src: "/Fitness.mp4", type: "video", thumbnail: "/FitnessVideoThumbnail.jpg" },
    { id: "FitnessVideo2", title: "Cardio", src: "/Fitness2.mp4", type: "video", thumbnail: "/FitnessVideo2Thumbnail.jpg" },
    { id: "FitnessVideo3", title: "Strength Workout", src: "/Fitness3.mp4", type: "video", thumbnail: "/FitnessVideo3Thumbnail.jpg" },
    { id: "FitnessVideo4", title: "Intensive Workout", src: "/Fitness4.mp4", type: "video", thumbnail: "/FitnessVideo4Thumbnail.jpg" },
    { id: "StrokeRehabilitationVideo1", title: "Stroke Rehabilitation", src: "/treatment-video3.mp4", type: "video", thumbnail: "/StrokeRehabilitationVideoThumbnail.jpg" },
    { id: "VacuumCupping", title: "Vacuum Cupping", src: "/treatment-video4.mp4", type: "video", thumbnail: "/VacuumCuppingVideoThumbnail.jpg" },
    { id: "HajimaCupping", title: "Hajima Cupping", src: "/treatment-video5.mp4", type: "video", thumbnail: "/HajimaCuppingVideoThumbnail.jpg" },
  ];

  useEffect(() => {
    if (videoId) {
      const video = videos.find((v) => v.id === videoId);
      if (video) {
        openLightbox(
          video.type,
          <video controls className="w-full max-h-[80vh] rounded-lg object-contain">
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

  // Animation variants for media items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <motion.div
      className="bg-primary min-h-screen flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center text-gray-300 mb-10 tracking-wide"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our Gallery
        </motion.h1>

        {/* Photos Section */}
        <motion.section
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              custom={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() =>
                openLightbox(
                  photo.type,
                  <img src={photo.src} alt={photo.title} className="w-full h-full object-cover" />
                )
              }
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              {photo.title && (
                <p className="text-center text-gray-700 font-semibold py-2 bg-white">
                  {photo.title}
                </p>
              )}
            </motion.div>
          ))}
        </motion.section>

        {/* Videos Section */}
        <motion.section
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.h2
            className="text-2xl md:text-3xl font-semibold text-center text-gray-200 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Videos
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                custom={index}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer relative"
                whileHover={{ scale: 1.05 }}
                onClick={() =>
                  openLightbox(
                    video.type,
                    <video controls className="w-full max-h-[80vh] rounded-lg object-contain">
                      <source src={video.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>,
                    video.id
                  )
                }
              >
                <img
                  src={video.thumbnail || "/default-thumbnail.jpg"}
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    className="w-16 h-16 text-white drop-shadow-lg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
                  </svg>
                </div>
                <p className="absolute bottom-2 left-2 text-white font-semibold bg-black bg-opacity-60 px-3 py-1 rounded-full">
                  {video.title}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
      <FooterDark />

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox.isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-w-4xl w-full mx-4 p-4 bg-white rounded-xl shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {lightbox.content}
              {lightbox.type === "video" && lightbox.videoId && (
                <motion.div
                  className="mt-4 flex items-center gap-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <input
                    type="text"
                    value={`https://www.musclescareclinic.com/about/gallery/video/${lightbox.videoId}`}
                    readOnly
                    className="flex-1 p-2 border border-gray-300 rounded-lg text-sm text-gray-700"
                  />
                  <button
                    onClick={() =>
                      copyToClipboard(`https://www.musclescareclinic.com/about/gallery/video/${lightbox.videoId}`)
                    }
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    Copy
                  </button>
                </motion.div>
              )}
              <button
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200"
                onClick={closeLightbox}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Gallery;