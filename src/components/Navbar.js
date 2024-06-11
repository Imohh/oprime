import React, {useState, useEffect} from 'react'
import apostrophe from '../images/apostrophe.png'

const Footer = () => {
	const [show, setShow] = useState(false)
	const [scrollColor, setScrollColor] = useState('transparent');
	const [scrollShadow, setScrollShadow] = useState(false);

	const toggleMobileMenu = () => {
	    setShow(!show);
	};

	const handleScroll = () => {
	    const currentScroll = window.pageYOffset;
	    const navbarHeight = 64; // Adjust this value based on your navbar height

	    if (currentScroll >= navbarHeight) {
	      setScrollColor('bg-white'); // Change the color class to your desired color
	      setScrollShadow(true)
	    } else {
	      setScrollColor('transparent');
	      setScrollShadow(false)
	    }
	};

	useEffect(() => {
	    window.addEventListener('scroll', handleScroll);

	    return () => {
	      window.removeEventListener('scroll', handleScroll);
	    };
	}, []);





	return (
		<>
			<div className={`fixed w-full py-5 lg:py-6 z-50 transition-colors duration-300 ${scrollColor} 
				${scrollShadow ? 'shadow-md' : ''}`}>
				<div className="flex justify-between items-center w-full lg:w-full xl:w-full lg:px-10 mx-auto">
				  <div className="w-full pl-4 lg:pl-0 xl:pl-0 md:pl-4">
				    <p className="font-bold text-3xl capitalize">
				      <span className="text-[#ff5757]">o</span>prime tech
				    </p>
				    {/*<a href="/"><img className="xs:w-24 sm:w-24 md:w-24 lg:w-28" src={apostrophe} alt="Grep Logo" /></a>*/}
				  </div>
				  <div className="
				    hidden 
				    lg:flex 
				    lg:flex-row
				    lg:static
				    lg:shadow-none
				    lg:justify-end
				    lg:w-full">
				    <a className="mr-8 capitalize text-xl text-black-900 hover:text-black-600" href="/">home</a>
				    <a className="mr-8 capitalize text-xl text-black-900 hover:text-black-600" href="/about">about</a>
				    <a className="mr-8 capitalize text-xl text-black-900 hover:text-black-600" href="/services">services</a>
				    <a className="mr-8 capitalize text-xl text-black-900 hover:text-black-600" href="/contact">contact</a>
				  </div>
				</div>

				{show && 
					<div className="bg-white transition delay-150 duration-300 ease-in-out
					lg:hidden shadow-lg" id="mobile-menu">
						<div className="bg-white px-2 pt-2 pb-10 space-y-1">
					      <a href="/" className="text-black block px-3 py-2 rounded-md text-base font-medium capitalize">home</a>
					      <a href="/about" className="text-black block px-3 py-2 rounded-md text-base font-medium capitalize">about</a>
					      <a href="/services" className="text-black block px-3 py-2 rounded-md text-base font-medium capitalize">services</a>
					      <a href="/contact" className="text-black block px-3 py-2 rounded-md text-base font-medium capitalize">contact</a>
					      <a href="/login" className=" capitalize w-full text-white text-xl py-2 px-8 bg-tickle-me-pink-600 rounded-md shadow-xl
							hover:shadow-none transition">
							get started
						  </a>
					    </div>
					</div>
				}
			</div>
		</>
	)
}

export default Footer