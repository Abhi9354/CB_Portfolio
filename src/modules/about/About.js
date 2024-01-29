import "../../css/about/About.css";
import carnival from '../../assets/images/carnival.png';
export const About = () => {
  return (
    <>
      <div className="h-fit" id="about">
        <div className="about_outer">
          <div className="about_svg_outer">
            <div className="about_svg_inner">
              <img src={carnival}></img>
            </div>
          </div>
          <div className="about_content_outer">
            <div className="about_content_outer_box about_content_outer">
              <div className="about_content_inner" style={{fontFamily: "'Roboto', serif"}}>
              <p>Campus Blocks is dedicated to fostering a vibrant technical community within our college. Our mission is to provide a platform for students to explore, innovate, and excel in the field of technology.
<br/>
We aim to empower our members with practical skills that complement their academic knowledge. Through hands-on workshops, coding sessions, and collaborative projects, Campus Blocks strives to bridge the gap between theoretical learning and real-world application.
</p></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
