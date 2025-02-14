import React from 'react'
import { IconContext } from 'react-icons'
import { TiHtml5 } from "react-icons/ti";
import { TiCss3 } from 'react-icons/ti';
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";
import { SiReactquery } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaDatabase } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiVitest } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandPython } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandRedux } from "react-icons/tb";
import { FaAws } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { FaServer } from "react-icons/fa";
import { SiAdobelightroom } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { easeIn, motion } from "framer-motion";
import { IoFlashOutline } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";
const Development = () => {
  const container = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.4, // Adjust this value
        staggerChildren: 0.1, // Adjust this value
      }
          
       
      
    }
  };
  const container1 = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2, // Adjust this value
        staggerChildren: 0.03, // Adjust this value
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
            <div className='flex flex-col gap-4 w-full'>
                <div className='px-[30px] sm:px-[75px] text-base md:text-lmd xl:text-lg font-semibold text-center w-full '>Most Recent Projects</div>

                <motion.div id='container' variants={container} initial="hidden" whileInView="visible" exit="visible" viewport={{ amount: 0.0000001, once: true }} className='  px-[30px] sm:px-[75px] grid-cols-1 md:grid-cols-2 grid justify-center items-center gap-8'>
                    <motion.a href='https://github.com/ganesh-gowda/CropTech.git' target='_blank' id='item' variants={item} className='flex h-full flex-col gap-3 w-full px-10 py-4 rounded-lg bg-mygray backdrop-filter backdrop-blur-lg  text-white font-extralight  border-creme border-[1px] items-center justify-center'>
                        <img src='/Images/proj1.jpg' className='rounded-xl'/> 
                        <div className='flex flex-row gap-3 justify-center items-center'>
                            <div className='text-sm lg:text-[20px] '>
                                Slot Flow
                            </div> 
                            
                           
                        </div>
                           
                    </motion.a>    
                    <motion.a href='https://github.com/ganesh-gowda/Crypto-X' target='_blank' id='item' variants={item}  className='flex h-full flex-col gap-3 w-full px-10 py-4 rounded-lg backdrop-filter backdrop-blur-lg bg-mygray text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <img src='/Images/proj2.png' className='rounded-xl'/> 
                        <div className='flex flex-row gap-3 justify-center items-center'>
                            <div className='text-sm lg:text-[20px]  '>
                                CryptoX
                            </div> 
                           
                        </div>
                                       

                    </motion.a>  

                    <motion.a href='https://github.com/ganesh-gowda/Medicine-Prediction' target='_blank' id='item' variants={item} className='flex h-full flex-col gap-3 w-full px-10 py-4 rounded-lg backdrop-filter backdrop-blur-lg bg-mygray text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <img src='/Images/proj3.jpg' className='rounded-xl'/> 
                        <div className='flex flex-row gap-3 justify-center items-center'>
                            <div className='text-sm lg:text-[20px] '>
                            Medicine Recommendation
                            </div> 
                           
                        </div>

                    </motion.a>     
                    
                    <motion.a href='https://github.com/ganesh-gowda/Summeriz' target='_blank' id='item' variants={item} className='flex h-full flex-col gap-3 w-full px-10 py-4 rounded-lg backdrop-filter backdrop-blur-lg bg-mygray text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <img src='/Images/proj4.png' className='rounded-xl'/> 
                        <div className='flex flex-row gap-3 justify-center items-center'>
                            <div className='text-sm lg:text-[20px] '>
                                Ai Summarizer
                            </div> 
                           
                        </div>

                    </motion.a>     
                          
                </motion.div>
                <div className='flex items-center justify-center pt-7'>            
                    <a href='https://drive.google.com/file/d/1osL4-d1gyeAnynP4yLok3ei0UQ5Kf3cm/view?usp=drive_link' target='_blank' className='w-fit flex flex-row gap-3 items-center justify-center px-5 py-2 bg-myblue border-[1px] border-white rounded-xl'>
                        <div className=''>View Resume</div>
                        <IconContext.Provider value={{size:'1.2em'}}>
                            <IoFlashOutline /> 

                        </IconContext.Provider>
                    </a>


                </div>
                <div className='px-[50px] sm:px-[75px] text-sm mob1:text-base md:text-md font-semibold text-center pt-10 '>Tools of the Trade: My Tech Stack</div>

            <div className='px-[50px] sm:px-[75px] text-xs md:text-[16px] pb-12'>These are my go-to frameworks for speed, efficiency, and top-tier performance. But I don’t just stick to the usual; I adapt, evolve, and master new tools to meet client needs and build seamless, high-performing web applications. My stack shifts with the project, ensuring every build is optimized, modern, and ahead of the curve. I’m always driven to explore new technologies, constantly evolving and pushing the limits.</div>


                <motion.div id='container' variants={container1} initial="hidden" whileInView="visible" viewport={{ amount: 0.00000001, once: true }} className='px-[30px] sm:px-[75px] grid grid-cols-3 sm:flex sm:flex-row w-full justify-center flex-wrap gap-3 sm:gap-5 md:gap-10 items-center'>
                    <motion.a id='item' variants={item} href='https://developer.mozilla.org/en-US/docs/Web/HTML' target='_blank' className='flex flex-col gap-3 w-[70px] xs:w-[100px] md:w-[150px] px-5 mob1:px-10 py-1 mob1:py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <TiHtml5/>
                        </IconContext.Provider>
                        <div className='text-xs xs:text-sm '>HTML</div>                        
                    </motion.a>

                    <motion.a id='item' variants={item} href='https://developer.mozilla.org/en-US/docs/Web/CSS' target='_blank' className='flex flex-col gap-3 w-[70px] xs:w-[100px] md:w-[150px] px-5 mob1:px-10 py-1 mob1:py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <TiCss3/>
                        </IconContext.Provider>
                        <div className='text-xs xs:text-sm '>CSS</div>                        
                    </motion.a>

                    <motion.a id='item' variants={item} href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target='_blank' className='flex flex-col gap-3 w-[70px] xs:w-[100px] md:w-[150px] px-5 mob1:px-10 py-1 mob1:py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <TbBrandJavascript/>
                        </IconContext.Provider>
                        <div className='text-xs xs:text-sm '>Javascript</div>                        
                    </motion.a>

                    <motion.a id='item' variants={item} href='https://react.dev' target='_blank' className='flex flex-col gap-3 w-[70px] xs:w-[100px] md:w-[150px] px-5 mob1:px-10 py-1 mob1:py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <FaReact/>
                        </IconContext.Provider>
                        <div className='text-xs xs:text-sm '>ReactJs</div>                        
                    </motion.a>

                    <motion.a id='item' variants={item} href="https://redux.js.org/" target='_blank' className='flex flex-col gap-3 w-[70px] xs:w-[100px] md:w-[150px] px-5 mob1:px-10 py-1 mob1:py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <SiRedux/>
                        </IconContext.Provider>
                        <div className='text-xs xs:text-sm '>Redux</div>                        
                    </motion.a>
                   
                    <motion.a id='item' variants={item} href='https://tailwindcss.com' target='_blank' className='flex flex-col gap-3 w-[70px] xs:w-[100px] md:w-[150px] px-5 mob1:px-10 py-1 mob1:py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <BiLogoTailwindCss/>
                        </IconContext.Provider>
                        <div className='text-xs xs:text-sm '>Tailwind</div>                        
                    </motion.a>

                    <motion.a id='item' variants={item} href="https://getbootstrap.com/" target='_blank' className='flex flex-col gap-3 w-[70px] xs:w-[100px] md:w-[150px] px-5 mob1:px-10 py-1 mob1:py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <BsBootstrap/>
                        </IconContext.Provider>
                        <div className='text-xs xs:text-sm '>Bootstrap</div>                        
                    </motion.a>

                    <motion.a id='item' variants={item} href="https://expressjs.com/" target='_blank' className='flex flex-col gap-3 w-[70px] xs:w-[100px] md:w-[150px] px-5 mob1:px-10 py-1 mob1:py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <FaNodeJs/>
                        </IconContext.Provider>
                        <div className='text-xs xs:text-sm '>Express.js</div>                        
                    </motion.a>

                    <motion.a id='item' variants={item} href="https://nodejs.org/" target='_blank' className='flex flex-col gap-3 w-[70px] xs:w-[100px] md:w-[150px] px-5 mob1:px-10 py-1 mob1:py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <FaNodeJs/>
                        </IconContext.Provider>
                        <div className='text-xs xs:text-sm '>Node.js</div>                        
                    </motion.a>


                    
                
                    <motion.a id='item' variants={item} href='https://dev.java' target='_blank' className='flex flex-col gap-3 w-[70px] xs:w-[100px] md:w-[150px] px-5 mob1:px-10 py-1 mob1:py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <FaJava/>
                        </IconContext.Provider>
                        <div className='text-xs xs:text-sm '>Java</div>                        
                    </motion.a>

                    <motion.a id='item' variants={item} href='https://www.python.org' target='_blank' className='flex flex-col gap-3 w-[70px] xs:w-[100px] md:w-[150px] px-5 mob1:px-10 py-1 mob1:py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <TbBrandPython/>
                        </IconContext.Provider>
                        <div className='text-xs xs:text-sm '>Python</div>                        
                    </motion.a>

                    <motion.a id='item' variants={item} href="https://www.restapi.com/" target='_blank' className='flex flex-col gap-3 w-[70px] xs:w-[100px] md:w-[150px] px-5 mob1:px-10 py-1 mob1:py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <FaServer/>
                        </IconContext.Provider>
                        <div className='text-xs xs:text-sm '>REST</div>                        
                    </motion.a>

                    <motion.a id='item' variants={item} href="https://www.w3schools.com/sql/" target='_blank' className='flex flex-col gap-3 w-[70px] xs:w-[100px] md:w-[150px] px-5 mob1:px-10 py-1 mob1:py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <FaDatabase/>
                        </IconContext.Provider>
                        <div className='text-xs xs:text-sm '>SQL</div>                        
                    </motion.a>

                    <motion.a id='item' variants={item} href='https://www.mongodb.com' target='_blank' className='flex flex-col gap-3 w-[70px] xs:w-[100px] md:w-[150px] px-5 mob1:px-10 py-1 mob1:py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <BiLogoMongodb/>
                        </IconContext.Provider>
                        <div className='text-xs xs:text-sm '>MongoDB</div>                        
                    </motion.a>

                    
                    <motion.a id='item' variants={item} href='https://aws.amazon.com' target='_blank' className='flex flex-col gap-3 w-[70px] xs:w-[100px] md:w-[150px] px-5 mob1:px-10 py-1 mob1:py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <FaAws />
                        </IconContext.Provider>
                        <div className='text-xs xs:text-sm '>AWS</div>                        
                    </motion.a>

                    
                    <motion.a id='item' variants={item} href='www.figma.com' target='_blank' className='flex flex-col gap-3 w-[70px] xs:w-[100px] md:w-[150px] px-5 mob1:px-10 py-1 mob1:py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <FaFigma />
                        </IconContext.Provider>
                        <div className='text-xs xs:text-sm '>Figma</div>                        
                    </motion.a>

                    <motion.a id='item' variants={item} href='https://vitejs.dev' target='_blank' className='flex flex-col gap-3 w-[70px] xs:w-[100px] md:w-[150px] px-5 mob1:px-10 py-1 mob1:py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <SiVitest />
                        </IconContext.Provider>
                        <div className='text-xs xs:text-sm '>Vite</div>                        
                    </motion.a>

                    
                    <motion.a id='item' variants={item} href='https://github.com' target='_blank' className='flex flex-col gap-3 w-[70px] xs:w-[100px] md:w-[150px] px-5 mob1:px-10 py-1 mob1:py-3 rounded-lg bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white text-white font-extralight border-creme border-[1px] items-center justify-center'>
                        <IconContext.Provider value={{size: '3.5em', }}>
                            <FaGithub />
                        </IconContext.Provider>
                        <div className='text-xs xs:text-sm '>Github</div>                        
                    </motion.a>                    
                </motion.div>
                </div>
              
                
        
           

           

        </div>
    </div>
  )
}

export default Development