// import FooterDark from "../components/FooterDark"
// import Navbar from "../components/Navbar"

// const Services = () => {
//   return (
//     <div className="md:p-10 p-3 pb-1 md:px-14 flex flex-col font-manrope bg-primary h-full ">
//       <Navbar />
//       <div className="w-full bg-white  rounded-t-2xl mt-20 md:p-20  pb-28">
//         <h1 className="text-5xl font-semibold py-5 text-text mx-10 mt-5">Services</h1>
//         <section className=" py-12">
//           <div className="container mx-auto px-6">


//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

//               <div className="bg-white p-6 rounded-lg shadow-md">
//                 <h3 className="text-xl font-semibold text-gray-700 mb-4">Cupping Therapy</h3>
//                 <p className="text-gray-600">
//                   Cupping therapy is an ancient practice that uses suction cups to stimulate blood flow and reduce pain. It includes Hijama Cupping, Vacuum Cupping, and Fire Cupping.
//                 </p>
//                 <ul className="list-disc list-inside mt-4 text-gray-600">
//                   <li>Pain relief</li>
//                   <li>Improved circulation</li>
//                   <li>Relaxation</li>
//                   <li>Improved range of motion</li>
//                 </ul>
//               </div>

//               <div className="bg-white p-6 rounded-lg shadow-md">
//                 <h3 className="text-xl font-semibold text-gray-700 mb-4">Stretching</h3>
//                 <p className="text-gray-600">
//                   Stretching is essential for improving flexibility and mobility. It helps in preventing injuries and is beneficial for overall muscle health.
//                 </p>
//                 <ul className="list-disc list-inside mt-4 text-gray-600">
//                   <li>Improved range of motion</li>
//                   <li>Improved circulation</li>
//                   <li>Reduced muscle tension</li>
//                   <li>Improved posture</li>
//                   <li>Decreased stress</li>
//                 </ul>
//               </div>

//               <div className="bg-white p-6 rounded-lg shadow-md">
//                 <h3 className="text-xl font-semibold text-gray-700 mb-4">Dry Needling</h3>
//                 <p className="text-gray-600">
//                   Dry needling is used to treat musculoskeletal pain by inserting thin needles into trigger points, helping to reduce muscle tightness and pain.
//                 </p>
//                 <ul className="list-disc list-inside mt-4 text-gray-600">
//                   <li>Reduces muscle tightness</li>
//                   <li>Increases blood flow</li>
//                   <li>Pain management</li>
//                 </ul>
//               </div>

//               <div className="bg-white p-6 rounded-lg shadow-md">
//                 <h3 className="text-xl font-semibold text-gray-700 mb-4">Chiropractic Care</h3>
//                 <p className="text-gray-600">
//                   Chiropractic care involves manual adjustments of the spine and joints to alleviate pain, improve function, and support overall health.
//                 </p>
//                 <ul className="list-disc list-inside mt-4 text-gray-600">
//                   <li>Pain relief</li>
//                   <li>Improved range of motion</li>
//                   <li>Better balance</li>
//                   <li>Improved posture</li>
//                   <li>Enhanced sleep</li>
//                   <li>Improved athletic performance</li>
//                 </ul>
//               </div>

//               <div className="bg-white p-6 rounded-lg shadow-md">
//                 <h3 className="text-xl font-semibold text-gray-700 mb-4">Full Body Relaxation</h3>
//                 <p className="text-gray-600">
//                   This comprehensive service combines heat therapy, stretching, chiropractic adjustments, and muscle stimulation to provide full-body relaxation.
//                 </p>
//                 <ul className="list-disc list-inside mt-4 text-gray-600">
//                   <li>Overall relaxation</li>
//                   <li>Pain relief</li>
//                   <li>Enhanced recovery</li>
//                 </ul>
//               </div>


