import { useEffect, useState } from 'react';
import TypewriterEffect from './TypeWriterEffect';

const HeroText = () => {
  const sentences = [
    "Where Healing Meets Expertise.",
    "Transforming Lives with Care.",
    "Your Health is Our Priority.",
  ];

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timep = time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
  const dayp = time.toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <div className="font-manrope text-heading w-full md:gap-5 my-10 flex flex-col items-center xl:items-start lg:flex-row p-1">
      <div className="font-bold md:text-[110px] lg:w-4/5 xl:w-2/3 h-auto text-[45px] md:px-10">
        <h1 className="font-heading font-bold lg:text-[110px] md:text-[75px] text-[50px]">
          <TypewriterEffect sentences={sentences} typingSpeed={100} pauseDuration={2000} />
        </h1>
      </div>
      <div className="bg-secondary p-5 lg:bg-none lg:w-1/3 w-full text-xl lg:text-2xl lg:px-5 lg:flex flex-col gap-1 rounded-2xl">
        <h1 className="font-bold text-3xl my-3 font-heading">Working Hours</h1>
        <p>Mon - Sat: 8:30am - 8:30pm</p>
        <p>Sun: 8:30am - 12:30pm (Half Day)</p>
        <div className="bg-backgroundColor w-full hidden lg:block py-5 font-bold mt-8 text-center px-3 md:px-5 rounded-2xl">
          Today is {dayp} - {timep}
        </div>
      </div>
    </div>
  );
};

export default HeroText;
