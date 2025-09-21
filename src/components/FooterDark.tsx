
const FooterDark = () => {

  const footerNavs = [
    {
      href: '/',
      name: 'Home'
    },
    {
      href: '/about',
      name: 'About Us'
    },

    {
      href: '/services',
      name: 'Services'
    },
    {
      href: '/contact',
      name: 'Contact Us'
    }


  ]

  const physio = [
    {
      href: '/service/orthopaedic-physiotherapy',
      name: 'Orthopaedic Physiotherapy',
    },
    {
      href: '/service/post-surgery-physiotherapy',
      name: 'Post Surgery Physiotherapy',
    },
    {
      href: '/service/neurology-physiotherapy',
      name: 'Neurology Physiotherapy',
    },
    {
      href: '/service/sports-physiotherapy',
      name: 'Sports Physiotherapy',
    },
    {
      href: '/service/pediatric-physiotherapy',
      name: 'Pediatric Physiotherapy',
    },
    {
      href: '/service/rehabilitation',
      name: 'Rehabilitation',
    }, {
      href: '/service/geriatric-care',
      name: 'Geriatric Care',
    }, {
      href: '/service/stroke',
      name: 'Stroke Rehabilitaion',
    }
  ]

  const fitness = [
    {
      href: '/service/athletic-training',
      name: 'Athletic Training (ROM)'
    },
    {
      href: '/service/circuit-training',
      name: 'Circuit Training'
    },
    {
      href: '/service/strengthening-training',
      name: 'Strength & Conditioning'
    },
    {
      href: '/service/crossfit-training',
      name: 'Power Lifting'
    },
    {
      href: '/service/yoga',
      name: 'Yoga'
    }
  ]

  const relax = [
    {
      href: '/service/cupping-therapy',
      name: 'Cupping Therapy'
    },
    {
      href: '/service/cryotherapy',
      name: 'Cryotherapy'
    }
  ]

  const diet = [
    {
      href: '/service/nutrition-diet',
      name: 'Nutrition & Diet'
    }
  ]

  return (
    <footer className="text-gray-500 px-4 py-5 w-full   self-end mx-auto md:px-8">
      <div className="">
        <h1 className=" text-center font-bold text-primary text-2xl md:text-3xl"><span className="text-3xl  md:text-4xl text-secondary">Kin</span> Physiotherapy Rehabilitation Center</h1>
      </div>
      <div className="flex flex-wrap gap-8 md:gap-12 mt-8">
        <ul className="items-center justify-center gap-6 sm:fle">
          <p className="text-primary text-sm font-semibold mb-2">Quick Links</p>
          {
            footerNavs.map((item, idx) => (
              <li key={idx} className="text-sm hover:text-primary hover:underline transition-all duration-300 mt-2">
                <a href={item.href}>
                  {item.name}
                </a>
              </li>
            ))
          }
        </ul>
        <div>
          <p className="text-primary text-sm font-semibold mb-2">Our Sevices</p>
          <div>
            <div className="flex flex-wrap gap-8">
              <div>
                <p className="text-sm mb-2 text-primary">Physiotherapy</p>
                <ul className="items-center justify-center gap-6 sm:fle pl-4">
                  {
                    physio.map((item, idx) => (
                      <li key={idx} className="text-sm hover:text-primary hover:underline transition-all duration-300 mt-2">
                        <a href={item.href}>
                          {item.name}
                        </a>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div>
                <p className="text-sm mb-2 text-primary">Fitness Training</p>
                <ul className="items-center justify-center gap-6 sm:fle pl-4">
                  {
                    fitness.map((item, idx) => (
                      <li key={idx} className="text-sm hover:text-primary hover:underline transition-all duration-300 mt-2">
                        <a href={item.href}>
                          {item.name}
                        </a>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div>
                <p className="text-sm mb-2 text-primary">Body Relaxation</p>
                <ul className="items-center justify-center gap-6 sm:fle pl-4">
                  {
                    relax.map((item, idx) => (
                      <li key={idx} className="text-sm hover:text-primary hover:underline transition-all duration-300 mt-2">
                        <a href={item.href}>
                          {item.name}
                        </a>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div>
                <p className="text-sm mb-2 text-primary">Nutrition & Diet Planning</p>
                <ul className="items-center justify-center gap-6 sm:fle pl-4">
                  {
                    diet.map((item, idx) => (
                      <li key={idx} className="text-sm hover:text-primary hover:underline transition-all duration-300 mt-2">
                        <a href={item.href}>
                          {item.name}
                        </a>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-primary text-sm font-semibold mb-2">Visit us at</p>
          <div className=" flex flex-wrap max-w-[350px]">
            <p className="text-sm">
              Syamaunil Kumar
              OBR Enclave 301 Flat, Vidiyanagar 1st Lane,
              Guntur, Andhra Pradesh 522006, India
            </p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4118.188248811923!2d80.42068727545154!3d16.322042634394744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a358a9945b25cad%3A0xebebc939a9e684e2!2sOBR%20Enclaves!5e1!3m2!1sen!2sde!4v1758434267577!5m2!1sen!2sde"
              className="h-64 w-full mt-4 rounded-md"></iframe>
          </div>
        </div>
      </div>
      <div className="mt-8 items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0">
          &copy; 2024 Develop with ❤️ by<a href="https://www.linkedin.com/in/lungchuingam-riammei-9a8528227/" className="hover:text-text hover:underline"> Lungchuingam Riammei</a> All rights reserved.
        </div>
        <div className="mt-6 sm:mt-0">
          <ul className="flex items-center space-x-4 mr-24">
            <li className="w-10 h-10  rounded-full flex items-center justify-center">
              <a href="https://www.instagram.com/musclecare_clinic/">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="45" viewBox="0 0 48 48">
                  <radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fd5"></stop><stop offset=".328" stopColor="#ff543f"></stop><stop offset=".348" stopColor="#fc5245"></stop><stop offset=".504" stopColor="#e64771"></stop><stop offset=".643" stopColor="#d53e91"></stop><stop offset=".761" stopColor="#cc39a4"></stop><stop offset=".841" stopColor="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#4168c9"></stop><stop offset=".999" stopColor="#4168c9" stopOpacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
                </svg>
              </a>
            </li>
            <li className="w-10 h-10  rounded-full flex items-center justify-center">
              <a href="mailto:musclecareclinic@gmail.com">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="45" viewBox="0 0 48 48">
                  <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
                </svg>
              </a>
            </li>

          </ul>
        </div>
      </div>
    </footer>
  )
}


export default FooterDark



