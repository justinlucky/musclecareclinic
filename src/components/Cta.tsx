import { Link } from "react-router-dom"


const Cta = () => {
  return (
    <div className="px-4 bg-primary py-8 rounded-md items-center flex justify-center flex-col">
        <h1 className="text-white font-semibold text-2xl md:text-4xl mb-2">Book an Appointment Now!</h1>
        <p className="text-gray-200 text-sm md:text-base">We provide personalized care for your muscle and joint health.</p>
        <div className="mt-4 flex flex-col gap-2 justify-center items-center">
            <a href="tel:+919876543210" className="mt-4 bg-secondary text-white px-6 py-2 rounded-full hover:bg-yellow-600 transition duration-300">Call Us: +91 98765 43210</a>
            <div className="flex flex-col items-center">
                <p className="text-sm text-gray-300">Leave us a feedbacks, we look into making the clients delightful</p>
                <Link to='/contact' className="mt-4 bg-secondary text-white px-6 py-2 rounded-full hover:bg-yellow-600 transition duration-300 inline-block">Contact Us</Link>
            </div>
        </div>
    </div>
  )
}

export default Cta