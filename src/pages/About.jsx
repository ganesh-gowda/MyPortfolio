import React from 'react'
import { IconContext } from 'react-icons'
import { TiHtml5 } from "react-icons/ti";
import { TiCss3 } from 'react-icons/ti';
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiReactquery } from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { SiVitest } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandPython } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandRedux } from "react-icons/tb";
import { FiFramer} from "react-icons/fi";
import { SiMui } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SiPrisma } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { SiAdobelightroom } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { easeIn, motion } from "framer-motion";
import { inView } from 'framer-motion';
const About = () => {
    const container = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.1,
           
          }
        }
      };
      
      const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      };
      
  return (
    
    <div className=''>
        <div className='flex flex-col gap-20 font-sans2 py-5 text-white'>
            <div className='flex text-xs lg:text-sm flex-col gap-10 w-full px-[30px] sm:px-[75px]'>
                <div className='flex flex-col items-center justify-center md:flex-row gap-7 xs:gap-10 md:gap-20 border-white py-10 border-b-[1px]'>
                    <img src='/Images/abt.jpg'  className='border-creme rounded-xl shadow-[10px_-10px_1px_#3b3b3b]  h-[200px] sm:h-[300px] w-[200px] sm:w-[300px]'/>
                    <div className='flex flex-col gap-4'>
                        <div><span className='text-sm sm:text-base lg:text-md text-mypink'>I Design</span>, like Kanye produces bold, unapologetic, and built to disrupt. Web design isn’t just about looks; it’s about crafting experiences that hit different, draw you in, and leave a lasting mark. Every project is like a classic album, meticulously crafted, visually striking, and impossible to ignore</div>
                        <div><span className='text-sm sm:text-base lg:text-md text-myblue'>I Build</span>, front-end experiences that are fast, intuitive, and built to engage. My focus? Turning complex ideas into sleek, user-friendly solutions that drive real impact. Whether it’s a small app or a full-scale system, I bring ideas to life with clean code, bold design, and a seamless user experience that keeps people coming back.</div>
                    </div>
                </div>
            </div>
                
        </div>
    </div>
  )
}

export default About