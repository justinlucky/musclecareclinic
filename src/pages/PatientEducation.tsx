import FooterDark from "../components/FooterDark"
import Navbar from "../components/Navbar"

const PatientEducation = () => {
  return (
    <div className="md:p-10 p-3 pb-1 md:px-14 flex flex-col font-manrope bg-primary h-full ">
      <Navbar />
      <div className="w-full bg-white  rounded-t-2xl mt-20 md:p-20  pb-28">
        <h1 className="text-5xl font-semibold py-5 text-text mx-10 mt-5">Services</h1>
        <section className=" py-12">
          <div className="container mx-auto px-6">


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Cupping Therapy</h3>
                <p className="text-gray-600">
                  Cupping therapy is an ancient practice that uses suction cups to stimulate blood flow and reduce pain. It includes Hijama Cupping, Vacuum Cupping, and Fire Cupping.
                </p>
                <ul className="list-disc list-inside mt-4 text-gray-600">
                  <li>Pain relief</li>
                  <li>Improved circulation</li>
                  <li>Relaxation</li>
                  <li>Improved range of motion</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Stretching</h3>
                <p className="text-gray-600">
                  Stretching is essential for improving flexibility and mobility. It helps in preventing injuries and is beneficial for overall muscle health.
                </p>
                <ul className="list-disc list-inside mt-4 text-gray-600">
                  <li>Improved range of motion</li>
                  <li>Improved circulation</li>
                  <li>Reduced muscle tension</li>
                  <li>Improved posture</li>
                  <li>Decreased stress</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Dry Needling</h3>
                <p className="text-gray-600">
                  Dry needling is used to treat musculoskeletal pain by inserting thin needles into trigger points, helping to reduce muscle tightness and pain.
                </p>
                <ul className="list-disc list-inside mt-4 text-gray-600">
                  <li>Reduces muscle tightness</li>
                  <li>Increases blood flow</li>
                  <li>Pain management</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Chiropractic Care</h3>
                <p className="text-gray-600">
                  Chiropractic care involves manual adjustments of the spine and joints to alleviate pain, improve function, and support overall health.
                </p>
                <ul className="list-disc list-inside mt-4 text-gray-600">
                  <li>Pain relief</li>
                  <li>Improved range of motion</li>
                  <li>Better balance</li>
                  <li>Improved posture</li>
                  <li>Enhanced sleep</li>
                  <li>Improved athletic performance</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Full Body Relaxation</h3>
                <p className="text-gray-600">
                  This comprehensive service combines heat therapy, stretching, chiropractic adjustments, and muscle stimulation to provide full-body relaxation.
                </p>
                <ul className="list-disc list-inside mt-4 text-gray-600">
                  <li>Overall relaxation</li>
                  <li>Pain relief</li>
                  <li>Enhanced recovery</li>
                </ul>
              </div>

            </div>
          </div>
        </section>
      </div>
      <FooterDark />
    </div>
  )
}

export default PatientEducation
