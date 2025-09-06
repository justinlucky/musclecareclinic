import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Define the FAQ item type
interface FaqItem {
  q: string; // question
  a: string; // answer
}

// Define the props for FaqsCard component
interface FaqsCardProps {
  faqsList: FaqItem;
  idx: number;
}

const FaqsCard: React.FC<FaqsCardProps> = (props) => {
  const answerElRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<boolean>(false);
  const [answerH, setAnswerH] = useState<string>("0px");
  const { faqsList, idx } = props;

  const handleOpenAnswer = () => {
    if (answerElRef.current) {
      const answerElH = answerElRef.current.scrollHeight; // Use scrollHeight for dynamic height
      setState(!state);
      setAnswerH(state ? "0px" : `${answerElH}px`);
    }
  };

  return (
    <motion.div
      className="space-y-3 mt-5 overflow-hidden text-white font-manrope border-b border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
    >
      <button
        onClick={handleOpenAnswer}
        className="cursor-pointer pb-5 flex items-center justify-between text-lg font-medium w-full text-left"
        aria-expanded={state}
        aria-controls={`faq-answer-${idx}`}
      >
        {faqsList.q}
        {state ? (
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            initial={{ rotate: 0 }}
            animate={{ rotate: 180 }}
            transition={{ duration: 0.3 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </motion.svg>
        ) : (
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            initial={{ rotate: 0 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </motion.svg>
        )}
      </button>
      <AnimatePresence>
        {state && (
          <motion.div
            ref={answerElRef}
            id={`faq-answer-${idx}`} // Unique ID for accessibility
            className="text-gray-100 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: answerH, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div>
              <p>{faqsList.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Define the props for Faq component
type FaqProps = object;

const Faq: React.FC<FaqProps> = () => {
  const faqsList: FaqItem[] = [
    {
      q: "What services does Muscle Care Clinic offer?",
      a: "Muscle Care Clinic offers a variety of services focused on muscle health and injury prevention. These include cupping therapy, stretching therapy, dry needling, chiropractic services, and full body relaxation therapy.",
    },
    {
      q: "What are the benefits of cupping therapy?",
      a: "Cupping therapy offers several benefits, including pain relief, reduced inflammation, improved blood circulation, enhanced relaxation, stress relief, and increased range of motion, particularly in the hip and knee. It also has potential detoxification effects and cardiovascular health benefits.",
    },
    {
      q: "How does dry needling work, and what conditions does it treat?",
      a: "Dry needling involves the insertion of thin, sharp needles into the skin to treat musculoskeletal pain and movement issues, specifically targeting myofascial trigger points. This technique helps decrease muscle tightness, increase blood flow, and reduce both local and referred pain. It is often part of a broader pain management plan that includes exercise, stretching, and massage.",
    },
    {
      q: "What are the advantages of chiropractic care?",
      a: "Chiropractic care provides several benefits, including pain relief, particularly for low back pain, neck pain, and headaches. It also improves range of motion, posture, and balance, enhances athletic performance, and provides relief from chronic conditions like osteoarthritis and scoliosis. Additionally, chiropractic care can improve sleep quality by alleviating muscle tension and chronic pain.",
    },
    {
      q: "How does Muscle Care Clinic's vision align with its services?",
      a: "The vision of Muscle Care Clinic is to offer comprehensive and innovative treatments that enhance the quality of life for clients. By providing specialized services like physiotherapy, chiropractic care, and personalized exercise programs, the clinic aims to help patients recover from injuries, manage chronic pain, and maintain long-term muscle health. The clinic also focuses on creating a supportive environment to empower individuals to live healthier, more active lives.",
    },
  ];

  return (
    <section className="leading-relaxed max-w-7xl bg-secondary font-manrope mt-[-10px] rounded-t-2xl rounded-b-2xl pt-10 mx-auto px-4 md:px-8">
      <motion.div
        className="space-y-3 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-3xl md:text-4xl text-white font-semibold">
          Frequently Asked Questions
        </h1>
        <motion.p
          className="text-gray-200 max-w-lg mx-auto text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          Answered all frequently asked questions. Still confused? Feel free to contact us.
        </motion.p>
      </motion.div>
      <div className="mt-14 w-full text-white mx-auto pb-10">
        {faqsList.map((item, idx) => (
          <FaqsCard key={idx} idx={idx} faqsList={item} />
        ))}
      </div>
    </section>
  );
};

export default Faq;