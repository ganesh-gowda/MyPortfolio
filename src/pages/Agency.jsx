import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Agency = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    console.log('Form submitted!'); 
    console.log('Form Data:', formData); 

    emailjs.send(
      "service_ga3ufuq", 
      "template_9y407ip", 
      formData, 
      "Lm0r5hzNgAuj3M_J7"
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setIsSent(true); 
      setFormData({ name: '', email: '', message: '' }); 
    })
    .catch((error) => {
      console.log('FAILED...', error); 
    });
  };

  return (
    <div>
      <div className='flex flex-col gap-16 font-sans2 pb-6 text-white px-[20px] xs:px-[50px] sm:px-[75px]'>
        <div className='text-msm md:text-base xl:text-lmd font-semibold pt-10 text-center w-full'>
          Marketing and Consulting
        </div>
        <div className='text-xs lg:text-sm pb-12'>
          If you're a business owner or looking to establish a powerful online presence, let me handle it for you. 
          Book a free 1:1 call, and together we'll craft a strategy tailored 
          <span> to your goals, setting you up for lasting digital success.</span>
        </div>

       
        <div className='flex flex-col lg:flex-row-reverse gap-10 px-5 xs:px-10 py-5 xs:py-10 rounded-2xl text-white font-extralight shadow-[5px_-5px_1px_rgba(221,_221,_221,_1)] border-creme border-[1px] items-center'>
          <div className='flex-[0.9] pt-20 '><img src='/Images/web.gif' className='rounded-xl' alt="Web Design GIF" /></div>
          <div className='flex flex-col gap-2 flex-1'>
            <div className='text-sm xs:text-msm lg:text-md font-bold text-myblue'>Website Design and Development</div>
            <div className='text-white text-xs xs:text-sm text-justify'>
              I design and develop high-performance websites with sleek, intuitive UIs that captivate and engage. 
              Every site is built to be fully responsive, delivering a flawless experience on any device. 
              With expertise in HTML, CSS, and JavaScript, I create dynamic, interactive web experiences that make your brand stand out in the digital space.
            </div>
          </div>
        </div>

       
        <div className='flex flex-col lg:flex-row-reverse gap-10 px-5 xs:px-10 py-5 xs:py-10 rounded-2xl text-white font-extralight shadow-[5px_-5px_1px_rgba(221,_221,_221,_1)] border-creme border-[1px] items-center'>
          <div className='flex flex-col gap-2 flex-1'>
            <div className='text-sm xs:text-msm lg:text-md font-bold text-myblue'>Get In Touch</div>
            <div className='text-white text-xs xs:text-sm text-justify'>
              Have a project in mind? Let's collaborate! Fill out the form below, and I'll get back to you as soon as possible.
            </div>
            <form onSubmit={sendEmail} className='flex flex-col gap-3 mt-4'>
              <input 
                type='text' 
                name='name' 
                value={formData.name} 
                onChange={handleChange} 
                placeholder='Your Name' 
                className='w-full px-3 py-2 bg-transparent border border-white rounded-lg text-white text-xs focus:outline-none' 
                required 
              />
              <input 
                type='email' 
                name='email' 
                value={formData.email} 
                onChange={handleChange} 
                placeholder='Your Email' 
                className='w-full px-3 py-2 bg-transparent border border-white rounded-lg text-white text-xs focus:outline-none' 
                required 
              />
              <textarea 
                name='message' 
                value={formData.message} 
                onChange={handleChange} 
                placeholder='Your Message' 
                rows='4' 
                className='w-full px-3 py-2 bg-transparent border border-white rounded-lg text-white text-xs focus:outline-none' 
                required 
              />
              <button type='submit' className='w-full px-3 py-2 bg-myblue border-white border rounded-lg text-xs'>
                {isSent ? 'Message Sent! ✅' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Agency;