//               <div className="bg-white p-6 rounded-lg shadow-md">
//                 <h3 className="text-xl font-semibold text-gray-700 mb-4">Kinesiology Tape Therapy</h3>
//                 <p className="text-gray-600">
//                   Kinesiology tape therapy involves applying elastic, adhesive tape to the skin to support muscles and joints without restricting movement. It is commonly used to reduce pain, enhance circulation, and improve recovery after injuries.
//                 </p>
//                 <ul className="list-disc list-inside mt-4 text-gray-600">
//                   <li>Relieves muscle and joint pain</li>
//                   <li>Improves blood circulation and reduces swelling</li>
//                   <li>Supports muscles without restricting movement</li>
//                   <li>Speeds up recovery from injuries</li>
//                 </ul>
//               </div>

//             </div>
//           </div>
//         </section>

//       </div>
//       <FooterDark />
//     </div>
//   )
// }
// export default Services


import FooterDark from "../components/FooterDark"
import Navbar from "../components/Navbar"

const Services = () => {
  return (
    <div className="md:p-10 p-3 pb-1 md:px-14 flex flex-col font-manrope bg-primary h-full ">
      <Navbar />
      <div className="w-full bg-white rounded-t-2xl mt-20 md:p-20 pb-28">
        <h1 className="text-5xl font-semibold py-5 text-text mx-10 mt-5">Services</h1>
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 gap-8">

              {/* Service 1: Cupping Therapy */}
              <div id="cupping" className="flex flex-col gap-3 md:flex-row bg-white p-6 rounded-lg shadow-md">
                <div className="md:w-1/3">
                  <img src="/cupping.png" alt="Cupping Therapy" className="w-full rounded-lg object-cover" />
                </div>
                <div className="md:w-2/3 md:pl-8">
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
              </div>


              {/* Service 2: Stretching */}
              <div id="stretching" className="flex flex-col gap-3 md:flex-row bg-white p-6 rounded-lg shadow-md">
                <div className="md:w-1/3">
                  <img src="/stretching.jpg" alt="Stretching" className="w-full rounded-lg object-cover" />
                </div>
                <div className="md:w-2/3 md:pl-8">
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
              </div>

              {/* Service 3: Dry Needling */}
              <div id="needle" className="flex flex-col gap-3 md:flex-row bg-white p-6 rounded-lg shadow-md">
                <div className="md:w-1/3">
                  <img src="/needle.jpg" alt="Dry Needling" className="w-full rounded-lg object-cover" />
                </div>
                <div className="md:w-2/3 md:pl-8">
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
              </div>

              {/* Service 4: Chiropractic Care */}
              <div id="chriopractor" className="flex flex-col gap-3 md:flex-row bg-white p-6 rounded-lg shadow-md">
                <div className="md:w-1/3">
                  <img src="/chriopractor.png" alt="Chiropractic Care" className="w-full rounded-lg object-cover" />
                </div>
                <div className="md:w-2/3 md:pl-8">
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
              </div>

              {/* Service 5: Full Body Relaxation */}
              <div id="relax" className="flex flex-col md:flex-row gap-3 bg-white p-6 rounded-lg shadow-md">
                <div className="md:w-1/3">
                  <img src="/relax.jpg" alt="Full Body Relaxation" className="w-full rounded-lg object-cover" />
                </div>
                <div className="md:w-2/3 md:pl-8">
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

              {/* Service 6: Kinesiology Tape Therapy */}
              <div id="kinesiology" className="flex flex-col gap-3 md:flex-row bg-white p-6 rounded-lg shadow-md">
                <div className="md:w-1/3">
                  <img src="/tape.webp" alt="Kinesiology Tape Therapy" className="w-full rounded-lg object-cover" />
                </div>
                <div className="md:w-2/3 md:pl-8">
                  <h3 className="text-xl font-semibold text-gray-700 mb-4">Kinesiology Tape Therapy</h3>
                  <p className="text-gray-600">
                    Kinesiology tape therapy involves applying elastic, adhesive tape to the skin to support muscles and joints without restricting movement. It is commonly used to reduce pain, enhance circulation, and improve recovery after injuries.
                  </p>
                  <ul className="list-disc list-inside mt-4 text-gray-600">
                    <li>Relieves muscle and joint pain</li>
                    <li>Improves blood circulation and reduces swelling</li>
                    <li>Supports muscles without restricting movement</li>
                    <li>Speeds up recovery from injuries</li>
                  </ul>
                </div>
              </div>


              <div id="cryo" className="flex flex-col gap-3 md:flex-row bg-white p-6 rounded-lg shadow-md">
                <div className="md:w-1/3">
                  <img src="/cryo.webp" alt="Kinesiology Tape Therapy" className="w-full rounded-lg object-cover" />
                </div>
                <div className="md:w-2/3 md:pl-8">
                  <h3 className="text-xl font-semibold text-gray-700 mb-4">Cryotherapy</h3>
                  <p className="text-gray-600">
                    A cold therapy treatment that uses extremely low temperatures to reduce pain, inflammation, and support recovery.
                  </p>
                  <ul className="list-disc list-inside mt-4 text-gray-600">
                    <li>Quick pain relief and reduced inflammation</li>
                    <li>Faster recovery for athletes and muscle soreness</li>
                    <li>Improvement in skin conditions and metabolism</li>
                    <li>Boosted mental health and immune system</li>
                  </ul>
                </div>
              </div>

              <section id="boxing" className="flex flex-col gap-3 md:flex-row bg-white p-6 rounded-lg shadow-md">
                <div className="md:w-1/3">
                  <img src="/boxing.jpg" alt="Kinesiology Tape Therapy" className="w-full rounded-lg object-cover" />
                </div>
                <div className="md:w-2/3 md:pl-8">
                  <h3 className="text-xl font-semibold text-gray-700 mb-4"> Boxing and Fitness Boxing</h3>
                  <p className="text-gray-600">A full-body workout combining boxing techniques with physical training to enhance strength, endurance, coordination, and cardiovascular health.</p>
                  <ul className="list-disc list-inside mt-4 text-gray-600">
                    <li>Improved cardiovascular health and stamina</li>
                    <li>Boosts muscular endurance and strength</li>
                    <li>Enhances balance, coordination, and agility</li>
                    <li>Helps with stress relief and mental focus</li>
                  </ul>
                </div>
              </section>

              <div id="hiit" className="flex flex-col md:flex-row gap-3 bg-white p-6 rounded-lg shadow-md">
                <div className="md:w-1/3">
                  <img src="/hiit.webp" alt="Kinesiology Tape Therapy" className="w-full rounded-lg object-cover" />
                </div>
                <div className="md:w-2/3 md:pl-8">
                  <h3 className="text-xl font-semibold text-gray-700 mb-4">High-Intensity Interval Training (HIIT)</h3>
                  <p className="text-gray-600">A form of workout that alternates between intense bursts of exercise and short recovery periods, designed to improve fitness quickly.</p>
                  <ul className="list-disc list-inside mt-4 text-gray-600">
                    <li>Burns more calories in a shorter amount of time</li>
                    <li>Improves heart health and cardiovascular endurance</li>
                    <li>Builds muscle mass and increases metabolism</li>
                    <li>Boosts mood and reduces stress</li>
                  </ul>
                </div>
              </div>

              <div id="circuit" className="flex flex-col md:flex-row gap-3 bg-white p-6 rounded-lg shadow-md">
                <div className="md:w-1/3">
                  <img src="/circuit.webp" alt="Kinesiology Tape Therapy" className="w-full rounded-lg object-cover" />
                </div>
                <div className="md:w-2/3 md:pl-8">
                  <h3 className="text-xl font-semibold text-gray-700 mb-4">Personal Circuit Training</h3>
                  <p className="text-gray-600">A training method that involves moving quickly from one exercise to another in a circuit to target different muscle groups and improve overall fitness.</p>
                  <ul className="list-disc list-inside mt-4 text-gray-600">
                    <li>Promotes weight loss by increasing metabolism</li>
                    <li>Enhances cardiovascular fitness and muscular endurance</li>
                    <li>Builds strength and flexibility</li>
                    <li>Time-efficient, full-body workout</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
      <FooterDark />
    </div>
  )
}

export default Services
