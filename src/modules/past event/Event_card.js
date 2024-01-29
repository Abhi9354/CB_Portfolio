import "../../css/past events/Event_card.css";

export const EventCard = (props) => {
  return (
    <>
      <div className="event_card_outer">
        <div className="event_card_left">
          <i className={props.event_icon}></i>
        </div>
        <div className="basis-4/6 w-[70%]">
          <div className="event_card_middle_heading font w-[70%]">
            {props.event_name}
          </div>
          <div className="event_card_middle_content font-sans w-[70%]">
            {props.event_content}
          </div>
        </div>
        <div className="event_card_right">
          <div className="font event_card_right_heading">Date</div>
          <div className="font event_card_right_content">
            {props.event_date}
          </div>
        </div>
      </div>
    </>
  );
};
