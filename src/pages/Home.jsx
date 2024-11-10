
import '../styles/home.css'
import banner from '../images/banner.webp'
import lady from '../images/lady with laptop.webp'
import title1 from '../images/Title1.webp'
import title2 from '../images/title2.webp'
import title3 from '../images/title3.webp'
import icon from '../images/Screenshot_2024-11-07_031208-removebg-preview.png'
import iconCard1 from '../images/icon_card1.png'
import iconCard2 from '../images/icon_card2.png'
import iconCard3 from '../images/icon_card3.png'
import iconCard4 from '../images/icon_card4.png'
import Security from '../images/security.webp'
import Intergration from '../images/integrations.webp'
import appmanagement from '../images/app-management.webp'
import ZeroTouch from '../images/zero-touch.webp'
import Automation from '../images/automation.webp'
import Remoteaccess from '../images/remote-access.webp'
// import android from '../images/android.webp'
import { Carousel } from 'react-bootstrap';
import React, { useState } from 'react';
import android from '../images/android.webp';
import ios from '../images/iOS.webp';
import macos from '../images/macOS.webp';
import windows from '../images/windows.webp';
import tvos from '../images/tvOS.webp';
import fireos from '../images/fireOS.webp';


function Home() {

  const platforms = {
    android: {
      image: android,
      title: "Android",
      description: "Manage, secure, and monitor Android devices in your organization.",
    },
    ios: {
      image: ios,
      title: "iOS",
      description: "Manage, secure, and monitor iOS devices with Hexnode’s ABM and ASM integration.",
    },
    macos: {
      image: macos,
      title: "macOS",
      description: "Hexnode provides seamless integration with macOS devices, ensuring top-level security.",
    },
    windows: {
      image: windows,
      title: "Windows",
      description: "Effortlessly manage Windows devices with Hexnode’s robust tools and features.",
    },
    tvos: {
      image: tvos,
      title: "tvOS",
      description: "Secure and monitor tvOS devices across your organization.",
    },
    fireos: {
      image: fireos,
      title: "FireOS",
      description: "Hexnode supports the management of FireOS devices, ensuring comprehensive security.",
    },
  };

  const [selectedPlatform, setSelectedPlatform] = useState('android');

  const handlePlatformClick = (platform) => {
    setSelectedPlatform(platform);
  };

  return (
    <div>
      <section className='hero_section pb-5'>
        <div className="container pt-2 pb-1 ">
          {/* banner section */}
          <section className='section_first pt-5'>
            <div className="main_section1_flex">
              <div className="right ">
                <div>
                  <h1 className='text-style-common pt-2'>Unified Endpoint Management</h1>
                  <h2 className='heading-h2'>Gain control and visibility over your endpoints</h2>
                  <p className='text-style-p2'>Hexnode's UEM solution allows you to simplify endpoint management and
                    free up IT. Focus on the big picture while Hexnode works on the details</p>
                  <div className='email_btn'>
                    <input type="text" placeholder='Email' style={{ height: '53px' }} className='email_input' />
                    <button className='btn btn-danger'>LET'S TRY IT OUT</button>
                  </div>
                </div>
              </div>
              <div className="left ">
                <div className="banner">
                  <img src={banner} alt="" className="position-relative banner-img" />
                </div>

                <img src={lady} alt="Woman using laptop position-absolute " className="img-fluid rounded shadow lady_image" />
                <div className="badge  badge-warning position-absolute d-flex justify-content-center align-items-center"> {/* Adjust positioning as needed */}
                  <span className='round d-flex align-items-center justify-content-center '>✓</span>
                  <span className='badge-text'> Password policy applied</span>
                </div>
                <div className="badge badge-info position-absolute  d-flex justify-content-center align-items-center  translate-middle m-3 p-2">

                  <span className='round d-flex align-items-center justify-content-center '>✓</span>
                  <span className='badge-text'>TvOS Kiosk Active</span>
                </div>
                <div className="badge badge-success  d-flex justify-content-center align-items-center ">
                  <span className='round d-flex align-items-center justify-content-center '>✓</span>
                  <span className='badge-text'>Device Enrolled</span>
                </div>
                <div>
                </div>

              </div>
            </div>
          </section>
        </div>
      </section>
      {/* secton 2 */}
      <section className='section_2' style={{ backgroundColor: "#1A1C2B" }}>
        <div className="container">
          <div className="section-2-flex-main">
            <div className="first-content ">
              <div>
                <img src={title1} alt="" className="title_section2" />
                <p className='section2_p pt-3 '>Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024.</p>
              </div>
            </div>
            {/* second line */}
            <div className="line">

            </div>
            {/* third section */}
            <div className="third-content ps-5 ">
              <div>
                <img src={title2} alt="" className="title_section2" />
                <p className='section2_p pt-3 '>Hexnode mentioned as a Notable Vendor in Midmarket Context: Magic Quadrant for Unified Endpoint Management tools 2022.</p>
              </div>
            </div>
            {/* forth */}
            <div className="line">

            </div>
            {/* fith */}
            <div className="fifth-content ps-5 ">
              <div>
                <img src={title3} alt="" className='title_section2 ' />
                <p className='section2_p3 pt-3 ' >Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023.</p>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* SECTION 3 */}
      <section className='section_3 py-5'>
        <div className='container pt-5'>
          <h1 className='text-dark text-center heading-h2'>Why Hexnode?</h1>
          <div>
            <div className="position-relative main-div pt-5">
              <div className='display_proprty'>
                <div className=''>
                  <div className='icon_center'>
                    <img src={icon} alt="" />
                  </div>

                </div>
                <div className='line-drawn'>
                  <div className='left_bottom'>

                  </div>
                  <div className='right_bottom'>

                  </div>
                  <div className='right_top'>

                  </div>
                  <div className='left_top'>

                  </div>
                </div>
              </div>
              <div className='d-flex flex-column position-realtive gap-5'>
                <div className='section2-flex-row pt-5'>
                  <div className="card rounded-4 custom-card" >
                    <div className="card-body">
                      <h4 className="card-title custom-card-title"><span><img src={iconCard1} alt="" /></span> Adapt the new noraml</h4>
                      <p className="card-text custom-card-p">Hybrid, remote or onsite, you can trust Hexnode UEM to deliver. Create policies that cater to your organization’s protocols. Whether it be BYOD, COPE, or platform limited, Hexnode can manage it all.</p>
                      <a href="#" className="text-danger hidden-proprty">Try Hexnode on your endpoints</a>
                    </div>
                  </div>
                  {/* second card */}
                  <div className="card rounded-4 custom-card " >
                    <div className="card-body">
                      <h4 className="card-title custom-card-title"><span><img src={iconCard2} alt="" /></span> Zero compromise security</h4>
                      <p className="card-text custom-card-p">Enable full-fledged device encryption, data loss prevention, and all-rounded device security with Hexnode UEM. Be at the bleeding edge of device security without any compromises.</p>
                      <a href="#" className="text-danger hidden-proprty">Try Hexnode on your endpoints</a>
                    </div>
                  </div>
                </div>
                {/* second row  */}
                <div className='section2-flex-row '>
                  {/* third card */}
                  <div className="card rounded-4 custom-card" >
                    <div className="card-body">
                      <h4 className="card-title custom-card-title"><span><img src={iconCard3} alt="" /></span> Get more done with automation</h4>
                      <p className="card-text custom-card-p">Hexnode UEM automation features help free up IT’s time spent on mundane and repetitive tasks. Do hours’ worth of work in a few minutes.</p>
                      <a href="#" className="text-danger hidden-proprty">Try Hexnode on your endpoints</a>
                    </div>
                  </div>
                  {/* forth*/}
                  <div className="card rounded-4 custom-card " >
                    <div className="card-body">
                      <h4 className="card-title custom-card-title"><span><img src={iconCard4} alt="" /></span> Unified Policy Management</h4>
                      <p className="card-text custom-card-p">Hybrid, remote or onsite, you can trust Hexnode UEM to deliver. Create policies that cater to your organization’s protocols. Whether it be BYOD, COPE, or platform limited, Hexnode can manage it all.</p>
                      <a href="#" className="text-danger hidden-proprty ">Try Hexnode on your endpoints</a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>






      </section >

      {/* section 4 */}
      <section className='section_4 pb-5'>
        <div className="container mt-5 pb-3">
          <div className='d-flex justify-content-center align-items-center pt-4 pb-5'>
            <h2 className='heading-h2 text-dark text-center container_custom'>Powerful endpoint management, built for the devices you choose</h2>
          </div>
          {/* cards */}
          <div>
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div className="card card_custom_section4 border border-0 px-0">
                  <div className='card-img-top'>
                    <img src={ZeroTouch} alt="" width={"100%"} />
                  </div>
                  <div className="card-body px-0">
                    <h2 className="card-title section4-card-h2">Zero-touch Enrollment</h2>
                    <p className="card-text section4_card_text">Onboard endpoints and users with minimal user intervention. Provision devices and set up configurations well before the user gets their hands on.</p>
                  </div>



                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="card card_custom_section4 border border-0 px-0">
                  <div className='card-img-top'>
                    <img src={Automation} alt="" width={"100%"} />
                  </div>
                  <div className="card-body px-0">
                    <h2 className="card-title section4-card-h2">Automation</h2>
                    <p className="card-text section4_card_text">Automate endpoint compliance with dynamic grouping and breeze through day-to-day IT tasks with scripting capabilities. Hexnode also allows the creation of automated reports.</p>
                  </div>



                </div>
              </div>
              <div className="col-md-4">
                <div className="card card_custom_section4 border border-0 px-0">
                  <div className='card-img-top'>
                    <img src={Remoteaccess} alt="" width={"100%"} />
                  </div>
                  <div className="card-body px-0">
                    <h2 className="card-title section4-card-h2">Remote Access Management</h2>
                    <p className="card-text section4_card_text">Hexnode UEM enables the enterprise to manage every single device in the corporate ecosystem for optimal and secure operation.</p>
                  </div>



                </div>
              </div>
            </div>

            <div className="row pt-5">
              <div className="col-md-4">
                <div className="card card_custom_section4 border border-0 px-0">
                  <div className='card-img-top'>
                    <img src={Security} alt="" width={"100%"} />
                  </div>
                  <div className="card-body px-0">
                    <h2 className="card-title section4-card-h2">Endpoint Security and Compliance</h2>
                    <p className="card-text section4_card_text">Hexnode helps you maintain compliance with international regulatory bodies and set up custom rules for compliance within your business for security purposes.</p>
                  </div>



                </div>
              </div>
              <div className="col-md-4">
                <div className="card card_custom_section4 border border-0 px-0">
                  <div className='card-img-top'>
                    <img src={Intergration} alt="" width={"100%"} />
                  </div>
                  <div className="card-body px-0">
                    <h2 className="card-title section4-card-h2">Integrations</h2>
                    <p className="card-text section4_card_text">Hexnode's various integrations make it easy to fit into your current endpoint ecosystem. These integrations include Azure AD, Okta, Android Enterprise, Apple School and Business manager, and many more enterprise and technology integrations.</p>
                  </div>



                </div>
              </div>
              <div className="col-md-4">
                <div className="card card_custom_section4 border border-0 px-0">
                  <div className='card-img-top'>
                    <img src={appmanagement} alt="" width={"100%"} />
                  </div>
                  <div className="card-body px-0">
                    <h2 className="card-title section4-card-h2">App Management</h2>
                    <p className="card-text section4_card_text">Set up a bespoke app store, enable mandatory apps, and ensure endpoints come equipped with all the required applications, custom enterprise apps included.</p>
                  </div>



                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* section 5 */}
      <section className='section-5 pt-5 pb-5'>
        <div className='container pt-5 pb-5'>
          <div>
            <h2 className='heading-h2 text-center text-dark'>Multi-platform Endpoint Management</h2>
            <p className='text-center section-5-text pt-4'>Devices of varying platforms? Hexnode thrives in a diverse environment.</p>
          </div>
          <div className="row pt-5">
            <div className="col-md-6 image-container">
              <img
                src={platforms[selectedPlatform].image}
                alt={selectedPlatform}
                className="platform-image"
              />
            </div>
            <div className="col-md-6 ps-4">
              <div>
                {Object.keys(platforms).map((platform) => (
                  <div key={platform} onClick={() => handlePlatformClick(platform)}>
                    <div className={`bottom-line ${selectedPlatform === platform ? 'active' : ''}`}>
                      {selectedPlatform === platform ? (
                        // <div className="card-body section-5-card fade-in">
                        //   <p className="card-text section5-card-text">{platforms[platform].description}</p>
                        //   <a href="#" className="text-decoration-none text-danger danger-text">Try Hexnode on your endpoints</a>
                        // </div>
                        <div>
                          <div className="card px-4 section-5-card">

                            <div className="card-body">
                              <h3 className='text-left section-5-right-heading'>{platforms[platform].title}</h3>
                              <p className="card-text section5-card-text">{platforms[platform].description}</p>
                              <a href="#" className="text-decoration-none text-danger danger-text">Try Hexnode on your endpoints</a>
                            </div>
                          </div>

                        </div>
                      ) : (
                        <h3 className='text-devices'>{platform.charAt(0).toUpperCase() + platform.slice(1)}</h3>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* section 6 */}
      <section className='section-6 pt-5 pb-5'>
        <div className="container">
          <div>
            <h2 className='heading-h2 text-dark text-center'>What our customers say</h2>
          </div>
          <div>
            {/* carsoul */}

            <div className="testimonial-carousel-wrapper">
              <Carousel
                className="testimonial-carousel"
                indicators={false}
                nextIcon={<span aria-hidden="true" className="carousel-control-next-icon custom-arrow" />}
                prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon custom-arrow" />}
              >
                <Carousel.Item>
                  <div className="testimonial-card">
                    <img
                      className="testimonial-image rounded"
                      src="https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fcustomer-images%2Fjustin-modrak.png&w=1920&q=80" // Replace with your actual image path
                      alt="Dalibor Kruljac"
                    />
                    <div className="testimonial-content">
                      <div>
                        <p className="testimonial-quote">
                          "Most complete MDM solution I found, and I tested many of them, including major names"
                        </p>
                      </div>
                      <div className="testimonial-author">
                        <h5>Dalibor Kruljac</h5>
                        <p>KAMELEYA LTD</p>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>

                {/* Add more Carousel.Item components as needed */}
                <Carousel.Item>
                  <div className="testimonial-card d-flex">
                    <img
                      className="testimonial-image rounded"
                      src="https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fcustomer-images%2Fdalibor-kruljac.png&w=1920&q=80" // Replace with your actual image path
                      alt="Dalibor Kruljac"
                    />
                    <div className="testimonial-content">
                      <h4 className="testimonial-quote">
                        "Hexnode is of great value. Works great with Android and iOS!"
                      </h4>
                      <div className="testimonial-author">
                        <h5>Dalibor Kruljac</h5>
                        <p>KAMELEYA LTD</p>
                      </div>
                    </div>
                  </div>

                </Carousel.Item>
                {/* card 3 */}
                <Carousel.Item>
                  <div className="testimonial-card d-flex">
                    <img
                      className="testimonial-image rounded"
                      src="https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fcustomer-images%2Fchris-robinson.png&w=1920&q=80" // Replace with your actual image path
                      alt="Dalibor Kruljac"
                    />
                    <div className="testimonial-content">
                      <p className="testimonial-quote">
                        "Most complete MDM solution I found, and I tested many of them, including major names"
                      </p>
                      <div className="testimonial-author">
                        <h5>Dalibor Kruljac</h5>
                        <p>KAMELEYA LTD</p>
                      </div>
                    </div>
                  </div>

                </Carousel.Item>

              </Carousel>
            </div>


          </div>


          {/* logo slider */}
          <div className="container logo-slider h-100">
            <div className="row align-items-center h-100 mt-5">
              <div className="container rounded pt-5">

                <div className="slider">
                  <div className="logos">
                    <img src="https://static.hexnode.com/v2/assets/img/logos/dark-logo/lowes.svg" alt="" />
                    <img src="https://static.hexnode.com/v2/assets/img/logos/dark-logo/saic.svg" alt="" />
                    <img src="https://static.hexnode.com/v2/assets/img/logos/dark-logo/lowes.svg" alt="" />
                    <img src="https://static.hexnode.com/v2/assets/img/logos/dark-logo/saic.svg" alt="" />
                    <img src="https://static.hexnode.com/v2/assets/img/logos/dark-logo/wolt.svg" alt="" />
                  </div>
                  <div className="logos">
                    <img src="https://static.hexnode.com/v2/assets/img/logos/dark-logo/hilton.svg" alt="" />
                    <img src="https://static.hexnode.com/v2/assets/img/logos/dark-logo/polaris.svg" alt="" />
                    <img src="https://static.hexnode.com/v2/assets/img/logos/dark-logo/costco.svg" alt="" />
                    <img src="https://static.hexnode.com/v2/assets/img/logos/dark-logo/gorillas.svg" alt="" />
                    <img src="https://static.hexnode.com/v2/assets/img/logos/dark-logo/merck.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/*  */}
        </div>
      </section>

</div >
  )
}

export default Home