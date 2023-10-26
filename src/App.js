import Footer from './components/Footer'
import Globe from 'react-globe.gl';
import contactImage from './images/contact.jpg'

function App() {
  return (
    <div>

      {/*HERO*/}
      <div>

      </div>

      {/*ABOUT*/}
      <div>

      </div>

      {/*SERVICES*/}
      <div className="xl:px-20 lx:py-20 px-3 py-10">
        <p className="text-center text-[#ff5757] uppercase text-4xl font-bold pb-10 tracking-[.1em]">services</p>
        <div className="xl:p-20 p-10 grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          <div className="bg-[#f1f1f1] rounded-2xl p-10 shadow-md cursor-pointer hover:bg-[#000] hover:text-white transition delay-50 flex flex-col items-center">
            <img 
              className="mb-4" width="100" height="100" src="https://img.icons8.com/fluency/100/internet.png" alt="internet"/>
            <p className="text-center text-xl uppercase font-semibold pb-5 tracking-[.07em]">website development</p>
            <p className="text-lg">Unlock the potential of your online presence with our cutting-edge website development services. 
            We create visually appealing, user-friendly websites that not only showcase your brand 
            story but also engage your audience effectively. Whether you need a corporate website, a portfolio site, or a blog, 
            we have the expertise to deliver stunning and responsive designs that leave a lasting impression.</p>
          </div>
          <div className="bg-[#f1f1f1] rounded-2xl p-10 shadow-md cursor-pointer hover:bg-[#000] hover:text-white transition delay-50 flex flex-col items-center">
            <img 
              className="mb-4" width="100" height="100" src="https://img.icons8.com/officel/100/shopping-cart.png" alt="shopping-cart"/>
            <p className="text-center text-xl uppercase font-semibold pb-5 tracking-[.07em]">e-commerce</p>
            <p className="text-lg">Take your business to new heights with our powerful e-commerce solutions. 
            We create online stores that not only captivate your customers but also streamline the buying process. 
            From intuitive product catalogs to secure payment gateways, we provide end-to-end 
            e-commerce services designed to boost your sales and customer satisfaction.</p>
          </div>
          <div className="bg-[#f1f1f1] rounded-2xl p-10 shadow-md cursor-pointer hover:bg-[#000] hover:text-white transition delay-50 flex flex-col items-center">
            <img 
              className="mb-4" width="100" height="100" src="https://img.icons8.com/emoji/100/mobile-phone.png" alt="mobile-phone"/>
            <p className="text-center text-xl uppercase font-semibold pb-5 tracking-[.07em]">mobile application development</p>
            <p className="text-lg">In the age of smartphones, having a mobile application is essential for reaching a wider audience. 
            Our expert developers create dynamic and interactive mobile applications across platforms, 
            catering to various industries and business needs. Whether you need an iOS app, an Android app, or a cross-platform solution, 
            we deliver high-quality applications that resonate with your target audience.</p>
          </div>
        </div>
      </div>

      {/*QUOTE*/}
      <div className="xl:px-20 lx:py-20 px-3 py-10">
        <p></p>
        <div className="xl:p-20 p-10 grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8">
          <div>
            
          </div>
          <div>
            "empowering businesses with digital excellence"
          </div>
        </div>
      </div>

      {/*WHY CHOOSE US*/}
      <div className="xl:px-20 lx:py-20 px-3 py-10">
        <p className="text-center text-[#ff5757] uppercase text-4xl font-bold pb-10 tracking-[.1em]">why choose us ?</p>
        <div className="xl:p-20 p-10 grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          <div className="bg-[#fff] rounded-2xl p-10 shadow-md cursor-pointer hover:bg-[#000] hover:text-white transition delay-50 flex flex-col items-center">
            <img 
              className="mb-4"
              width="100" 
              height="100" 
              src="https://img.icons8.com/external-flaticons-flat-flat-icons/100/external-affordable-cleaning-flaticons-flat-flat-icons-2.png" 
              alt="external-affordable-cleaning-flaticons-flat-flat-icons-2"/>
            <p className="text-center text-xl uppercase font-semibold pb-5 tracking-[.07em]">affordable</p>
            <p className="text-lg">Quality digital solutions shouldn’t come with a hefty price tag. We offer competitive and transparent pricing, 
            ensuring you get the best value for your investment. Our flexible packages cater to businesses of all sizes, 
            from startups to established enterprises. We work with you to find a solution that aligns with your budget and objectives.</p>
          </div>
          <div className="bg-[#fff] rounded-2xl p-10 shadow-md cursor-pointer hover:bg-[#000] hover:text-white transition delay-50 flex flex-col items-center">
            <img 
              className="mb-4"
              width="100" 
              height="100" 
              src="https://img.icons8.com/plasticine/100/time.png" 
              alt="time"/>
            <p className="text-center text-xl uppercase font-semibold pb-5 tracking-[.07em]">quality assurance and timely delivery</p>
            <p className="text-lg">We are committed to delivering top-notch quality in every project we undertake. 
            Our rigorous quality assurance processes guarantee that your website, e-commerce platform, 
            or mobile application functions seamlessly across all devices and platforms. 
            We also understand the importance of time in the digital world. Timely delivery is our promise, 
            ensuring you can launch your digital presence as planned.</p>
          </div>
          <div className="bg-[#fff] rounded-2xl p-10 shadow-md cursor-pointer hover:bg-[#000] hover:text-white transition delay-50 flex flex-col items-center">
            <img 
              className="mb-4"
              width="100" 
              height="100" 
              src="https://img.icons8.com/fluency/100/group.png" 
              alt="group"/>
            <p className="text-center text-xl uppercase font-semibold pb-5 tracking-[.07em]">experienced team of experts</p>
            <p className="text-lg">Our team comprises of highly skilled professionals who are experts in their respective fields. 
            From web designers and developers to e-commerce specialists and mobile app developers, 
            we have a cohesive team that collaborates seamlessly to deliver outstanding results. With years of experience, 
            we understand the nuances of digital transformation and can guide you effectively through the process.</p>
          </div>
        </div>
      </div>

      {/*CONTACT*/}
      <div className="xl:px-20 lx:py-20 px-3 py-10 bg-black">
        <p className="text-center text-white uppercase text-4xl font-bold pb-4 xl:pt-10 lg:pt-10 tracking-[.1em]">contact us</p>
        <p className="text-center text-white capitalize pb-10">what are you waiting for? fill the form and we will be in touch.</p>
        <div className="p-10 grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
          <div>
            <img src={contactImage} alt="map" />
          </div>
          <div className="px-10 my-auto">
            <form>
            <label className="text-white mb-4">Full name <span className="text-red-500">*</span></label>
              <input
                className="p-4 mb-6 w-full border rounded-md shadow-md"
                type="text"
                placeholder="John"
                value=""
                name=""
              />

              <label className="text-white mb-4">E-mail address <span className="text-red-500">*</span></label>
              <input
                className="p-4 mb-4 w-full border rounded-md shadow-md"
                type="text"
                placeholder="john123@email.com"
                value=""
                name=""
              />

              <label className="text-white mb-4">Message </label>
              <textarea
                className="p-4 mb-4 w-full border rounded-md shadow-md"
                type="text"
                placeholder="message"
                value=""
                name=""
              />
              <button className="bg-[#ff5757] w-full text-white py-4 px-6 capitalize rounded-md float-right">send message</button>
            </form>
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div className="text-center">
            <img width="50" height="50" src="https://img.icons8.com/ios/50/smartphone--v2.png" alt="smartphone--v2"/>
            <img width="50" height="50" src="https://img.icons8.com/ios/50/000000/smartphone--v2.png" alt="smartphone--v2"/>
            <p className="uppercase text-white text-2xl">phone</p>
            <p className="text-white text-lg">+234 802 060 0313</p>
          </div>
          <div className="text-center">
            <p>email address</p>
            <p className="text-white">info@oprime.tech</p>
          </div>
          <div className="text-center">
            <p>socials</p>
            <p className="text-white">instagram, twitter, facebook</p>
          </div>
        </div>
      </div>

      {/*FOOTER*/}
      <Footer />


    </div>
  );
}

export default App;
