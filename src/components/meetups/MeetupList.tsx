import React from "react";
import MeetupItem from "./MeetupItem";

export const MeetupList = (props: any) => {
  return (
    <ul>
      {props.meetups.map((meetup: any) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          description={meetup.description}
        />
      ))}
    </ul>
  );
};
