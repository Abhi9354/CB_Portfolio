import { Background_animation } from "./Background_Animation";
import Logo from "../../assets/images/logo.png";
import "../../css/home/Home.css";
import Typewriter from "typewriter-effect";

export const Home = () => {
  return (
    <>
      <div className="w-screen" id="home">
        <div className="home_outer">
          <Background_animation />
          <div className="set home_inner">
            <div className="home_inner_logo">
              <img src={Logo} alt="logo..."></img>
            </div>
            <div className="home_inner_content font_society" >
              <style ></style>CAMPUS BLOCKS BVCOE
            </div>
            <div className="home_inner_typewriter font">
              <span className="home_inner_typewriter_gap">WHERE BYTES CREATE </span>
              <span>
                <Typewriter
                  options={{
                    strings: ["SUCCESS", "PASSION", "","BONDS"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
