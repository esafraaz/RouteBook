
import { Footer } from 'flowbite-react';
import { BsFacebook, BsGithub,  BsTwitter } from 'react-icons/bs';
import logo from "../../assets/logo.png"

const FooterMain = () => {
  return (
    <Footer className='bg-green-950 rounded-none text-white'>
      <div className="w-full bg-green-950 px-4 py-6 sm:flex sm:items-center sm:justify-between container mx-auto">
        <div>
          <img className='h-6' src={logo} alt="" />
        </div>
          <Footer.Copyright
            by="S. M. Sherajul Islam"
            href="https://www.facebook.com/esaf.raaz/"
            year={2024}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="https://www.facebook.com/esaf.raaz/"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="https://www.linkedin.com/in/esafraaz/"
              icon={BsTwitter}
            />
            <Footer.Icon
              href="https://github.com/esafraaz"
              icon={BsGithub}
            />
          </div>
        </div>
    </Footer>
  )
}

export default FooterMain;