import { EventCard } from "./Event_card.js";
import "../../css/past events/Past_event.css";

export const Past_event = () => {
  return (
    <>
      <div className="event_h event_bg">
        <div className="text-transparent">a</div>
        <div className="event_title font">Past Events</div>
        <div className="event_card_section">
          <EventCard
            event_name="Campus Carnival"
            event_content="Ditch the boredom and participate in an array of fun events"
            event_date="25th Oct 2023"
            event_icon="fa-solid fa-terminal fa-3x"
          />
          <EventCard
            event_name="Tech-A-Thlon 2.0"
            event_content="A bvest event filled with fun and challenges as highly calibered coders compete against each other"
            event_date="29th Mar 2023"
            event_icon="fa-solid fa-comment fa-3x"
          />
          <EventCard
            event_name="Geek out"
            event_content='A bvest event to arrange the jumbled pieces of code as the time running is out'
            event_date="29th Mar 2023"
            event_icon="fa-regular fa-object-group fa-3x"
          />
          <EventCard
            event_name="Coding and College"
            event_content="The guest for the session are Mr.Varun Kohli(CEO and Co-founder of Coding Blocks) and Mr. Kartik Mathur.(Co-founder of Coding Blocks)"
            event_date="27th Dec 2022"
            event_icon="fa-solid fa-terminal fa-3x"
          />
          <div className="text-transparent">b</div>
        </div>
      </div>
    </>
  );
};
