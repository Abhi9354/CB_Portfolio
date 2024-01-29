import "../css/Frame_bottom.css";

export const Frame_bottom = () => {
  return (
    <>
      <div className="m-2">
        <div className="w-96 h-2 bg-black rounded-lg relative">
          <div className="h-96 w-2 bg-red-500 rounded-lg absolute frame_bottom_set"></div>
        </div>
      </div>
    </>
  );
};
