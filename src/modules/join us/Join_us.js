import teamphoto1 from '../../assets/images/Team_photo_1.jpg';
import teamphoto2 from '../../assets/images/Team_photo_2.jpg';
import teamphoto3 from '../../assets/images/Team_photo_3.jpg'; 
import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../../css/upcoming events/Upcoming_events.css'


export const Join_us = () => {
  const images = [
        teamphoto1,
        teamphoto2,
        teamphoto3
    ];

  return (
<> <div>   <div className="slide-container">  
        <Fade>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})`,
              'z-index':'-1' }}>
                    
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` ,
              'z-index':'-1'}}>
                    
                </div>
            </div>
        </Fade>
        </div>
    

      {/* <img className="upcoming_event_photo_1"
        src={teamphoto1}
        alt="team photo"></img> */}
    <div className="flex flex-row flex-wrap justify-evenly items-center mt-10 flex-wrap">
      <div className="ml-40">
      <div className="upcoming_event_bottom_button">
        <div href="/" className="text-4xl font-bold mr-48"><button>Get in Touch</button></div>
      </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 mb-10 mr-40 text-slate-500">
        <div>
          <strong className="text-2xl text-black">Socials</strong>
          <div className="mt-2">
            <a
              href="https://instagram.com/campusblocksbvp?utm_medium=copy_link"
              target="__blank"
              className="mr-3"
            >
              <i class="fa-brands fa-instagram fa-xl"></i>
            </a>
            <a
              href="https://www.facebook.com/CampusBlocksBvp/"
              target="__blank"
              className="m-3"
            >
              <i class="fa-brands fa-facebook fa-xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/campus-blocks-bvp/"
              target="__blank"
              className="m-3"
            >
              <i class="fa-brands fa-linkedin fa-xl"></i>
            </a>
          </div>
        </div>
        <div>
          <strong className="text-2xl text-black">Contact Us</strong>
          <br />
          <a href="mailto:campusblocksbvp@gmail.com">campusblocksbvp@gmail.com</a>
        </div>
      </div>
    </div>
    <p className="text-center mt-4 mb-1 text-xs">Copyright&#169;2023 to Campus Blocks. All rights Reserved</p>
  </div>
</>
  );
};
