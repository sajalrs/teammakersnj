import React from "react";
import eventCardStyles from "./eventCard.module.css";

type Props = {
  icon: String;
  title: string;
  description: String;
};

const EventCard = ({ icon, title, description }: Props) => {
  return (
    <div className={eventCardStyles["event-card"]}>
      <div className={eventCardStyles["title-and-icon"]}>
        <span className={`${icon} ${eventCardStyles["icon"]}`}></span>
        <h1 className={eventCardStyles["title"]}>{title}</h1>
      </div>
      <p className={eventCardStyles["description"]}>{description}</p>
      <p className={eventCardStyles["learn-more"]}>Learn More {">>"}</p>
    </div>
  );
};

export default EventCard;
