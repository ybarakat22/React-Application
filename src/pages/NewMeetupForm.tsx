import React from "react";
import { Card } from "../components/ui/Card";
import { useRef } from "react";

export const NewMeetupForm = () => {
  const titleInputRef: any = useRef();
  const imageInputRef: any = useRef();
  const descriptionInputRef: any = useRef();

  function submitHandler(event: any) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enetrefImage = imageInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
        image:enetrefImage,
        desc: enteredDescription,
        title:enteredTitle
    }
    console.log(meetupData)
  }
  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div>
          <label htmlFor="title">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div>
          <label htmlFor="title">Meetup Description</label>
          <textarea id="description" ref={descriptionInputRef}></textarea>
        </div>
        <div>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};
