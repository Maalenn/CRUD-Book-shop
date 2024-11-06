import { useState } from "react";
import React from "react";

const BookCreate = ({onCreate}) => {
  const [title, setTitle] = useState("");

  //use this to get value from user
  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  //when user click on btn or enter form will submit
  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle('');
  };
  return (
    <div className="book-create">
        <h3 >Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button">Create</button>
      </form>
    </div>
  );
};
export default BookCreate;
