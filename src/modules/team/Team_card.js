import '../../css/about/About.css';

export const Team_card = (props) => {
  return (
    <>
      <div>
        <div className="w-80 h-100 bg-red-900 rounded-lg m-5 team_card">
          <div className="rounded-full">
            
            <img
              src={props.photo}
              className="w-80 h-80 mt-2 m-auto"
              alt="cover..."
              style={{objectFit: "cover", borderRadius: "0.5rem"}}
            ></img>
            <div className="flex flex-row justify-around w-full mt-7 text-white">
              <div className="text-xl">
                {props.name} <br /> {props.designation}
              </div>
              <div className="flex flex-cols mt-3">
                <div>
                  <a href={props.instagram} target="__blank">
                    <i class="fa-brands fa-instagram fa-xl m-1"></i>
                  </a>
                </div>
                <div>
                  <a href={props.linkedin} target="__blank">
                    <i class="fa-brands fa-linkedin fa-xl m-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
