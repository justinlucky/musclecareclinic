import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion'; // Import framer-motion
import { FaChevronDown } from 'react-icons/fa';

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
  const [answerH, setAnswerH] = useState<string>('0px');
  const { faqsList, idx } = props;

  const handleOpenAnswer = () => {
    if (answerElRef.current) {
      const answerElH = answerElRef.current.childNodes[0] as HTMLElement;
      const height = answerElH.offsetHeight;
      setState(!state);
      setAnswerH(`${height + 20}px`);
    }
  };

  return (
    <motion.div
      className="space-y-3 mt-5 overflow-hidden text-white font-manrope border-b"
      key={idx}
      onClick={handleOpenAnswer}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      <motion.h4
        className="cursor-pointer pb-5 flex items-center justify-between text-sm text-gray-600 font-medium"
        whileHover={{ color: '#3f3abdff' }} // Light gray hover effect
        transition={{ duration: 0.2 }}
      >
        {faqsList.q}
       <FaChevronDown/>
      </motion.h4>
      <motion.div
        ref={answerElRef}
        className="duration-300"
        initial={{ height: '0px' }}
        animate={{ height: state ? answerH : '0px' }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        <div>
          <motion.p
            className="text-gray-600 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: state ? 1 : 0 }}
            transition={{ duration: 0.3, delay: state ? 0.2 : 0 }}
          >
            {faqsList.a}
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Define the props for Faq component
type FaqProps = object;

const Faq: React.FC<FaqProps> = () => {
  const faqsList: FaqItem[] = [
    {
      q: 'What services does Muscle Care Clinic offer?',
      a: 'We provide physiotherapy treatments, injury rehabilitation, pain management, sports therapy, and personalized physical training programs for all ages.',
    },
    {
      q: 'Do I need a doctor’s referral to book an appointment?',
      a: 'No referral is needed. You can directly book an appointment with our physiotherapists or trainers by calling or using our online booking system.',
    },
    {
      q: 'What should I expect during my first visit?',
      a: 'Your first visit includes a thorough assessment, discussion of your goals, and a personalized treatment or training plan. Please bring any relevant medical records.',
    },
    {
      q: 'Can physiotherapy help with sports injuries?',
      a: 'Absolutely! Our therapists specialize in sports injury rehabilitation, helping you recover safely and return to activity as quickly as possible.',
    },
    {
      q: 'Do you offer group fitness or training sessions?',
      a: 'Yes, we offer group classes and personal training sessions tailored to different fitness levels and goals. Contact us for the current schedule.',
    },
    {
      q: 'How do I contact Muscle Care Clinic for more information?',
      a: 'Call us at +91 81216 35467, WhatsApp, or email musclecareclinic@gmail.com. Visit us at H.No: 13-116, Old Station Road, Guntur, Andhra Pradesh.',
    },
  ];

  return (
    <motion.section
      className="leading-relaxed font-manrope py-8 rounded-t-2xl rounded-b-2xl pt-10 mx-auto max-w-5xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="space-y-3 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h2 className="text-2xl text-gray-700 font-semibold text-secondary">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-500 text-xs">
          Still confused? Feel free to contact us.
        </p>
      </motion.div>
      <div className="mt-14 w-full text-white mx-auto pb-8">
        {faqsList.map((item, idx) => (
          <FaqsCard key={idx} idx={idx} faqsList={item} />
        ))}
      </div>
    </motion.section>
  );
};

export default Faq;