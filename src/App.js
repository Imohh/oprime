import React, { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser';
import './index.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Globe from 'react-globe.gl';
import contactImage from './images/contact.jpg'
import section from './images/section.png'
import apostrophe from './images/apostrophe.png'
import apostrophe2 from './images/apostrophe2.png'
import instagram from './images/instagram.png'
import x from './images/x.png'
import phone from './images/phone.png'
import email from './images/email.png'
import worldmap from './images/map.jpg'
import hero from './images/hero.png'
import chekam from './images/clients/chekam-logo.png'
import recreate from './images/clients/recreate-logo.png'
import joel from './images/clients/joel-logo.png'
import glintz from './images/clients/glintz-white.png'
import eminence from './images/clients/eminence-logo.png'
import eminenceImg from './images/clients/eminence.png'
import chekamImg from './images/clients/chekam.png'
import recreateImg from './images/clients/recreate.png'
import joelImg from './images/clients/joel.png'
import glintzImg from './images/clients/glintz.png'
import mickkycutzImg from './images/clients/mickkycutz.png'

function App() {
  
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    from_name: '',
    email: '',
    message: '',
  });
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send('service_9jjxhze', 'template_3qas9qp', formData, {
        publicKey: 'RbG8xAVSd5MnOHIwn',
      })
    .then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        setFormData({
          from_name: '',
          email: '',
          message: '',
        });
        // Display success alert
        alert('Contact form submitted successfully!');
      },
      (err) => {
        console.log('FAILED...', err);
      },
    );

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);

  }




  // contact button
  const [loadingState, setLoadingState] = useState('');

  // useEffect(() => {
  //   const resize = () => {
  //     document.body.style.marginTop = `${Math.floor((window.innerHeight - 260) / 2)}px`;
  //   };

  //   window.addEventListener('resize', resize);
  //   resize();

  //   return () => window.removeEventListener('resize', resize);
  // }, []);

  const handleClick = () => {
    if (loadingState === 'loading-start loading-end') {
      setLoadingState('');
    } else {
      setTimeout(() => setLoadingState('loading-start'), 0);
      setTimeout(() => setLoadingState('loading-start loading-progress'), 500);
      setTimeout(() => setLoadingState('loading-start loading-progress loading-end'), 1500);
    }
  };


  return (
    <div>
      <Navbar refs={{ aboutRef, servicesRef, contactRef }} />
      {/*HERO*/}
      <div className="
        xl:py-40 xl:px-20 lg:py-40 lg:px-20 py-20 px-4
        flex flex-col items-center justify-center
        bg-[#e9eef180]">
        <div className="text-center xl:w-3/5 lg:w-3/5 md:w-3/5 w-4/5 m-auto xl:mt-o lg:mt-o md:mt-o mt-10">
          <p className="xl:text-3xl lg:text-3xl md:text-2xl text-xl font-semibold">We help companies have a digital presence</p>
          <p className="mt-10">Established in 2020, Oprime Tech is a pioneering force in the digital realm, 
          dedicated to helping brands thrive in the online landscape. We specialize in crafting exceptional 
          websites and innovative mobile applications tailored to meet your unique business needs.</p>
          <img src={hero} alt="image" className="mt-10 mx-auto animate-bounceSlow" />
        </div>
      </div>

      {/*ABOUT*/}
      <div ref={aboutRef}  className="xl:px-20 xl:py-20 px-3 py-10">
        <p className="text-center text-[#ff5757] uppercase xl:text-4xl lg:text-4xl md:text-3xl text-2xl font-bold py-10 tracking-[.1em]">about us</p>
        
        <div className="xl:px-[20%] p-10 text-center">
          <p className="text-base">Established in 2020, Oprime Tech is a pioneering force in the digital realm, 
          dedicated to helping brands thrive in the online landscape. We specialize in crafting 
          exceptional websites and innovative mobile applications tailored to meet your unique business needs.</p>

          <p className="text-lg mt-5">At Oprime Tech, we believe in the power of digital transformation. Our experienced team of highly 
          skilled developers is passionate about creating seamless online experiences that captivate your audience. 
          Whether you're a startup looking to make a mark or an established business aiming for digital evolution, 
          we have the expertise to make it happen.</p>
        </div>
      </div>

      {/*SERVICES*/}
      <div ref={servicesRef} className="xl:px-20 xl:py-20 px-3 py-10 bg-[#e9eef180]">
        <p className="text-center text-[#ff5757] uppercase xl:text-4xl lg:text-4xl md:text-3xl text-2xl font-bold py-10 tracking-[.1em]">services</p>
        <div className="xl:p-20 lg:p-20 p-4 grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          <div className="xl:p-10 lg:p-10 md:p-10 p-4 cursor-pointer flex flex-col items-center">
            <img 
              className="mb-4" width="100" height="100" src="https://img.icons8.com/fluency/100/internet.png" alt="website development"/>
            <p className="text-center xl:text-xl lg:text-xl md:text-xl text-lg uppercase font-semibold pb-5 tracking-[.07em]">website development</p>
            <p className="text-base text-center">Unlock the potential of your online presence with our cutting-edge website development services. 
            We create visually appealing, user-friendly websites that not only showcase your brand 
            story but also engage your audience effectively. Whether you need a corporate website, a portfolio site, or a blog, 
            we have the expertise to deliver stunning and responsive designs that leave a lasting impression.</p>
          </div>
          <div className="xl:p-10 lg:p-10 md:p-10 p-4 cursor-pointer flex flex-col items-center">
            <img 
              className="mb-4" width="100" height="100" src="https://img.icons8.com/officel/100/shopping-cart.png" alt="E-Commerce"/>
            <p className="text-center xl:text-xl lg:text-xl md:text-xl text-lg uppercase font-semibold pb-5 tracking-[.07em]">e-commerce</p>
            <p className="text-base text-center">Take your business to new heights with our powerful e-commerce solutions. 
            We create online stores that not only captivate your customers but also streamline the buying process. 
            From intuitive product catalogs to secure payment gateways, we provide end-to-end 
            e-commerce services designed to boost your sales and customer satisfaction.</p>
          </div>
          <div className="xl:p-10 lg:p-10 md:p-10 p-4 cursor-pointer flex flex-col items-center">
            <img 
              className="mb-4" width="100" height="100" src="https://img.icons8.com/emoji/100/mobile-phone.png" alt="mobile-application"/>
            <p className="text-center xl:text-xl lg:text-xl md:text-xl text-lg uppercase font-semibold pb-5 tracking-[.07em]">mobile application development</p>
            <p className="text-base text-center">In the age of smartphones, having a mobile application is essential for reaching a wider audience. 
            Our expert developers create dynamic and interactive mobile applications across platforms, 
            catering to various industries and business needs. Whether you need an iOS app, an Android app, or a cross-platform solution, 
            we deliver high-quality applications that resonate with your target audience.</p>
          </div>
        </div>
      </div>

      {/*QUOTE*/}
      <div className="xl:px-20 lx:py-20 px-3 py-10">
        <p></p>
        <div className="xl:p-10 p-10 grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8">
          <div>
            {/*<img src={section} alt="thinking" />*/}
            <div className="wow zoomIn
            w-1/2 h-1/2 sm:w-1/3 sm:h-1/3 md:w-1/4 md:h-1/4 xl:w-1/6 xl:h-1/6 bg-[#ff5757] rounded-full aspect-w-1 aspect-h-1
            p-36 lg:p-72 relative mx-auto">
              <div className="bg-red-500 mr-40 rounded-full">
                <img className="
                  lg:w-2/3 xl:w-9/12 h-auto h-fit lg:h-fit 
                  absolute top-1/2 left-0 xl:left-18 lg:left-12 
                  transform -translate-y-1/2"
                    src={section} alt="grep mockup" 
                  />
              </div>
            </div>
          </div>
          <div className="my-auto">
            <div className="flex flex-row xl:mb-5 lg:mb-5 md:mb-5 mb-0 xl:mt-0 lg:mt-0 md:mt-0 mt-10">
              <img className="w-[5%] h-[5%]" src={apostrophe2} alt="comma--v1"/>
              <img className="w-[5%] h-[5%]" src={apostrophe2} alt="comma--v1"/>
            </div>
            <p className="italic font-semibold xl:text-4xl lg:text-3xl md:text-2xl text-xl mx-2  mt-10 xl:mt-0 lg:mt-0 md:mt-0">Empowering businesses with digital excellence...</p>
          </div>
        </div>
      </div>



      {/*WORK*/}
      <div className="xl:px-[20%] px-10 xl:py-20 lg:py-20 md:py-20 py-10 text-center">
          <h3 className="xl:text-4xl lg:text-4xl md:text-3xl text-2xl uppercase text-custom-gray-head-text font-semibold tracking-[.15em] mb-10">our works</h3>

          {/*GALLERY*/}
          <div id="flexbox" className="flex items-center justify-center">
              <div className="column">
                <a href="https://joeladu.com">
                  <img src={joelImg} alt="Image" width="100%" />
                </a>
                <a href="https://chekam.com">
                  <img src={chekamImg} alt="Image" width="100%" />
                </a>
                {/*<img src={third} alt="Image" width="100%" />*/}
              </div>
              <div className="column">
                <a href="https://glintzphotography.org">
                  <img src={glintzImg} alt="Image" width="100%" />
                </a>
                <a href="https://recreateafrica.org">
                  <img src={recreateImg} alt="Image" width="100%" />
                </a>
              </div>
              <div className="column">
                <a href="https://mickkycutz.africa">
                  <img src={mickkycutzImg} alt="Image" width="100%" />
                </a>
                {/*<img src="https://docs.google.com/uc?export=download&id=1I-bDFOoYZ-XUZkwDxRJmtiR_7DGVn_Eb" alt="Image" width="100%" />*/}
                <a href="https://eminencebygtx.com">
                  <img src={eminenceImg} alt="Image" width="100%" />
                </a>
              </div>
                  
            </div>
        </div>







      {/*CLIENTS*/}
      <div className="xl:px-40 xl:py-[40px] lg:px-40 lg:py-[40px] px-5 py-10 bg-[#ff5757]">
        <p className="text-center text-white uppercase xl:text-4xl lg:text-4xl md:text-3xl text-2xl font-bold py-10 tracking-[.1em]">our clients</p>
        <div className="xl:flex xl:flex-row xl:items-center xl:justify-center xl:space-x-2 xl:py-[100px]
          lg:flex lg:flex-row lg:items-center lg:justify-center lg:space-x-2
          grid grid-cols-1 space-y-8">
          <div className="flex justify-center">
            <img src={glintz} alt="logo" className="xl:w-full lg:w-2/5 w-2/5" />
          </div>
          <div className="flex justify-center">
            <img src={chekam} alt="logo" className="xl:w-3/5 lg:w-2/5 w-2/5" />
          </div>
          <div className="flex justify-center">
            <img src={recreate} alt="logo" className="xl:w-full lg:w-full w-2/5" />
          </div>
          <div className="flex justify-center">
            <img src={joel} alt="logo" className="xl:w-1/5 lg:w-1/5 w-1/5" />
          </div>
          <div className="flex justify-center">
            <img src={eminence} alt="logo" className="xl:w-[400px] lg:w-[400px] w-2/5" />
          </div>
        </div>
      </div>

      {/*WHY CHOOSE US*/}
      <div className="xl:px-20 lx:py-20 px-3 py-10">
        <p className="text-center text-[#ff5757] uppercase xl:text-4xl lg:text-4xl md:text-3xl text-2xl font-bold py-10 tracking-[.1em]">why choose us ?</p>
        <div className="xl:p-20 lg:p-20 p-4 grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          <div className="xl:p-10 lg:p-10 md:p-10 p-4 cursor-pointer flex flex-col items-center">
            <img 
              className="mb-4"
              width="100" 
              height="100" 
              src="https://img.icons8.com/external-flaticons-flat-flat-icons/100/external-affordable-cleaning-flaticons-flat-flat-icons-2.png" 
              alt="external-affordable-cleaning-flaticons-flat-flat-icons-2"/>
            <p className="text-center xl:text-xl lg:text-xl md:text-xl text-lg uppercase font-semibold pb-5 tracking-[.07em]">affordable</p>
            <p className="text-base text-center">Quality digital solutions shouldn’t come with a hefty price tag. We offer competitive and transparent pricing, 
            ensuring you get the best value for your investment. Our flexible packages cater to businesses of all sizes, 
            from startups to established enterprises. We work with you to find a solution that aligns with your budget and objectives.</p>
          </div>
          <div className="xl:p-10 lg:p-10 md:p-10 p-4 cursor-pointer flex flex-col items-center">
            <img 
              className="mb-4"
              width="100" 
              height="100" 
              src="https://img.icons8.com/plasticine/100/time.png" 
              alt="time"/>
            <p className="text-center xl:text-xl lg:text-xl md:text-xl text-lg uppercase font-semibold pb-5 tracking-[.07em]">quality assurance and timely delivery</p>
            <p className="text-base text-center">We are committed to delivering top-notch quality in every project we undertake. 
            Our rigorous quality assurance processes guarantee that your website, e-commerce platform, 
            or mobile application functions seamlessly across all devices and platforms. 
            We also understand the importance of time in the digital world. Timely delivery is our promise, 
            ensuring you can launch your digital presence as planned.</p>
          </div>
          <div className="xl:p-10 lg:p-10 md:p-10 p-4 cursor-pointer flex flex-col items-center">
            <img 
              className="mb-4"
              width="100" 
              height="100" 
              src="https://img.icons8.com/fluency/100/group.png" 
              alt="group"/>
            <p className="text-center xl:text-xl lg:text-xl md:text-xl text-lg uppercase font-semibold pb-5 tracking-[.07em]">experienced team of experts</p>
            <p className="text-base text-center">Our team comprises of highly skilled professionals who are experts in their respective fields. 
            From web designers and developers to e-commerce specialists and mobile app developers, 
            we have a cohesive team that collaborates seamlessly to deliver outstanding results. With years of experience, 
            we understand the nuances of digital transformation and can guide you effectively through the process.</p>
          </div>
        </div>
      </div>

      {/*CONTACT*/}
      <div ref={contactRef} className="xl:px-20 xl:py-20 px-3 py-10 "
        style={{
          backgroundImage: `url(${worldmap})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
        <p className="text-center text-white uppercase xl:text-4xl lg:text-4xl md:text-3xl text-2xl font-bold py-10 xl:pt-10 lg:pt-10 tracking-[.1em]">contact us</p>
        <p className="text-center text-white capitalize pb-10">what are you waiting for? fill the form and we will be in touch.</p>
        <div className="xl:p-10 lg:p-10 md:p-10 p-4 grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
          <div>
            {/*<img src={contactImage} alt="map" />*/}
          </div>
          <div className="xl:px-10 lg:px-10 md:px-10 px-4 my-auto">
            <div className="bg-white xl:px-10 lg:px-10 md:px-10 px-7 py-20 shadow-md">
              <form onSubmit={handleSubmit}>
                <label className="text-black text-base mb-4 capitalize">full name <span className="text-red-500">*</span></label>
                <input
                  className="p-4 mb-6 w-full border border-slate-500 rounded-md shadow-md capitalize"
                  type="text"
                  placeholder="John"
                  value={formData.from_name}
                  name="from_name"
                  onChange={handleChange}
                  required
                />

                <label className="text-black text-base mb-4 capitalize">email <span className="text-red-500">*</span></label>
                <input
                  className="p-4 mb-4 w-full border border-slate-500 rounded-md shadow-md"
                  type="text"
                  placeholder="example@mail.com"
                  value={formData.email}
                  name="email"
                  onChange={handleChange}
                  required
                />

                <label className="text-black text-base mb-4 capitalize">your message </label>
                <textarea
                  className="p-4 mb-4 w-full border border-slate-500 rounded-md shadow-md"
                  type="text"
                  placeholder="What's your message"
                  value={formData.message}
                  name="message"
                  onChange={handleChange}
                  required
                />

                {/*<div className={loadingState} onClick={handleClick}>
                  <a className="submit" href="#">submit</a>
                  <a className="loading" href="#">loading</a>
                  <svg id="button" viewBox="0 0 240 220">
                    <rect id="middle" x="20" y="100" width="200" height="60" rx="30"></rect>
                    <path id="top" d="M 60,100 L 50,100 C 33.4357078,100 20,113.427814 20,130 L 20,130 C 20,146.568541 33.4331197,160 50,160 L190,160 C206.570288,160 220,146.572314 220,130 L220,100 C220,-60 180, 80 160,100 C140,120 100,160 100,160"></path>
                    <path id="bottom" d="M180,160 L190,160 C206.564295,160 220,146.572186 220,130 L220,130 C220,113.431458 206.56688,100 190,100 L 50,100 C33.4297125,100 20,113.435296 20,130 C20,130 20,120 20,140 C20,220 180,200 120,140 C100,120 80,100 80,100"></path>
                  </svg>
                  <a className="feedback" href="#"></a>
                </div>*/}

                <button type="submit" className={`submit-button ${submitted ? 'submitted' : ''}`}>
                  {submitted ? <span>&#10003;</span> : 'Submit'}
                </button>
                
                {/*<button className="bg-[#ff5757] w-full text-white py-4 px-6 capitalize rounded-md float-right">send message</button>*/}
              </form>
            </div>
          </div>
        </div>
        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 grid-cols-1 xl:space-y-0 lg:space-y-0 md:space-y-0 space-y-10 mb-10 pt-10">
          <div className="text-center mx-auto">
            <img className="inline-block mb-2" src={phone} alt="" width="30" height="40" />          
            <p className="uppercase text-white text-2xl font-semibold mb-2">phone</p>
            <p className="text-white text-lg"><a href="tel:+2348020600313">+234 802 060 0313</a></p>
          </div>
          <div className="text-center mx-auto">
            <img className="inline-block mb-2" src={email} alt="" width="30" height="40" />
            <p className="uppercase text-white text-2xl font-semibold mb-2">email address</p>
            <p className="text-white"><a href="mailto:info@oprime.com.ng">info@oprime.com.ng</a></p>
          </div>
          <div className="text-center mx-auto">
            <p className="uppercase text-white text-2xl font-semibold mb-2">follow us</p>
            <div className="flex flex-row items-center justify-center">
              <a href="https://instagram.com/oprime.ng" target="_blank"><img className="w-8 h-8" src={instagram} alt="" /></a>
              <a href="https://twitter.com/oprimeng" target="_blank"><img className="w-8 h-8" src={x} alt="" /></a>
            </div>
          </div>
        </div>
      </div>

      {/*FOOTER*/}
      <Footer />


    </div>
  );
}

export default App;
