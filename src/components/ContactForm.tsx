import { motion } from "framer-motion"

motion

const ContactForm = () => {
    return (
        <div>
            <div className="shadow-md rounded-md shadow-gray-700 py-8">
                <h2 className="text-2xl md:text-3xl xl:text-4xl text-center text-white font-semibold">Reach Us here</h2>
                <p className="text-sm text-center text-white">We will try our best to provide assistance within a day or less.</p>
                <motion.form className="mt-8 py-4 px-2 md:px-4 xl:px-8 flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="" className="text-gray-200 text-sm">Full Name</label>
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Enter your name..."
                            className="py-2 px-3 border border-gray-500 rounded-md"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="" className="text-gray-200 text-sm">Phone Number</label>
                        <input
                            type="number"
                            name=""
                            id=""
                            placeholder="Enter your phonenumber..."
                            className="py-2 px-3 border border-gray-500 rounded-md"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="" className="text-gray-200 text-sm">Email Address</label>
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Enter your email..."
                            className="py-2 px-3 border border-gray-500 rounded-md"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="" className="text-gray-200 text-sm">Purpose</label>
                        <select 
                            name="" 
                            id=""
                            className="py-2 px-3 border border-gray-500 rounded-md"
                        >
                            <option value="">--Select One--</option>
                            <option value="">About Services</option>
                            <option value="">About Pricing</option>
                            <option value="">Reviews</option>
                            <option value="">Suggestion or Feedback</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="" className="text-gray-200 text-sm">Your Message</label>
                        <textarea
                            name=""
                            id=""
                            rows={5}
                            placeholder="Enter your message..."
                            className="py-2 px-3 border border-gray-500 rounded-md"
                        />
                    </div>
                    <div className="flex justify-end gap-4 mt-4">
                        <button className="bg-gray-500 px-4 py-2 rounded-md text-white text-sm hover:bg-gray-700 transition duration-300">Cancel</button>
                        <button className="bg-blue-500 px-4 py-2 rounded-md text-white text-sm hover:bg-blue-700 transition duration-300">Submit</button>
                    </div>
                </motion.form>
            </div>
        </div>
    )
}

export default ContactForm