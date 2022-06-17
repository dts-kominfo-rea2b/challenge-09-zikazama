// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";

const Contact = ({ data }) => {
  return (
    <>
      <div className="card">
        <img className="image" alt="cat" src={data.photo} />
        <div>
          <p>{data.name}</p>
          <p>{data.phone}</p>
          <p>{data.email}</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
