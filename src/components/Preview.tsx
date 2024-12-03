

const Preview = () => {
  return (
    <>
      <div className="flex md:hidden flex-col p-2 md:p-10 md:px-20">
        <h1 className="font-manrope text-5xl pt-10 pl-3 text-text md:text-5xl md:font-bold font-semibold">Our Clinic</h1>
        {/* <img src="https://i.pinimg.com/236x/89/14/63/89146308c70d95a263a4c3ced9516f7e.jpg" className=" w-3/4 m-3 self-end" /> */}
        <p className=" text-justify pb-10 pt-5 m-5">At Muscle Care Clinic, we believe in the power of personalized care to restore your body's natural balance. Our experienced team of physiotherapists and chiropractors is committed to providing comprehensive treatment plans tailored to your unique needs. Whether you're recovering from an injury, managing chronic pain, or seeking preventive care,
          we're here to support you on your journey to optimal health. Our goal is to empower you to live a more active, pain-free life.</p>
        <a href="/about" className=" self-end relative inline-flex items-center justify-center w-1/3 p-4 px-4 py-1 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-secondary rounded-2xl shadow-md group">
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-secondary group-hover:translate-x-0 ease">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-secondary transition-all duration-300 transform group-hover:translate-x-full ease">View More</span>
          <span className="relative invisible">View More</span>
        </a>
      </div>


      <section className="py-24 mb-32 hidden md:flex font-manrope">
        <div className="max-w-screen-xl mx-auto ">
          <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
            <div className="flex-1 sm:hidden xl:block pt-8">
              <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" className="md:max-w-lg h-full sm:rounded-lg" alt="" />
            </div>
            <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 ml-5 lg:max-w-2xl">

              <h1 className="text-text text-[55px] font-semibold my-10  ">
                Our Clinic
              </h1>
              <p className="my-10 text-lg  text-gray-600">
                At Muscle Care Clinic, we believe in the power of personalized care to restore your body's natural balance. Our experienced team of physiotherapists and chiropractors is committed to providing comprehensive treatment plans tailored to your unique needs. Whether you're recovering from an injury, managing chronic pain, or seeking preventive care, we're here to support you on your journey to optimal health. Our goal is to empower you to live a more active, pain-free life.

                Experience the Muscle Care Clinic difference today and discover how our specialized treatments can help you achieve your wellness goals.
              </p>
              <a href="/about" className=" self-end relative inline-flex items-center justify-center w-1/3 p-4 px-4 py-1 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-secondary rounded-2xl shadow-md group">
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-secondary group-hover:translate-x-0 ease">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-secondary transition-all duration-300 transform group-hover:translate-x-full ease">View More</span>
                <span className="relative invisible">View More</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


export default Preview
