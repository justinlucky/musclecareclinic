import { useEffect, useState } from 'react';

const TypewriterEffect = ({ sentences, typingSpeed = 100, pauseDuration = 2000 }) => {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0); // Tracks the current sentence
  const [currentText, setCurrentText] = useState(''); // Tracks the current visible text
  const [isDeleting, setIsDeleting] = useState(false); // Tracks whether the component is deleting

  useEffect(() => {
    const currentSentence = sentences[currentSentenceIndex]; // Current sentence to type/delete
    let timer;

    if (!isDeleting) {
      // Typing the sentence
      if (currentText.length < currentSentence.length) {
        timer = setTimeout(() => {
          setCurrentText(currentSentence.slice(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        // Pause before starting to delete
        timer = setTimeout(() => setIsDeleting(true), pauseDuration);
      }
    } else {
      // Deleting the sentence
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(currentSentence.slice(0, currentText.length - 1));
        }, typingSpeed / 2); // Faster deletion speed
      } else {
        // Move to the next sentence after deletion
        setIsDeleting(false);
        setCurrentSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length); // Loop sentences
      }
    }

    return () => clearTimeout(timer); // Cleanup timeout on component unmount or re-render
  }, [currentText, isDeleting, sentences, currentSentenceIndex, typingSpeed, pauseDuration]);

  return <span>{currentText}</span>;
};

export default TypewriterEffect;
