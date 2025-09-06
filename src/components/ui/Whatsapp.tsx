import { FaWhatsapp } from "react-icons/fa"


const Whatsapp = () => {
    return (
        < div className = "z-50 fixed bottom-3 right-2 shadow-lg rounded-full flex items-center" >
            <a
                href="https://wa.me/917093280464?text=Know%20more%20about%20Muscle%20Care%20Clinic"
                target="_blank"
                className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition"
            >
                <FaWhatsapp className="size-8 text-green-600" />
            </a>
      </div >

  )
}

export default Whatsapp