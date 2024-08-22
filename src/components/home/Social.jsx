import React from "react";
import { FiTwitter, FiGithub, FiLinkedin, FiFacebook} from "react-icons/fi";

const Social = () => {
    return (
        <div className="home__social">
             <a
              href="https://www.facebook.com/Samanta.Islam.27"
              data-tip="Facebook"
              className='home__social-icon'
            >
              <FiFacebook className="border text-black rounded-lg p-2 h-9 w-9"></FiFacebook>
            </a>
            <a href="https://github.com/samanta335" className="home__social-icon" target="_blank">
                <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/samanta-islam-0ba236280/" className="home__social-icon" target="_blank">
                <FiLinkedin />
            </a>
        </div> 
    ); 
}

export default Social;